import React from "react";

export default function NavBar({
  cartCount = 0,
  wishlistCount = 0,
  isDarkMode = false,
  toggleTheme,
  setPage,
  setIsCartOpen,
}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a
          href="#"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            setPage("home");
          }}
        >
          <span className="logo-icon">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.lInx8g1ioLVJvnEKdDKIuwHaHa?w=610&h=610&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="no pic found"
            />
          </span>
          <span className="logo-text">GadgetStore</span>
        </a>

        <ul className="nav-links">
          <li>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setPage("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="nav-link"
              onClick={() => setPage("home")} // Ensure we go back to home if on auth pages
            >
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Deals
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>

        <div className="cart-wishlist">
          <div
            className="cart-wishlist-item"
            title="Cart"
            onClick={() => setIsCartOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <span className="cart-wishlist-icon">🛒</span>
            {cartCount > 0 && (
              <span className="cart-wishlist-badge cart-badge" key={cartCount}>
                {cartCount}
              </span>
            )}
          </div>
          <div className="cart-wishlist-item" title="Wishlist">
            <span className="cart-wishlist-icon">❤️</span>
            {wishlistCount > 0 && (
              <span
                className="cart-wishlist-badge wishlist-badge"
                key={wishlistCount}
              >
                {wishlistCount}
              </span>
            )}
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme"
        >
          <span className="theme-toggle-icon">
            {isDarkMode ? "☀️" : "🌙"}
          </span>
        </button>

        <div className="nav-actions">
          <button className="nav-btn" onClick={() => setPage("login")}>
            Sign In
          </button>
          <button
            className="nav-btn primary"
            onClick={() => setPage("signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
