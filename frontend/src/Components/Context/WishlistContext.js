// WishlistContext.js
import React, { createContext, useState, useContext } from "react";
import axios from "axios";

// Create a new context for the wishlist
const WishlistContext = createContext();

// Custom hook to access the wishlist context
export const useWishlist = () => useContext(WishlistContext);

// Wishlist context provider component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add an item to the wishlist
  const addToWishlist = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v2/addWishlistProducts",
        { product: product },
        { withCredentials: true }
      );
      if (response.data.data.product) {
        setWishlistItems([...wishlistItems, response.data.data.product]);
      } else {
        console.error("Product data is undefined in the response");
      }
    } catch (error) {
      console.error("Failed to add product to wishlist:", error.response);
    }
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = async (productId) => {
    try {
      console.log(productId);
      await axios.delete(
        `http://localhost:8000/api/v2/removeWishlistProducts/${productId}`,
        { withCredentials: true }
      );
      const updatedWishlist = wishlistItems.filter(
        (item) => item.id !== productId
      );
      setWishlistItems(updatedWishlist);
      console.log("Remove product from wishlist");
    } catch (error) {
      console.error("Failed to remove product from wishlist:", error.response);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        setWishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
