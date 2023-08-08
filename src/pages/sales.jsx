import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ryzen5 from "../resources/AMD_Ryzen_5.jpg";
import desktopPC from "../resources/Desktop_bundle.jpg";
import ram from "../resources/TridentZ.jpeg";
import "../styling/SalesPage.css";

const SalesPage = ({ cartItems, setCartItems, handleAddToCart }) => {
  const [productsOnSale, setProductsOnSale] = useState([
    {
      id: 583012,
      name: "AMD Ryzen 5 3600",
      image: ryzen5,
      originalPrice: 250,
      discountedPrice: 199,
      rating: 0
    },
    {
      id: 300943,
      name: "G.Skill TridentZ 16GB DDR4 3600MHz",
      image: ram,
      originalPrice: 79,
      discountedPrice: 59,
      rating: 0
    },
    {
      id: 100237,
      name: "Refurbished Desktop PC bundle",
      image: desktopPC,
      originalPrice: 449,
      discountedPrice: 419,
      rating: 0
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const results = productsOnSale.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery, productsOnSale]);

  const handleRatingChange = (productId, rating) => {
    const updatedProducts = productsOnSale.map((product) => {
      if (product.id === productId) {
        return { ...product, rating };
      }
      return product;
    });
    setProductsOnSale(updatedProducts);
  };

  return (
    <div className="sales-container">
      <h1>Products on Sale</h1>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="sales-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="sales-item">
            <img
              className="sales-image"
              src={product.image}
              alt={product.name}
            />
            <h3 className="sales-name">{product.name}</h3>
            <span className="product-id">Product code: {product.id}</span>
            <div className="price">
              <span className="original-price">€{product.originalPrice}</span>
              <span className="discounted-price">
                €{product.discountedPrice}
              </span>
            </div>
            <div className="rating">
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
              <AiOutlineShoppingCart className="cart-icon" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPage;
