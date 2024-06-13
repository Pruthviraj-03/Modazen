import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logoImg1 from "../images/logo1.jpg";
import Profile from "../Components/Profile/Profile";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const handleRefreshPage = () => {
    navigate("/");
    window.location.reload();
    setSearchQuery("");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/products/search/${searchQuery}`);
      setSearchQuery("");
      console.log(searchQuery);
    }
  };

  const toggleUserProfile = () => {
    setUserProfileVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setUserProfileVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  return (
    <>
      <div className="bg-dark-white h-24 w-full flex items-center justify-center shadow-md fixed top-0 opacity-100 z-50">
        <div className="flex items-center flex-row w-70 laptop:w-80">
          <Link to="/" onClick={handleRefreshPage}>
            <div className="flex flex-row w-full h-full cursor-pointer">
              <img className="h-8 w-8" src={logoImg1} alt="ModaZen Logo" />
              <span className="font-poppins text-main-color text-20 font-900 tracking-0.5">
                ModaZen
              </span>
            </div>
          </Link>
          <div className="w-52 flex items-center justify-center h-full laptop:w-48.5">
            <ul className="font-poppins flex flex-row gap-50 laptop:gap-30 laptop:ml-50">
              <Link to="/categories" onClick={window.scrollTo(0, 0)}>
                <li className="font-poppins text-main-color text-13 font-500 tracking-0.9 cursor-pointer hover:text-dark-grey">
                  Categories
                </li>
              </Link>
              <Link to="/arrivals">
                <li className="font-poppins text-main-color text-13 font-500 tracking-0.9 cursor-pointer hover:text-dark-grey">
                  New Arrivals
                </li>
              </Link>
              <Link to="/featured">
                <li className="font-poppins text-main-color text-13 font-500 tracking-0.9 cursor-pointer hover:text-dark-grey">
                  Featured
                </li>
              </Link>
              <Link to="/products">
                <li className="font-poppins text-main-color text-13 font-500 tracking-0.9 cursor-pointer hover:text-dark-grey">
                  Products
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex relative items-center border border-gray-300 w-32 h-45 ml-60 rounded-md">
            <FontAwesomeIcon className="text-15 ml-15" icon={faSearch} />
            <input
              className="font-poppins text-main-color text-15 font-400 w-86 ml-15 tracking-0.3 h-full border-none outline-none"
              placeholder="Search for products"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="flex flex-row items-center w-6 h-full gap-30 ml-30">
            <Link to="/shoppingcart">
              <FontAwesomeIcon
                className="h-22.5 w-22.5 cursor-pointer"
                icon={faShoppingCart}
              />
            </Link>
            <FontAwesomeIcon
              className="h-22.5 w-22.5 cursor-pointer mb-1"
              onClick={toggleUserProfile}
              icon={faUser}
            />
          </div>
        </div>
      </div>

      {userProfileVisible && (
        <div className="user-profile-overlay" ref={profileRef}>
          <Profile />
        </div>
      )}
    </>
  );
};

export default Header;
