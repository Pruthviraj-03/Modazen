import { Product } from "../models/products.model.js";
import {
  fetchImageMappings,
  updateJsonDataWithCloudinaryUrls,
} from "../utils/Image.Utils.js";
import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";

const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();

    const imageMap = await fetchImageMappings();

    const updatedProducts = products.map((product) =>
      updateJsonDataWithCloudinaryUrls(product.toObject(), imageMap)
    );

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { updatedProducts },
          "All products get successfully."
        )
      );
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new ApiError(500, error?.message || "Internal Server Error");
  }
});

export { getProducts };
