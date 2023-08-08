import React, { useState, useEffect } from "react";
import i7 from "../resources/Intel_Core_i7.jpeg";
import i5 from "../resources/Intel_Core_i5.jpeg";
import ryzen7 from "../resources/AMD_Ryzen_7.jpeg";
import rtx3060 from "../resources/GeForce_RTX_3060.jpg";
import rtx4080 from "../resources/GeForce_RTX_4080.jpeg";
import rx6700xt from "../resources/Radeon_RX6700XT.jpeg";
import purepower from "../resources/BeQuiet_PurePower_750.jpeg";
import supernova from "../resources/EVGA_SuperNOVA_1000.jpeg";
import hx1200 from "../resources/Corsair_HX1200.jpeg";
import "../styling/ProductsPage.css";

const ProductsPage = ({ cartItems, handleAddToCart }) => {
  const [products, setProducts] = useState([
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
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  const handleRatingChange = (productId, rating) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, rating };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const renderProductsByCategory = (category) => {
    return (
      <div className="product-category">
        <h2>{category}</h2>
        <div className="products-list">
          {filteredProducts
            .filter((product) => product.category === category)
            .map((product) => (
              <div key={product.id} className="product-item">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
                <h3 className="product-name">{product.name}</h3>
                <span className="product-id">Product code: {product.id}</span>
                <div className="product-price">Price: €{product.price}</div>
                <div className="product-rating">
                  <p>Rating:</p>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star-icon ${
                          star <= product.rating ? "filled" : ""
                        }`}
                        onClick={() => handleRatingChange(product.id, star)}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <div className="rating-text">
                    {product.rating > 0 &&
                      `You rated this with: ${product.rating} star${
                        product.rating !== 1 ? "s" : ""
                      }`}
                  </div>
                </div>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="products-container">
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {renderProductsByCategory("CPUs - The heart of the computer!")}
      {renderProductsByCategory(
        "GPUs - To power all those graphic intensive tasks"
      )}
      {renderProductsByCategory("PSUs - You got to have enough power, right?")}
    </div>
  );
};

export default ProductsPage;
