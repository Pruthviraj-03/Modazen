import Razorpay from "razorpay";
import shortid from "shortid";
import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/AsyncHandler.utils.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

const razorpayPayment = asyncHandler(async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: "USD",
      receipt: shortid.generate(),
    };
    const order = await razorpay.orders.create(options);

    res.json(new ApiResponse(200, { order }, "Payment successfull"));
  } catch (error) {
    throw new ApiError(500, error.message || "Failed in payment process");
  }
});

export { razorpayPayment };
