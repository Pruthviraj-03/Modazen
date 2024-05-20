import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  pricerange: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  img1: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: true,
  },
  img3: {
    type: String,
    required: true,
  },
  img4: {
    type: String,
    required: true,
  },
  img5: {
    type: String,
    required: true,
  },
  isIncart: {
    type: String,
    required: true,
  },
  isWishlisted: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export { Product };
