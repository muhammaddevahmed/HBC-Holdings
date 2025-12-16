import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, ArrowRight, Key } from "lucide-react";
import Layout from "../components/Layout";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    if (email === "admin@hbcholdings.com" && password === "password123") {
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate("/admin/leads");
    } else {
      alert("Invalid credentials. Please use the demo credentials provided.");
    }
  };

  const fillDemoCredentials = () => {
    setEmail("admin@hbcholdings.com");
    setPassword("password123");
  };

  return (
    <Layout>
      <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <div
              className="login-logo-container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div className="logo">
                <span className="logo-text">HBC</span>
              </div>
              <div className="logo-details" style={{ textAlign: "left" }}>
                <div className="logo-title">HBC Holdings</div>
                <div className="logo-subtitle">Structured Investments</div>
              </div>
            </div>
            <h1>Admin Portal</h1>
            <p>Secure access for authorized administrators</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <Key className="input-icon" />
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
            <button onClick={fillDemoCredentials} className="fill-demo-btn">
              Auto-fill Demo Credentials
            </button>
          </div>

          <div className="login-footer">
            <Link
              to="/"
              style={{
                color: "#6B7280",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              &larr; Back to Website
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
