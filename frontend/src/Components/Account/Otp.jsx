import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Otp = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [timer, setTimer] = useState(30);
  const phoneNumber = localStorage.getItem("phoneNumber");
  const navigate = useNavigate();

  useEffect(() => {
    if (!phoneNumber) {
      navigate("/login");
    }

    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, [navigate, phoneNumber]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus the next input if it exists
      if (element.nextElementSibling) {
        element.nextElementSibling.focus();
      }
    } else if (value === "") {
      // Handle backspace
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Focus the previous input if it exists
      if (element.previousElementSibling) {
        element.previousElementSibling.focus();
      }
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join("");
    try {
      const response = await axios.post("/api/v1/users/verify-otp", {
        phoneNumber,
        otp: enteredOtp,
      });

      if (response.status === 200) {
        navigate("/");
      } else {
        console.error("OTP verification failed:", response.data.message);
      }
    } catch (error) {
      console.error("Failed to verify OTP:", error);
    }
  };

  const handleResend = async () => {
    try {
      await axios.post("/api/v1/users/resend-otp", {
        phoneNumber,
      });
      setTimer(30);
    } catch (error) {
      console.error("Failed to resend OTP:", error);
    }
  };

  return (
    <div className="w-full h-auto flex items-center justify-center p-150">
      <div className="login-container flex w-27.5p h-600 flex-col gap-30 p-30">
        <div className="flex flex-col gap-10 w-full">
          <span className="font-poppins text-main-color text-22 font-700 tracking-0.3">
            Verify with OTP
          </span>
          <h3 className="font-poppins text-dark-grey text-15 font-400 tracking-0.3">
            Sent to {phoneNumber}
          </h3>
        </div>
        <div className="flex flex-row gap-30 h-70p w-full mt-30">
          {otp.map((data, index) => (
            <div
              key={index}
              className="otp-number-box flex justify-center items-center h-full w-13"
            >
              <input
                className="font-poppins text-18 w-full h-full border-none outline-none pl-17.5"
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp[index] && index > 0) {
                    e.preventDefault();
                    if (e.target.previousElementSibling) {
                      e.target.previousElementSibling.focus();
                    }
                  }
                }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="login-button flex justify-center items-center w-full h-40 bg-main-color cursor-pointer"
        >
          <span className="font-poppins text-dark-white text-15 font-700 tracking-0.5">
            VERIFY OTP
          </span>
        </button>
        <div className="flex items-center flex-row gap-7 w-full mt-10">
          <h3 className="font-poppins text-dark-grey text-15 font-400 tracking-0.3">
            Resend OTP in:
          </h3>
          <span
            className={`font-poppins text-main-color text-18 font-700 tracking-0.3 cursor-pointer ${
              timer > 0 ? "opacity-50" : ""
            }`}
            onClick={handleResend}
            disabled={timer > 0}
          >
            {timer > 0 ? `00:${timer.toString().padStart(2, "0")}` : "Resend"}
          </span>
        </div>
        <div className="flex items-center flex-row gap-7 w-full mt-10">
          <h3 className="font-poppins text-main-color text-15 font-400 tracking-0.3">
            Log in using
          </h3>
          <Link to="/login">
            <span className="font-poppins text-main-color text-18 font-700 tracking-0.3 cursor-pointer">
              Google
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Otp;
