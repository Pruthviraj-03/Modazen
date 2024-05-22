import { Router } from "express";
import {
  googleCallback,
  logoutUser,
  refreshAccessToken,
  sendOTP,
  verifyOTP,
  resendOTP,
  sendEmail,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.middleware.js";
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

router.route("/logout").get(verifyJWT, logoutUser);

router.route("/send-otp").post(sendOTP);

router.route("/verify-otp").post(verifyOTP);

router.route("/resend-otp").post(resendOTP);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/subscribe").post(sendEmail);

export { router };
