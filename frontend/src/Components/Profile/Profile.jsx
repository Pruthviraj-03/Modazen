import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    try {
      // console.log("Fetching user data...");
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/login/success",
        { withCredentials: true }
      );
      // console.log("User data response:", response.data);
      setUserData(response.data.data.user);
    } catch (error) {
      console.log("error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8000/api/v1/users/logout", {
        withCredentials: true,
      });
      window.alert("User logout success");
      setUserData(null);
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <div className="profile">
      <div className="flex justify-center flex-col h-auto p-20 gap-12">
        {userData ? (
          <>
            <h3 className="font-poppins text-main-color text-17.5 font-700 tracking-0.5">
              Hello {userData.name ? userData.name : "------------------"}
            </h3>
            <span className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5">
              {userData.phoneNumber
                ? userData.phoneNumber
                : "------------------"}
            </span>
            <span className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 h-auto">
              {userData.email ? userData.email : "------------------"}
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
        {userData ? (
          <>
            <Link to="/userprofile">
              <h4 className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer">
                Edit Profile
              </h4>
            </Link>
            <h4
              className="font-poppins text-dark-grey text-17.5 font-400 tracking-0.5 hover:text-main-color hover:font-700 hover:tracking-0.6 cursor-pointer"
              onClick={handleLogout}
            >
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
