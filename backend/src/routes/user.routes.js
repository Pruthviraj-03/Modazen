import { Router } from "express";
import {
  googleCallback,
  logoutUser,
  refreshAccessToken,
  sendOTP,
  verifyOTP,
  resendOTP,
  sendEmail,
  getDetailFromDB,
  sendDetailToDB,
} from "../controllers/user.controller.js";
import { authMiddleWare } from "../middlewares/auth.middleware.js";
import passport from "passport";
import("../utils/Passport.utils.js");
const router = Router();

router.route("/google").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router
  .route("/google/callback")
  .get(
    passport.authenticate("google", { failureRedirect: "/login" }),
    googleCallback
  );

router.route("/logout").get(authMiddleWare, logoutUser);

router.route("/send-otp").post(sendOTP);

router.route("/verify-otp").post(verifyOTP);

router.route("/resend-otp").post(resendOTP);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/subscribe").post(authMiddleWare, sendEmail);

router.route("/userprofile").get(authMiddleWare, getDetailFromDB);

router.route("/editprofile").post(authMiddleWare, sendDetailToDB);

export { router };
