import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import './Layout.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Overview */}
          <div className="footer-company-info">
             <div className="footer-logo-container">
              <Link to="/" className="footer-logo">
                <img src="../public/logo.png" alt="HBC Logo" />
              </Link>
            </div>
            <p className="footer-company-description">
              HBC is a private investment firm focused on structured, asset-backed investment programs designed to balance capital preservation with long-term growth for qualified investors.
            </p>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h6 className="footer-links-title">Quick Links</h6>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/investments" className="footer-link">Investment Programs</Link>
              <Link to="/investor-hub" className="footer-link">Investor Resources</Link>
              <Link to="/insights" className="footer-link">News & Insights</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>

          {/* Column 2: Investment Programs */}
          <div>
            <h6 className="footer-links-title">Investment Programs</h6>
            <div className="footer-links">
              <a href="/investments#mobility" className="footer-link">Mobility Investment Series</a>
              <a href="/investments#sustainable" className="footer-link">Sustainable & Eco-Investment Series</a>
              <a href="/investments#alternative" className="footer-link">Alternative Investment Series</a>
            </div>
          </div>

          {/* Column 3: Investor Support */}
          <div>
            <h6 className="footer-links-title">Investor Support</h6>
            <div className="footer-links">
              <Link to="/investor-hub" className="footer-link">Investor Hub</Link>
              <Link to="/investor" className="footer-link">FAQ & Testimonials</Link>
              <Link to="/legal" className="footer-link">Risk Disclosure</Link>
              <Link to="/legal" className="footer-link">Privacy Policy</Link>
              <Link to="/legal" className="footer-link">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="footer-middle-section">
            <div className='footer-get-in-touch'>
                 <h6 className="footer-links-title">Get In Touch</h6>
                 <div className="footer-links">
                    <Link to="/contact" className="footer-link">Contact Us</Link>
                    <Link to="/express-interest" className="footer-link">Express Interest</Link>
                    <a href="mailto:careers@hbcholdings.com" className="footer-link">Email</a>
                    <Link to="/careers" className="footer-link">Careers</Link>
                 </div>
                 <h6 className="footer-links-title">Business Hours</h6>
                 <p>Mon – Sat – 24/7</p>
            </div>
            
            <div className='footer-social-newsletter'>
                <h6 className="footer-links-title">Connect With Us</h6>
                <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Twitter /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                </div>
                <div className="newsletter-signup">
                    <h6 className="footer-links-title">Stay Informed</h6>
                    <p>Receive market insights, investment updates, and regulatory notices from HBC.</p>
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">Subscribe</button>
                    </form>
                    <p className="newsletter-disclaimer">You may unsubscribe at any time. We respect your privacy.</p>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            ©2026 Highbridge Group (HBC). All rights reserved.
          </div>
          <div className="legal-disclaimer">
            <p><strong>Investment Disclaimer:</strong></p>
            <p>All investments carry risk, including the potential loss of capital. Past performance is not indicative of future results. The information provided on this website is for informational purposes only and does not constitute investment, legal, or tax advice. Prospective investors should conduct independent due diligence and consult qualified advisors before making any investment decision.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
