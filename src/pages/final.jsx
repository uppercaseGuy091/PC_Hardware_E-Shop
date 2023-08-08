import React from "react";
import { Link } from "react-router-dom";
import "../styling/FinalPage.css";

function FinalPage() {
  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <div>
      <h1>Thank You!</h1>
      <p>
        Order Number: <strong>{orderNumber}</strong>
      </p>
      <p>
        Thank you for trusting our store. Your order has been submitted and is
        on its way.
      </p>
      <p>
        You will be notified soon about any updates regarding your order through
        e-mail.
      </p>
      <Link to="/ProductsPage" className="shop-button">
        Continue shopping & place a new order
      </Link>
    </div>
  );
}

export default FinalPage;
