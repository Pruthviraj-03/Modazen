import { Router } from "express";
import { googleCallback } from "../controllers/user.controller.js";
import passport from "passport";

const router = Router();

router.get(
  "/google",
  passport.authenticate("GoogleStrategy", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("GoogleStrategy", { failureRedirect: "/login" }),
  googleCallback
);

export { router };
