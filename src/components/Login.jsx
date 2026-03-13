import React, { useState } from "react";
import "./Auth.css";

export default function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login success
    alert("Logged in successfully!");
    setPage("home");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-logo-icon">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.lInx8g1ioLVJvnEKdDKIuwHaHa?w=610&h=610&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="logo"
            />
          </span>
          <h2>Welcome Back</h2>
          <p>Sign in to your GadgetStore account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="btn-primary auth-submit">
            Sign In
          </button>
        </form>

        <div className="auth-switch">
          Don't have an account?{" "}
          <button className="text-link" onClick={() => setPage("signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
