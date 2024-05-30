import { ApiError } from "../utils/ApiError.utils.js";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const authMiddleWare = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    // console.log("Received token from cookies:", token);

    if (!token) {
      // console.log(401, "Login first to access this page!");
      throw new ApiError(401, "Login first to access this page!");
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      // console.log("Decoded token:", decodedToken);
    } catch (error) {
      // console.log("Invalid or expired token:", error.message);
      throw new ApiError(401, "Invalid or expired token");
    }

    const user = await User.findById(decodedToken.id).select("-refreshToken");
    // console.log("User found:", user);

    if (!user) {
      // console.log("Invalid Access Token");
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    // console.log("User set in request:", req.user);
    next();
  } catch (error) {
    console.error("Authentication middleware error:", error);
    throw new ApiError(401, error.message || "Authentication error");
  }
});

export { authMiddleWare };
