import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">GadgetStore</h3>
            <p className="footer-tagline">
              Your one-stop destination for premium tech gadgets.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Twitter / X</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 GadgetStore. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
