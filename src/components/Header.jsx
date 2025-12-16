import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Layout.css';

export default function Header({ activePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [investmentsOpen, setInvestmentsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Investments', 
      href: '/investments',
      hasDropdown: true,
      subItems: [
        { name: 'All Divisions', href: '/investments' },
        { name: 'Luxury Automotive & Logistics', href: '/investments' },
        { name: 'Sustainable & Emerging Markets', href: '/investments' },
        { name: 'Alternative Investments', href: '/investments' }
      ]
    },
    { name: 'Investor Hub', href: '/investor-hub' },
    { name: 'Insights', href: '/insights' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="header">
      <nav className="navigation">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <div className="logo">
                <span className="logo-text">HBC</span>
              </div>
              <div className="logo-details">
                <div className="logo-title">HBC Holdings</div>
                <div className="logo-subtitle">Structured Investments</div>
              </div>
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
                        activePage === item.href ? 'active' : ''
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
                      activePage === item.href ? 'active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/express-interest" 
              className="express-interest-button"
            >
              Express Interest
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                        onClick={() => setInvestmentsOpen(!investmentsOpen)}
                        className="mobile-nav-button"
                      >
                        {item.name}
                        <ChevronDown className={`mobile-dropdown-arrow ${investmentsOpen ? 'open' : ''}`} />
                      </button>
                      {investmentsOpen && (
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
                        activePage === item.href ? 'active' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/express-interest"
                className="mobile-express-interest-button"
              >
                Express Interest
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
