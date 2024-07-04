import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Completed = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        <div className="flex justify-center items-center w-full h-auto flex-col mt-50 mb-50 bg-dark-white gap-50">
          <div className="categories-title flex justify-center items-center w-80 h-full laptop:w-90 laptop:h-auto">
            <span className="font-poppins text-main-color text-36 font-700 tracking-1">
              Completed
            </span>
          </div>
          <div className="flex w-80 h-auto min-h-400 flex-col mb-50 gap-80 laptop:w-90 laptop:h-auto">
            <div className="flex items-center justify-center flex-row w-full h-10 gap-20 laptop:gap-0">
              <Link to="/shoppingcart">
                <div className="shoppingCart-container-title-one flex w-600 h-full justify-center items-center flex-row gap-20 cursor-pointer laptop:w-500">
                  <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-main-color text-24 font-500 laptop:text-21">
                    1
                  </h3>
                  <span className="font-poppins text-main-color text-24 font-500 laptop:text-21">
                    Shopping Cart
                  </span>
                  <div className="shoppingCart-container-title-one-line"></div>
                </div>
              </Link>
              <Link to="/checkout">
                <div className="checkout-container-title-two flex w-600 h-full justify-center items-center flex-row gap-20 cursor-pointer laptop:w-500">
                  <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-main-color text-24 font-500 laptop:text-21">
                    2
                  </h3>
                  <span className="font-poppins text-main-color text-24 font-500 laptop:text-21">
                    Checkout
                  </span>
                  <div className="checkout-container-title-two-line"></div>
                </div>
              </Link>
              <Link to="/completed">
                <div className="completed-container-title-three flex w-300 h-full justify-center items-center flex-row gap-20 cursor-pointer laptop:w-200">
                  <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-main-color text-24 font-500  laptop:text-21">
                    3
                  </h3>
                  <span className="font-poppins text-main-color text-24 font-500 laptop:text-21">
                    Completed
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex justify-center items-center w-full h-400 flex-col gap-60">
              <h3 className="font-poppins text-main-color text-64 font-700 tracking-1">
                Checkout Complete !
              </h3>
              <p className="font-poppins text-main-color text-18 font-400 laptop:text-17">
                "Thank you for your purchase! Your order is on its way. We
                appreciate your support and look forward to welcoming you back
                soon for more great finds!"
              </p>
              <Link to="/products">
                <div className="featured-product-checkout-button flex items-center justify-center h-55 w-200 bg-dark-white cursor-pointer">
                  <span className="font-poppins text-main-color text-18 font-500">
                    Go Shopping Again
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex flex-col w-full h-auto mt-40 p-20 mb-70">
          <div className="flex flex-col items-center justify-center h-auto w-full gap-30 mb-30 tracking-1">
            <span className="font-poppins text-main-color text-24 font-700">
              Completed
            </span>
          </div>
          <div className="flex items-center mt-50 w-full h-auto flex-col gap-40">
            <h3 className="font-poppins text-main-color text-24 font-700 tracking-1">
              Checkout Complete !
            </h3>
            <p className="font-poppins text-main-color text-18 font-400 laptop:text-17">
              "Thank you for your purchase! Your order is on its way. We
              appreciate your support and look forward to welcoming you back
              soon for more great finds!"
            </p>
            <Link to="/products">
              <div className="featured-product-checkout-button flex items-center justify-center rounded-60 h-55 w-200 bg-dark-white cursor-pointer">
                <span className="font-poppins text-main-color text-16 font-500">
                  Go Shopping Again
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Completed;
