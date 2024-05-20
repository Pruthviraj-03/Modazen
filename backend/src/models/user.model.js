import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    phoneNumber: { type: String },
    accessToken: { type: String, required: true },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
