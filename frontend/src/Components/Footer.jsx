import React, { useState } from "react";
import logoImg2 from "../images/logo2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "../index.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/users/subscribe", {
        email,
      });
      console.log("Email is:", email);
      alert("Thanks for contacting us! We will be in touch with you shortly.");
      setEmail(" ");
    } catch (error) {
      console.log(error);
      alert("Email failed. Please try again later.");
    }
  };

  return (
    <div className="bg-main-color w-full h-500 flex justify-center items-center flex-col">
      <div className="flex items-center flex-row w-80 h-70">
        <div className="w-25 h-full">
          <Link to="/">
            <div className="flex flex-row items-center cursor-pointer w-full h-10 gap-7">
              <img className="h-30 w-40" src={logoImg2} alt="ModaZen Logo" />
              <span className="font-poppins text-dark-white text-25 font-900 tracking-1">
                ModaZen
              </span>
            </div>
          </Link>
          <p className="font-poppins w-full h-35 text-dark-grey text-15.5 font-500 tracking-1 mt-40">
            Welcome to our online store, where quality meets convenience.
            Discover a curated selection of products tailored to enhance your
            lifestyle.
          </p>
          <div className="w-full h-12.5 mb-10 flex items-center">
            <FontAwesomeIcon
              className="phone-icon h-22.5 w-22.5 text-dark-white"
              icon={faPhoneAlt}
            />
            <span className="font-poppins text-dark-white text-15.5 font-500 tracking-1 ml-15">
              +1234567890
            </span>
          </div>
          <div className="w-full h-12.5 mb-10 flex items-center">
            <FontAwesomeIcon
              className="mail-icon h-22.5 w-22.5 text-dark-white"
              icon={faEnvelope}
            />
            <span className="font-poppins text-dark-white text-15.5 font-500 tracking-1 ml-15">
              modaZen@support.com
            </span>
          </div>
          <div className="flex flex-row items-center cursor-pointer w-full h-15 gap-30 text-25 text-dark-white">
            <Link to="https://www.instagram.com/">
              <FontAwesomeIcon
                className=" hover:text-dark-grey"
                icon={faInstagram}
              />
            </Link>
            <Link to="https://twitter.com/i/flow/login">
              <FontAwesomeIcon
                className=" hover:text-dark-grey"
                icon={faTwitter}
              />
            </Link>
            <Link to="https://www.facebook.com/">
              <FontAwesomeIcon
                className=" hover:text-dark-grey"
                icon={faFacebook}
              />
            </Link>
          </div>
        </div>
        <div className="ml-160 flex flex-col items-center w-17.5 h-full gap-40">
          <span className="font-poppins text-dark-white text-22.5 font-900 tracking-1">
            Product Links
          </span>
          <ul className="font-poppins text-dark-grey text-17.5 font-500 tracking-1">
            <Link to="/categories">
              <li className="mb-30 cursor-pointer hover:text-dark-white">
                Categories
              </li>
            </Link>
            <Link to="/arrivals">
              <li className="mb-30 cursor-pointer hover:text-dark-white">
                New Arrivals
              </li>
            </Link>
            <Link to="/featured">
              <li className="mb-30 cursor-pointer hover:text-dark-white">
                Featured
              </li>
            </Link>
            <Link to="/products">
              <li className="mb-30 cursor-pointer hover:text-dark-white">
                Products
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col items-center w-17.5 h-full gap-40">
          <span className="font-poppins text-dark-white text-22.5 font-900 tracking-1">
            Company
          </span>
          <ul className="font-poppins text-dark-grey text-17.5 font-500 tracking-1 ml-40">
            <Link to="/aboutus">
              <li className="mb-30 cursor-pointer hover:text-dark-white">
                Aboutus
              </li>
            </Link>
            <Link to="/contactus">
              <li className="mb-30 cursor-pointer hover:text-dark-white">
                Contactus
              </li>
            </Link>
            <Link to="/privacypolicy">
              <li className="mb-30 cursor-pointer hover:text-dark-white">
                Privacy policy
              </li>
            </Link>
            <Link to="/termsofservices">
              <li className="mb-30 cursor-pointer hover:text-dark-white">
                Terms of services
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-25 h-full ml-70">
          <span className="font-poppins text-dark-white text-22.5 font-900 tracking-1">
            Join our Newsletter
          </span>
          <p className="font-poppins w-full h-30p text-dark-grey text-17 font-500 tracking-1 mt-40">
            Drop your email below to get update, promotions, coupons, and more!
          </p>
          <div className="flex flex-row items-center rounded-md border border-dark-white w-full h-60">
            <input
              className="font-poppins text-15 w-78 ml-15 h-full tracking-0.3 border-none outline-none bg-transparent focus:text-dark-white"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FontAwesomeIcon
              className="p-20 ml-13 bg-dark-white cursor-pointer hover:bg-medium-grey hover:text-dark-white hover:border hover:border-dark-white"
              icon={faArrowRight}
              onClick={handleSubscribe}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-40 w-full mt-20">
        <span className="font-poppins text-17.5 font-500 tracking-1 text-medium-grey">
          Copyright © 2024 ModaZen. All Right Reseved
        </span>
      </div>
    </div>
  );
};

export default Footer;
