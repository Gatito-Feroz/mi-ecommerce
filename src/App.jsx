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

  const [onlyDiscount, setOnlyDiscount] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar productos");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch(() => {
        console.log("Error al cargar categorías");
      });
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (onlyDiscount) {
      result = result.filter((p) => p.discountPercentage > 10);
    }
    if (search !== "") {
    result = result.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

    setFilteredProducts(result);
  }, [products, selectedCategory, onlyDiscount, search]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="app">
      <Header />

      <div className="controls">
       <SearchBar search={search} setSearch={setSearch} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onlyDiscount={onlyDiscount}
          setOnlyDiscount={setOnlyDiscount}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;