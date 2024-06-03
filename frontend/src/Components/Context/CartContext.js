// CartContext.js
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create a new context for the cart
const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);

// Cart context provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Function to add an item to the cart
  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v2/addCartProducts",
        { product: product },
        { withCredentials: true }
      );
      if (response.data.data.product) {
        setCartItems([...cartItems, response.data.data.product]);
      } else {
        console.error("Product data is undefined in the response");
      }
    } catch (error) {
      navigate("/login");
      console.error("Failed to add product to cart:", error.response);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = async (productId) => {
    try {
      console.log(productId);
      await axios.delete(
        `http://localhost:8000/api/v2/removeCartProducts/${productId}`,
        { withCredentials: true }
      );
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
      console.log("Remove product from cart");
    } catch (error) {
      console.error("Failed to remove product from cart:", error.response);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
