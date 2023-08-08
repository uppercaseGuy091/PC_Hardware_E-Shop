import React from "react";
import { Link } from "react-router-dom";
import "../styling/CartPage.css";

function CartPage({ cartItems, handleRemoveFromCart }) {
  const totalSum = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">Price: €{item.price}</p>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: €{totalSum}</p>
          <p className="cart-items-count">Total items: {cartItems.length}</p>
          <Link
            to={{
              pathname: "/Shipping",
              search: `?cartItems=${JSON.stringify(
                cartItems
              )}&totalSum=${totalSum}`
            }}
            className="next-button"
          >
            Next: Shipping & Billing info
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
