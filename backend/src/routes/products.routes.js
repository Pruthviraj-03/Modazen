import { Router } from "express";
import {
  getUserWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../controllers/wishlistProducts.controller.js";
import {
  getUserCart,
  addToCart,
  removeFromCart,
} from "../controllers/cartProducts.controller.js";
import { authMiddleWare } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/getWishlistProducts").get(authMiddleWare, getUserWishlist);

router.route("/addWishlistProducts").post(authMiddleWare, addToWishlist);

router
  .route("/removeWishlistProducts/:productId")
  .delete(authMiddleWare, removeFromWishlist);

router.route("/getCartProducts").get(authMiddleWare, getUserCart);

router.route("/addCartProducts").post(authMiddleWare, addToCart);

router
  .route("/removeCartProducts/:productId")
  .delete(authMiddleWare, removeFromCart);

export { router };
