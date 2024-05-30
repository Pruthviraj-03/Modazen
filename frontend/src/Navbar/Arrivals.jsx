import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faAngleDown,
  faStar,
  faHeart,
  faVest,
  faTshirt,
  faPersonDress,
  faShoePrints,
  faHatCowboySide,
  faAngleUp,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useWishlist } from "../Components/Context/WishlistContext";
import { Products } from "./products";

const Arrivals = ({ title }) => {
  const { addToWishlist, wishlistItems } = useWishlist();
  const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false);
  const [isPriceDrawerOpen, setIsPriceDrawerOpen] = useState(false);
  const [isRatingDrawerOpen, setIsRatingDrawerOpen] = useState(false);
  const [isSizeDrawerOpen, setIsSizeDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("Recommended");
  const [sortedProducts, setSortedProducts] = useState([]);
  const productsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddToWishlist = (product) => {
    const isProductInWishlist = wishlistItems.some(
      (item) => item.id === product.id
    );
    if (!isProductInWishlist) {
      addToWishlist(product);
      alert("Product added in the wishlist.");
    } else {
      alert("Product is already in the wishlist.");
    }
  };

  const toggleCategoryDrawer = () => {
    setIsCategoryDrawerOpen(!isCategoryDrawerOpen);
  };

  const toggleDrawer = () => {
    setIsPriceDrawerOpen(!isPriceDrawerOpen);
  };

  const toggleRatingDrawer = () => {
    setIsRatingDrawerOpen(!isRatingDrawerOpen);
  };

  const toggleSizeDrawer = () => {
    setIsSizeDrawerOpen(!isSizeDrawerOpen);
  };

  const categoriesData = [
    {
      id: 1,
      title: "Jacket",
      icon: faVest,
      checked: selectedCategory.includes("Jacket"),
      onChange: () => handleCategoryChange("Jacket"),
    },
    {
      id: 2,
      title: "Shirt",
      icon: faTshirt,
      checked: selectedCategory.includes("Shirt"),
      onChange: () => handleCategoryChange("Shirt"),
    },
    {
      id: 3,
      title: "Pants",
      icon: faPersonDress,
      checked: selectedCategory.includes("Pants"),
      onChange: () => handleCategoryChange("Pants"),
    },
    {
      id: 4,
      title: "Skirt",
      icon: faPersonDress,
      checked: selectedCategory.includes("Skirt"),
      onChange: () => handleCategoryChange("Skirt"),
    },
    {
      id: 5,
      title: "Dress",
      icon: faPersonDress,
      checked: selectedCategory.includes("Dress"),
      onChange: () => handleCategoryChange("Dress"),
    },
    {
      id: 6,
      title: "Underwear",
      icon: faHatCowboySide,
      checked: selectedCategory.includes("Underwear"),
      onChange: () => handleCategoryChange("Underwear"),
    },
    {
      id: 7,
      title: "Shoes",
      icon: faShoePrints,
      checked: selectedCategory.includes("Shoes"),
      onChange: () => handleCategoryChange("Shoes"),
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory((prevSelection) =>
      prevSelection.includes(category)
        ? prevSelection.filter(
            (selectedCategory) => selectedCategory !== category
          )
        : [...prevSelection, category]
    );
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange((prevSelection) =>
      prevSelection.includes(range)
        ? prevSelection.filter((selectedRange) => selectedRange !== range)
        : [...prevSelection, range]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRating((prevSelection) =>
      prevSelection.includes(rating)
        ? prevSelection.filter((selectedRating) => selectedRating !== rating)
        : [...prevSelection, rating]
    );
  };

  useEffect(() => {
    const processProducts = () => {
      let filteredProducts = Products;

      if (selectedCategory.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedCategory.includes(product.category)
        );
      }

      if (selectedPriceRange.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedPriceRange.includes(product.pricerange)
        );
      }

      if (selectedRating.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          selectedRating.includes(product.rating)
        );
      }

      let processedProducts = [...filteredProducts];

      if (selectedSortOption === "Price: Low To High") {
        processedProducts.sort(
          (a, b) =>
            parseFloat(a.price.replace("$", "")) -
            parseFloat(b.price.replace("$", ""))
        );
      } else if (selectedSortOption === "Price: High To Low") {
        processedProducts.sort(
          (a, b) =>
            parseFloat(b.price.replace("$", "")) -
            parseFloat(a.price.replace("$", ""))
        );
      }

      if (
        selectedSortOption !== "Price: Low To High" &&
        selectedSortOption !== "Price: High To Low"
      ) {
        processedProducts = shuffleArray(processedProducts);
      }

      return processedProducts;
    };

    const shuffleArray = (array) => {
      let shuffledArray = array.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    const processedProducts = processProducts();
    setSortedProducts(processedProducts);
  }, [
    selectedCategory,
    selectedPriceRange,
    selectedRating,
    selectedSortOption,
    Products,
  ]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    if (page < 1) {
      setCurrentPage(1);
    } else if (page > Math.ceil(Products.length / productsPerPage)) {
      setCurrentPage(Math.ceil(Products.length / productsPerPage));
    } else {
      setCurrentPage(page);
    }
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
          <FontAwesomeIcon
            className="text-15 font-500 text-dark-grey cursor-pointer transform rotate-270 hover:text-main-color"
            icon={faAngleRight}
          />
        </span>
        <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
          {title || "Arrivals"}
        </span>
      </div>
      <div className="flex items-center justify-center h-100 w-80">
        <span className="font-poppins text-main-color text-36 font-700 tracking-1">
          {title || "Arrivals"}
        </span>
      </div>
      <div className="flex justify-center flex-row w-80 h-2000 gap-30 mt-25">
        <div className="categories-container-filters w-18.5 h-full flex flex-col gap-20">
          <div className="w-full h-auto overflow-y-auto p-20">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={toggleCategoryDrawer}
            >
              <span className="font-poppins text-main-color text-18 font-500 tracking-1font-poppins">
                Filter by Category
              </span>
              <FontAwesomeIcon
                className={
                  isCategoryDrawerOpen
                    ? "rotated text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                    : "text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                }
                icon={isCategoryDrawerOpen ? faAngleUp : faAngleDown}
                onClick={toggleCategoryDrawer}
              />
            </div>
            {isCategoryDrawerOpen && (
              <div className="arrivals-container-filter-box-options mt-20">
                {categoriesData.map((category) => (
                  <ul
                    className="flex flex-col gap-13"
                    key={category.id}
                    checked={category.checked}
                    onChange={category.onChange}
                  >
                    <li className="flex flex-row items-center justify-center h-45 w-full gap-5p cursor-pointer pl-20">
                      <h3 className="text-main-color w-20 text-20 font-500">
                        <FontAwesomeIcon icon={category.icon} />
                      </h3>
                      <span className="font-poppins text-main-color w-50 text-20 font-500">
                        {category.title}
                      </span>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </div>
          <div className="categories-container-filter-box-line"></div>
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
                  isPriceDrawerOpen
                    ? "rotated text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                    : "text-12.5 cursor-pointer text-main-color hover:text-dark-grey"
                }
                icon={isPriceDrawerOpen ? faAngleUp : faAngleDown}
                onClick={toggleDrawer}
              />
            </div>
            {isPriceDrawerOpen && (
              <div className="mt-20">
                <ul className="flex flex-col gap-13">
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                      checked={selectedPriceRange.includes("$100 - $250")}
                      onChange={() => handlePriceRangeChange("$100 - $250")}
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      $100 - $250
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                      checked={selectedPriceRange.includes("$250 - $500")}
                      onChange={() => handlePriceRangeChange("$250 - $500")}
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      $250 - $500
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                      checked={selectedPriceRange.includes("$500 - $750")}
                      onChange={() => handlePriceRangeChange("$500 - $750")}
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      $500 - $750
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                      checked={selectedPriceRange.includes("$750 - $1000")}
                      onChange={() => handlePriceRangeChange("$750 - $1000")}
                    ></input>
                    <span className="font-poppins text-main-color text-18 font-500 tracking-1 ml-20">
                      $750 - $1000
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                      checked={selectedPriceRange.includes("$1000 - $1500")}
                      onChange={() => handlePriceRangeChange("$1000 - $1500")}
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
                      checked={selectedRating.includes("1")}
                      onChange={() => handleRatingChange("1")}
                    ></input>
                    <span className="ml-20">
                      <FontAwesomeIcon className="star-icon" icon={faStar} />
                    </span>
                  </li>
                  <li>
                    <input
                      className="h-18 w-18 cursor-pointer"
                      type="checkbox"
                      checked={selectedRating.includes("2")}
                      onChange={() => handleRatingChange("2")}
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
                      checked={selectedRating.includes("3")}
                      onChange={() => handleRatingChange("3")}
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
                      checked={selectedRating.includes("4")}
                      onChange={() => handleRatingChange("4")}
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
                      checked={selectedRating.includes("5")}
                      onChange={() => handleRatingChange("5")}
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
              <span className="font-poppins text-main-color text-18 font-500 tracking-1">
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
        <div className="w-80 h-full p-20 flex flex-col gap-20 bg-dark-white">
          <div className="flex justify-between">
            <span className="font-poppins text-18 font-500 text-dark-grey">
              Viewing {Math.min(indexOfLastProduct, sortedProducts.length)} out
              of {sortedProducts.length} products
            </span>
            <div className="flex items-center justify-center flex-row w-auto h-auto px-15 rounded-3 cursor-pointer border border-medium-grey">
              <span className="font-poppins text-16 font-500 text-dark-grey">
                Sort by:
              </span>
              <div className="dropdown">
                <button className="text-16 font-700 text-dark-grey border-none cursor-pointer py-10 px-15">
                  {selectedSortOption}
                </button>
                <div className="dropdown-content">
                  <h1
                    className="text-16 font-700 text-dark-grey py-12 px-16 no-underline block hover:bg-medium-white"
                    onClick={() => setSelectedSortOption("Recommended")}
                  >
                    Recommended
                  </h1>
                  <h1
                    className="text-16 font-700 text-dark-grey py-12 px-16 no-underline block hover:bg-medium-white"
                    onClick={() => setSelectedSortOption("Price: High To Low")}
                  >
                    Price: High To Low
                  </h1>
                  <h1
                    className="text-16 font-700 text-dark-grey py-12 px-16 no-underline block hover:bg-medium-white"
                    onClick={() => setSelectedSortOption("Price: Low To High")}
                  >
                    Price: Low To High
                  </h1>
                </div>
                <span className="text-16 font-500 text-dark-grey mt-5 ml-5">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-wrap gap-20 p-10">
            {currentProducts.map((product) => (
              <Link
                key={product.id}
                to={`/featured/${encodeURIComponent(product.name)}`}
              >
                <div className="arrivals-container-box flex flex-col relative w-272.5 h-335 gap-27.5 items-center justify-center cursor-pointer">
                  <div className="product-rating hidden gap-1 w-40 h-40 items-center justify-center flex-row  transition-opacity duration-300 ease-in-out absolute top-2.5 right-2.5 z-50 rounded-full">
                    <span className="font-poppins text-16 font-600 text-main-color tracking-1">
                      {product.rating}
                    </span>
                    <FontAwesomeIcon
                      className="rating-icon text-12"
                      icon={faStar}
                    />
                  </div>
                  <div className="arrivals-container-box-image w-70 h-65 pt-5p overflow-hidden">
                    <img
                      className="w-full h-full object-contain"
                      src={product.img1}
                      alt={product.name}
                    />
                  </div>
                  <div className="arrivals-container-box-info flex flex-col items-center justify-center gap-10 w-80 h-20">
                    <div
                      className="add-to-wishlist hidden justify-center items-center gap-10 w-75 h-32.5 transition-opacity duration-300 ease-in-out absolute top-2/3 left-0 right-0 bottom-0 mx-auto z-50 rounded-1.5"
                      onClick={() => {
                        handleAddToWishlist(product);
                      }}
                    >
                      <Link to="/wishlist">
                        <div className="gap-10 w-full h-full flex items-center justify-center flex-row">
                          <FontAwesomeIcon
                            className="heart-icon text-17"
                            icon={faHeart}
                          />
                          <h2 className="font-poppins text-16 font-600 text-main-color tracking-1">
                            WISHLIST
                          </h2>
                        </div>
                      </Link>
                    </div>
                    <h3 className="font-poppins text-18 font-500 text-main-color h-auto w-auto">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-center flex-row gap-6">
                      <span className="font-poppins text-main-color text-18 font-700 tracking-1">
                        {product.price}
                      </span>
                      <h1 className="font-poppins text-dark-grey text-16 font-500 tracking-1 line-through">
                        {product.originalPrice}
                      </h1>
                      <h2 className="font-poppins text-main-color text-14 font-400">
                        {product.discount}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            className="w-full h-5 flex items-center justify-center flex-row gap-30"
            onClick={window.scrollTo(0, 0)}
          >
            <FontAwesomeIcon
              className="text-15 font-500 text-dark-grey cursor-pointer transform rotate-90 hover:text-main-color"
              icon={faAngleDown}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            {Array.from(
              { length: Math.ceil(sortedProducts.length / productsPerPage) },
              (_, index) => (
                <div key={index} className="w-auto">
                  <div
                    className={`list-box ${
                      currentPage === index + 1 ? "active-page" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    <span className="font-poppins">{index + 1}</span>
                  </div>
                </div>
              )
            )}
            <FontAwesomeIcon
              className="text-15 font-500 text-dark-grey cursor-pointer transform rotate-270 hover:text-main-color"
              icon={faAngleRight}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
