import React from "react";
import "../styles/card.css";

function ProductCard() {
  return (
    <div className="card">
      <img src="" alt="producto" className="card-img"/>

      <h3 className="card-title">Nombre del producto</h3>

      <p className="card-price">
        <span className="old-price">$100</span>
        <span className="new-price">$80</span>
      </p>

      <p className="discount">20% OFF</p>

      <p className="rating">⭐ 4.5</p>
    </div>
  );
}

export default ProductCard;