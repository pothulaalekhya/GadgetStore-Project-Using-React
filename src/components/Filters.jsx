import React from "react";

export default function Filters({
  allBrands,
  selectedBrands,
  setSelectedBrands,
  sortBy,
  setSortBy,
}) {
  const handleBrandChange = (e) => {
    setSelectedBrands([e.target.value]);
  };

  return (
    <div className="filters">
      <div className="sort-filter">
        <span className="filter-label">Brands:</span>
        <select 
          value={selectedBrands.length === 1 ? selectedBrands[0] : "All"} 
          onChange={handleBrandChange}
        >
          <option value="All">All Brands</option>
          {allBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="sort-filter">
        <span className="filter-label">Sort:</span>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating-desc">Top Rated</option>
        </select>
      </div>
    </div>
  );
}
