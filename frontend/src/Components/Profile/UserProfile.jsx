import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faHeart,
  faRightToBracket,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const action1 = () => {
    navigate("/editprofile");
  };

  const action2 = () => {
    navigate("/wishlist");
  };

  const action3 = () => {
    navigate("/orders");
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8000/api/v1/users/logout", {
        withCredentials: true,
      });
      toast.success("User logged out successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      setUserData(null);
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/login/success",
        { withCredentials: true }
      );

      setUserData(response.data.data.user);
    } catch (error) {
      navigate("/login");
      toast.warning("Login first to access user data!", {
        position: "top-center",
        autoClose: 3000,
      });
      console.log("error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {!isMobile && (
        <div className="w-full h-auto flex items-center justify-center p-150">
          <div className="user-profile-container flex justify-center items-center w-40p h-auto min-h-400 flex-col gap-10 p-50 laptop:w-60">
            <div className="flex items-center h-70p w-70">
              <span className="font-poppins text-main-color text-20 font-700">
                Profile Details
              </span>
            </div>
            <div className="user-profile-line"></div>
            <div className="flex justify-center flex-col gap-20 h-380 w-70">
              <div className="flex items-center flex-row gap-10p h-40 w-full">
                <h3 className="font-poppins flex items-center h-full w-40p text-main-color text-16 tracking-0.5 font-400">
                  Full Name
                </h3>
                <span className="font-poppin flex items-center h-full w-50 text-main-color text-16 tracking-0.5 font-400">
                  {userData.name ? userData.name : "------------------"}
                </span>
              </div>
              <div className="flex items-center flex-row gap-10p h-40 w-full">
                <h3 className="font-poppins flex items-center h-full w-40p text-main-color text-16 tracking-0.5 font-400">
                  Mobile Number
                </h3>
                <span className="font-poppin flex items-center h-full w-50 text-main-color text-16 tracking-0.5 font-400">
                  {userData.phoneNumber
                    ? userData.phoneNumber
                    : "------------------"}
                </span>
              </div>
              <div className="flex items-center flex-row gap-10p h-40 w-full">
                <h3 className="font-poppins flex items-center h-full w-40p text-main-color text-16 tracking-0.5 font-400">
                  Email ID
                </h3>
                <span className="font-poppin flex items-center h-full w-50 text-main-color text-16 tracking-0.5 font-400">
                  {userData.email ? userData.email : "------------------"}
                </span>
              </div>
              <div className="flex items-center flex-row gap-10p h-40 w-full">
                <h3 className="font-poppins flex items-center h-full w-40p text-main-color text-16 tracking-0.5 font-400">
                  Gender
                </h3>
                <span className="font-poppin flex items-center h-full w-50 text-main-color text-16 tracking-0.5 font-400">
                  {userData.gender ? userData.gender : "------------------"}
                </span>
              </div>
              <div className="flex items-center flex-row gap-10p h-40 w-full">
                <h3 className="font-poppins flex items-center h-full w-40p text-main-color text-16 tracking-0.5 font-400">
                  Date of Birth
                </h3>
                <span className="font-poppin flex items-center h-full w-50 text-main-color text-16 tracking-0.5 font-400">
                  {userData.DOB
                    ? moment(userData.DOB).format("DD/MM/YYYY")
                    : "------------------"}
                </span>
              </div>
              <div className="flex items-center flex-row gap-10p h-40 w-full">
                <h3 className="font-poppins flex items-center h-full w-40p text-main-color text-16 tracking-0.5 font-400">
                  Alternate Mobile
                </h3>
                <span className="font-poppin flex items-center h-full w-50 text-main-color text-16 tracking-0.5 font-400">
                  {userData.AlternateMobile
                    ? userData.AlternateMobile
                    : "------------------"}
                </span>
              </div>
            </div>
            <Link to="/editprofile">
              <div className="user-profile-button flex items-center justify-center w-500 h-55 bg-main-color cursor-pointer">
                <span className="font-poppins text-dark-white text-18 font-700 tracking-0.5">
                  EDIT
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex item-center justify-center flex-col gap-20 p-15 mt-50 mb-70">
          <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
            {userData.name ? userData.name : "------------------"}
          </span>

          <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
            {userData.phoneNumber ? userData.phoneNumber : "------------------"}
          </span>

          <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
            {userData.email ? userData.email : "------------------"}
          </span>

          <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
            {userData.DOB
              ? moment(userData.DOB).format("DD/MM/YYYY")
              : "------------------"}
          </span>

          <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
            {userData.AlternateMobile
              ? userData.AlternateMobile
              : "------------------"}
          </span>

          <div className="flex flex-wrap w-full h-auto gap-10 mt-10">
            <div
              className="border border-main-color w-48.5 h-40 rounded-lg flex items-center gap-15 justify-center"
              onClick={action1}
            >
              <FontAwesomeIcon
                className="font-poppins text-main-color text-17 tracking-0.5 font-600"
                icon={faPen}
              />
              <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
                Edit
              </span>
            </div>

            <div
              className="border border-main-color w-48.5 h-40 rounded-lg flex items-center gap-15 justify-center"
              onClick={action2}
            >
              <FontAwesomeIcon
                className="font-poppins text-main-color text-17 tracking-0.5 font-600"
                icon={faHeart}
              />
              <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
                Wishlist
              </span>
            </div>
            <div
              className="border border-main-color w-48.5 h-40 rounded-lg flex items-center gap-15 justify-center"
              onClick={action3}
            >
              <FontAwesomeIcon
                className="font-poppins text-main-color text-17 tracking-0.5 font-600"
                icon={faBoxOpen}
              />
              <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
                Orders
              </span>
            </div>
            <div
              className="border border-main-color w-48.5 h-40 rounded-lg flex items-center gap-15 justify-center"
              onClick={handleLogout}
            >
              <FontAwesomeIcon
                className="font-poppins text-main-color text-17 tracking-0.5 font-600"
                icon={faRightToBracket}
              />
              <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
                Logout
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-auto gap-20 mt-10">
            <Link to="/aboutus">
              <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
                About Us
              </span>
            </Link>
            <Link to="/contactus">
              <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
                Contact Us
              </span>
            </Link>
            <Link to="/privacypolicy">
              <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
                Privacy Policy
              </span>
            </Link>
            <Link to="/termsofservices">
              <span className="font-poppins text-main-color text-17 tracking-0.5 font-600">
                Terms Of Services
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
