import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import "./Layout.css";

export default function Header({ activePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "AboutUs", href: "/about" },
    { name: "Investment Programs", href: "/investments" },
    { name: "Investor Resources", href: "/investor-hub" },
    { name: "News&Insights", href: "/insights" },
    { name: "Investor", href: "/investor" },
    { name: "Contact Us", href: "/contact" },
    { name: "Legal&Compliance", href: "/legal" },
  ];

  return (
    <header className="header">
      <nav className="navigation">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img src="/logo.png" alt="HBC Holdings Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navigation.map((item) => (
              <div key={item.name} className="nav-item-container">
                {item.hasDropdown ? (
                  <>
                    <Link
                      to={item.href}
                      className={`nav-link ${
                        activePage === item.href ? "active" : ""
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="dropdown-arrow" />
                    </Link>
                    <div className="dropdown-menu">
                      <div className="dropdown-items">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="dropdown-item"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`nav-link ${
                      activePage === item.href ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-items">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          if (item.name === "Pages") setPagesOpen(!pagesOpen);
                        }}
                        className="mobile-nav-button"
                      >
                        {item.name}
                        <ChevronDown
                          className={`mobile-dropdown-arrow ${
                            item.name === "Pages" && pagesOpen ? "open" : ""
                          }`}
                        />
                      </button>
                      {item.name === "Pages" && pagesOpen && (
                        <div className="mobile-dropdown-menu">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="mobile-dropdown-item"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`mobile-nav-link ${
                        activePage === item.href ? "active" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/login" className="mobile-nav-link">
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
