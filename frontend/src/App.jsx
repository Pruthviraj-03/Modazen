import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound.jsx";
import {
  HomePage,
  Arrivals,
  Categories,
  Featured,
  FeaturedProduct,
  Products,
  CategoriesProduct,
  SearchedProduct,
} from "./Navbar/index.js";
import {
  Aboutus,
  Contactus,
  PrivacyPolicy,
  TermsOfServices,
} from "./Company/index.js";
import { ShoppingCart, Checkout, Completed } from "./Components/Cart/index.js";
import {
  Orders,
  Wishlist,
  UserProfile,
  EditProfile,
} from "./Components/Profile/index.js";
import { Login, Otp } from "./Components/Account";

const App = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="lg:mt-32 lg:min-h-[311px] lg:overflow-x-hidden mt-60 h-auto min-h-[311px] w-full">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/arrivals" element={<Arrivals />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/featured" element={<Featured />} />
          <Route
            exact
            path="/featured/:productName"
            element={<FeaturedProduct />}
          />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:slug" element={<CategoriesProduct />} />
          <Route
            exact
            path="/products/search/:searchquery"
            element={<SearchedProduct />}
          />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route exact path="/termsofservices" element={<TermsOfServices />} />
          <Route exact path="/shoppingcart" element={<ShoppingCart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/completed" element={<Completed />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login/otp" element={<Otp />} />
          <Route exact path="/:query" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
