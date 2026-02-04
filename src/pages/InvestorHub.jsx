import { useState } from "react";
import {
  FileText,
  ShieldCheck,
  HelpCircle,
  Lock,
  UserCheck,
  BarChart3,
  Download,
  AlertCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Building,
  Users,
  Clock,
  CheckCircle,
  Target,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Card, { CardBody, CardHeader } from "../components/Card";
import Button from "../components/Button";
import "./InvestorHub.css";

export default function InvestorHub() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const onboardingSteps = [
    {
      step: 1,
      title: "Initial Inquiry",
      description: "Submit your expression of interest through our secure form. A member of our investment team will contact you within 24 hours to understand your objectives and confirm next steps.",
      duration: "1–2 business days"
    },
    {
      step: 2,
      title: "Qualification Assessment",
      description: "We assess investor eligibility, accreditation status, and alignment between your investment goals and available opportunities.",
      duration: "12–24 hours"
    },
    {
      step: 3,
      title: "Due Diligence Review",
      description: "You receive comprehensive investment materials, including Investor Information Kit, investment overview documents, structure and deployment framework, risk considerations, expected timelines and reporting, and legal terms and risk disclosures.",
      duration: "1–2 business days"
    },
    {
      step: 4,
      title: "KYC / AML Compliance",
      description: "Complete Know-Your-Customer and Anti-Money Laundering verification documents via secure channel, including identity and source-of-funds documentation.",
      duration: "1–3 business days"
    },
    {
      step: 5,
      title: "Agreement Execution",
      description: "Review and electronically execute all required documentation, including subscription agreements and investor disclosures.",
      duration: "2–3 business days"
    },
    {
      step: 6,
      title: "Capital Deployment",
      description: "Investment capital is transferred to designated HBC account. Funds are deployed only after all contractual and compliance conditions are satisfied.",
      duration: "3–5 business days"
    },
    {
      step: 7,
      title: "Activation & Confirmation",
      description: "Investors receive official welcome confirmation, fully executed investment documentation, post-dated cheques (where applicable), and access to reporting and communication channels.",
      duration: "Within activation period"
    }
  ];

  const protectionLayers = [
    {
      title: "Layer 1: Asset Backing",
      description: "Supported by revenue-generating assets with independently assessed market value.",
      features: [
        "Tangible asset exposure",
        "Regular monitoring and valuation",
        "Defined asset documentation"
      ]
    },
    {
      title: "Layer 2: Legal Structure",
      description: "Each investment is governed by documented agreements defining terms, lock-in periods, exit and settlement procedures, and capital recovery mechanisms.",
      features: [
        "Post-dated cheques may be issued where applicable",
        "Structured settlement frameworks",
        "Clear contractual terms"
      ]
    },
    {
      title: "Layer 3: Insurance & Custody",
      description: "Certain asset classes may include additional protection measures.",
      features: [
        "Asset-level insurance coverage",
        "Segregated accounts",
        "Third-party custodial arrangements"
      ]
    },
    {
      title: "Layer 4: Risk Management",
      description: "Continuous monitoring and proactive risk mitigation throughout investment lifecycle.",
      features: [
        "Diversification requirements",
        "Stress testing and scenario analysis",
        "Early risk identification mechanisms",
        "Transparent tracking and reporting"
      ]
    }
  ];

  const investorFAQs = [
    {
      question: "What is the minimum investment amount?",
      answer: "Minimum investment thresholds vary by division: Mobility Series: USD 50,000, Sustainable & Emerging Markets: USD 100,000, Alternative Investment Series: USD 20,000."
    },
    {
      question: "Who can invest with HBC?",
      answer: "Investment opportunities are available only to approved investors following internal screening, compliance review, and acceptance."
    },
    {
      question: "Is my capital locked up?",
      answer: "Yes. Most HBC programs include a defined lock-in period, typically 18 months, to support proper execution of investment strategies."
    },
    {
      question: "Is HBC a savings or deposit scheme?",
      answer: "No. HBC operates structured private investment programs with defined terms, risk exposure, and asset backing. These are not savings products."
    },
    {
      question: "What type of investors does HBC work with?",
      answer: "We work with a range of qualified investors, including standard private investors, strategic investors, and institutional and family office participants. Participation depends on capital allocation, experience, and compliance review."
    },
    {
      question: "How are returns distributed?",
      answer: "Returns are distributed according to the specific schedule outlined in each investment's documentation, typically through structured settlement mechanisms."
    }
  ];

  const resources = [
    { 
      name: "Investment Information Kit", 
      type: "PDF", 
      size: "2.1 MB",
      description: "Comprehensive overview of HBC's investment approach and programs"
    },
    { 
      name: "Investor Onboarding Guide", 
      type: "PDF", 
      size: "1.8 MB",
      description: "Step-by-step guide to the investor qualification process"
    },
    { 
      name: "Capital Protection Overview", 
      type: "PDF", 
      size: "1.5 MB",
      description: "Detailed explanation of our multi-layered protection framework"
    },
    
  ];

  const investorTypes = [
    {
      type: "Standard Private Investors",
      description: "Qualified individuals seeking structured, asset-backed opportunities"
    },
    {
      type: "Strategic Investors",
      description: "Partners with specific sector expertise or strategic alignment"
    },
    {
      type: "Institutional & Family Offices",
      description: "Professional investors requiring sophisticated investment structures"
    }
  ];

  return (
    <Layout activePage="/investor-hub">
      {/* Hero Section */}
      <section className="investor-hub-hero-section">
        <div className="hero-pattern"></div>
        <div className="investor-hub-content">
          <div className="investor-hub-header">
            <div className="header-badge">
              <Building className="badge-icon" />
              <span>Educational Resources</span>
            </div>
            <h1 className="hero-title">
              Investor <span className="highlight">Resources</span>
            </h1>
            <p className="hero-description">
              Everything you need to understand how we invest. At HBC, we believe informed investors 
              make better long-term decisions. Our Investor Resources section is designed to clearly 
              explain our investment process, capital protection philosophy, and onboarding requirements.
            </p>
            <div className="disclaimer-box" >
              <AlertCircle className="disclaimer-icon" style={{color:"whitesmoke"}} />
              <p className="disclaimer-text" style={{color:"whitesmoke"}}>
                This section is educational in nature and intended to help qualified investors understand 
                how HBC structures and manages its investment programs. It is not a legal document and 
                should not be relied upon as the sole basis for an investment decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="navigation-section">
        <div className="navigation-content">
          <h3 className="navigation-title">Investor Hub</h3>
          <p className="navigation-subtitle">Click to navigate to specific sections</p>
          <div className="navigation-grid">
            <a href="#onboarding" className="nav-card">
              <UserCheck className="nav-icon" />
              <span className="nav-text">Investor Onboarding Process</span>
            </a>
            <a href="#protection" className="nav-card">
              <ShieldCheck className="nav-icon" />
              <span className="nav-text">Capital Protection Framework</span>
            </a>
            <a href="#faq" className="nav-card">
              <HelpCircle className="nav-icon" />
              <span className="nav-text">Frequently Asked Questions</span>
            </a>
            <a href="#resources" className="nav-card">
              <FileText className="nav-icon" />
              <span className="nav-text">Investor Resources</span>
            </a>
            <a href="/legal-compliance" className="nav-card">
              <Lock className="nav-icon" />
              <span className="nav-text">Privacy & Legal</span>
            </a>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section id="onboarding" className="onboarding-section">
        <div className="onboarding-content">
          <div className="section-header">
            <h2 className="section-title">
              Investor <span className="accent">Onboarding Process</span>
            </h2>
            <p className="section-subtitle">
              A structured, transparent path to investing with HBC. We follow a disciplined onboarding 
              process designed to ensure compliance, investor suitability, and clarity at every stage.
            </p>
          </div>

          <div className="steps-container">
            {onboardingSteps.map((step, index) => (
              <Card key={index} className="step-card">
                <CardBody>
                  <div className="step-content">
                    <div className="step-header">
                      <div className="step-number">{step.step}</div>
                      <div className="step-duration">
                        <Clock className="duration-icon" />
                        <span>Timeline: {step.duration}</span>
                      </div>
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="timeline-summary">
            <Card className="summary-card">
              <CardBody>
                <div className="summary-content">
                  <Target className="summary-icon" />
                  <div>
                    <h4 className="summary-title">Total Activation Timeline</h4>
                    <p className="summary-text">
                      3–10 business days (depending on document readiness and individual circumstances).
                    </p>
                    <div className="summary-note">
                      Our team is committed to making the process as efficient as possible while 
                      maintaining compliance standards.
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Capital Protection Framework */}
      <section id="protection" className="protection-section">
        <div className="protection-content">
          <div className="section-header">
            <h2 className="section-title">
              Capital Protection <span className="accent">Framework</span>
            </h2>
            <p className="section-subtitle">
              Designed to preserve capital first. HBC employs a layered capital protection approach 
              intended to mitigate downside risk and enhance capital discipline. While no investment 
              is risk-free, our structures are designed with preservation as a core priority.
            </p>
          </div>

          <div className="protection-grid">
            {protectionLayers.map((layer, index) => (
              <Card key={index} className="layer-card">
                <CardBody>
                  <div className="layer-content">
                    <div className="layer-header">
                      <div className="layer-number">Layer {index + 1}</div>
                      <h3 className="layer-title">{layer.title}</h3>
                    </div>
                    <p className="layer-description">{layer.description}</p>
                    <div className="layer-features">
                      {layer.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <CheckCircle className="feature-icon" />
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="protection-footer">
            <Link to="/legal-compliance">
              <Button variant="outline" className="legal-link-btn">
                View Full Risk Disclosure
                <ArrowRight className="btn-icon" />
              </Button>
            </Link>
            <p className="protection-note">
              For full legal disclosures and risk statements, please review the complete documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Investor Types */}
      <section className="investor-types-section">
        <div className="investor-types-content">
          <div className="section-header">
            <h2 className="section-title">
              Who We <span className="accent">Work With</span>
            </h2>
            <p className="section-subtitle">
              HBC partners with a diverse range of qualified investors
            </p>
          </div>

          <div className="investor-types-grid">
            {investorTypes.map((type, index) => (
              <Card key={index} className="investor-type-card">
                <CardBody>
                  <div className="type-content">
                    <Users className="type-icon" />
                    <h3 className="type-title">{type.type}</h3>
                    <p className="type-description">{type.description}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="faq-content">
          <div className="section-header">
            <h2 className="section-title">
              Frequently Asked <span className="accent">Questions</span>
            </h2>
            <p className="section-subtitle">
              Common questions about investing with HBC
            </p>
          </div>

          <div className="faq-container">
            {investorFAQs.map((faq, index) => (
              <Card key={index} className="faq-card">
                <CardBody>
                  <div 
                    className="faq-question" 
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="faq-question-text">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="chevron-icon" />
                    ) : (
                      <ChevronDown className="chevron-icon" />
                    )}
                  </div>
                  {openFAQ === index && (
                    <div className="faq-answer">
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="resources-section">
        <div className="resources-content">
          <div className="section-header">
            <h2 className="section-title">
              Investor <span className="accent">Resources</span>
            </h2>
            <p className="section-subtitle">
              Access informational guides designed to explain HBC's investment approach and operational processes. 
              These materials are for reference only and should be read alongside formal legal disclosures.
            </p>
          </div>

          <div className="resources-grid">
            {resources.map((resource, index) => (
              <Card key={index} className="resource-card">
                <CardBody>
                  <div className="resource-content">
                    <div className="resource-header">
                      <FileText className="resource-icon" />
                      <div className="resource-meta">
                        <span className="resource-type">{resource.type}</span>
                        <span className="resource-size">{resource.size}</span>
                      </div>
                    </div>
                    <h3 className="resource-title">{resource.name}</h3>
                    <p className="resource-description">{resource.description}</p>
                    <a 
                      href={`/documents/${resource.name.toLowerCase().replace(/ /g, '-')}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-link"
                    >
                      <Download className="download-icon" />
                      Download PDF
                    </a>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="investor-hub-cta-section">
        <div className="investor-hub-cta-content">
          <div className="cta-header">
            <HelpCircle className="cta-icon" />
            <h2 className="cta-title">Have Questions or Need Clarification?</h2>
            <p className="cta-subtitle">
              Our investment team is available to provide additional information or walk you through our process.
            </p>
          </div>
          
          <div className="cta-buttons">
            <Link to="/express-interest">
              <Button size="lg" className="primary-cta-btn">
                Express Interest
                <ArrowRight className="btn-icon" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="secondary-cta-btn">
                Contact Our Team
              </Button>
            </Link>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>investors@hbc.com</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}