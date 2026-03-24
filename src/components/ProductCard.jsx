import React from "react";
import "../styles/card.css";

function ProductCard({product}) {
  return (
    <div className="card">
        <figure>
            <img src={product.thumbnail} alt={product.title} />
        </figure>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>⭐ {product.rating}</p>
    </div>
  );
}

export default ProductCard;