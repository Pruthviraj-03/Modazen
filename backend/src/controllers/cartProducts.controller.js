import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";
import { User } from "../models/user.model.js";

const getUserCart = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("cart");
    if (!user) {
      throw new ApiError(401, "User not found");
    }
    const userCart = user.cart;
    res.json(new ApiResponse(200, { userCart }, "User cart found"));
  } catch (error) {
    throw new ApiError(500, error.message || "Failed to fetch user cart data");
  }
});

const addToCart = asyncHandler(async (req, res) => {
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

    await user.addToCart(product);
    res.json(new ApiResponse(200, { product }, "Product added to cart"));
  } catch (error) {
    throw new ApiError(500, error.message || "Failed to add product to cart");
  }
});

const removeFromCart = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;

    const { productId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    const updatedCart = await user.removeFromCart(productId);

    res.json(
      new ApiResponse(200, { updatedCart }, "Product removed from cart")
    );
  } catch (error) {
    throw new ApiError(
      500,
      error.message || "Failed to remove product from the cart"
    );
  }
});

export { getUserCart, addToCart, removeFromCart };
