import React from "react";
import "./CartSidebar.css";

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeFromCart,
}) {
  const calculateDiscountedPrice = (price, discountStr) => {
    if (!discountStr) return price;
    const match = discountStr.match(/(\d+)%/);
    if (match) {
      const percent = parseInt(match[1], 10);
      return Math.round(price * (1 - percent / 100));
    }
    return price;
  };

  const totalAmount = cartItems.reduce(
    (total, item) => {
      const finalPrice = calculateDiscountedPrice(item.price, item.discount);
      return total + finalPrice * item.quantity;
    },
    0,
  );

  const formatPrice = (num) => {
    return "₹" + num.toLocaleString("en-IN");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <p>Your cart is empty</p>
              <button className="btn-primary start-shopping" onClick={onClose}>
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <div className="cart-item-price">
                    {item.discount ? (
                      <>
                        <span style={{ textDecoration: "line-through", color: "var(--text-muted)", fontSize: "0.8rem", marginRight: "6px" }}>
                          {formatPrice(item.price)}
                        </span>
                        <span>{formatPrice(calculateDiscountedPrice(item.price, item.discount))}</span>
                      </>
                    ) : (
                      <span>{formatPrice(item.price)}</span>
                    )}
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="qty-btn"
                      >
                        -
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove from cart"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <span>Total:</span>
              <span className="cart-total">{formatPrice(totalAmount)}</span>
            </div>
            <button className="btn-primary checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
