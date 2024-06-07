import React from "react";
import { Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShippingFast,
  faCreditCard,
  faShieldAlt,
  faHeadphones,
  faTShirt,
  faVest,
  faShoePrints,
  faPersonDress,
  faHatCowboySide,
} from "@fortawesome/free-solid-svg-icons";
import carousel1 from "../images/poster1.jpg";
import carousel2 from "../images/poster2.jpg";
import carousel3 from "../images/poster3.jpg";
import carousel4 from "../images/poster4.jpg";
import carousel5 from "../images/poster5.jpg";
import arrivals1 from "../images/green tshirt.avif";
import arrivals2 from "../images/Blue Grey Warm Jacket.jpg";
import arrivals3 from "../images/Denim Jacket.jpg";
import arrivals4 from "../images/Black Jacket.jpg";
import arrivals5 from "../images/Green Polar Jacket.jpg";
import { useCart } from "../Components/Context/CartContext";
import { Products } from "./products";

export const arrivalData = [
  {
    id: 202,
    name: "Blue Grey Warm Jacket",
    desc: "EKLENTSON Army Jacket Men Blue Grey Warm Jacket Men Multi Pockets Winter Jacket Men Thermal",
    img1: arrivals2,
    img2: arrivals2,
    img3: arrivals2,
    img4: arrivals2,
    img5: arrivals2,
    price: "$110",
    originalPrice: "$170",
    discount: "25% OFF",
    category: "Jacket",
    pricerange: "$100 - $250",
    rating: "1",
    size: "S",
    isIncart: "false",
    isWishlisted: "false",
  },
  {
    id: 203,
    name: "Denim Jacket",
    desc: "TACVASEN Men's Denim Jacket Cotton Military Jackets Fleece Lined Thick Work Coats Warm Cargo Jackets with Hooded",
    img1: arrivals3,
    img2: arrivals3,
    img3: arrivals3,
    img4: arrivals3,
    img5: arrivals3,
    price: "$260",
    originalPrice: "$300",
    discount: "30% OFF",
    category: "Jacket",
    pricerange: "$250 - $500",
    rating: "2",
    size: "S",
    isIncart: "false",
    isWishlisted: "false",
  },
  {
    id: 204,
    name: "Black Jacket",
    desc: "Flygo Men's Sherpa Black Jacket Fleece Lined Zip Up Warm Hoodies Sweatshirt Winter Zipper Sweater Hooded Coat",
    img1: arrivals4,
    img2: arrivals4,
    img3: arrivals4,
    img4: arrivals4,
    img5: arrivals4,
    price: "$550",
    originalPrice: "$600",
    discount: "40% OFF",
    category: "Jacket",
    pricerange: "$500 - $750",
    rating: "3",
    size: "S",
    isIncart: "false",
    isWishlisted: "false",
  },
  {
    id: 205,
    name: "Green Polar Jacket",
    desc: "CHEXPEL Men's Green Polar Jacket with Hood Fleece Lining Cotton Military Jackets Work Jackets with Cargo Pocket",
    img1: arrivals5,
    img2: arrivals5,
    img3: arrivals5,
    img4: arrivals5,
    img5: arrivals5,
    price: "$760",
    originalPrice: "$900",
    discount: "45% OFF",
    category: "Jacket",
    pricerange: "$750 - $1000",
    rating: "4",
    size: "S",
    isIncart: "false",
    isWishlisted: "false",
  },
];

export const extraProducts = [
  {
    id: 201,
    name: "Green T-shirt",
    desc: "TACVASEN Legendary Whitetails Men's",
    img1: arrivals1,
    img2: arrivals1,
    img3: arrivals1,
    img4: arrivals1,
    img5: arrivals1,
    price: "$300",
    originalPrice: "$350",
    discount: "30% OFF",
    category: "TShirts",
    pricerange: "$250 - $500",
    rating: "5",
    size: "S",
    isIncart: "false",
    isWishlisted: "false",
  },
];

