import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    googleId: { type: String, unique: true, sparse: true }, // Allow null values for users without GoogleId
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    name: { type: String, required: true },
    picture: { type: String },
    phoneNumber: {
      type: String,
      unique: true,
      match: [/^\d{10}$/, "Please use a valid phone number."],
    },
    gender: { type: String, enum: ["Male", "Female"] },
    DOB: { type: Date },
    AlternateMobile: {
      type: String,
      unique: true,
      sparse: true, // Allow null values for users without AlternateMobile
      match: [/^\d{10}$/, "Please use a valid phone number."],
    },
    accessToken: { type: String, select: false },
    refreshToken: { type: String, select: false },
    otp: { type: String, select: false },
    otpExpires: { type: Date, select: false },
  },
  { timestamps: true }
);

// Generate Access Token
userSchema.methods.generateAccessToken = function () {
  try {
    return jwt.sign(
      { id: this._id, email: this.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
  } catch (error) {
    throw new Error("Error generating access token");
  }
};

// Generate Refresh Token
userSchema.methods.generateRefreshToken = function () {
  try {
    return jwt.sign(
      { id: this._id, email: this.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
    );
  } catch (error) {
    throw new Error("Error generating refresh token");
  }
};

// Generate OTP
userSchema.methods.generateOtp = function () {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    this.otp = otp;
    this.otpExpires = new Date(Date.now() + 10 * 60000); // OTP expires in 10 minutes
    return otp;
  } catch (error) {
    throw new Error("Error generating OTP");
  }
};

const User = mongoose.model("User", userSchema);

export { User };
