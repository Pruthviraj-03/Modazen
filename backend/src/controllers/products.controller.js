import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";
import { User } from "../models/user.model.js";

const getUserWishlist = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("wishlist");
    if (!user) {
      throw new ApiError(401, "User not found");
    }
    const userWishlist = user.wishlist;
    res.json(new ApiResponse(200, { userWishlist }, "User wishlist found"));
  } catch (error) {
    throw new ApiError(
      500,
      error.message || "Failed to fetch user wishlist data"
    );
  }
});

const addToWishlist = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;

    const { product } = req.body;

    if (!product) {
      throw new ApiError(400, "Product data is required");
    }

    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    await user.addToWishlist(product);
    res.json(new ApiResponse(200, { product }, "Product added to wishlist"));
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to add product to wishlist",
    });
  }
});

const removeFromWishlist = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;

    const { productId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    const updatedWishlist = await user.removeFromWishlist(productId);

    res.json(
      new ApiResponse(200, { updatedWishlist }, "Product removed from wishlist")
    );
  } catch (error) {
    throw new ApiError(
      500,
      error.message || "Failed to remove product from the wishlist"
    );
  }
});

export { getUserWishlist, addToWishlist, removeFromWishlist };
