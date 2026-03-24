import React from "react";
import "../styles/productDetail.css";
function ProductDetail({ product, onClose }) {
  if (!product) return null;

  const discountedPrice = product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="product-detail-overlay" onClick={onClose}>
      
      <div className="product-detail" onClick={(e) => e.stopPropagation()}>
        
        <button onClick={onClose}>Cerrar</button>

        <h2>{product.title}</h2>

        <img src={product.thumbnail} alt={product.title} />

        <p>{product.description}</p>

        <p>Precio: ${product.price}</p>
        <p>Con descuento: ${discountedPrice.toFixed(2)}</p>
        <p>{product.discountPercentage}% OFF</p>
        <p>⭐ {product.rating}</p>
        <p>Stock: {product.stock}</p>

      </div>
    </div>
  );
}

export default ProductDetail;