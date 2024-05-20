import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/user.model.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:8000/api/v1/users/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
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
          const phoneNumber =
            profile.phoneNumbers && profile.phoneNumbers.length > 0
              ? profile.phoneNumbers[0].value
              : "";

          user = new User({
            googleId: profile.id,
            email,
            name,
            picture,
            phoneNumber,
            accessToken,
          });
          await user.save();
        } else {
          user.accessToken = accessToken;
          await user.save();
        }

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
