// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import { User } from "../models/user.model.js";
// import { CookieToken } from "../utils/CookieToken.js";

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: "/api/v1/users/google/callback",
// scope: ["profile", "email"],

//     },
//     async (accessToken, refreshToken, profile, done) => {
//       console.log("profile:", profile);
//       try {
//         let user = await User.findOne({ googleId: profile.id });
//         if (!user) {
//           const email =
//             profile.emails && profile.emails.length > 0
//               ? profile.emails[0].value
//               : "";
//           const name = profile.displayName || "";
//           const phoneNumber =
//             profile.phoneNumbers && profile.phoneNumbers.length > 0
//               ? profile.phoneNumbers[0].value
//               : "";

//           user = new User({
//             googleId: profile.id,
//             email,
//             name,
//             phoneNumber,
//           });
//           await user.save();
//         }

//         user.token = CookieToken(user, req);

//         done(null, user);
//       } catch (error) {
//         done(error, null);
//       }
//     }
//   )
// );
