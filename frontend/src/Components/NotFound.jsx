import React from "react";
import notfound from "../images/notfound.png";
import { Link, useParams } from "react-router-dom";

const NotFound = () => {
  const { query } = useParams();

  return (
    <div className="flex justify-center w-full h-auto mt-50 mb-50 min-h-60vh">
      <div className="flex items-center flex-col w-80 h-auto gap-30">
        <p className="font-poppins text-main-color text-18 font-400 tracking-0.5">
          You searched for
          <span className="font-poppins text-main-color text-20 font-700 tracking-0.5 ml-10">
            {query}
          </span>
        </p>
        <div className="h-120 w-170 overflow-hidden">
          <img
            className="object-contain h-full w-full"
            src={notfound}
            alt="notfound-img"
          ></img>
        </div>
        <h1 className="font-poppins text-main-color text-22 font-500 tracking-0.5">
          We couldn't find any matches!
        </h1>
        <h2 className="font-poppins text-dark-grey text-15 font-400 tracking-0.5">
          Please check the spelling or try searching something else
        </h2>
        <Link to="/">
          <div className="not-found-button flex items-center justify-center h-55 w-220 bg-dark-white cursor-pointer rounded-60 mt-10">
            <span className="font-poppins text-main-color text-18 font-500">
              Go back to Home
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
