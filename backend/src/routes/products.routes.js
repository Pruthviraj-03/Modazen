import { Router } from "express";
import {
  getUserWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../controllers/products.controller.js";
import { authMiddleWare } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getWishlistProducts").get(authMiddleWare, getUserWishlist);

router.route("/addWishlistProducts").post(authMiddleWare, addToWishlist);

router
  .route("/removeWishlistProducts/:productId")
  .delete(authMiddleWare, removeFromWishlist);

export { router };
