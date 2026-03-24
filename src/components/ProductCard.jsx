import React from "react";
import "../styles/card.css";

function ProductCard({ product }) {
  const discountedPrice = product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="card">
      <figure>
        <img src={product.thumbnail} alt={product.title} />
      </figure>

      <h3>{product.title}</h3>

      <p className="price">
        <span className="old-price">${product.price} </span>
        <span className="new-price">
          ${discountedPrice.toFixed(2)}
        </span>
      </p>

      <p className="discount">
        {product.discountPercentage}% OFF
      </p>

      <p>⭐ {product.rating}</p>
    </div>
  );
}

export default ProductCard;