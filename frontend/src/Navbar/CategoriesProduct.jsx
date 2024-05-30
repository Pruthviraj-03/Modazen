import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "./products.js";
import Arrivals from "./Arrivals";

const CategoriesProduct = () => {
  const { slug } = useParams();
  console.log("slug is:", slug);
  const filteredProducts = Products.filter((product) =>
    product.category.toLowerCase().includes(slug.toLowerCase())
  );
  console.log(filteredProducts);

  return (
    <div className="Products">
      <Arrivals title="Products" filteredProducts={filteredProducts} />
    </div>
  );
};

export default CategoriesProduct;
