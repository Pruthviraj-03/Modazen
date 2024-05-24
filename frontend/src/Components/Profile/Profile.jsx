import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(UserContext);
  const googleId = user ? user.googleId : null;
  console.log("User:", user);
  console.log("Google ID:", googleId);

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/userprofile"
        );
        setUserDetails(response.data);
        console.log("User data:", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="profile">
      <div className="flex justify-center flex-col h-auto p-20 gap-12">
        {googleId ? (
          <>
            <h3 className="font-poppins text-main-color text-17.5 font-700 tracking-0.5">
              Hello {userDetails.name ? userDetails.name : "------"}
            </h3>
            <span className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5">
              {userDetails.phoneNumber ? userDetails.phoneNumber : "------"}
            </span>
            <span className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5">
              {userDetails.email ? userDetails.email : "------"}
            </span>
          </>
        ) : (
          <>
            <h3 className="font-poppins text-main-color text-17.5 font-700 tracking-0.5">
              Welcome
            </h3>
            <span className="font-poppins text-dark-grey text-16 font-400 tracking-0.5">
              To access your account and data
            </span>
            <Link to="/login">
              <div className="border border-main-color main-color w-150 h-45 flex items-center justify-center cursor-pointer">
                <span className="font-poppins text-main-color text-14 font-700 tracking-0.5">
                  LOGIN / SIGNUP
                </span>
              </div>
            </Link>
          </>
        )}
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
        {googleId ? (
          <>
            <Link to={`/?user=${googleId}/userprofile`}>
              <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
                Edit Profile
              </h4>
            </Link>
            <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
              Logout
            </h4>
          </>
        ) : (
          <>
            <Link to="/privacypolicy">
              <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
                Privacy policy
              </h4>
            </Link>
            <Link to="/termsofservices">
              <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
                Terms of services
              </h4>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
