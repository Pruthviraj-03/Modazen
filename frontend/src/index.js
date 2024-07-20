import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./Components/Context/CartContext";
import { WishlistProvider } from "./Components/Context/WishlistContext";
import { OrderProvider } from "./Components/Context/OrderContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <OrderProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
            <ToastContainer className="foo" style={{ fontWeight: "bold" }} />
          </WishlistProvider>
        </CartProvider>
      </OrderProvider>
    </Router>
  </>
);
