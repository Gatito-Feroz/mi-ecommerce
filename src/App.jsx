import React from "react";
import "./styles/app.css";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="controls">
        <SearchBar />
        <CategoryFilter />
      </div>

      <div className="products-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;