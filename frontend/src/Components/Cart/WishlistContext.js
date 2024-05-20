// WishlistContext.js
import React, { createContext, useState, useContext } from "react";

// Create a new context for the wishlist
const WishlistContext = createContext();

// Custom hook to access the wishlist context
export const useWishlist = () => useContext(WishlistContext);

// Wishlist context provider component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add an item to the wishlist
  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.id !== productId
    );
    setWishlistItems(updatedWishlist);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
