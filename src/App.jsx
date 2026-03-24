import React, { useEffect, useState } from "react";
import "./styles/app.css";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";

import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar los productos");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
     <div className="app">
      <Header />
      <div className="controls">
        <SearchBar />
        <CategoryFilter />
      </div>
      <div className="products-grid">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    
  );
}

export default App;