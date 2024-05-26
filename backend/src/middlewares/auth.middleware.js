import { ApiError } from "../utils/ApiError.utils.js";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const authMiddleWare = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      (req.headers.authorization &&
        req.headers.authorization.replace("Bearer ", ""));

    console.log(token);

    if (!token) {
      throw new ApiError(401, "Login first to access this page");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decodedToken._id).select("-refreshToken");

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error.message || "Token not found plzz Login!");
  }
});

export { authMiddleWare };
