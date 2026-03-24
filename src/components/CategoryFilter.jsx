import React from "react";

function CategoryFilter() {
  return (
    <div className="category-filter">
      <select>
        <option>Todas las categorías</option>
        <option>smartphones</option>
        <option>laptops</option>
        <option>fragrances</option>
      </select>

      <label className="discount-filter">
        <input type="checkbox" />
        Solo con descuento
      </label>
    </div>
  );
}

export default CategoryFilter;