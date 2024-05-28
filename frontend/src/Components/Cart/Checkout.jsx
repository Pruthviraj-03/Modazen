import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const Checkout = (props) => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    const amount = props.location?.state?.totalAmount || 100;
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/users/razorpay/payment",
        { amount }
      );
      const options = {
        key: process.env.REACT_APP_RAZORPAY_API_KEY,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Your Company Name",
        description: "Test Transaction",
        image: "https://your-logo-url.com/logo.png",
        order_id: data.order.id,
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Signature: ${response.razorpay_signature}`);
          console.log("Payment success", amount);
          navigate("/completed");
        },
        prefill: {
          name: "Your Name",
          email: "email@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Your Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-auto flex-col mt-50 mb-50 bg-dark-white gap-50">
      <div className="categories-title flex justify-center items-center w-80 h-full">
        <span className="font-poppins text-main-color text-36 font-700 tracking-1">
          Checkout
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
            <div className="checkout-container-title-two flex w-600 h-full justify-center items-center flex-row gap-20 cursor-pointer">
              <h3 className="font-poppins w-45 h-45 flex items-center justify-center text-main-color text-24 font-500">
                2
              </h3>
              <span className="font-poppins text-main-color text-24 font-500">
                Checkout
              </span>
              <div className="checkout-container-title-two-line"></div>
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
              <input type="text"></input>
            </div>
            <div className="checkout-container-data-buyer-info-address flex flex-col gap-15">
              <span className="font-poppins text-dark-grey text-18 font-400">
                Address
              </span>
              <input type="text"></input>
            </div>
            <div className="checkout-container-data-buyer-info-contact flex flex-col gap-15">
              <span className="font-poppins text-dark-grey text-18 font-400">
                Contact
              </span>
              <input type="text"></input>
            </div>
            <div className="checkout-container-data-buyer-info-city flex flex-col gap-15">
              <span className="font-poppins text-dark-grey text-18 font-400">
                City
              </span>
              <input type="text"></input>
            </div>
            <div className="flex flex-row gap-30">
              <div className="checkout-container-data-buyer-info-state flex flex-col gap-15 w-61">
                <span className="font-poppins text-dark-grey text-18 font-400">
                  State
                </span>
                <input type="text"></input>
              </div>
              <div className="checkout-container-data-buyer-info-zip-code flex flex-col gap-15 w-35">
                <span className="font-poppins text-dark-grey text-18 font-400">
                  Zip Code
                </span>
                <input type="text"></input>
              </div>
            </div>
          </div>
          <div className="flex w-48.5 h-full flex-col gap-35">
            <span className="font-poppins text-main-color text-18 font-500">
              Payment Method
            </span>
            <div className="checkout-container-data-line"></div>
            <div className="flex gap-40 flex-row">
              <div className="checkout-container-data-payment-method-credit-card hover:bg-main-color flex items-center justify-center flex-row bg-dark-white cursor-pointer gap-20 h-80p w-30">
                <h3 className="text-main-color text-24 font-400">
                  <FontAwesomeIcon icon={faCreditCard} />
                </h3>
                <span className="font-poppins text-main-color text-18 font-400">
                  Credit Card
                </span>
              </div>
              <div className="checkout-container-data-payment-method-bank-transfer hover:bg-main-color flex items-center justify-center flex-row bg-dark-white cursor-pointer gap-20 h-80p w-30">
                <h3 className="text-main-color text-24 font-400">
                  <FontAwesomeIcon icon={faMoneyBillTransfer} />
                </h3>
                <span className="font-poppins text-main-color text-18 font-400">
                  Bank Transfer
                </span>
              </div>
              <div className="checkout-container-data-payment-method-paypal hover:bg-main-color flex items-center justify-center flex-row bg-dark-white cursor-pointer gap-20 h-80p w-30">
                <h3 className="text-main-color text-24 font-400">
                  <FontAwesomeIcon icon={faPaypal} />
                </h3>
                <span className="font-poppins text-main-color text-18 font-400">
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
                  Checkout
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
