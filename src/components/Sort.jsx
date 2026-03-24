import React from "react";

function Sort({ sortOption, setSortOption }) {
  return (
    <div className="sort">
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="default">Ordenar por</option>
        <option value="rating-desc">Rating: mayor a menor</option>
        <option value="rating-asc">Rating: menor a mayor</option>
      </select>
    </div>
  );
}

export default Sort;