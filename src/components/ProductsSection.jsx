import React from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

export default function ProductsSection({
  filteredProducts,
  addToCart,
  toggleWishlist,
  wishListItems,
  searchTerm,
  setSearchTerm,
  allBrands,
  selectedBrands,
  setSelectedBrands,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <h2 className="section-title">Best Sellers</h2>
        <p className="section-subtitle">
          Our most popular products loved by customers
        </p>
      </div>

      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters
          allBrands={allBrands}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {filteredProducts.length > 0 && (
        <p className="results-count">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
        </p>
      )}

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <span className="no-results-icon">🔍</span>
          <h3>No products found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              isWishListed={wishListItems.includes(product.id)}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
            />
          ))}
        </div>
      )}
    </section>
  );
}
