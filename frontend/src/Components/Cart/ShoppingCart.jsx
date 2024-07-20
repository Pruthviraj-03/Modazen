import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v2/getCartProducts",
          { withCredentials: true }
        );
        const { userCart } = response.data.data;
        setCartItems(userCart);
      } catch (error) {
        navigate("/login");
        toast.warning("Login first to access cart!", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("Failed to fetch user wishlist:", error);
      }
    };

    fetchUserCart();
  }, [setCartItems]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    // alert("Product remove from the cart.");
    toast.success("Product remove from the cart successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
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

  const totalAmount = cartItems
    .reduce((total, product) => {
      const itemTotal =
        parseFloat(product.price.replace(/\$/g, "")) *
        (quantities[product.id] || 1);
      return total + itemTotal;
    }, 0)
    .toFixed(2);

  const onClickGoesTo = () => {
    navigate("/checkout", {
      state: { totalAmount: totalAmount, cartItems: cartItems },
    });
  };

  const handleAction = (e) => {
    e.preventDefault();
    // alert("Do payment first!");
    toast.info("Do payment first!", {
      position: "top-center",
      autoClose: 3000,
    });
    navigate("/checkout");
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const cartItemCount = cartItems.length;

  return (
    <>
      {!isMobile && (
        <div className="flex justify-center items-center w-full h-auto flex-col mt-50 mb-50 bg-dark-white gap-50">
          <div className="categories-title flex justify-center items-center w-80 h-full laptop:w-90 laptop:h-auto">
            <span className="font-poppins text-main-color text-36 font-700 tracking-1">
              Shopping Cart
            </span>
          </div>
          <div className="flex w-80 h-auto min-h-400 flex-col mb-50 gap-80 laptop:w-90 laptop:h-auto">
            <div className="flex items-center justify-center flex-row w-full h-10 gap-20">
              <Link to="/shoppingcart">
                <div className="shoppingCart-container-title-one flex w-600 h-full justify-center items-center flex-row gap-20 cursor-pointer laptop:w-500">
                  <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-main-color text-24 font-500  laptop:text-21">
                    1
                  </h3>
                  <span className="font-poppins text-main-color text-24 font-500 laptop:text-21">
                    Shopping Cart
                  </span>
                  <div className="shoppingCart-container-title-one-line"></div>
                </div>
              </Link>
              <div
                className="shoppingCart-container-title-two flex w-600 h-full justify-center items-center flex-row gap-20 cursor-pointer laptop:w-500"
                onClick={onClickGoesTo}
              >
                <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-medium-grey text-24 font-500 laptop:text-21">
                  2
                </h3>
                <span className="font-poppins text-medium-grey text-24 font-500 laptop:text-21">
                  Checkout
                </span>
                <div className="shoppingCart-container-title-two-line"></div>
              </div>
              <Link to="/completed">
                <div
                  className="shoppingCart-container-title-three flex w-300 h-full justify-center items-center flex-row gap-20 cursor-pointer laptop:w-200"
                  onClick={handleAction}
                >
                  <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-medium-grey text-24 font-500 laptop:text-21">
                    3
                  </h3>
                  <span className="font-poppins text-medium-grey text-24 font-500 laptop:text-21">
                    Completed
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex items-center w-full h-90 flex-col gap-40">
              <div className="flex items-center justify-center w-full h-5 flex-row">
                <span className="w-30 font-poppins text-dark-grey text-18 font-500 flex items-center justify-center h-full laptop:pl-50">
                  Product
                </span>
                <span className="span-quantity w-20 font-poppins text-dark-grey text-18 font-500 flex items-center justify-center h-full laptop:ml-100 laptop:pl-50">
                  Quantity
                </span>
                <span className="span-price w-20 font-poppins text-dark-grey text-18 font-500 flex items-center justify-center h-full laptop:pl-30">
                  Price
                </span>
                <span className="span-total w-20 font-poppins text-dark-grey text-18 font-500 flex items-center justify-center h-full laptop:pl-10">
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
                            src={product.img1}
                            alt="img"
                          />
                        </div>
                        <div className="w-45p h-full ml-20">
                          <span className="font-poppins text-main-color text-21 font-500 laptop:text-19">
                            {product.name}
                          </span>
                          <h3 className="font-poppins text-main-color text-16 font-700 mt-15">
                            Size: {product.size}
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
                        {calculateTotal(
                          product.price,
                          quantities[product.id] || 1
                        )}
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
                    ${totalAmount}
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
                  <div
                    className="featured-product-checkout-button flex items-center justify-center h-55 w-200 bg-dark-white cursor-pointer"
                    onClick={onClickGoesTo}
                  >
                    <span className="font-poppins text-main-color text-18 font-500">
                      Checkout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex flex-col w-full h-auto mt-40 p-20 mb-100">
          <div className="flex flex-col items-center justify-center h-auto w-full gap-30 mb-30 tracking-1">
            <span className="font-poppins text-main-color text-24 font-700">
              Cart
            </span>
          </div>
          <div className="flex items-center flex-row gap-10 h-auto w-full tracking-1 mb-20">
            <h3 className="font-poppins text-main-color text-18 font-700 tracking-0.5">
              My Cart
            </h3>
            <span className="font-poppins text-dark-grey text-18 font-400 tracking-0.5">
              {cartItemCount} item{cartItemCount !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex flex-col gap-30">
            {cartItems.map((product) => (
              <div
                className="flex flex-row p-10 border border-main-color w-full h-auto gap-15"
                key={product.id}
              >
                <div className="border border-main-color p-1 h-170 w-40p overflow-hidden">
                  <Link to={`/featured/${encodeURIComponent(product.name)}`}>
                    <img
                      className="h-full w-full object-contain"
                      src={product.img1}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="flex flex-col gap-10 w-60 h-auto">
                  <span className="font-poppins text-main-color text-16 font-500">
                    {product.name}
                  </span>
                  <h3 className="font-poppins text-main-color text-14 font-700">
                    Size: {product.size}
                  </h3>
                  <div className="flex flex-row w-full h-auto gap-10">
                    <div
                      className="MinusBox flex justify-center items-center bg-dark-white cursor-pointer"
                      onClick={() => handleDecrement(product.id)}
                    >
                      <span className="font-poppins text-main-color text-14 font-700">
                        -
                      </span>
                    </div>
                    <span className="font-poppins text-main-color text-14 font-600">
                      {quantities[product.id] || 1}
                    </span>
                    <div
                      className="PlusBox flex justify-center items-center bg-dark-white cursor-pointer"
                      onClick={() => handleIncrement(product.id)}
                    >
                      <span className="font-poppins text-main-color text-14 font-700">
                        +
                      </span>
                    </div>
                  </div>
                  <span className="font-poppins text-main-color text-14 font-500 tracking-1">
                    Price : {product.price}
                  </span>
                  <span className="font-poppins text-main-color text-14 font-500 tracking-1">
                    Total :{" "}
                    {calculateTotal(product.price, quantities[product.id] || 1)}
                  </span>
                </div>
                <FontAwesomeIcon
                  className="text-main-color text-16 font-700 cursor-pointer hover:text-medium-grey"
                  icon={faXmark}
                  onClick={() => handleRemoveFromCart(product.id)}
                />
              </div>
            ))}
          </div>

          <div className="shoppingCart-container-data-line mt-30"></div>
          <div className="flex relative w-full h-80p">
            <div className="flex absolute right-0 flex-col gap-10 text-right">
              <h3 className="font-poppins text-dark-grey text-18 font-500 mt-10">
                Total
              </h3>
              <span className="font-poppins text-main-color text-20 font-700">
                ${totalAmount}
              </span>
            </div>
          </div>
          <div className="fixed bottom-20 flex flex-row w-full gap-15">
            <div className="featured-product-shopping-button flex items-center justify-center h-45 w-44p bg-dark-white cursor-pointer rounded-60">
              <span className="font-poppins text-main-color text-14 font-500">
                <Link to="/products">Continue Shopping</Link>
              </span>
            </div>
            <div
              className="featured-product-checkout-button flex items-center justify-center h-45 w-44p bg-dark-white cursor-pointer rounded-60"
              onClick={onClickGoesTo}
            >
              <span className="font-poppins text-main-color text-16 font-500">
                Checkout
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
