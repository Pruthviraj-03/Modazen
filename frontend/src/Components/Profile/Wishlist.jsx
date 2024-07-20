import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Whishlist = () => {
  const { wishlistItems, setWishlistItems, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchUserWishlist = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v2/getWishlistProducts",
          { withCredentials: true }
        );
        const { userWishlist } = response.data.data;
        setWishlistItems(userWishlist);
      } catch (error) {
        navigate("/login");
        toast.warning("Login first to access wishlist!", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("Failed to fetch user wishlist:", error);
      }
    };

    fetchUserWishlist();
  }, [setWishlistItems]);

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    // alert("Product removed from the wishlist.");
    toast.success("Product removed from the wishlist successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const wishlistItemCount = wishlistItems.length;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {!isMobile && (
        <div className="w-full h-auto flex items-center justify-center">
          <div className="flex w-80 h-auto min-h-400 flex-col mt-50 mb-50 gap-50 laptop:w-90 laptop:h-auto">
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
            <div className="flex flex-wrap w-full h-auto gap-67 laptop:gap-49">
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
      )}

      {isMobile && (
        <div className="flex h-auto flex-col gap-30 p-20 mt-50 mb-70 w-full">
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
          <div className="flex flex-wrap w-full h-auto gap-10">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="whishlist-box flex w-48.5 h-250 flex-col rounded-lg mb-20"
              >
                <Link to={`/featured/${encodeURIComponent(product.name)}`}>
                  <div className="flex items-center justify-center w-full h-210 overflow-hidden">
                    <img
                      className="h-90 w-90 object-contain"
                      src={product.img1}
                      alt="featured1"
                    />
                  </div>
                </Link>
                <div
                  className="whishlist-box-button hover:bg-dark-white w-full h-40 rounded-lg flex items-center justify-center bg-main-color cursor-pointer"
                  onClick={() => handleRemoveFromWishlist(product.id)}
                >
                  <span className="font-poppins text-dark-white text-14 font-700 tracking-0.5">
                    REMOVE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Whishlist;
