import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const UserProfile = () => {
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/login/success",
        { withCredentials: true }
      );

      setUserData(response.data.data.user);
    } catch (error) {
      console.log("error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
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
  );
};

export default UserProfile;
