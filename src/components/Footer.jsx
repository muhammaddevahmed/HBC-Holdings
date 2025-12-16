import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company-info">
            <div className="footer-logo-container">
              <div className="footer-logo">
                <span className="footer-logo-text">HBC</span>
              </div>
              <div className="footer-logo-details">
                <div className="footer-logo-title">HBC Holdings</div>
                <div className="footer-logo-subtitle">Structured Investments</div>
              </div>
            </div>
            <p className="footer-company-description">
              Asset-backed, secure, and structured investment solutions for discerning investors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="footer-links-title">Quick Links</h6>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/investments" className="footer-link">Investment Divisions</Link>
              <Link to="/investor-hub" className="footer-link">Investor Hub</Link>
              <Link to="/faq" className="footer-link">FAQ</Link>
            </div>
          </div>

          {/* Investment Arms */}
          <div>
            <h6 className="footer-links-title">Investment Arms</h6>
            <div className="footer-links">
              <Link to="/investments" className="footer-link">Luxury Automotive</Link>
              <Link to="/investments" className="footer-link">Sustainable Markets</Link>
              <Link to="/investments" className="footer-link">Alternative Investments</Link>
              <Link to="/insights" className="footer-link">Client Updates</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h6 className="footer-links-title">Get in Touch</h6>
            <div className="footer-links">
              <Link to="/contact" className="footer-link">Contact Us</Link>
              <Link to="/express-interest" className="footer-link">Express Interest</Link>
              <a href="mailto:invest@hbcholdings.com" className="footer-link">invest@hbcholdings.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-flex">
            <p className="copyright">
              © 2025 HBC Holdings. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/investor-hub#privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/investor-hub#terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/investor-hub#legal" className="footer-bottom-link">Legal Disclaimer</Link>
            </div>
          </div>
          <p className="disclaimer">
            Investment Disclaimer: All investments carry risk. Past performance is not indicative of future results. 
            The information provided does not constitute financial advice. Please consult with a qualified financial advisor.
          </p>
        </div>
      </div>
    </footer>
  );
}
