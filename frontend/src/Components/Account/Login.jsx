import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    window.open("http://localhost:8000/api/v1/users/google/callback", "_self");
    // navigate("/googleId");
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleContinue = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/users/send-otp", {
        phoneNumber,
      });
      localStorage.setItem("phoneNumber", phoneNumber);
      navigate("/login/otp");
    } catch (error) {
      console.error("Failed to send OTP:", error);
    }
  };

  return (
    <div className="w-full h-auto flex items-center justify-center p-150">
      <div className="login-container flex w-27.5p h-600 flex-col gap-30 p-30">
        <div className="flex items-center flex-row gap-7 h-55 w-full">
          <span className="font-poppins ttex-main-color text-22 font-700">
            Login
          </span>
          <h3 className="font-poppins">or</h3>
          <span className="font-poppins text-main-color text-22 font-700">
            Signup
          </span>
        </div>
        <div className="login-number-box flex items-center flex-row gap-1 h-40 w-full p-10">
          <span className="font-poppins text-dark-grey text-14 font-400">
            +91
          </span>
          <div className="login-number-box-line"></div>
          <input
            className="font-poppins text-dark-grey font-400 text-14 w-full h-full border-none outline-none tracking-0.5"
            placeholder="Mobile Number"
            maxLength="10"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        {/* <div className="flex flex-row">
          <span className="font-poppins text-dark-grey text-14 font-400">By continuing, I agree to the</span>
          <h3 className="font-poppins text-dark-grey text-15 font-400">Terms of Use</h3>
          <span>&</span>
          <h3 className="font-poppins">Privacy Policy</h3>
        </div> */}
        {/* <Link to="/login/otp"> */}
        <div
          className="login-button flex justify-center items-center w-full h-40 bg-main-color cursor-pointer"
          onClick={handleContinue}
        >
          <span className="font-poppins text-dark-white text-15 font-700 tracking-0.5">
            CONTINUE
          </span>
        </div>
        {/* </Link> */}
        <h2 className="font-poppins text-dark-grey text-15.5 font-700 tracking-1 ml-10">
          ----------- or with google account -----------
        </h2>
        <div
          className="login-google flex items-center justify-center flex-row h-55 w-full rounded-60 gap-15 cursor-pointer bg-main-color"
          onClick={loginWithGoogle}
        >
          <FontAwesomeIcon
            className="google-icon text-dark-white text-18 font-700 tracking-0.5"
            icon={faGoogle}
          />
          <span className="font-poppins text-dark-white text-18 font-700 tracking-0.5">
            Google
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
