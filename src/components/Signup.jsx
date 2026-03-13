import React, { useState } from "react";
import "./Auth.css";

export default function Signup({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup success
    alert("Account created successfully!");
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
          <h2>Create Account</h2>
          <p>Join the ultimate gadget destination</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

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
              placeholder="Create a strong password"
              required
            />
          </div>

          <button type="submit" className="btn-primary auth-submit">
            Create Account
          </button>
        </form>

        <div className="auth-switch">
          Already have an account?{" "}
          <button className="text-link" onClick={() => setPage("login")}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
