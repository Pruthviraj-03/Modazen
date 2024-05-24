import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    DOB: "",
    AlternateMobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/v1/users/editprofile",
        formData
      );
      console.log("User details saved successfully.");
      navigate("/userprofile");
    } catch (error) {
      console.error("Error saving user details:", error);
    }
  };

  return (
    <div className="w-full h-auto flex items-center justify-center p-150">
      <form
        className="edit-profile-container flex justify-center items-center w-50 h-auto min-h-400 flex-col gap-10 p-50"
        onSubmit={handleSubmit}
      >
        <div className="h-70p w-80 flex items-center">
          <span className="font-poppins text-main-color text-22 font-700">
            Edit Details
          </span>
        </div>
        <div className="edit-profile-line"></div>
        <div className="flex flex-col gap-20 h-500 w-80 mt-40">
          <div className="fieldset relative mb-20 h-80p w-full">
            <legend className="font-poppins">Full Name</legend>
            <input
              className="font-poppins"
              type="text"
              value={formData.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="fieldset relative mb-20 h-80p w-full">
            <legend className="font-poppins">Mobile Number</legend>
            <input
              className="font-poppins"
              type="text"
              maxLength="10"
              value={formData.phoneNumber}
              onChange={handleChange}
            ></input>
          </div>
          <div className="fieldset relative mb-20 h-80p w-full">
            <legend className="font-poppins">Email ID</legend>
            <input
              className="font-poppins"
              type="text"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="gender-box flex mb-20 h-60 w-full">
            <button className="flex justify-center items-center h-full w-50">
              <span className="font-poppins text-main-color text-14 font-400">
                Male
              </span>
            </button>
            <button className="flex justify-center items-center h-full w-50">
              <span className="font-poppins text-main-color text-14 font-400">
                Female
              </span>
            </button>
          </div>
          <div className="fieldset relative mb-20 h-80p w-full">
            <legend className="font-poppins">Date of Birth</legend>
            <input
              className="font-poppins"
              type="text"
              placeholder="dd/mm/yyyy"
              maxLength="10"
              value={formData.DOB}
              onChange={handleChange}
            ></input>
          </div>
          <div className="fieldset relative mb-20 h-80p w-full">
            <legend className="font-poppins">Alternate Mobile</legend>
            <input
              className="font-poppins"
              type="text"
              maxLength="10"
              value={formData.AlternateMobile}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="edit-profile-button flex justify-center items-center w-560 h-55 bg-main-color cursor-pointer">
          <span className="font-poppins text-dark-white text-18 font-700 tracking-0.5">
            SAVE DETAILS
          </span>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
