import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, ArrowRight, Key, User } from "lucide-react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email === "admin@hbcholdings.com" && password === "password123") {
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate("/admin/leads");
    } else {
      alert("Invalid admin credentials.");
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <div className="login-logo-container">
              <img
                src="../public/logo.png"
                alt="HBC Holdings Logo"
                className="logo-img"
              />
            </div>
            <h1>Admin Portal</h1>
            <p>Secure access for authorized administrators</p>
          </div>

          <form onSubmit={handleAdminLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-button">
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="demo-credentials">
            <p className="demo-title">Demo Admin Credentials:</p>
            <div className="credential-row">
              <span className="label">Email:</span>
              <span className="value">admin@hbcholdings.com</span>
            </div>
            <div className="credential-row">
              <span className="label">Password:</span>
              <span className="value">password123</span>
            </div>
          </div>

          <div className="login-footer">
            <Link to="/" className="back-link">
              &larr; Back to Website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
