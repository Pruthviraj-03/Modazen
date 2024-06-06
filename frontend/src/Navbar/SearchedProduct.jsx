import React from "react";
import { useParams } from "react-router-dom";
import Arrivals from "./Arrivals";
import { Products } from "./products";

const SearchedProduct = () => {
  const { searchquery } = useParams();

  console.log("searchquery is:", searchquery);

  const searchedProducts = Products.filter((product) =>
    product.desc.toLowerCase().includes(searchquery.toLowerCase())
  );

  console.log("searchedProducts:", searchedProducts);

  return (
    <div className="Products">
      <Arrivals title="Products" searchedProducts={searchedProducts} />
    </div>
  );
};

export default SearchedProduct;
