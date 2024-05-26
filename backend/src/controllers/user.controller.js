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
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const email = user.email;

    await mailHelper({
      email,
      subject: "Login At Modazen",
      message: "You've successfully Login at Modazen!",
      htmlMessage: "<p>You've successfully Login at Modazen!</p>",
    });
    res.redirect(`http://localhost:3000/?user=${userId}`);
    console.log(userId, "User logged in successfully");
  } catch (error) {
    throw new ApiError(401, error?.message || "Failed to login");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  try {
    if (!req.user) {
      throw new ApiError(401, "User not authenticated");
    }

    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const email = user.email;

    await mailHelper({
      email,
      subject: "Logout At Modazen",
      message: "You've successfully logged out from Modazen!",
      htmlMessage: "<p>You've successfully logged out from Modazen!</p>",
    });

    await User.findByIdAndUpdate(
      userId,
      { $set: { refreshToken: undefined } },
      { new: true }
    );

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    };

    res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User logged out successfully"));
  } catch (error) {
    throw new ApiError(401, error?.message || "Failed to logout");
  }
});

const sendOTP = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    const formattedPhoneNumber = phoneNumber.startsWith("+91")
      ? phoneNumber
      : `+91${phoneNumber}`;

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
};

const verifyOTP = asyncHandler(async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;

    // Find the user by phone number
    const user = await User.findOne({ phoneNumber: `+91${phoneNumber}` });

    // Check if user exists and OTP matches
    if (!user || user.otp !== otp || user.otpExpires < new Date()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Clear the OTP and OTP expiration
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    await client.messages.create({
      body: "You successfully logged in at Modazen!",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+91${phoneNumber}`,
    });

    // Redirect to the homepage (assuming this is an API endpoint)
    res
      .json(new ApiResponse(200, {}, "OTP verify successfully"))
      .redirect("http://localhost:3000/");
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

    await mailHelper({
      email,
      subject: "Welcome to ModaZen Newsletter",
      message: "Thank you for subscribing to our newsletter!",
      htmlMessage: "<p>Thank you for subscribing to our newsletter!</p>",
    });

    res.json(new ApiResponse(200, { email }, "Email send successfully."));
  } catch (error) {
    throw new ApiError(500, error?.message || "Failed to send an email.");
  }
});

const getDetailFromDB = asyncHandler(async (req, res) => {
  try {
    const { user } = req.query;

    const userDetails = await User.findOne({ googleId: user }).select(
      "-otp -otpExpires"
    );

    if (!userDetails) {
      throw new ApiError(404, "User not found");
    }

    res.json(
      new ApiResponse(200, { userDetails }, "Got user details successfully.")
    );
  } catch (error) {
    throw new ApiError(500, error?.message || "Failed to get the details.");
  }
});

const sendDetailToDB = asyncHandler(async (req, res) => {
  try {
    const { googleId } = req.params;
    const { email, name, picture, phoneNumber, gender, DOB, AlternateMobile } =
      req.body;

    let user = await User.findOne({ googleId });

    if (!user) {
      user = new User({
        googleId,
        email,
        name,
        picture,
        phoneNumber,
        gender,
        DOB,
        AlternateMobile,
      });
    } else {
      user.email = email || user.email;
      user.name = name || user.name;
      user.picture = picture || user.picture;
      user.phoneNumber = phoneNumber || user.phoneNumber;
      user.gender = gender || user.gender;
      user.DOB = DOB || user.DOB;
      user.AlternateMobile = AlternateMobile || user.AlternateMobile;
    }

    await user.save();

    res.json(new ApiResponse(200, { user }, "Send user details successfully."));
  } catch (error) {
    throw new ApiError(500, error?.message || "Failed to send the details.");
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
  getDetailFromDB,
  sendDetailToDB,
};
