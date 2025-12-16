import { Lock, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import Card, { CardBody } from '../components/Card';
import './KYC.css';

export default function KYC() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="kyc-hero-section">
        <div className="kyc-hero-content">
          <div className="kyc-hero-text-container">
            <div className="kyc-hero-icon-container">
              <Shield className="kyc-hero-icon" />
            </div>
            <h1 className="kyc-hero-title">
              Secure KYC <span className="kyc-hero-title-highlight">Portal</span>
            </h1>
            <p className="kyc-hero-description">
              This area is restricted to authorized investors with valid access credentials.
            </p>
          </div>
        </div>
      </section>

      {/* Access Notice */}
      <section className="access-notice-section">
        <div className="access-notice-content">
          <Card className="access-notice-card">
            <CardBody>
              <div className="access-notice-flex">
                <Lock className="access-notice-icon" />
                <div>
                  <h3 className="access-notice-title">Link-Based Access Only</h3>
                  <p className="access-notice-text">
                    The KYC (Know Your Customer) portal is accessible only through secure, personalized links 
                    sent directly to qualified investors via email. This ensures the highest level of security 
                    and privacy for your sensitive personal and financial information.
                  </p>
                  <p className="access-notice-text-final">
                    If you have been invited to complete KYC verification, please use the unique link provided 
                    in your invitation email. This link is valid for a limited time and can only be used once.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Why KYC Required */}
          <Card className="why-kyc-card">
            <CardBody>
              <h3 className="why-kyc-title">Why KYC Verification is Required</h3>
              <div className="why-kyc-reasons">
                <div className="reason-item">
                  <div className="reason-icon-container">
                    <CheckCircle className="reason-icon" />
                  </div>
                  <div>
                    <h5 className="reason-title">Regulatory Compliance</h5>
                    <p className="reason-description">
                      Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) regulations require 
                      investment firms to verify the identity of all investors and understand the source of funds.
                    </p>
                  </div>
                </div>
                <div className="reason-item">
                  <div className="reason-icon-container">
                    <CheckCircle className="reason-icon" />
                  </div>
                  <div>
                    <h5 className="reason-title">Investor Protection</h5>
                    <p className="reason-description">
                      Verification processes protect against fraud, identity theft, and unauthorized access 
                      to your investment accounts and personal information.
                    </p>
                  </div>
                </div>
                <div className="reason-item">
                  <div className="reason-icon-container">
                    <CheckCircle className="reason-icon" />
                  </div>
                  <div>
                    <h5 className="reason-title">Accreditation Verification</h5>
                    <p className="reason-description">
                      We verify that investors meet the accredited investor requirements necessary to 
                      participate in private investment opportunities.
                    </p>
                  </div>
                </div>
                <div className="reason-item">
                  <div className="reason-icon-container">
                    <CheckCircle className="reason-icon" />
                  </div>
                  <div>
                    <h5 className="reason-title">Risk Assessment</h5>
                    <p className="reason-description">
                      Understanding your financial situation and investment objectives helps us ensure that 
                      our investment products are suitable for your needs and risk tolerance.
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* What Documents Needed */}
          <Card className="documents-card">
            <CardBody>
              <h3 className="documents-title">Documents Required for KYC Verification</h3>
              <div className="documents-grid">
                <div>
                  <h5 className="documents-list-title">Individual Investors</h5>
                  <ul className="documents-list">
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>Government-issued photo ID (passport or driver's license)</span>
                    </li>
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>Proof of address (utility bill or bank statement, dated within 90 days)</span>
                    </li>
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>Tax returns or CPA letter for accreditation verification</span>
                    </li>
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>Brokerage or bank statement showing net worth (if applicable)</span>
                    </li>
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>Source of funds documentation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="documents-list-title">Entity Investors</h5>
                  <ul className="documents-list">
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>Certificate of incorporation or formation documents</span>
                    </li>
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>Beneficial ownership information (Form W-8BEN-E or equivalent)</span>
                    </li>
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>Board resolution authorizing investment</span>
                    </li>
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>IDs of authorized signatories</span>
                    </li>
                    <li className="document-item">
                      <span className="document-bullet">•</span>
                      <span>Financial statements or accreditation documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Security & Privacy */}
          <Card>
            <CardBody className="security-privacy-card-body">
              <div className="security-privacy-header">
                <Shield className="security-privacy-icon" />
                <div>
                  <h3 className="security-privacy-title">Your Security & Privacy</h3>
                  <p className="security-privacy-description">
                    All documents and information submitted through our KYC portal are:
                  </p>
                </div>
              </div>
              <div className="security-features-grid">
                <div className="security-feature">
                  <h6 className="security-feature-title">Encrypted in Transit</h6>
                  <p className="security-feature-description">
                    256-bit SSL encryption protects your data during upload and transmission
                  </p>
                </div>
                <div className="security-feature">
                  <h6 className="security-feature-title">Securely Stored</h6>
                  <p className="security-feature-description">
                    Documents are stored in encrypted, access-controlled systems with regular security audits
                  </p>
                </div>
                <div className="security-feature">
                  <h6 className="security-feature-title">Limited Access</h6>
                  <p className="security-feature-description">
                    Only authorized compliance personnel can view your KYC documentation
                  </p>
                </div>
                <div className="security-feature">
                  <h6 className="security-feature-title">Never Shared</h6>
                  <p className="security-feature-description">
                    Your personal information is never sold or shared with third parties
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Help Section */}
          <div className="help-section">
            <div className="help-section-flex">
              <AlertCircle className="help-section-icon" />
              <div>
                <h5 className="help-section-title">Need Help with KYC Verification?</h5>
                <p className="help-section-text">
                  If you have not received your KYC invitation link, or if you're experiencing technical 
                  difficulties with the verification process, please contact our compliance team:
                </p>
                <div className="help-section-contact-details">
                  <p className="contact-detail">
                    <strong>Email:</strong> <a href="mailto:compliance@hbcholdings.com" className="contact-link">compliance@hbcholdings.com</a>
                  </p>
                  <p className="contact-detail">
                    <strong>Phone:</strong> <a href="tel:+15551234567" className="contact-link">+1 (555) 123-4567</a>
                  </p>
                  <p className="contact-note">
                    Please have your investor ID or email address used during registration ready when contacting us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
