import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useOrder } from "../Context/OrderContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { addToOrder } = useOrder();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/login/success",
          { withCredentials: true }
        );

        const userData = response.data.data.user;
        setFormData({
          name: userData.name || "",
          email: userData.email || "",
          phoneNumber: userData.phoneNumber || "",
        });
      } catch (error) {
        console.log("error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const totalAmount = location.state?.totalAmount || 0;
  const [paymentStatus, setPaymentStatus] = useState(null);

  const validateForm = () => {
    const { name, phoneNumber, address, city, state, zipCode } = formData;
    if (!name || !phoneNumber || !address || !city || !state || !zipCode) {
      // window.alert("Please fill out all buyer info first!");
      toast.info("Please fill out all buyer info first!", {
        position: "top-center",
        autoClose: 3000,
      });
      return false;
    }
    return true;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const amount = totalAmount * 100;
    const currency = "INR";
    const receiptId = "1234567890";

    if (!amount) {
      // window.alert("Add product first into the cart!");
      toast.info("Add product first into the cart!", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/shoppingcart");
    }

    if (formData === " ") {
      // window.alert("Pls filled all buyers info first!");
      toast.info("Pls filled all buyers info first!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/razorpay/payment",
        { amount, currency, receipt: receiptId }
      );
      const order = response.data.data.order;
      console.log("order:", order);

      var options = {
        key: process.env.REACT_APP_RAZORPAY_API_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "ModaZen",
        description: "Transaction for buying products.",
        order_id: order.id,
        handler: async function (response) {
          try {
            // alert(`Payment ID: ${response.razorpay_payment_id}`);
            // alert(`Order ID: ${response.razorpay_order_id}`);
            // window.alert("Payment success");
            toast.success("Payment success!", {
              position: "top-center",
              autoClose: 3000,
            });
            setPaymentStatus("success");

            await addToOrder(location.state?.cartItems || []);
            navigate("/completed");
          } catch (error) {
            console.error("Error adding to order:", error);
            // window.alert("Failed to add products to order.");
            toast.error("Failed to add products to order!", {
              position: "top-center",
              autoClose: 3000,
            });
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phoneNumber,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const payment = new window.Razorpay(options);
      payment.open();
      e.preventDefault();
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  const handleAction = () => {
    if (paymentStatus === "success") {
      navigate("/completed");
    } else {
      // alert("Do payment first!");
      toast.info("Do payment first!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      {!isMobile && (
        <div className="flex justify-center items-center w-full h-auto flex-col mt-50 mb-50 bg-dark-white gap-50">
          <div className="categories-title flex justify-center items-center w-80 h-full laptop:w-90 laptop:h-auto">
            <span className="font-poppins text-main-color text-36 font-700 tracking-1">
              Checkout
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
            </div>
            <div className="flex w-full h-90 flex-row gap-50">
              <div className="flex w-48.5 h-full flex-col gap-35">
                <span className="font-poppins text-main-color text-18 font-500">
                  Buyer Info
                </span>
                <div className="checkout-container-data-line"></div>
                <div className="checkout-container-data-buyer-info-name flex flex-col gap-15">
                  <span className="font-poppins text-dark-grey text-18 font-400">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="checkout-container-data-buyer-info-address flex flex-col gap-15">
                  <span className="font-poppins text-dark-grey text-18 font-400">
                    Address
                  </span>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="checkout-container-data-buyer-info-contact flex flex-col gap-15">
                  <span className="font-poppins text-dark-grey text-18 font-400">
                    Contact
                  </span>
                  <input
                    type="text"
                    name="phoneNumber"
                    maxLength="10"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="checkout-container-data-buyer-info-city flex flex-col gap-15">
                  <span className="font-poppins text-dark-grey text-18 font-400">
                    City
                  </span>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="flex flex-row gap-30">
                  <div className="checkout-container-data-buyer-info-state flex flex-col gap-15 w-61">
                    <span className="font-poppins text-dark-grey text-18 font-400">
                      State
                    </span>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div className="checkout-container-data-buyer-info-zip-code flex flex-col gap-15 w-35">
                    <span className="font-poppins text-dark-grey text-18 font-400">
                      Zip Code
                    </span>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex w-48.5 h-full flex-col gap-35">
                <span className="font-poppins text-main-color text-18 font-500">
                  Payment Method
                </span>
                <div className="checkout-container-data-line"></div>
                <div className="flex gap-40 flex-row">
                  <div className="checkout-container-data-payment-method-credit-card hover:bg-main-color flex items-center justify-center flex-row bg-dark-white cursor-pointer gap-20 h-80p w-30 laptop:gap-10">
                    <h3 className="text-main-color text-24 font-400 laptop:text-22">
                      <FontAwesomeIcon icon={faCreditCard} />
                    </h3>
                    <span className="font-poppins text-main-color text-18 font-400 laptop:text-16">
                      Credit Card
                    </span>
                  </div>
                  <div className="checkout-container-data-payment-method-bank-transfer hover:bg-main-color flex items-center justify-center flex-row bg-dark-white cursor-pointer gap-20 h-80p w-30 laptop:gap-10">
                    <h3 className="text-main-color text-24 font-400 laptop:text-22">
                      <FontAwesomeIcon icon={faMoneyBillTransfer} />
                    </h3>
                    <span className="font-poppins text-main-color text-18 font-400 laptop:text-16">
                      Bank Transfer
                    </span>
                  </div>
                  <div className="checkout-container-data-payment-method-paypal hover:bg-main-color flex items-center justify-center flex-row bg-dark-white cursor-pointer gap-20 h-80p w-30 laptop:gap-10">
                    <h3 className="text-main-color text-24 font-400 laptop:text-22">
                      <FontAwesomeIcon icon={faPaypal} />
                    </h3>
                    <span className="font-poppins text-main-color text-18 font-400 laptop:text-16">
                      Paypal
                    </span>
                  </div>
                </div>
                <div className="checkout-container-data-payment-method-card-name flex flex-col gap-15">
                  <span className="font-poppins text-dark-grey text-18 font-400">
                    Name on Card
                  </span>
                  <input type="text"></input>
                </div>
                <div className="flex flex-row gap-30">
                  <div className="checkout-container-data-payment-method-card-number flex flex-col gap-15 w-61">
                    <span className="font-poppins text-dark-grey text-18 font-400">
                      Card Number
                    </span>
                    <input type="text"></input>
                  </div>
                  <div className="checkout-container-data-payment-method-card-cvv flex flex-col gap-15 w-35">
                    <span className="font-poppins text-dark-grey text-18 font-400">
                      CVV
                    </span>
                    <input type="text"></input>
                  </div>
                </div>
                <div className="flex flex-row gap-30">
                  <div className="checkout-container-data-payment-method-card-month flex flex-col gap-15 w-48.5">
                    <span className="font-poppins text-dark-grey text-18 font-400">
                      Month
                    </span>
                    <input type="text"></input>
                  </div>
                  <div className="checkout-container-data-payment-method-card-year flex flex-col gap-15 w-48.5">
                    <span className="font-poppins text-dark-grey text-18 font-400">
                      Year
                    </span>
                    <input type="text"></input>
                  </div>
                </div>
                <div className="flex relative mt-40">
                  <div
                    className="featured-product-completed-button flex absolute right-0 items-center justify-center h-55 w-200 bg-dark-white cursor-pointer"
                    onClick={handlePayment}
                  >
                    <span className="font-poppins text-main-color text-18 font-500">
                      Pay Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex flex-col w-full h-auto mt-40 p-20 mb-70">
          <div className="flex flex-col items-center justify-center h-auto w-full gap-30 mb-30 tracking-1">
            <span className="font-poppins text-main-color text-24 font-700">
              Checkout
            </span>
          </div>
          <div className="flex w-full h-full flex-col gap-15">
            <span className="font-poppins text-main-color text-18 font-500">
              Buyer Info
            </span>
            <div className="checkout-container-data-line"></div>
            <div className="checkout-container-data-buyer-info-name flex flex-col gap-10">
              <span className="font-poppins text-dark-grey text-16 font-400">
                Full Name
              </span>
              <input
                className="h-auto p-6 text-15 tracking-0.5"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="checkout-container-data-buyer-info-address flex flex-col gap-10">
              <span className="font-poppins text-dark-grey text-16 font-400">
                Address
              </span>
              <input
                className="h-auto p-6 text-15 tracking-0.5"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="checkout-container-data-buyer-info-contact flex flex-col gap-10">
              <span className="font-poppins text-dark-grey text-16 font-400">
                Contact
              </span>
              <input
                className="h-auto p-6 text-15 tracking-0.5"
                type="text"
                name="phoneNumber"
                maxLength="10"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="checkout-container-data-buyer-info-city flex flex-col gap-10">
              <span className="font-poppins text-dark-grey text-16 font-400">
                City
              </span>
              <input
                className="h-auto p-6 text-15 tracking-0.5"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="flex flex-row gap-30">
              <div className="checkout-container-data-buyer-info-state flex flex-col gap-10 w-61">
                <span className="font-poppins text-dark-grey text-16 font-400">
                  State
                </span>
                <input
                  className="h-auto p-6 text-15 tracking-0.5"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="checkout-container-data-buyer-info-zip-code flex flex-col gap-10 w-35">
                <span className="font-poppins text-dark-grey text-16 font-400">
                  Zip Code
                </span>
                <input
                  className="h-auto p-6 text-15 tracking-0.5"
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>
          </div>
          <div
            className="featured-product-checkout-button flex items-center justify-center h-45 w-44p bg-dark-white cursor-pointer rounded-60 mt-30 ml-200"
            onClick={handlePayment}
          >
            <span className="font-poppins text-main-color text-16 font-500">
              Pay Now
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
