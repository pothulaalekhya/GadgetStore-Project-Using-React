import "./App.css";
import products from "./Data/product";
import { useState, useEffect } from "react";

// new component imports
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  // Theme state — light by default
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  // App routing and sidebar state
  const [currentPage, setCurrentPage] = useState("home");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Extract unique brands for filter options (static)
  const allBrands = [...new Set(products.map((product) => product.brand))];

  // State for cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("gadgetstore-cart");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("gadgetstore-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // State for wishlist items
  const [wishListItems, setWishListItems] = useState(() => {
    const savedWishListItems = localStorage.getItem("gadgetstore-wishlist");
    return savedWishListItems ? JSON.parse(savedWishListItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("gadgetstore-wishlist", JSON.stringify(wishListItems));
  }, [wishListItems]);

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  //state for selected brands in filter
  const [selectedBrands, setSelectedBrands] = useState(["All"]);

  //state for sorting option
  const [sortBy, setSortBy] = useState("");

  // Function to handle adding products to the cart by id
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const isAlreadyInCart = cartItems.find((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    }
  }

  // Calculate total items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Function to update quantity in cart
  function updateQuantity(productId, delta) {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  // Function to remove item from cart completely
  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  // Function to handle adding/removing products from the wishlist by id
  function toggleWishlist(productId) {
    if (wishListItems.includes(productId)) {
      setWishListItems(wishListItems.filter((id) => id !== productId));
    } else {
      setWishListItems([...wishListItems, productId]);
    }
  }

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((product) =>
      selectedBrands.includes("All")
        ? true
        : selectedBrands.includes(product.brand),
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") {
        return a.price - b.price;
      } else if (sortBy === "price-desc") {
        return b.price - a.price;
      } else if (sortBy === "rating-desc") {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div className="app">
      <NavBar
        cartCount={cartCount}
        wishlistCount={wishListItems.length}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        setPage={setCurrentPage}
        setIsCartOpen={setIsCartOpen}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      {currentPage === "home" && (
        <>
          <Hero />
          <ProductsSection
            filteredProducts={filteredProducts}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishListItems={wishListItems}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            allBrands={allBrands}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </>
      )}

      {currentPage === "login" && <Login setPage={setCurrentPage} />}
      {currentPage === "signup" && <Signup setPage={setCurrentPage} />}

      <Footer />
    </div>
  );
}

export default App;
