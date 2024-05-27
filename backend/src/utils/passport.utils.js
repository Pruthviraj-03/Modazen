import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/user.model.js";
import { mailHelper } from "./MailHelper.utils.js";
import { CookieToken } from "./CookieToken.utils.js";
import { generateAccessAndRefreshTokens } from "../controllers/user.controller.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:8000/api/v1/users/google/callback",
      scope: ["profile", "email"],
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          const email =
            profile.emails && profile.emails.length > 0
              ? profile.emails[0].value
              : "";
          const name = profile.displayName || "";
          const picture =
            profile.photos && profile.photos.length > 0
              ? profile.photos[0].value
              : "";
          user = new User({
            googleId: profile.id,
            email,
            name,
            picture,
            accessToken,
            refreshToken,
          });
          await user.save();

          await mailHelper({
            email,
            subject: "Login At Modazen",
            message: "You've successfully Login at Modazen!",
            htmlMessage: "<p>You've successfully Login at Modazen!</p>",
          });
        }

        // Generate tokens
        // const tokens = await generateAccessAndRefreshTokens(user);

        // console.log("Generated tokens:", tokens);

        // Set cookies with the generated tokens
        // CookieToken(user, req.res, tokens);

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
