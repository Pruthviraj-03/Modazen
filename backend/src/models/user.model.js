import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    googleId: { type: String, unique: true },
    email: { type: String, unique: true },
    name: { type: String },
    picture: { type: String },
    phoneNumber: { type: String, unique: true },
    accessToken: { type: String },
    refreshToken: { type: String },
    otp: { type: String },
    otpExpires: { type: Date },
  },
  { timestamps: true }
);

// Generate Access Token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign({ id: this._id, email: this.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Generate Refresh Token
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN }
  );
};

// Generate OTP
userSchema.methods.generateOtp = function () {
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  this.otp = otp;
  this.otpExpires = new Date(Date.now() + 10 * 60000); // OTP expires in 10 minutes
  return otp;
};

const User = mongoose.model("User", userSchema);

export { User };
