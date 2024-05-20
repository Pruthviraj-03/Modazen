import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    alert("Product remove from the cart.");
  };

  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    if (quantities[productId] && quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const calculateTotal = (price, qty) => {
    const totalPrice = parseFloat(price.replace(/\$/g, "")) * qty;
    return isNaN(totalPrice) ? "Invalid" : `$${totalPrice.toFixed(2)}`;
  };

  return (
    <div className="flex justify-center items-center w-full h-auto flex-col mt-50 mb-50 bg-dark-white gap-50">
      <div className="categories-title flex justify-center items-center w-80 h-full">
        <span className="font-poppins text-main-color text-36 font-700 tracking-1">
          Shopping Cart
        </span>
      </div>
      <div className="flex w-80 h-auto min-h-400 flex-col mb-50 gap-80">
        <div className="flex items-center justify-center flex-row w-full h-10 gap-20">
          <Link to="/shoppingcart">
            <div className="shoppingCart-container-title-one flex w-600 h-full justify-center items-center flex-row gap-20 cursor-pointer">
              <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-main-color text-24 font-500">
                1
              </h3>
              <span className="font-poppins text-main-color text-24 font-500">
                Shopping Cart
              </span>
              <div className="shoppingCart-container-title-one-line"></div>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="shoppingCart-container-title-two flex w-600 h-full justify-center items-center flex-row gap-20 cursor-pointer">
              <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-medium-grey text-24 font-500">
                2
              </h3>
              <span className="font-poppins text-medium-grey text-24 font-500">
                Checkout
              </span>
              <div className="shoppingCart-container-title-two-line"></div>
            </div>
          </Link>
          <Link to="/completed">
            <div className="shoppingCart-container-title-three flex w-300 h-full justify-center items-center flex-row gap-20 cursor-pointer">
              <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-medium-grey text-24 font-500">
                3
              </h3>
              <span className="font-poppins text-medium-grey text-24 font-500">
                Completed
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center w-full h-90 flex-col gap-40">
          <div className="flex items-center justify-center w-full h-5 flex-row">
            <span className="w-30 font-poppins text-dark-grey text-18 font-500 flex items-center justify-center h-full">
              Product
            </span>
            <span className="span-quantity w-20 font-poppins text-dark-grey text-18 font-500 flex items-center justify-center h-full">
              Quantity
            </span>
            <span className="span-price w-20 font-poppins text-dark-grey text-18 font-500 flex items-center justify-center h-full">
              Price
            </span>
            <span className="span-total w-20 font-poppins text-dark-grey text-18 font-500 flex items-center justify-center h-full">
              Total
            </span>
            <span className="span-remove w-10 font-poppins text-dark-grey text-18 font-500 flex items-center justify-center h-full"></span>
          </div>
          <div className="shoppingCart-container-data-line"></div>
          {cartItems.map((product, index) => (
            <>
              <div
                className="flex items-center justify-center w-full h-25 flex-row"
                key={product.id}
              >
                <Link to={`/featured/${encodeURIComponent(product.name)}`}>
                  <div className="flex items-center justify-center w-450 h-full flex-row cursor-pointer">
                    <div className="shoppingCart-container-data-item-product-image h-200 w-45p overflow-hidden">
                      <img
                        className="h-full w-full object-contain"
                        src={product.image}
                        alt="img"
                      />
                    </div>
                    <div className="w-45p h-full ml-20">
                      <span className="font-poppins text-main-color text-21 font-500">
                        {product.name}
                      </span>
                      <h3 className="font-poppins text-main-color text-16 font-700 mt-15">
                        Size: S
                      </h3>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center justify-center flex-row w-20 h-full gap-30">
                  <div
                    className="minus-box flex justify-center items-center w-45 h-42 bg-dark-white cursor-pointer"
                    onClick={() => handleDecrement(product.id)}
                  >
                    <span className="font-poppins text-main-color text-20 font-700">
                      -
                    </span>
                  </div>
                  <span className="font-poppins text-main-color text-20 font-600">
                    {quantities[product.id] || 1}
                  </span>
                  <div
                    className="plus-box flex justify-center items-center w-45 h-42 bg-dark-white cursor-pointer"
                    onClick={() => handleIncrement(product.id)}
                  >
                    <span className="font-poppins text-main-color text-20 font-700">
                      +
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-20 h-full flex-row">
                  <span className="font-poppins text-main-color text-24 font-500">
                    {product.price}
                  </span>
                </div>
                <div className="flex items-center justify-center w-20 h-full flex-row">
                  <span className="font-poppins text-main-color text-24 font-500">
                    {calculateTotal(product.price, quantities[product.id] || 1)}
                  </span>
                </div>
                <div className="flex items-center justify-center w-10 h-full flex-row">
                  <FontAwesomeIcon
                    className="text-main-color text-40 font-700 cursor-pointer hover:text-medium-grey"
                    icon={faXmark}
                    onClick={() => handleRemoveFromCart(product.id)}
                  />
                </div>
              </div>
              {index !== cartItems.length - 1 && (
                <div className="shoppingCart-container-data-line"></div>
              )}
            </>
          ))}
          <div className="shoppingCart-container-data-line"></div>
          <div className="flex relative w-full h-80p">
            <div className="flex absolute right-0 flex-col gap-10 text-right">
              <h3 className="font-poppins text-dark-grey text-22 font-500">
                Total
              </h3>
              <span className="font-poppins text-main-color text-36 font-700">
                $
                {cartItems
                  .reduce((total, product) => {
                    const itemTotal =
                      parseFloat(product.price.replace(/\$/g, "")) *
                      (quantities[product.id] || 1);
                    return total + itemTotal;
                  }, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex relative items-center w-full h-70p mt-20">
            <div className="flex absolute right-0 flex-row gap-40">
              <Link to="/products">
                <div className="featured-product-shopping-button flex items-center justify-center h-55 w-200 bg-dark-white cursor-pointer">
                  <span className="font-poppins text-main-color text-18 font-500">
                    Continue Shopping
                  </span>
                </div>
              </Link>
              <Link to="/checkout">
                <div className="featured-product-checkout-button flex items-center justify-center h-55 w-200 bg-dark-white cursor-pointer">
                  <span className="font-poppins text-main-color text-18 font-500">
                    Checkout
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
