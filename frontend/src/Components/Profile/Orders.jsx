import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useOrder } from "../Context/OrderContext.js";
import axios from "axios";

const Orders = () => {
  const { orderItems, setOrderItems } = useOrder();
  const [searchOrder, setSearchOrder] = useState("");
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchUserWishlist = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v2/getOrderListProducts",
          { withCredentials: true }
        );
        const { userOrderList } = response.data.data;
        setOrderItems(userOrderList);
      } catch (error) {
        navigate("/login");
        console.error("Failed to fetch user order list", error);
      }
    };

    fetchUserWishlist();
  }, [setOrderItems]);

  const handleSearchChange = (e) => {
    setSearchOrder(e.target.value);
  };

  const filteredProducts = orderItems.filter((product) =>
    product.name.toLowerCase().includes(searchOrder.toLowerCase())
  );

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
        <div className="w-full h-auto flex items-center justify-center p-150 laptop:p-0">
          <div className="orders-container flex w-50 h-auto min-h-400 flex-col gap-30 p-20 laptop:my-100">
            <div className="flex items-center w-full h-50 flex-row gap-250">
              <div className="flex flex-col w-20 h-full">
                <h3 className="font-poppins text-main-color text-20 font-700 tracking-0.5">
                  All orders
                </h3>
                <span className="font-poppins text-main-color text-17 font-400 tracking-0.5">
                  from anytime
                </span>
              </div>
              <div className="orders-search-box flex flex-row items-center w-45p h-45">
                <FontAwesomeIcon className="text-15 ml-15" icon={faSearch} />
                <input
                  className="font-poppins text-15 w-87 ml-15 h-full border-none outline-none tracking-0.3"
                  placeholder="Search in orders"
                  type="text"
                  value={searchOrder}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="orders-line"></div>
            {filteredProducts.map((product) => (
              <div
                className="orders-product flex flex-col w-full h-300 p-20 gap-4 mb-20"
                key={product.id}
              >
                <div className="flex items-center gap-15 h-20 w-full">
                  <div className="orders-product-data-delivered-image flex items-center justify-center h-45 w-45 bg-main-color">
                    <FontAwesomeIcon
                      className="text-dark-white h-18 w-18"
                      icon={faSearch}
                    />
                  </div>
                  <div>
                    <h3 className="text-main-color text-18 font-700 tracking-0.5">
                      Delivered
                    </h3>
                    <span className="text-main-color text-15 font-400 tracking-0.5">
                      {product.orderedDate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center flex-row h-75 w-full p-10 gap-5">
                  <div className="orders-product-box-image overflow-hidden laptop:w-auto laptop:p-10">
                    <img
                      className="h-full w-full object-contain"
                      src={product.img1}
                      alt="featured1"
                    />
                  </div>
                  <div className="flex flex-col h-full w-70 p-10 gap-15 laptop:gap-10">
                    <h3 className="font-poppins text-main-color text-20 font-500 tracking-0.5 laptop:text-18">
                      {product.name}
                    </h3>
                    <h3 className="font-poppins text-main-color text-17 font-700 laptop:text-16">
                      Size: S
                    </h3>
                    <div className="flex items-center flex-row gap-6">
                      <span className="font-poppins text-main-color text-18 font-700 tracking-1 laptop:text-17">
                        {product.price}
                      </span>
                      <h1 className="font-poppins text-dark-grey text-16 font-700 tracking-1 line-through laptop:text-15">
                        {product.originalPrice}
                      </h1>
                      <h2 className="font-poppins text-main-color text-14 font-400 laptop:text-13">
                        {product.discount}
                      </h2>
                    </div>
                    <Link to={`/featured/${encodeURIComponent(product.name)}`}>
                      <div className="orders-product-box-info-button flex items-center justify-center w-40p h-45 bg-main-color cursor-pointer gap-10">
                        <span className="font-poppins text-dark-white text-15 font-700 laptop:text-13">
                          Go to product
                        </span>
                        <FontAwesomeIcon
                          className="orders-gtp-icon text-dark-white text-15 font-700"
                          icon={faSearch}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isMobile && (
        <div className="w-full h-auto flex items-center justify-center p-20 mt-50 mb-70">
          <div className="orders-container flex w-full h-auto min-h-400 flex-col gap-15 p-20">
            <div className="flex items-center w-full h-auto flex-col gap-20">
              <div className="w-full h-auto">
                <h3 className="font-poppins text-main-color text-20 font-700 tracking-0.5">
                  All orders from anytime
                </h3>
              </div>
              <div className="orders-search-box flex flex-row items-center w-full rounded-lg h-45">
                <FontAwesomeIcon className="text-15 ml-15" icon={faSearch} />
                <input
                  className="font-poppins text-15 w-87 ml-15 h-full border-none outline-none tracking-0.3"
                  placeholder="Search in orders"
                  type="text"
                  value={searchOrder}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="orders-line"></div>
            {filteredProducts.map((product) => (
              <div
                className="orders-product flex flex-col w-full h-auto p-10 gap-3 mb-20"
                key={product.id}
              >
                <div className="flex items-center gap-15 h-20 w-full">
                  <div className="orders-product-data-delivered-image flex items-center justify-center h-40 w-40 bg-main-color">
                    <FontAwesomeIcon
                      className="text-dark-white h-18 w-18"
                      icon={faSearch}
                    />
                  </div>
                  <div>
                    <h3 className="text-main-color text-18 font-700 tracking-0.5">
                      Delivered
                    </h3>
                    <span className="text-main-color text-15 font-400 tracking-0.5">
                      {product.orderedDate}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row w-full h-auto gap-15">
                  <div className="border border-main-color p-1 h-170 w-40p overflow-hidden">
                    <Link to={`/featured/${encodeURIComponent(product.name)}`}>
                      <img
                        className="h-full w-full object-contain"
                        src={product.img1}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-10 w-60 h-auto">
                    <span className="font-poppins text-main-color text-16 font-500">
                      {product.name}
                    </span>
                    <h3 className="font-poppins text-main-color text-14 font-700">
                      Size: {product.size}
                    </h3>
                    <span className="font-poppins text-main-color text-14 font-500 tracking-1">
                      Price : {product.price}
                    </span>
                    <Link to={`/featured/${encodeURIComponent(product.name)}`}>
                      <div className="orders-product-box-info-button flex items-center justify-center rounded-lg w-full h-45 bg-main-color cursor-pointer gap-10">
                        <span className="font-poppins text-dark-white text-13 font-700">
                          Go to product
                        </span>
                        <FontAwesomeIcon
                          className="orders-gtp-icon text-dark-white text-13 font-700"
                          icon={faSearch}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
