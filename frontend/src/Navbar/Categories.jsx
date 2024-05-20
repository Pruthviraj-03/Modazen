import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
} from "@fortawesome/free-solid-svg-icons";
import category1 from "../images/featured2.avif";
import category2 from "../images/featured3.avif";
import category3 from "../images/featured4.avif";
import category4 from "../images/featured5.avif";
import category5 from "../images/Blue Grey Warm Jacket.jpg";
import category6 from "../images/Denim Jacket.jpg";
import category7 from "../images/Black Jacket.jpg";
import category8 from "../images/Green Polar Jacket.jpg";
import category9 from "../images/green tshirt.avif";
import category10 from "../images/featured1.avif";

export const categoryProducts = [
  {
    id: 1,
    name: "Grey Trouser",
    image: category1,
    price: "$299",
    originalPrice: "$100",
    discount: "74% OFF",
    size: "XS",
    rating: 1,
    category: "Pants",
  },
  {
    id: 2,
    name: "Black Sports Shoes",
    image: category2,
    price: "$299",
    originalPrice: "$100",
    discount: "67% OFF",
    size: "S",
    rating: 2,
    category: "Shoes",
  },
  {
    id: 3,
    name: "Green Crop Top",
    image: category3,
    price: "$299",
    originalPrice: "$100",
    discount: "45% OFF",
    size: "M",
    rating: 3,
    category: "Skirt",
  },
  {
    id: 4,
    name: "Green Crop Top",
    image: category3,
    price: "$299",
    originalPrice: "$100",
    discount: "45% OFF",
    size: "L",
    rating: 4,
    category: "Dress",
  },
  {
    id: 5,
    name: "Golden Handbag",
    image: category4,
    price: "$299",
    originalPrice: "$100",
    discount: "78% OFF",
    size: "XL",
    rating: 5,
    category: "Accesories",
  },
  {
    id: 6,
    name: "Blue Grey Warm Jacket",
    image: category5,
    price: "$299",
    originalPrice: "$100",
    discount: "74% OFF",
    size: "S",
    rating: 5,
    category: "Jacket",
  },
  {
    id: 7,
    name: "Denim Jacket",
    image: category6,
    price: "$299",
    originalPrice: "$100",
    discount: "67% OFF",
    size: "M",
    rating: 4,
    category: "Jacket",
  },
  {
    id: 8,
    name: "Black Jacket",
    image: category7,
    price: "$299",
    originalPrice: "$100",
    discount: "45% OFF",
    size: "L",
    rating: 3,
    category: "Jacket",
  },
  {
    id: 9,
    name: "Green Polar Jacket",
    image: category8,
    price: "$299",
    originalPrice: "$100",
    discount: "78% OFF",
    size: "XL",
    rating: 2,
    category: "Underwear",
  },
  {
    id: 10,
    name: "Green T-shirt",
    image: category9,
    price: "$299",
    originalPrice: "$100",
    discount: "78% OFF",
    size: "L",
    rating: 1,
    category: "Shirt",
  },
  {
    id: 11,
    name: "Gray T-shirt",
    image: category10,
    price: "$299",
    originalPrice: "$100",
    discount: "78% OFF",
    size: "S",
    rating: 4,
    category: "Shirt",
  },
];

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      title: "Jacket",
      icon: faVest,
      slug: "jacket",
      onClick: () => handleCategoryClick("Jacket"),
    },
    {
      id: 2,
      title: "Shirt",
      icon: faTshirt,
      slug: "shirt",
      onClick: () => handleCategoryClick("Shirt"),
    },
    {
      id: 3,
      title: "Pants",
      icon: faPersonDress,
      slug: "pants",
      onClick: () => handleCategoryClick("Pants"),
    },
    {
      id: 4,
      title: "Skirt",
      icon: faPersonDress,
      slug: "skirt",
      onClick: () => handleCategoryClick("Skirt"),
    },
    {
      id: 5,
      title: "Dress",
      icon: faPersonDress,
      slug: "dress",
      onClick: () => handleCategoryClick("Dress"),
    },
    {
      id: 6,
      title: "Underwear",
      icon: faHatCowboySide,
      slug: "underwear",
      onClick: () => handleCategoryClick("Underwear"),
    },
    {
      id: 7,
      title: "Shoes",
      icon: faShoePrints,
      slug: "shoes",
      onClick: () => handleCategoryClick("Shoes"),
    },
    {
      id: 8,
      title: "Accessories",
      icon: faHatCowboySide,
      slug: "accessories",
      onClick: () => handleCategoryClick("Accessories"),
    },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isRatingDrawerOpen, setIsRatingDrawerOpen] = useState(false);
  const [isSizeDrawerOpen, setIsSizeDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleRatingDrawer = () => {
    setIsRatingDrawerOpen(!isRatingDrawerOpen);
  };

  const toggleSizeDrawer = () => {
    setIsSizeDrawerOpen(!isSizeDrawerOpen);
  };

  const handleCategoryClick = (categoryName) => {
    const matchingProducts = categoryProducts.filter(
      (product) => product.category === categoryName
    );
    console.log("Product category:", categoryName);
    console.log("Matching products:", matchingProducts);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto mt-25 mb-50">
      <div className="flex mr-28 w-50 flex-row gap-30">
        <Link to="/">
          <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
            Home
          </span>
        </Link>
        <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
          <FontAwesomeIcon className="rightArrow-icon" icon={faAngleRight} />
        </span>
        <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
          Categories
        </span>
      </div>
      <div className="flex items-center justify-center h-100 w-80">
        <span className="font-poppins text-main-color text-36 font-700 tracking-1">
          Categories
        </span>
      </div>
      <div className="flex flex-row justify-center w-80 h-1000 gap-30 mt-25">
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
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      $100 - $250
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      $250 - $500
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      $500 - $750
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      $750 - $1000
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
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
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="ml-20">
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="ml-20">
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="ml-20">
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="ml-20">
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="ml-20">
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
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
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      XS
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      S
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      M
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      L
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      XL
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="categories-container-filter-box-line"></div>
        </div>
        <div className="w-80 h-full p-20 flex flex-wrap gap-20">
          {categoriesData.map((category) => (
            <Link key={category.id} to={`/products/${category.slug}`}>
              <div
                className="categories-container-box hover:bg-main-color w-575 h-222 bg-light-white flex flex-row items-center justify-center gap-35 cursor-pointer"
                onClick={category.onClick}
              >
                <div className="categories-container-box-image text-85">
                  <FontAwesomeIcon icon={category.icon} />
                </div>
                <div>
                  <h3 className="font-poppins text-main-color text-36 font-700 tracking-1">
                    {category.title}
                  </h3>
                  <span className="font-poppins text-dark-grey text-36 font-400 tracking-1">
                    Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
