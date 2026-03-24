import React from "react";

function CategoryFilter({
  categories = [],
  selectedCategory,
  setSelectedCategory,
  onlyDiscount,
  setOnlyDiscount
}) {
  return (
    <div className="category-filter">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">Todas las categorías</option>

        {categories.map((cat) => (
          <option key={cat.slug} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>

      <label className="discount-filter">
        <input
          type="checkbox"
          checked={onlyDiscount}
          onChange={(e) => setOnlyDiscount(e.target.checked)}
        />
        Solo con descuento
      </label>
    </div>
  );
}

export default CategoryFilter;