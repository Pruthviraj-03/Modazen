import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import("./src/utils/Passport.utils.js");

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

//routes import
import { router as userRouter } from "./src/routes/user.routes.js";
import { router as productRouter } from "./src/routes/products.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v2", productRouter);

// http://localhost:8000/api/v1/users/google/callback
// http://localhost:8000/api/v2

export { app };
