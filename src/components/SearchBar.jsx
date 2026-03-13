import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button
          className="search-clear"
          onClick={() => setSearchTerm("")}
          title="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
