// OrderContext.js
import React, { createContext, useState, useContext } from "react";
import axios from "axios";

// Create a new context for the cart
const OrderContext = createContext();

// Custom hook to access the cart context
export const useOrder = () => useContext(OrderContext);

// Cart context provider component
export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  // Function to add an item to the cart
  const addToOrder = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v2/addOrderProducts",
        { product: product },
        { withCredentials: true }
      );
      if (response.data.data.product) {
        setOrderItems([...orderItems, response.data.data.product]);
      } else {
        console.error("Product data is undefined in the response");
      }
    } catch (error) {
      console.error("Failed to add product to cart:", error.response);
    }
  };

  return (
    <OrderContext.Provider value={{ orderItems, setOrderItems, addToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
