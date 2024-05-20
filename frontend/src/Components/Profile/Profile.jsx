import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div className="flex justify-center flex-col p-20 gap-12.5">
        <h3 className="font-poppins text-main-color text-17.5 font-700 tracking-0.5">
          Hello Raj Kurane
        </h3>
        <span className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5">
          8692848775
        </span>
        <span className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5">
          raj.kurane03@gmail.com
        </span>
        <div className="profile-line"></div>
        <Link to="/orders">
          <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
            Orders
          </h4>
        </Link>
        <Link to="/wishlist">
          <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
            Wishlist
          </h4>
        </Link>
        <Link to="/contactus">
          <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
            Contact Us
          </h4>
        </Link>
        <div className="profile-line"></div>
        <Link to="/userprofile">
          <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
            Edit Profile
          </h4>
        </Link>
        <Link to="/login">
          <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
            Logout
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
