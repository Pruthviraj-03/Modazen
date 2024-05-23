import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../Cart/WishlistContext";

const Whishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    alert("Product remove from the whishlist.");
  };

  const wishlistItemCount = wishlistItems.length;

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="flex w-80 h-auto min-h-400 flex-col mt-50 mb-50 gap-50">
        <div className="flex h-10 w-full">
          <div className="flex items-center justify-center flex-row gap-10">
            <h3 className="font-poppins text-main-color text-18 font-700 tracking-0.5">
              My Wishlist
            </h3>
            <span className="font-poppins text-dark-grey text-18 font-400 tracking-0.5">
              {wishlistItemCount} item{wishlistItemCount !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap w-full h-auto gap-67">
          {wishlistItems.map((product) => (
            <div key={product.id} className="wishlist-box">
              <div className="whishlist-box flex w-250 h-370 flex-col">
                <Link to={`/featured/${encodeURIComponent(product.name)}`}>
                  <div className="flex w-full h-322.5 flex-col">
                    <div className="flex items-center justify-center w-full h-250 overflow-hidden">
                      <img
                        className="h-90 w-90 object-contain"
                        src={product.img1}
                        alt="featured1"
                      />
                    </div>
                    <div className="whishlist-box-info w-full h-auto flex items-center p-10 justify-center flex-col gap-10">
                      <h3 className="font-poppins text-dark-grey text-16 font-700 tracking-0.5 h-auto">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center flex-row gap-6">
                        <span className="font-poppins text-main-color text-14 font-700 tracking-1">
                          {product.price}
                        </span>
                        <h1 className="font-poppins text-dark-grey text-12 font-500 tracking-1 line-through">
                          {product.originalPrice}
                        </h1>
                        <h2 className="font-poppins text-main-color text-10 font-400">
                          {product.discount}
                        </h2>
                      </div>
                    </div>
                  </div>
                </Link>
                <div
                  className="whishlist-box-button hover:bg-dark-white w-full h-46.25 flex items-center justify-center gap-7 bg-main-color cursor-pointer"
                  onClick={() => handleRemoveFromWishlist(product.id)}
                >
                  <span className="font-poppins text-dark-white text-16 font-700 tracking-0.5">
                    REMOVE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whishlist;