const HomePage = () => {
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  const carouselData = [
    {
      id: 1,
      title: "Jackets",
      discount: "25% Off",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: carousel4,
      slug: "jacket",
    },
    {
      id: 2,
      title: "Tops & Tees",
      discount: "30% Off",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: carousel1,
      slug: "t-shirts",
    },
    {
      id: 3,
      title: "Shirts",
      discount: "40% Off",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: carousel3,
      slug: "shirts",
    },
    {
      id: 4,
      title: "Western Wear",
      discount: "50% Off",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: carousel2,
      slug: "tops",
    },
    {
      id: 5,
      title: "Handbags",
      discount: "50% Off",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: carousel5,
      slug: "accessories",
    },
  ];

  const categoryData = [
    { id: 1, name: "Jacket", icon: faVest },
    { id: 2, name: "Shirts", icon: faTShirt },
    { id: 3, name: "Pants", icon: faHatCowboySide },
    { id: 4, name: "Shoes", icon: faShoePrints },
    { id: 5, name: "Dress", icon: faPersonDress },
    { id: 6, name: "Accessories", icon: faHatCowboySide },
  ];

  const chooseUsData = [
    {
      id: 1,
      icon: faShippingFast,
      title: "Free Delivery",
      description: "This free shipping only for selected regions.",
    },
    {
      id: 2,
      icon: faCreditCard,
      title: "Payment Method",
      description: "Secure payment methods available for your convenience.",
    },
    {
      id: 3,
      icon: faShieldAlt,
      title: "Warranty",
      description: "Our products come with a warranty for peace of mind.",
    },
    {
      id: 4,
      icon: faHeadphones,
      title: "Customer Support",
      description: "Dedicated customer support available to assist you.",
    },
  ];

  const handleAddToCart = (extra) => {
    const isProductInCart = cartItems.some((item) => item.id === extra.id);
    if (!isProductInCart) {
      addToCart(extra);
      alert("Product added in the cart.");
    } else {
      alert("Product is already in the cart.");
    }
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

  const handleCarouselClick = (slug) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="h-auto w-full">
      <div className="flex flex-col justify-center w-full h-auto">
        <Carousel interval={2000} pause="hover" wrap indicators>
          {carouselData.map((carousel, index) => (
            <Carousel.Item key={index}>
              <div className="flex flex-row w-full h-550 mt-40 bg-light-white">
                <div className="flex flex-col justify-center h-full w-35 gap-20 pl-60 pb-30">
                  <span className="font-poppins text-main-color text-90 font-400">
                    {carousel.title}
                  </span>
                  <span className="font-poppins text-64 font-700 text-main-color">
                    {carousel.discount}
                  </span>
                  <p className="font-poppins text-18 font-400 text-main-color">
                    {carousel.description}
                  </p>
                  <div
                    className="home-carousel-data-button hover:border hover:border-main-color hover:bg-dark-white flex items-center justify-center flex-row cursor-pointer w-230 h-70p bg-main-color gap-20"
                    onClick={() => handleCarouselClick(carousel.slug)}
                  >
                    <span className="font-poppins text-24 font-400 text-dark-white tracking-1">
                      Shop Now
                    </span>
                    <FontAwesomeIcon
                      className="arrow-icon2 text-24 font-400 text-dark-white tracking-1"
                      icon={faArrowRight}
                    />
                  </div>
                </div>
                <div className="home-carousel-poster h-full w-65">
                  <img
                    className="h-full w-full object-cover"
                    src={carousel.imageUrl}
                    alt={`carousel${index + 1}`}
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="flex items-center justify-center h-330 w-full bg-dark-white mt-50">
          <div className="flex flex-col h-full w-80 bg-dark-white p-20">
            <div className="flex justify-between">
              <h3 className="font-poppins text-main-color font-700 text-36">
                Categories
              </h3>
              <Link to="/categories">
                <span className="font-poppins text-main-color font-700 text-18 cursor-pointer hover:text-dark-grey">
                  View all
                </span>
              </Link>
            </div>
            <div className="flex flex-row h-full w-full gap-40 mt-50">
              {categoryData.map((category) => (
                <Link key={category.id} to="/categories">
                  <div className="category-box hover:bg-main-color hover:text-dark-white h-full w-213 bg-light-white flex flex-col justify-center items-center gap-40 cursor-pointer">
                    <FontAwesomeIcon className="text-50" icon={category.icon} />
                    <span className="font-poppins text-18 font-500 text-dark-grey">
                      {category.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-750 w-full bg-dark-white mt-50">
          <div className="flex flex-col h-full w-80 bg-dark-white p-20">
            <div className="flex justify-between">
              <h3 className="font-poppins text-main-color font-700 text-36">
                New Arrivals
              </h3>
              <Link to="/arrivals">
                <span className="font-poppins text-main-color font-700 text-18 cursor-pointer hover:text-dark-grey">
                  View all
                </span>
              </Link>
            </div>
            <div className="flex flex-row h-full w-full gap-20 mt-50">
              {extraProducts.map((extra) => (
                <Link
                  key={extra.id}
                  to={`/featured/${encodeURIComponent(extra.name)}`}
                >
                  <div className="home-container-arrivals-container-big-block flex flex-row w-730 h-full p-30 bg-light-white cursor-pointer">
                    <div className="w-60 h-full overflow-hidden">
                      <img
                        className="h-full w-full object-cover"
                        src={extra.img1}
                        alt={extra.name}
                      />
                    </div>
                    <div className="flex items-center justify-center flex-col w-40p h-full gap-25">
                      <h3 className="font-poppins text-main-color text-24 font-500 tracking-1">
                        {extra.name}
                      </h3>
                      <div className="flex items-center justify-center flex-row gap-6">
                        <span className="font-poppins text-main-color text-18 font-700">
                          {extra.price}
                        </span>
                        <h1 className="font-poppins text-dark-grey text-16 font-500 tracking-1 line-through">
                          {extra.originalPrice}
                        </h1>
                        <h2 className="font-poppins text-main-color text-14 font-400">
                          {extra.discount}
                        </h2>
                      </div>
                      <div
                        className="add-to-cart flex items-center justify-center flex-row w-170 h-55
                        bg-main-color gap-20 cursor-pointer"
                        onClick={() => handleAddToCart(extra)}
                      >
                        <Link to="/shoppingcart">
                          <span className="font-poppins text-dark-white font-700 tracking-1">
                            Add to Cart
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              <div className="flex flex-wrap w-50 h-full gap-20 bg-dark-white cursor-pointer">
                {arrivalData.map((block) => (
                  <Link
                    key={block.id}
                    to={`/featured/${encodeURIComponent(block.name)}`}
                  >
                    <div className="home-container-arrivals-container-small-block flex flex-col items-center justify-center h-320 w-354 gap-40 bg-light-white">
                      <div className="h-40p w-40p">
                        <img src={block.img1} alt={block.name} />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-20">
                        <h3 className="font-poppins text-main-color text-24 font-500 tracking-1">
                          {block.name}
                        </h3>
                        <div className="home-container-arrivals-container-small-block-info-price flex items-center justify-center flex-row gap-6">
                          <span className="font-poppins text-main-color text-18 font-700">
                            {block.price}
                          </span>
                          <h1 className="font-poppins text-dark-grey text-16 font-500 tracking-1 line-through">
                            {block.originalPrice}
                          </h1>
                          <h2 className="font-poppins text-main-color text-14 font-400">
                            {block.discount}
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

        <div className="flex items-center justify-center h-1550 w-full bg-dark-white mt-50">
          <div className="flex flex-col h-full w-80 bg-dark-white p-20">
            <div className="flex justify-between">
              <h3 className="font-poppins text-main-color font-700 text-36">
                Featured
              </h3>
              <Link to="/featured">
                <span className="font-poppins text-main-color font-700 text-18 cursor-pointer hover:text-dark-grey">
                  View all
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap h-full w-full mt-50 gap-20">
              {shuffledProducts.slice(0, 10).map((item) => (
                <Link
                  key={item.id}
                  to={`/featured/${encodeURIComponent(item.name)}`}
                >
                  <div className="home-featured-box w-355.1 h-458 flex flex-col items-center justify-center gap-20 cursor-pointer transition-transform duration-300 ease-in-out">
                    <div className="w-50 h-50p overflow-hidden">
                      <img
                        className="h-full w-full object-contain"
                        src={item.img1}
                        alt="featured-images"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center h-auto p-10">
                      <h3 className="font-poppins text-main-color text-18 font-500 tracking-1">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-center flex-row gap-7 mt-3">
                        <span className="font-poppins text-main-color text-18 font-700">
                          {item.price}
                        </span>
                        <h1 className="font-poppins text-dark-grey text-16 font-500 tracking-1 line-through">
                          {item.originalPrice}
                        </h1>
                        <h2 className="font-poppins text-main-color text-14 font-400">
                          {item.discount}
                        </h2>
                      </div>
                    </div>
                    <div
                      className="raj items-center justify-center flex-row w-170 h-10
                        bg-main-color gap-20 cursor-pointer hidden"
                    >
                      <Link
                        to="/shoppingcart"
                        onClick={() => handleAddToCart(item)}
                      >
                        <span className="font-poppins text-18 text-dark-white font-700 tracking-1">
                          Add to Cart
                        </span>
                      </Link>
                    </div>
                    {/*  flex items-center justify-center flex-row w-170 h-50 bg-main-color gap-20 cursor-pointer */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-500 w-full bg-dark-white mt-30">
          <div className="text-main-color text-36 font-700 ml-120">
            <span className="font-poppins">Why Choose Us</span>
          </div>
          <div className="flex justify-center h-full w-full bg-light-white mt-30">
            <div className="flex flex-row h-full w-80 gap-50.5">
              {chooseUsData.map((item) => (
                <div
                  key={item.id}
                  className="h-full w-22.5p flex flex-col items-center justify-center"
                >
                  <Link to="/termsofservices">
                    <div className="why-choose-us-icon rounded-full text-40 py-15 px-22.5 cursor-pointer mb-30">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                  </Link>
                  <span className="font-poppins text-main-color text-24 font-700 mt-20">
                    {item.title}
                  </span>
                  <p className="font-poppins text-dark-grey text-18 font-400 w-60 mb-50 ml-30 mt-30">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full h-200 gap-60">
          <span className="font-nike text-dark-grey text-50 font-800 tracking-1">
            Nike
          </span>
          <span className="font-adidas text-medium-grey text-50 font-800 tracking-1">
            Adidas
          </span>
          <span className="font-gucci text-dark-grey text-50 font-500 tracking-1">
            Gucci
          </span>
          <span className="font-versace text-medium-grey text-50 font-500 tracking-1">
            Versace
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
