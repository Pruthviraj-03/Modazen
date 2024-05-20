import React from "react";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center p-150">
      <div className="login-container flex w-27.5p h-600 flex-col gap-30 p-30">
        <div className="flex flex-col gap-10 w-full">
          <span className="font-poppins text-main-color text-22 font-700 tracking-0.3">
            Verify with OTP
          </span>
          <h3 className="font-poppins text-dark-grey text-15 font-400 tracking-0.3">
            Sent to 8692848775
          </h3>
        </div>
        <div className="flex flex-row gap-30 h-70p w-full mt-30">
          <div className="otp-number-box flex justify-center items-center h-full w-13">
            <input
              className="font-poppins text-18 w-full h-full border-none outline-none pl-17.5"
              type="text"
              maxLength="1"
            ></input>
          </div>
          <div className="otp-number-box flex justify-center items-center h-full w-13">
            <input
              className="font-poppins text-18 w-full h-full border-none outline-none pl-17.5"
              type="text"
              maxLength="1"
            ></input>
          </div>
          <div className="otp-number-box flex justify-center items-center h-full w-13">
            <input
              className="font-poppins text-18 w-full h-full border-none outline-none pl-17.5"
              type="text"
              maxLength="1"
            ></input>
          </div>
          <div className="otp-number-box flex justify-center items-center h-full w-13">
            <input
              className="font-poppins text-18 w-full h-full border-none outline-none pl-17.5"
              type="text"
              maxLength="1"
            ></input>
          </div>
        </div>
        <div className="flex items-center flex-row gap-7 w-full mt-10">
          <h3 className="font-poppins text-dark-grey text-15 font-400 tracking-0.3">
            Resend OTP in:
          </h3>
          <span className="font-poppins text-main-color text-18 font-700 tracking-0.3 cursor-pointer">
            00:30
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
