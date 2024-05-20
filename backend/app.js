import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "./src/models/user.model.js";
import { CookieToken } from "./src/utils/CookieToken.js";

// Load environment variables
dotenv.config({
  path: "./.env",
});

// Initialize Express app
const app = express();

// Configure middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(
  session({
    secret: "2b8b027b54a88242e6c9e7a8506a9440e9f6dc2b5a5bce3d8f0f6a25b249a1db",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/api/v1/users/google/callback",
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

        user.token = CookieToken(user);

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

app.get(
  "/api/v1/users/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/api/v1/users/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // const token = req.user.token;
    // CookieToken(req.user, res);
    // res.redirect(`http://localhost:3000/?token=${token}`);
    res.redirect("http://localhost:3000/login");
  }
);

//routes import
// import { router as userRouter } from "./src/routes/user.routes.js";
import { router as productRouter } from "./src/routes/products.routes.js";

//routes declaration
// app.use("/api/v1/users", userRouter);
app.use("/api/v2", productRouter);

// http://localhost:8000/api/v1/users/google/callback
// http://localhost:8000/api/v2

export { app };
