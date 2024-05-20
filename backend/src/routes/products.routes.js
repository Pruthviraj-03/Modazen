import { Router } from "express";
import { getProducts } from "../controllers/products.controller.js";

const router = Router();

router.route("/products").get(getProducts);

export { router };
