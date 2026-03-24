import React, { useEffect, useState } from "react";
import "./styles/app.css";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [onlyDiscount, setOnlyDiscount] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);

        const uniqueCategories = [
          ...new Set(data.products.map(p => p.category))
        ];
        setCategories(uniqueCategories);

        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los productos");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = [...products];
    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (onlyDiscount) {
    result = result.filter(p => p.discountPercentage > 10); /*En este caso todos los productos tienen porcentaje de descuento, pero filtré sólo los que tienen un porcentaje mayor al 10% para que se vea que el checkbox funciona*/
    }
    setFilteredProducts(result);
  }, [selectedCategory, products, onlyDiscount]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="app">
      <Header />

      <div className="controls">
        <SearchBar />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onlyDiscount={onlyDiscount}
          setOnlyDiscount={setOnlyDiscount}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;