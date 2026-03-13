import { useState, useEffect } from "react";
import "./ProductCard.css";

export default function ProductCard({
  id,
  image,
  name,
  price,
  originalPrice,
  discount,
  rating,
  isBestSeller,
  isWishListed,
  onAddToCart,
  onToggleWishlist,
  brand,
}) {
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (justAdded) {
      const timer = setTimeout(() => setJustAdded(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [justAdded]);

  function handleAddToCart() {
    onAddToCart(id);
    setJustAdded(true);
  }

  // Format price with Indian number system (e.g. 1,29,999)
  function formatPrice(num) {
    return num.toLocaleString("en-IN");
  }

  return (
    <div className="product-card">
      {/* Discount Badge */}
      {discount && <span className="discount-badge">{discount}</span>}

      {/* Wishlist Button */}
      <button
        className={`wishlist-btn ${isWishListed ? "wishlisted" : ""}`}
        onClick={() => onToggleWishlist(id)}
        title={isWishListed ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        {isWishListed ? "❤️" : "🤍"}
      </button>

      {/* Product Image */}
      <div className="image-container">
        <img src={image} alt={name} className="product-image" />
      </div>

      {/* Content */}
      <div className="card-content">
        <span className="brand-tag">{brand}</span>
        <h3 className="product-name">{name}</h3>

        {/* Rating */}
        <div className="rating">
          <span className="stars">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </span>
          <span className="rating-value">{rating}</span>

          {isBestSeller && <span className="bestseller-tag">Best Seller</span>}
        </div>

        {/* Price */}
        <div className="price-row">
          <span className="price">₹{formatPrice(price)}</span>

          {originalPrice && (
            <span className="original-price">₹{formatPrice(originalPrice)}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          className={`add-btn ${justAdded ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          {justAdded ? "✓ Added to Cart" : "🛒 Add to Cart"}
        </button>
      </div>
    </div>
  );
}
