import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  faAngleUp,
  faStar,
  faVest,
  faTshirt,
  faPersonDress,
  faShoePrints,
  faHatCowboySide,
  faAngleDown,
  faAngleRight,
  faSort,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      title: "Jacket",
      icon: faVest,
      slug: "jacket",
    },
    {
      id: 2,
      title: "Shirt",
      icon: faTshirt,
      slug: "shirts",
    },
    {
      id: 3,
      title: "T-Shirts",
      icon: faTshirt,
      slug: "t-shirts",
    },
    {
      id: 4,
      title: "Pants",
      icon: faHatCowboySide,
      slug: "pants",
    },
    {
      id: 5,
      title: "Dress",
      icon: faPersonDress,
      slug: "dress",
    },
    {
      id: 6,
      title: "Tops",
      icon: faPersonDress,
      slug: "tops",
    },
    {
      id: 7,
      title: "Shoes",
      icon: faShoePrints,
      slug: "shoes",
    },
    {
      id: 8,
      title: "Accessories",
      icon: faHatCowboySide,
      slug: "accessories",
    },
  ];

  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isRatingDrawerOpen, setIsRatingDrawerOpen] = useState(false);
  const [isSizeDrawerOpen, setIsSizeDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleRatingDrawer = () => {
    setIsRatingDrawerOpen(!isRatingDrawerOpen);
  };

  const toggleSizeDrawer = () => {
    setIsSizeDrawerOpen(!isSizeDrawerOpen);
  };

  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen);
  };

  const handleCarouselClick = (slug) => {
    navigate(`/products/${slug}`);
  };

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
        <div className="flex flex-col items-center justify-center w-full h-auto mt-25 mb-50">
          <div className="flex mr-28 w-50 flex-row gap-30 laptop:mr-40p">
            <Link to="/">
              <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
                Home
              </span>
            </Link>
            <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
              <FontAwesomeIcon
                className="rightArrow-icon"
                icon={faAngleRight}
              />
            </span>
            <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
              Categories
            </span>
          </div>
          <div className="flex items-center justify-center h-100 w-80 laptop:w-90">
            <span className="font-poppins text-main-color text-36 font-700 tracking-1">
              Categories
            </span>
          </div>
          <div className="flex flex-row justify-center w-80 h-1000 gap-30 mt-25 laptop:w-90 laptop:h-auto">
            <div className="w-18.5 h-full flex flex-col gap-20">
              <div className="w-full h-auto overflow-y-auto p-20">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={toggleDrawer}
                >
                  <span className="font-poppins text-main-color text-18 font-500 tracking-1">
                    Filter by Price
                  </span>
                  <FontAwesomeIcon
                    className={
                      isDrawerOpen
                        ? "rotated text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                        : "text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                    }
                    icon={isDrawerOpen ? faAngleUp : faAngleDown}
                    onClick={toggleDrawer}
                  />
                </div>
                {isDrawerOpen && (
                  <div className="mt-20">
                    <ul className="flex flex-col gap-13">
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                          $100 - $250
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                          $250 - $500
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                          $500 - $750
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                          $750 - $1000
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                          $1000 - $1500
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="categories-container-filter-box-line"></div>
              <div className="w-full h-auto overflow-y-auto p-20">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={toggleRatingDrawer}
                >
                  <span className="font-poppins text-main-color text-18 font-500 tracking-1">
                    Filter by Rating
                  </span>
                  <FontAwesomeIcon
                    className={
                      isRatingDrawerOpen
                        ? "rotated text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                        : "text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                    }
                    icon={isRatingDrawerOpen ? faAngleUp : faAngleDown}
                    onClick={toggleRatingDrawer}
                  />
                </div>
                {isRatingDrawerOpen && (
                  <div className="mt-20">
                    <ul className="flex flex-col gap-13">
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="ml-20">
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="ml-20">
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="ml-20">
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="ml-20">
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="ml-20">
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                          <FontAwesomeIcon
                            className="star-icon mr-8 text-18 laptop:text-16"
                            icon={faStar}
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="categories-container-filter-box-line"></div>
              <div className="w-full h-auto overflow-y-auto p-20">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={toggleSizeDrawer}
                >
                  <span className="ffont-poppins text-main-color text-18 font-500 tracking-1">
                    Filter by Size
                  </span>
                  <FontAwesomeIcon
                    className={
                      isSizeDrawerOpen
                        ? "rotated text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                        : "text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                    }
                    icon={isSizeDrawerOpen ? faAngleUp : faAngleDown}
                    onClick={toggleSizeDrawer}
                  />
                </div>
                {isSizeDrawerOpen && (
                  <div className="mt-20">
                    <ul className="flex flex-col gap-13">
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                          XS
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                          S
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                          M
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                          L
                        </span>
                      </li>
                      <li>
                        <Link to="/products">
                          <input
                            className="h-18 w-18 cursor-pointer laptop:h-16 laptop:w-16"
                            type="checkbox"
                          ></input>
                        </Link>
                        <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                          XL
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="categories-container-filter-box-line"></div>
            </div>
            <div className="w-80 h-full p-20 flex flex-wrap gap-20 laptop:p-15 laptop:h-full">
              {categoriesData.map((category) => (
                <div
                  className="categories-container-box hover:bg-main-color w-575 h-222 bg-light-white flex flex-row items-center justify-center gap-35 cursor-pointer laptop:h-170 laptop:w-425"
                  key={category.id}
                  onClick={() => handleCarouselClick(category.slug)}
                >
                  <div className="categories-container-box-image text-85 laptop:text-70">
                    <FontAwesomeIcon icon={category.icon} />
                  </div>
                  <div>
                    <h3 className="font-poppins text-main-color text-36 font-700 tracking-1 laptop:text-32">
                      {category.title}
                    </h3>
                    <span className="font-poppins text-dark-grey text-36 font-400 tracking-1 laptop:text-32">
                      Collection
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex items-center justify-center w-full min-h-screen h-auto mt-60">
          <div className="flex flex-col items-center justify-center h-auto w-90 gap-30 mb-120">
            <span className="font-poppins text-main-color text-24 font-700">
              Categories
            </span>
            <div className="h-auto w-full flex flex-wrap gap-20">
              {categoriesData.map((category) => (
                <div
                  className="categories-container-box hover:bg-main-color w-47 h-170 bg-light-white flex flex-col items-center justify-center gap-10 cursor-pointer rounded-lg"
                  key={category.id}
                  onClick={() => handleCarouselClick(category.slug)}
                >
                  <div className="categories-container-box-image text-24">
                    <FontAwesomeIcon icon={category.icon} />
                  </div>
                  <h3 className="font-poppins text-main-color text-20 font-700 tracking-1">
                    {category.title}
                  </h3>
                  <span className="font-poppins text-dark-grey text-18 font-400 tracking-1">
                    Collection
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`drawer fixed top-0 left-5 w-full bg-white transition-transform duration-300 mt-100 ${
              isFilterDrawerOpen
                ? "transform translate-y-0"
                : "transform translate-y-full"
            }`}
            style={{ height: "auto" }}
          >
            <div className="flex flex-col items-center justify-center h-auto w-90 mb-100">
              <div className="w-full h-auto overflow-y-auto p-20">
                <div className="flex justify-between items-center cursor-pointer">
                  <span className="font-poppins text-main-color text-18 font-500 tracking-1">
                    Filter by Price
                  </span>
                </div>
                <div className="mt-20">
                  <ul className="flex flex-col gap-13">
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                        $100 - $250
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                        $250 - $500
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                        $500 - $750
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                        $750 - $1000
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                        $1000 - $1500
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-b-2 border-light-grey w-90"></div>
              <div className="w-full h-auto overflow-y-auto p-20">
                <div className="flex justify-between items-center cursor-pointer">
                  <span className="font-poppins text-main-color text-18 font-500 tracking-1">
                    Filter by Rating
                  </span>
                </div>
                <div className="mt-20">
                  <ul className="flex flex-col gap-13">
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="ml-20">
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="ml-20">
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="ml-20">
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="ml-20">
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="ml-20">
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="star-icon mr-8 text-18 laptop:text-16"
                          icon={faStar}
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-b-2 border-light-grey w-90"></div>
              <div className="w-full h-auto overflow-y-auto p-20">
                <div className="flex justify-between items-center cursor-pointer">
                  <span className="ffont-poppins text-main-color text-18 font-500 tracking-1">
                    Filter by Size
                  </span>
                </div>
                <div className="mt-20">
                  <ul className="flex flex-col gap-13">
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                        XS
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                        S
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                        M
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                        L
                      </span>
                    </li>
                    <li>
                      <Link to="/products">
                        <input
                          className="h-18 w-18 cursor-pointer"
                          type="checkbox"
                        ></input>
                      </Link>
                      <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20 laptop:text-16">
                        XL
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-b-2 border-light-grey w-90"></div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 right-0 flex flex-row w-100 h-7 border-t border-dark-white gap-10 p-10 mb-62 bg-dark-white">
            <div className="flex flex-row items-center justify-center gap-15 w-47">
              <FontAwesomeIcon
                icon={faSort}
                className="text-dark-grey text-16 font-700"
              />
              <span className="text-main-color text-15 font-700 tracking-0.5">
                SORT
              </span>
            </div>
            <div className="border-r-2 border-light-grey h-full"></div>
            <div
              className="flex flex-row items-center justify-center gap-15 w-47"
              onClick={toggleFilterDrawer}
            >
              <FontAwesomeIcon
                icon={faFilter}
                className="text-dark-grey text-16 font-700"
              />
              <span className="text-main-color text-15 font-700 tracking-0.5">
                FILTER
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
