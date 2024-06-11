import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";
import { User } from "../models/user.model.js";

const getUserOrderList = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("order");
    if (!user) {
      throw new ApiError(401, "User not found");
    }
    const userOrderList = user.order;
    res.json(new ApiResponse(200, { userOrderList }, "User order list found"));
  } catch (error) {
    throw new ApiError(
      500,
      error.message || "Failed to fetch user order list data"
    );
  }
});

const addToOrder = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const { product } = req.body;

    if (!product || !Array.isArray(product) || product.length === 0) {
      throw new ApiError(400, "Product data is required");
    }

    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(401, "User not found");
    }

    await user.addToOrder(product);
    res.json(new ApiResponse(200, { product }, "Product added to order list"));
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to add product to order list",
    });
  }
});

export { getUserOrderList, addToOrder };
