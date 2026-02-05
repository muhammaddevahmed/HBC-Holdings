import { useState } from "react";
import {
  FileText,
  Shield,
  Lock,
  AlertTriangle,
  Download,
  ChevronDown,
  CheckCircle,
  Eye,
  Globe,
  Users,
  Target,
} from "lucide-react";
import Button from "../components/Button";
import Card, { CardBody, CardHeader } from "../components/Card";
import "./Legal.css";

export default function Legal() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const pageSections = [
    {
      id: "risk",
      title: "Risk Disclosure",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "var(--accent-orange)",
      summary:
        "Investing involves risk, including potential loss of capital. Risk varies by structure and asset class.",
      content: `
        <h4>Investment Risk Overview</h4>
        <p>All investments offered by Highbridge Group (HBC) involve risk, including the potential loss of principal capital. The nature and level of risk vary significantly across different investment structures, asset classes, and market conditions.</p>
        
        <h4>Key Risk Categories</h4>
        <ul>
          <li><strong>Market Risk:</strong> Fluctuations in market values of underlying assets</li>
          <li><strong>Liquidity Risk:</strong> Limited redemption windows and exit opportunities</li>
          <li><strong>Operational Risk:</strong> Potential failures in execution, management, or administration</li>
          <li><strong>Counterparty Risk:</strong> Dependency on third-party performance and obligations</li>
          <li><strong>Regulatory Risk:</strong> Changes in laws, regulations, or tax policies</li>
          <li><strong>Concentration Risk:</strong> Exposure to specific sectors, geographies, or asset types</li>
        </ul>
        
        <h4>Capital Protection Framework</h4>
        <p>HBC employs a multi-layered capital protection framework designed to mitigate downside risk, including asset backing, legal structuring, insurance arrangements (where applicable), and active risk management. These measures reduce but do not eliminate investment risk entirely.</p>
        
        <h4>Investor Responsibilities</h4>
        <p>Prospective investors must:</p>
        <ul>
          <li>Understand the specific risks associated with each investment opportunity</li>
          <li>Assess personal risk tolerance and investment objectives</li>
          <li>Recognize that past performance does not guarantee future results</li>
          <li>Acknowledge that investments are illiquid with defined lock-up periods</li>
          <li>Consult with independent financial and legal advisors</li>
        </ul>
        
        <p><em>Note: This summary is for informational purposes only. The complete Risk Disclosure Document contains detailed information about all material risks.</em></p>
      `,
      downloadUrl: "/documents/risk-disclosure.pdf",
    },
    {
      id: "terms",
      title: "Terms of Service",
      icon: <FileText className="w-6 h-6" />,
      color: "var(--brand-green)",
      summary:
        "Website Use & Investor Acknowledgments governing access to HBC digital services.",
      content: `
        <h4>Website Access and Use</h4>
        <p>These Terms of Service govern access to and use of the Highbridge Group (HBC) website and related digital services. By accessing this website, submitting an expression of interest, or engaging with HBC, you acknowledge and agree to the following terms:</p>
        
        <h4>Investor Acknowledgments</h4>
        <div class="terms-list">
          <div class="term-item">
            <CheckCircle className="w-5 h-5" />
            <div>
              <strong>Eligibility Compliance:</strong> You meet applicable eligibility and compliance requirements in your jurisdiction
            </div>
          </div>
          <div class="term-item">
            <CheckCircle className="w-5 h-5" />
            <div>
              <strong>Investment Understanding:</strong> You understand that HBC investments are private, illiquid, and subject to defined terms
            </div>
          </div>
          <div class="term-item">
            <CheckCircle className="w-5 h-5" />
            <div>
              <strong>Risk Disclosure Acceptance:</strong> You have reviewed and accepted all applicable risk disclosures
            </div>
          </div>
          <div class="term-item">
            <CheckCircle className="w-5 h-5" />
            <div>
              <strong>Information Accuracy:</strong> You will provide accurate and complete information during onboarding
            </div>
          </div>
          <div class="term-item">
            <CheckCircle className="w-5 h-5" />
            <div>
              <strong>Screening Acceptance:</strong> Participation is subject to screening, compliance review, and final acceptance by HBC
            </div>
          </div>
          <div class="term-item">
            <CheckCircle className="w-5 h-5" />
            <div>
              <strong>Electronic Communications:</strong> You consent to electronic communications and document delivery
            </div>
          </div>
        </div>
        
        <h4>Prohibited Activities</h4>
        <p>Unauthorized use of this website, including but not limited to:</p>
        <ul>
          <li>Misuse or unauthorized distribution of proprietary content</li>
          <li>Misrepresentation of eligibility or investment status</li>
          <li>Unauthorized access to investor portals or systems</li>
          <li>Circumvention of security measures or access controls</li>
          <li>Commercial use of website content without written authorization</li>
        </ul>
        
        <h4>Intellectual Property</h4>
        <p>All content on this website, including text, graphics, logos, and investment materials, is the property of Highbridge Group or its licensors and is protected by intellectual property laws.</p>
        
        <h4>Limitation of Liability</h4>
        <p>HBC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from use of this website or reliance on its content.</p>
        
        <h4>Governing Law</h4>
        <p>These terms are governed by the laws of the State of New York, without regard to conflict of law principles.</p>
      `,
      downloadUrl: "/documents/terms-of-service.pdf",
    },
    {
      id: "privacy",
      title: "Data & Privacy Policy",
      icon: <Lock className="w-6 h-6" />,
      color: "var(--support-green)",
      summary:
        "Protection of personal and investor information in accordance with regulatory standards.",
      content: `
        <h4>Privacy Commitment</h4>
        <p>Highbridge Group (HBC) is committed to safeguarding the privacy and confidentiality of all visitors and investors. This policy outlines how we collect, use, store, and protect personal information.</p>
        
        <h4>Information Collection Purpose</h4>
        <p>Personal and financial information is collected and processed only where necessary for:</p>
        
        <div class="privacy-grid">
          <div class="privacy-item">
            <Users className="w-5 h-5" />
            <div>
              <strong>Investor Onboarding</strong>
              <p>Verification of identity, suitability assessment, and compliance with investment requirements</p>
            </div>
          </div>
          <div class="privacy-item">
            <Shield className="w-5 h-5" />
            <div>
              <strong>KYC/AML Compliance</strong>
              <p>Meeting regulatory obligations for Know Your Customer and Anti-Money Laundering requirements</p>
            </div>
          </div>
          <div class="privacy-item">
            <Target className="w-5 h-5" />
            <div>
              <strong>Investor Communication</strong>
              <p>Providing performance reports, updates, and relevant investment information</p>
            </div>
          </div>
          <div class="privacy-item">
            <Eye className="w-5 h-5" />
            <div>
              <strong>Operational Requirements</strong>
              <p>Administrative, legal, and compliance functions necessary for investment management</p>
            </div>
          </div>
        </div>
        
        <h4>Data Handling Principles</h4>
        <div class="data-principles">
          <div class="principle">
            <div class="principle-icon">①</div>
            <div>
              <strong>Need-to-Know Basis</strong>
              <p>Information is collected only when necessary for legitimate business purposes</p>
            </div>
          </div>
          <div class="principle">
            <div class="principle-icon">②</div>
            <div>
              <strong>Secure Storage</strong>
              <p>Data is encrypted and stored in secure facilities with restricted access</p>
            </div>
          </div>
          <div class="principle">
            <div class="principle-icon">③</div>
            <div>
              <strong>Limited Access</strong>
              <p>Information accessible only to authorized personnel with appropriate clearance</p>
            </div>
          </div>
          <div class="principle">
            <div class="principle-icon">④</div>
            <div>
              <strong>No Unauthorized Sharing</strong>
              <p>Information is not sold or shared except as required by law or regulation</p>
            </div>
          </div>
        </div>
        
        <h4>Data Retention</h4>
        <p>Personal information is retained only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce agreements.</p>
        
        <h4>International Data Transfers</h4>
        <p>For cross-border investors, data may be transferred and processed in countries with different data protection laws. In such cases, HBG implements appropriate safeguards as required by applicable regulations.</p>
        
        <h4>Your Rights</h4>
        <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal information. To exercise these rights, please contact our compliance team.</p>
      `,
      downloadUrl: "/documents/privacy-policy.pdf",
    },
    // {
    //   id: 'governance',
    //   title: 'Governance & Compliance Standards',
    //   icon: <Shield className="w-6 h-6" />,
    //   color: 'var(--accent-gold)',
    //   summary: 'Internal controls, oversight frameworks, and compliance protocols ensuring investor protection.',
    //   content: `
    //     <h4>Governance Framework</h4>
    //     <p>HBG operates under a comprehensive internal governance framework designed to support disciplined investment execution, regulatory compliance, and investor protection.</p>

    //     <h4>Key Governance Components</h4>
    //     <div class="governance-components">
    //       <div class="component-card">
    //         <div class="component-header">
    //           <div class="component-number">01</div>
    //           <h5>Formal Agreements & Disclosures</h5>
    //         </div>
    //         <p>Standardized investment documentation ensuring clarity of terms, rights, and obligations. All agreements undergo legal review and are executed digitally with audit trails.</p>
    //       </div>

    //       <div class="component-card">
    //         <div class="component-header">
    //           <div class="component-number">02</div>
    //           <h5>KYC/AML Compliance Processes</h5>
    //         </div>
    //         <p>Robust identity verification, source of funds validation, and ongoing monitoring to prevent financial crime and ensure regulatory compliance across jurisdictions.</p>
    //       </div>

    //       <div class="component-card">
    //         <div class="component-header">
    //           <div class="component-number">03</div>
    //           <h5>Risk Assessment & Monitoring</h5>
    //         </div>
    //         <p>Continuous evaluation of investment risks, market conditions, and portfolio performance with escalation protocols for material changes or concerns.</p>
    //       </div>

    //       <div class="component-card">
    //         <div class="component-header">
    //           <div class="component-number">04</div>
    //           <h5>Exit & Recovery Frameworks</h5>
    //         </div>
    //         <p>Predefined settlement procedures, liquidation protocols, and capital recovery mechanisms designed to protect investor interests in various scenarios.</p>
    //       </div>
    //     </div>

    //     <h4>Compliance Oversight</h4>
    //     <p>HBG maintains a dedicated compliance function responsible for:</p>
    //     <ul>
    //       <li>Monitoring regulatory developments and implementing required changes</li>
    //       <li>Conducting periodic compliance reviews and internal audits</li>
    //       <li>Providing investor education on compliance obligations</li>
    //       <li>Maintaining records in accordance with regulatory requirements</li>
    //       <li>Managing regulatory relationships and reporting obligations</li>
    //     </ul>

    //     <h4>Investor Participation Requirements</h4>
    //     <p>Participation in any HBG investment program is strictly subject to:</p>
    //     <div class="requirements-grid">
    //       <div class="requirement">
    //         <strong>Eligibility Verification</strong>
    //         <p>Confirmation of investor status (accredited, qualified, etc.)</p>
    //       </div>
    //       <div class="requirement">
    //         <strong>Suitability Assessment</strong>
    //         <p>Review of investment objectives, risk tolerance, and experience</p>
    //       </div>
    //       <div class="requirement">
    //         <strong>Compliance Approval</strong>
    //         <p>Clearance through KYC/AML and regulatory checks</p>
    //       </div>
    //       <div class="requirement">
    //         <strong>Documentation Execution</strong>
    //         <p>Formal agreement signing and confirmation of understanding</p>
    //       </div>
    //     </div>

    //     <h4>Transparency & Reporting</h4>
    //     <p>HBG provides regular reporting to investors including performance updates, material developments, and compliance-related disclosures as required by applicable regulations.</p>
    //   `,
    //   downloadUrl: '/documents/governance-framework.pdf'
    // }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="legal-hero-section">
        <div className="legal-hero-content">
          <div className="legal-hero-text-container">
            <h1 className="legal-hero-title">
              Legal &{" "}
              <span className="legal-hero-title-highlight">Compliance</span>
            </h1>
            <p className="legal-hero-description">
              Transparency, Accountability, and Investor Protection
            </p>
            <div className="legal-hero-notice">
              <AlertTriangle className="w-6 h-6" />
              <div>
                <p>
                  <strong>Important Notice:</strong> Participation is subject to
                  eligibility, suitability assessment, compliance review, and
                  formal documentation. Prospective investors should review all
                  materials carefully and consult independent professional
                  advisors before making any investment decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="legal-nav-section">
        <div className="legal-nav-content">
          <h2 className="legal-nav-title">Page Navigation</h2>
          <div className="legal-nav-grid">
            {pageSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="legal-nav-card"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(section.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div
                  className="legal-nav-icon"
                  style={{ backgroundColor: section.color }}
                >
                  {section.icon}
                </div>
                <h4>{section.title}</h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-content-section">
        <div className="legal-content-container">
          {pageSections.map((section) => (
            <div key={section.id} id={section.id} className="legal-section">
              <Card className="legal-section-card">
                <CardHeader
                  className="legal-section-header"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="legal-section-title-container">
                    <div
                      className="legal-section-icon"
                      style={{ backgroundColor: section.color }}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="legal-section-title">{section.title}</h3>
                      <p className="legal-section-summary">{section.summary}</p>
                    </div>
                  </div>
                  <div className="legal-section-actions">
                    <Button
                      variant="outline"
                      size="sm"
                      className="legal-download-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        // In production, this would trigger the download
                        console.log(`Downloading ${section.title}`);
                      }}
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                    <ChevronDown
                      className={`legal-expand-icon ${expandedSection === section.id ? "expanded" : ""}`}
                    />
                  </div>
                </CardHeader>

                <CardBody
                  className={`legal-section-body ${expandedSection === section.id ? "expanded" : ""}`}
                >
                  <div
                    className="legal-section-content"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />

                  <div className="legal-download-footer">
                    <div className="download-info">
                      <FileText className="w-5 h-5" />
                      <div>
                        <strong>Complete Document Available</strong>
                        <p>
                          Download the full {section.title} for detailed
                          information
                        </p>
                      </div>
                    </div>
                    <Button
                      className="download-full-button"
                      onClick={() =>
                        console.log(`Downloading full ${section.title}`)
                      }
                    >
                      <Download className="w-5 h-5" />
                      Download Full Document
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="legal-notice-section">
        <div className="legal-notice-content">
          <div className="legal-notice-card">
            <div className="legal-notice-header">
              <Shield className="w-8 h-8" />
              <h3>Important Compliance Notice</h3>
            </div>
            <div className="legal-notice-body">
              <div className="notice-points">
                <div className="notice-point">
                  <div className="notice-icon">⚠️</div>
                  <div>
                    <strong>Regulatory Compliance</strong>
                    <p>
                      All investments are offered in compliance with applicable
                      securities laws and regulations
                    </p>
                  </div>
                </div>
                <div className="notice-point">
                  <div className="notice-icon">📋</div>
                  <div>
                    <strong>Documentation Required</strong>
                    <p>
                      Formal participation requires execution of legal
                      agreements and completion of compliance documentation
                    </p>
                  </div>
                </div>
                <div className="notice-point">
                  <div className="notice-icon">⚖️</div>
                  <div>
                    <strong>Professional Advice</strong>
                    <p>
                      Investors should consult with qualified legal, tax, and
                      financial advisors before making investment decisions
                    </p>
                  </div>
                </div>
                <div className="notice-point">
                  <div className="notice-icon">🔒</div>
                  <div>
                    <strong>Confidentiality</strong>
                    <p>
                      All investment materials are confidential and for
                      qualified investors only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
