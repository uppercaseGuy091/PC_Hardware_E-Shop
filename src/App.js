import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ContactPage from "./pages/contact";
import ProductsPage from "./pages/products";
import SalesPage from "./pages/sales";
import AnnouncementsPage from "./pages/announcements";
import CartPage from "./pages/cart.jsx";
import ShippingBillingPage from "./pages/shipping.jsx";
import FinalPage from "./pages/final.jsx";
import "./styling/App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ryzen5 from "./resources/AMD_Ryzen_5.jpg";
import desktopPC from "./resources/Desktop_bundle.jpg";
import ram from "./resources/TridentZ.jpeg";
import i7 from "./resources/Intel_Core_i7.jpeg";
import i5 from "./resources/Intel_Core_i5.jpeg";
import ryzen7 from "./resources/AMD_Ryzen_7.jpeg";
import rtx3060 from "./resources/GeForce_RTX_3060.jpg";
import rtx4080 from "./resources/GeForce_RTX_4080.jpeg";
import rx6700xt from "./resources/Radeon_RX6700XT.jpeg";
import purepower from "./resources/BeQuiet_PurePower_750.jpeg";
import supernova from "./resources/EVGA_SuperNOVA_1000.jpeg";
import hx1200 from "./resources/Corsair_HX1200.jpeg";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const handleAddToCart = (productId) => {
    const productToAdd = productsOnSale.find(
      (product) => product.id === productId
    );
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...productToAdd, image: productToAdd.image, price: productToAdd.price }
    ]);
  };

  const productsOnSale = [
    {
      id: 583012,
      name: "AMD Ryzen 5 3600",
      image: ryzen5,
      originalPrice: 250,
      price: 199,
      rating: 0
    },
    {
      id: 300943,
      name: "G.Skill TridentZ 16GB DDR4 3600MHz",
      image: ram,
      originalPrice: 79,
      price: 59,
      rating: 0
    },
    {
      id: 100237,
      name: "Refurbished Desktop PC bundle",
      image: desktopPC,
      originalPrice: 449,
      price: 419,
      rating: 0
    },
    {
      id: 4052946,
      category: "CPUs - The heart of the computer!",
      name: "Intel Core i5 13600K",
      image: i5,
      price: 369,
      rating: 0
    },
    {
      id: 7328205,
      category: "CPUs - The heart of the computer!",
      name: "Intel Core i7 13700K",
      image: i7,
      price: 469,
      rating: 0
    },
    {
      id: 8376449,
      category: "CPUs - The heart of the computer!",
      name: "AMD Ryzen 7 5800X",
      image: ryzen7,
      price: 269,
      rating: 0
    },
    {
      id: 2209485,
      category: "GPUs - To power all those graphic intensive tasks",
      name: "MSI GeForce RTX 3060 Gaming X 12GB",
      image: rtx3060,
      price: 479,
      rating: 0
    },
    {
      id: 1890367,
      category: "GPUs - To power all those graphic intensive tasks",
      name: "Gigabyte GeForce RTX 4080 AERO OC 16GB",
      image: rtx4080,
      price: 1589,
      rating: 0
    },
    {
      id: 1185465,
      category: "GPUs - To power all those graphic intensive tasks",
      name: "AMD Radeon RX 6700XT Eagle 12GB",
      image: rx6700xt,
      price: 499,
      rating: 0
    },
    {
      id: 1290043,
      category: "PSUs - You got to have enough power, right?",
      name: "Be Quiet Pure Power 11 FM 750W",
      image: purepower,
      price: 96,
      rating: 0
    },
    {
      id: 8886302,
      category: "PSUs - You got to have enough power, right?",
      name: "EVGA SuperNOVA 1000 P5 1000W",
      image: supernova,
      price: 203,
      rating: 0
    },
    {
      id: 3499013,
      category: "PSUs - You got to have enough power, right?",
      name: "Corsair HX Series HX1200 1200W",
      image: hx1200,
      price: 264,
      rating: 0
    }
  ];

  return (
    <Router>
      <div className="App">
        <nav className="navigation-bar">
          <Link to="/" className="navigation-link">
            Home
          </Link>
          <Link to="/ProductsPage" className="navigation-link">
            Products
          </Link>
          <Link to="/SalesPage" className="navigation-link">
            Sales
          </Link>
          <Link to="/AnnouncementsPage" className="navigation-link">
            Announcements
          </Link>
          <Link to="/ContactPage" className="navigation-link">
            Contact Us
          </Link>
          <Link to="/Cart" className="navigation-link cart-link">
            <AiOutlineShoppingCart className="cart-icon" />
            Cart ({cartItems.length})
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/ProductsPage"
            element={
              <ProductsPage
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/SalesPage"
            element={
              <SalesPage
                cartItems={cartItems}
                setCartItems={setCartItems}
                handleAddToCart={handleAddToCart}
                productsOnSale={productsOnSale}
              />
            }
          />
          <Route path="/AnnouncementsPage" element={<AnnouncementsPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route
            path="/Cart"
            element={
              <CartPage
                cartItems={cartItems}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route path="/Shipping" element={<ShippingBillingPage />} />{" "}
          <Route path="/Final" element={<FinalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
