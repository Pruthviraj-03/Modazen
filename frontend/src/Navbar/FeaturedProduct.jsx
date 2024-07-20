import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import {
  faHeart,
  faShoppingCart,
  faArrowRight,
  faArrowLeft,
  faAngleRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { arrivalData, extraProducts } from "./HomePage";
import { Products } from "./products";
import { useCart } from "../Components/Context/CartContext";
import { useWishlist } from "../Components/Context/WishlistContext";
import { Carousel } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeaturedProduct = () => {
  const { productName } = useParams();
  const { addToCart, cartItems } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();
  const [product, setProduct] = useState(null);
  const [productCategory, setProductCategory] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [firstCardIndex, setFirstCardIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (productName) {
      const selectedProduct =
        arrivalData.find((item) => item.name === productName) ||
        extraProducts.find((item) => item.name === productName) ||
        Products.find((item) => item.name === productName);

      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [productName]);

  useEffect(() => {
    if (productName) {
      const selectedProduct =
        Products.find((item) => item.name === productName) ||
        arrivalData.find((item) => item.name === productName) ||
        extraProducts.find((item) => item.name === productName);

      if (selectedProduct) {
        setProduct(selectedProduct);
        setProductCategory(selectedProduct.category);
      }
    }
  }, [productName]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (!isProductInCart) {
      addToCart(product);
      // alert("Product added in the cart.");
      toast.success("Product added in the cart successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      // alert("Product is already in the cart.");
      toast.info("Product is already in the cart!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleAddToWishlist = () => {
    const isProductInWishlist = wishlistItems.some(
      (item) => item.id === product.id
    );
    if (!isProductInWishlist) {
      addToWishlist(product);
      // alert("Product added in the wishlist.");
      toast.success("Product added in the wishlist successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      // alert("Product is already in the wishlist.");
      toast.info("Product is already in the wishlist!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleSimilarProductAddToWishlist = (similarProduct) => {
    // addToWishlist(similarProduct);
    // alert("Product added to wishlist.");
    const isProductInWishlist = wishlistItems.some(
      (item) => item.id === product.id
    );
    if (!isProductInWishlist) {
      addToWishlist(similarProduct);
      // alert("Product added in the wishlist.");
      toast.success("Product added in the wishlist successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      // alert("Product is already in the wishlist.");
      toast.info("Product is already in the wishlist!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleSwipe = (direction) => {
    if (direction === "LEFT" && firstCardIndex > 0) {
      setFirstCardIndex(firstCardIndex - 1);
    } else if (direction === "RIGHT" && firstCardIndex + 4 < Products.length) {
      setFirstCardIndex(firstCardIndex + 1);
    }
  };

  const handleArrowClick = (direction) => {
    handleSwipe(direction);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
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

  const shuffledProducts = shuffleArray(Products);

  return (
    <>
      {!isMobile && (
        <div className="flex items-center justify-center w-full h-auto mt-25 mb-50 bg-dark-white">
          <div className="flex flex-col w-80 h-full gap-40 laptop:w-90 laptop:h-auto">
            <div className="flex flex-row ml-50p w-50 gap-30">
              <Link to="/featured">
                <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
                  Featured
                </span>
              </Link>
              <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
                <FontAwesomeIcon
                  className="rightArrow-icon"
                  icon={faAngleRight}
                />
              </span>
              <span className="font-poppins text-dark-grey text-18 font-500 tracking-1">
                {product.name}
              </span>
            </div>
            <div className="flex flex-row w-full h-60p">
              <div className="flex justify-center items-center w-50 h-full flex-wrap gap-30">
                <div className="w-40p h-50p overflow-hidden">
                  <img
                    className="object-contain w-full h-full cursor-pointer"
                    src={product.img1 || product.image}
                    alt="featured1"
                  />
                </div>
                <div className="w-40p h-50p overflow-hidden">
                  <img
                    className="object-contain w-full h-full cursor-pointer"
                    src={product.img2 || product.image}
                    alt="featured2"
                  />
                </div>
                <div className="w-17.5 h-20 overflow-hidden">
                  <img
                    className="object-contain w-full h-full cursor-pointer"
                    src={product.img3 || product.image}
                    alt="featured3"
                  />
                </div>
                <div className="w-17.5 h-20 overflow-hidden">
                  <img
                    className="object-contain w-full h-full cursor-pointer"
                    src={product.img4 || product.image}
                    alt="featured4"
                  />
                </div>
                <div className="w-17.5 h-20 overflow-hidden">
                  <img
                    className="object-contain w-full h-full cursor-pointer"
                    src={product.img5 || product.image}
                    alt="featured5"
                  />
                </div>
              </div>
              <div className="flex justify-center flex-col w-50 h-full gap-40">
                <h3 className="font-poppins text-main-color text-56 font-700">
                  {product.name}
                </h3>
                <div className="flex items-center flex-row gap-10">
                  <span className="font-poppins text-dark-grey text-36 font-400">
                    {product.price}
                  </span>
                  <h1 className="font-poppins text-dark-grey text-20 font-500 tracking-1 line-through">
                    {product.originalPrice}
                  </h1>
                  <h2 className="font-poppins text-main-color text-18 font-400">
                    {product.discount}
                  </h2>
                </div>
                <div className="featured-line"></div>
                <p className="font-poppins text-dark-grey text-18 font-400">
                  {product.desc}
                </p>
                <div className="flex items-center h-10 flex-row">
                  <div className="flex items-center w-10 h-full">
                    <span className="font-poppins text-main-color text-20 font-700">
                      Size :
                    </span>
                  </div>
                  <div className="flex items-center w-45p h-full flex-row gap-22.5 laptop:w-60">
                    <div
                      className={`size-box w-60 h-49 rounded-60 flex items-center justify-center cursor-pointer ${
                        selectedSize === "XS"
                          ? "bg-main-color text-dark-white"
                          : ""
                      }`}
                      onClick={() => handleSizeClick("XS")}
                    >
                      <span className="font-poppins text-main-color text-18 font-700">
                        XS
                      </span>
                    </div>
                    <div
                      className={`size-box w-60 h-49 rounded-60 flex items-center justify-center cursor-pointer ${
                        selectedSize === "S"
                          ? "bg-main-color text-dark-white"
                          : ""
                      }`}
                      onClick={() => handleSizeClick("S")}
                    >
                      <span className="font-poppins text-main-color text-18 font-700">
                        S
                      </span>
                    </div>
                    <div
                      className={`size-box w-60 h-49 rounded-60 flex items-center justify-center cursor-pointer ${
                        selectedSize === "M"
                          ? "bg-main-color text-dark-white"
                          : ""
                      }`}
                      onClick={() => handleSizeClick("M")}
                    >
                      <span className="font-poppins text-main-color text-18 font-700">
                        M
                      </span>
                    </div>
                    <div
                      className={`size-box w-60 h-49 rounded-60 flex items-center justify-center cursor-pointer ${
                        selectedSize === "L"
                          ? "bg-main-color text-dark-white"
                          : ""
                      }`}
                      onClick={() => handleSizeClick("L")}
                    >
                      <span className="font-poppins text-main-color text-18 font-700">
                        L
                      </span>
                    </div>
                    <div
                      className={`size-box w-60 h-49 rounded-60 flex items-center justify-center cursor-pointer ${
                        selectedSize === "XL"
                          ? "bg-main-color text-dark-white"
                          : ""
                      }`}
                      onClick={() => handleSizeClick("XL")}
                    >
                      <span className="font-poppins text-main-color text-18 font-700">
                        XL
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row h-10 w-full items-center gap-30">
                  <span className="font-poppins text-main-color text-20 font-700">
                    Quantity
                  </span>
                  <div
                    className="minus-box flex justify-center items-center w-45 h-42 bg-dark-white cursor-pointer"
                    onClick={handleDecrement}
                  >
                    <span className="font-poppins text-main-color text-20 font-700">
                      -
                    </span>
                  </div>
                  <span className="font-poppins text-main-color text-20 font-600">
                    {quantity}
                  </span>
                  <div
                    className="plus-box flex justify-center items-center w-45 h-42 bg-dark-white cursor-pointer"
                    onClick={handleIncrement}
                  >
                    <span className="font-poppins text-main-color text-20 font-700">
                      +
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-50">
                  <div className="featured-product-atc-button w-220 h-70p bg-main-color">
                    <Link to="/shoppingcart">
                      <div
                        className="flex justify-center items-center w-220 h-70p cursor-pointer"
                        onClick={handleAddToCart}
                      >
                        <span className="font-poppins text-dark-white text-18 font-700">
                          Add to Cart
                        </span>
                        <FontAwesomeIcon
                          className="featured-atc-icon text-dark-white text-18 font-700 ml-20"
                          icon={faShoppingCart}
                        />
                      </div>
                    </Link>
                  </div>

                  <div
                    className="featured-product-atw-button w-220 h-70p bg-main-color"
                    onClick={handleAddToWishlist}
                  >
                    <Link to="/wishlist">
                      <div className="flex justify-center items-center w-220 h-70p cursor-pointer">
                        <FontAwesomeIcon
                          className="featured-atw-icon text-dark-white text-20 font-700"
                          icon={faHeart}
                        />
                        <span className="font-poppins text-dark-white text-18 font-700 ml-15 tracking-1">
                          WISHLIST
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full h-40p gap-50">
              <div className="flex items-center justify-between h-10 w-full">
                <span className="font-poppins text-main-color text-38 font-700">
                  Similiar Product
                </span>
                <div className="featured-container-similiar-product-arrows">
                  <FontAwesomeIcon
                    className="text-25 text-main-color ml-50 cursor-pointer hover:text-dark-grey"
                    icon={faArrowLeft}
                    onClick={() => handleArrowClick("LEFT")}
                  />
                  <FontAwesomeIcon
                    className="text-25 text-main-color ml-50 cursor-pointer hover:text-dark-grey"
                    icon={faArrowRight}
                    onClick={() => handleArrowClick("RIGHT")}
                  />
                </div>
              </div>
              <div className="flex flex-row h-80 w-full p-30 gap-80">
                {shuffledProducts
                  .filter((product) => product.category === productCategory)
                  .slice(0, 4)
                  .map((similarProduct) => (
                    <Link
                      to={`/featured/${encodeURIComponent(
                        similarProduct.name
                      )}`}
                    >
                      <div className="featured-container-similiar-product-box flex flex-col items-center justify-center h-360 w-305 gap-27.5 cursor-pointer relative">
                        <div className="product-rating hidden gap-1 w-40 h-40 items-center justify-center flex-row  transition-opacity duration-300 ease-in-out absolute top-2.5 right-2.5 z-50 rounded-full">
                          <span className="font-poppins text-16 font-600 text-main-color tracking-1">
                            {similarProduct.rating}
                          </span>
                          <FontAwesomeIcon
                            className="rating-icon text-12"
                            icon={faStar}
                          />
                        </div>
                        <div className="featured-container-similiar-product-box-image w-70 h-65 pt-5p overflow-hidden">
                          <img
                            className="object-contain w-full h-full"
                            src={similarProduct.img1}
                            alt="featured1"
                          />
                        </div>
                        <div className="featured-container-similiar-product-box-info flex flex-col items-center justify-center w-80 h-20 gap-10">
                          <div
                            className="add-to-wishlist hidden justify-center items-center gap-10 w-75 h-32.5 transition-opacity duration-300 ease-in-out absolute top-2/3 left-0 right-0 bottom-0 mx-auto z-50 rounded-1.5"
                            onClick={() =>
                              handleSimilarProductAddToWishlist(similarProduct)
                            }
                          >
                            <Link to="/wishlist">
                              <div className="add-to-wishlist-data gap-10 w-full h-full flex items-center justify-center flex-row">
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
                          <h3 className="font-poppins text-main-color text-18 font-600">
                            {similarProduct.name}
                          </h3>
                          <div className="flex items-center justify-center flex-row gap-6">
                            <span className="font-poppins text-main-color text-18 font-700 tracking-1">
                              {similarProduct.price}
                            </span>
                            <h1 className="font-poppins text-dark-grey text-16 font-500 tracking-1 line-through">
                              {similarProduct.originalPrice}
                            </h1>
                            <h2 className="font-poppins text-main-color text-14 font-400">
                              {similarProduct.discount}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex justify-center w-full min-h-screen h-auto mt-60">
          <div className="flex flex-col items-center h-auto w-90 gap-30 mb-120">
            <span className="font-poppins text-main-color text-24 font-700">
              Featured
            </span>
            <Carousel>
              <Carousel.Item key={product.id}>
                <div className="d-flex justify-content-between align-items-center h-200 border border-main-color">
                  <img
                    className="object-contain w-full h-100"
                    src={product.img1}
                  />
                  <img
                    className="object-contain w-full h-100"
                    src={product.img2}
                  />
                  <img
                    className="object-contain w-full h-100"
                    src={product.img3}
                  />
                  <img
                    className="object-contain w-full h-100"
                    src={product.img4}
                  />
                  <img
                    className="object-contain w-full h-100"
                    src={product.img5}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
            <div
              className="flex justify-center flex-col w-full h-auto gap-10"
              key={product.id}
            >
              <h3 className="font-poppins text-main-color text-18 font-500 tracking-1">
                {product.name}
              </h3>
              <div className="flex items-center flex-row gap-10">
                <span className="font-poppins text-dark-grey text-24 font-400">
                  {product.price}
                </span>
                <h1 className="font-poppins text-dark-grey text-16 font-500 tracking-1 line-through">
                  {product.originalPrice}
                </h1>
                <h2 className="font-poppins text-main-color text-14 font-400">
                  {product.discount}
                </h2>
              </div>
              <p className="font-poppins text-dark-grey text-14 font-400">
                {product.desc}
              </p>
              <div className="flex flex-col gap-10 mt-10">
                <span className="font-poppins text-main-color text-18 font-700 tracking-1">
                  Size :
                </span>
                <div className="flex items-center w-full h-auto flex-row gap-10">
                  <div
                    className={`size-box w-45 h-45 rounded-60 flex items-center justify-center cursor-pointer ${
                      selectedSize === "XS"
                        ? "bg-main-color text-dark-white"
                        : ""
                    }`}
                    onClick={() => handleSizeClick("XS")}
                  >
                    <span className="font-poppins text-main-color text-18 font-700">
                      XS
                    </span>
                  </div>
                  <div
                    className={`size-box w-45 h-45 rounded-60 flex items-center justify-center cursor-pointer ${
                      selectedSize === "S"
                        ? "bg-main-color text-dark-white"
                        : ""
                    }`}
                    onClick={() => handleSizeClick("S")}
                  >
                    <span className="font-poppins text-main-color text-18 font-700">
                      S
                    </span>
                  </div>
                  <div
                    className={`size-box w-45 h-45 rounded-60 flex items-center justify-center cursor-pointer ${
                      selectedSize === "M"
                        ? "bg-main-color text-dark-white"
                        : ""
                    }`}
                    onClick={() => handleSizeClick("M")}
                  >
                    <span className="font-poppins text-main-color text-18 font-700">
                      M
                    </span>
                  </div>
                  <div
                    className={`size-box w-45 h-45 rounded-60 flex items-center justify-center cursor-pointer ${
                      selectedSize === "L"
                        ? "bg-main-color text-dark-white"
                        : ""
                    }`}
                    onClick={() => handleSizeClick("L")}
                  >
                    <span className="font-poppins text-main-color text-18 font-700">
                      L
                    </span>
                  </div>
                  <div
                    className={`size-box w-45 h-45 rounded-60 flex items-center justify-center cursor-pointer ${
                      selectedSize === "XL"
                        ? "bg-main-color text-dark-white"
                        : ""
                    }`}
                    onClick={() => handleSizeClick("XL")}
                  >
                    <span className="font-poppins text-main-color text-18 font-700">
                      XL
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row h-auto w-full items-center gap-20 mt-10">
                <span className="font-poppins text-main-color text-18 font-700">
                  Quantity
                </span>
                <div
                  className="minus-box flex justify-center items-center w-40 h-40 bg-dark-white cursor-pointer"
                  onClick={handleDecrement}
                >
                  <span className="font-poppins text-main-color text-18 font-700">
                    -
                  </span>
                </div>
                <span className="font-poppins text-main-color text-18 font-600">
                  {quantity}
                </span>
                <div
                  className="plus-box flex justify-center items-center w-40 h-40 bg-dark-white cursor-pointer"
                  onClick={handleIncrement}
                >
                  <span className="font-poppins text-main-color text-18 font-700">
                    +
                  </span>
                </div>
              </div>
              <div className="flex items-center flex-row gap-10 w-full h-auto mt-10">
                <div
                  className="featured-product-atc-button w-75 h-55 bg-main-color rounded-60"
                  onClick={handleAddToCart}
                >
                  <Link to="/shoppingcart">
                    <div className="flex justify-center items-center w-full h-full cursor-pointer">
                      <span className="font-poppins text-dark-white text-14 font-700">
                        Add to Cart
                      </span>
                      <FontAwesomeIcon
                        className="featured-atc-icon text-dark-white text-16 font-700 ml-20"
                        icon={faShoppingCart}
                      />
                    </div>
                  </Link>
                </div>

                <div
                  className="featured-product-atw-button w-75 h-55 bg-main-color rounded-60"
                  onClick={handleAddToWishlist}
                >
                  <Link to="/wishlist">
                    <div className="flex justify-center items-center w-full h-full cursor-pointer">
                      <FontAwesomeIcon
                        className="featured-atw-icon text-dark-white text-16 font-700"
                        icon={faHeart}
                      />
                      <span className="font-poppins text-dark-white text-14 font-700 ml-15 tracking-1">
                        WISHLIST
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto gap-20">
              <span className="font-poppins text-main-color text-24 font-700">
                Similiar Product
              </span>
              <div className="w-full h-auto flex flex-row overflow-hidden gap-10">
                {/* <Swiper
                  spaceBetween={20}
                  slidesPerView={"auto"}
                  freeMode={true}
                  grabCursor={true}
                > */}
                {shuffledProducts
                  .filter((product) => product.category === productCategory)
                  .slice(firstCardIndex, firstCardIndex + 4)
                  .map((similarProduct) => (
                    <Link
                      to={`/featured/${encodeURIComponent(
                        similarProduct.name
                      )}`}
                    >
                      {/* <SwiperSlide key={similarProduct.id}> */}
                      <div className="flex flex-col relative w-165 h-200 gap-10 items-center justify-center cursor-pointer border border-main-color rounded-xl">
                        <div className="gap-1 w-40 h-40 flex items-center justify-center flex-row absolute top-2.5 right-1.5 rounded-full border border-main-color p-6">
                          <span className="font-poppins text-16 font-600 text-main-color">
                            {similarProduct.rating}
                          </span>
                          <FontAwesomeIcon
                            className="rating-icon text-14"
                            icon={faStar}
                          />
                        </div>
                        <div className="w-70 h-65 pt-5p overflow-hidden">
                          <img
                            className="w-full h-full object-contain"
                            src={similarProduct.img1}
                            alt={similarProduct.name}
                          />
                        </div>
                        <div className="flex items-center justify-center flex-row gap-6 pt-10">
                          <span className="font-poppins text-main-color text-14 font-700 tracking-1">
                            {similarProduct.price}
                          </span>
                          <h1 className="font-poppins text-dark-grey text-12 font-500 tracking-1 line-through">
                            {similarProduct.originalPrice}
                          </h1>
                          <h2 className="font-poppins text-main-color text-12 font-400">
                            {similarProduct.discount}
                          </h2>
                        </div>
                      </div>
                      {/* </SwiperSlide> */}
                    </Link>
                  ))}
                {/* </Swiper> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProduct;
