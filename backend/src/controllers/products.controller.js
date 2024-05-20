import { Product } from "../models/products.model.js";
import {
  fetchImageMappings,
  updateJsonDataWithCloudinaryUrls,
} from "../utils/imageUtils.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    // Fetch the image mappings
    const imageMap = await fetchImageMappings();

    // Update each product's image paths
    const updatedProducts = products.map((product) =>
      updateJsonDataWithCloudinaryUrls(product.toObject(), imageMap)
    );

    res.json(updatedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getProducts };

// const generateAccessAndRefereshTokens = async (userId) => {
//   try {
//     const user = await User.findById(userId);
//     const accessToken = user.generateAccessToken();
//     const refreshToken = user.generateRefreshToken();

//     user.refreshToken = refreshToken;
//     await user.save({ validateBeforeSave: false });

//     return { accessToken, refreshToken };
//   } catch (error) {
//     throw new ApiError(
//       500,
//       "Something went wrong while generating referesh and access token"
//     );
//   }
// };

// const logoutUser = asyncHandler(async (req, res) => {
//   await User.findByIdAndUpdate(
//     req.user._id,
//     {
//       $set: {
//         refreshToken: undefined,
//       },
//     },
//     {
//       new: true,
//     }
//   );

//   const options = {
//     httpOnly: true,
//     secure: true,
//   };

//   return res
//     .status(200)
//     .clearCookie("accessToken", options)
//     .clearCookie("refreshToken", options)
//     .json(new ApiResponse(200, {}, "User logged Out"));
// });

// const refreshAccessToken = asyncHandler(async (req, res) => {
//   const incomingRefreshToken =
//     req.cookies.refreshToken || req.body.refreshToken;

//   if (!incomingRefreshToken) {
//     throw new ApiError(401, "unauthorized request");
//   }

//   try {
//     const decodedToken = jwt.verify(
//       incomingRefreshToken,
//       process.env.REFRESH_TOKEN_SECRET
//     );

//     const user = await User.findById(decodedToken?._id);

//     if (!user) {
//       throw new ApiError(401, "Invalid refresh token");
//     }

//     if (incomingRefreshToken !== user?.refreshToken) {
//       throw new ApiError(401, "Refresh token is expired or used");
//     }

//     const options = {
//       httpOnly: true,
//       secure: true,
//     };

//     const { accessToken, newRefreshToken } =
//       await generateAccessAndRefereshTokens(user._id);

//     return res
//       .status(200)
//       .cookie("accessToken", accessToken, options)
//       .cookie("refreshToken", newRefreshToken, options)
//       .json(
//         new ApiResponse(
//           200,
//           { accessToken, refreshToken: newRefreshToken },
//           "Access token refreshed"
//         )
//       );
//   } catch (error) {
//     throw new ApiError(401, error?.message || "Invalid refresh token");
//   }
// });
