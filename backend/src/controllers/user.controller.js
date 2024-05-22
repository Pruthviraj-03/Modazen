import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import twilio from "twilio";
import dotenv from "dotenv";
import { mailHelper } from "../utils/MailHelper.utils.js";

dotenv.config({
  path: "./.env",
});

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const generateAccessAndRefreshTokens = asyncHandler(async (user) => {
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.accessToken = accessToken;
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?.id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or invalid");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshTokens(user);

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

const googleCallback = asyncHandler(async (req, res) => {
  try {
    const googleId = req.user.googleId;
    res.redirect(`http://localhost:3000/?user=${googleId}`);
    // .json(new ApiResponse(200, { token }, "User registered successfully"));
    console.log(googleId, "User registered successfully");
  } catch (error) {
    throw new ApiError(401, error?.message || "Failed to login");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      { $set: { refreshToken: undefined } },
      { new: true }
    );

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged out"));
  } catch (error) {
    throw new ApiError(401, error?.message || "Failed to logout");
  }
});

const sendOTP = asyncHandler(async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    // Check if the phone number starts with +91, if not, add the country code
    const formattedPhoneNumber = phoneNumber.startsWith("+91")
      ? phoneNumber
      : `+91${phoneNumber}`;

    // Validate the phone number format
    if (!/^\+91\d{10}$/.test(formattedPhoneNumber)) {
      throw new ApiError(400, "Invalid phone number format");
    }

    // Proceed with OTP generation and sending
    let user = await User.findOne({ phoneNumber: formattedPhoneNumber });

    if (!user) {
      user = new User({ phoneNumber: formattedPhoneNumber });
    }

    const otp = user.generateOtp();
    await user.save();

    await client.messages.create({
      body: `[#] ${otp} is your OTP to login/register to Modazen. DO NOT share with anyone. Modazen never calls to ask for OTP. The otp expires in 10 mins.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: formattedPhoneNumber,
    });

    res.json(new ApiResponse(200, {}, "OTP sent successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Failed to send the otp");
  }
});

const verifyOTP = asyncHandler(async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;

    // Find the user by phone number
    const user = await User.findOne({ phoneNumber });

    // Check if user exists and OTP matches
    if (!user || user.otp !== otp || user.otpExpires < new Date()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Clear the OTP and OTP expiration
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res
      .redirect("http://localhost:3000/")
      .json(new ApiResponse(200, {}, "OTP verified successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Failed to verify the otp");
  }
});

const resendOTP = asyncHandler(async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    let user = await User.findOne({ phoneNumber });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const otp = user.generateOtp();
    await user.save();

    await client.messages.create({
      body: `Your new OTP code is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    res.json(new ApiResponse(200, {}, "OTP resent successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Failed to resend the otp");
  }
});

const sendEmail = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    await mailHelper({ email });
    res.json(new ApiResponse(200, { email }, "Email send successfully."));
  } catch (error) {
    throw new ApiError(500, error?.message || "Failed to send an email.");
  }
});

export {
  googleCallback,
  logoutUser,
  refreshAccessToken,
  sendOTP,
  verifyOTP,
  resendOTP,
  sendEmail,
};
