import { FileText, ShieldCheck, HelpCircle, Lock, UserCheck, BarChart3, Download, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import Card, { CardBody, CardHeader } from '../components/Card';
import './InvestorHub.css';

export default function InvestorHub() {
  const onboardingSteps = [
    {
      step: 1,
      title: 'Initial Inquiry',
      description: 'Submit your expression of interest through our secure form. Our team will contact you within 48 hours to discuss your investment objectives.',
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Qualification Assessment',
      description: 'We verify investor accreditation status and ensure alignment between investment goals and available opportunities.',
      duration: '2-3 days'
    },
    {
      step: 3,
      title: 'Due Diligence Review',
      description: 'Receive comprehensive investment materials including offering memoranda, legal documents, and detailed risk disclosures.',
      duration: '5-7 days'
    },
    {
      step: 4,
      title: 'KYC/AML Compliance',
      description: 'Complete know-your-customer verification through our secure portal, including identity verification and source of funds documentation.',
      duration: '3-5 days'
    },
    {
      step: 5,
      title: 'Agreement Execution',
      description: 'Review and sign subscription agreements, investor disclosures, and related documentation electronically.',
      duration: '2-3 days'
    },
    {
      step: 6,
      title: 'Capital Deployment',
      description: 'Transfer investment capital to designated escrow account. Funds are deployed only after all conditions precedent are satisfied.',
      duration: '3-5 days'
    },
    {
      step: 7,
      title: 'Investor Portal Access',
      description: 'Receive credentials for our investor portal with real-time portfolio access, reporting, and documentation.',
      duration: 'Immediate'
    }
  ];

  const protectionLayers = [
    {
      title: 'Layer 1: Asset Backing',
      description: 'All investments secured by physical, tangible assets with independently verified market value',
      features: ['Third-party appraisals', 'Regular revaluation', 'Conservative loan-to-value ratios', 'Physical custody']
    },
    {
      title: 'Layer 2: Legal Structure',
      description: 'Bankruptcy-remote special purpose vehicles with clear creditor priority',
      features: ['SPV isolation', 'Registered security interests', 'Investor priority waterfall', 'Independent directors']
    },
    {
      title: 'Layer 3: Insurance & Custody',
      description: 'Comprehensive insurance coverage and third-party custody arrangements',
      features: ['All-risk insurance', 'Established custodians', 'Segregated accounts', 'Regular audits']
    },
    {
      title: 'Layer 4: Risk Management',
      description: 'Active monitoring and risk mitigation throughout investment lifecycle',
      features: ['Continuous monitoring', 'Diversification requirements', 'Stress testing', 'Early warning systems']
    }
  ];

  const resources = [
    { name: 'Investment Overview Brochure', type: 'PDF', size: '2.4 MB' },
    { name: 'Capital Protection Framework', type: 'PDF', size: '1.8 MB' },
    { name: 'Investor Agreement Template', type: 'PDF', size: '3.1 MB' },
    { name: 'Risk Disclosure Statement', type: 'PDF', size: '1.2 MB' },
    { name: 'Fee Structure Guide', type: 'PDF', size: '856 KB' },
    { name: 'Tax Reporting Guidelines', type: 'PDF', size: '1.5 MB' }
  ];

  return (
    <Layout activePage="/investor-hub">
      {/* Hero Section */}
      <section className="investor-hub-hero-section">
        <div className="investor-hub-hero-content">
          <div className="investor-hub-hero-text-container">
            <h1 className="investor-hub-hero-title">
              Investor <span className="investor-hub-hero-title-highlight1">Information Hub</span>
            </h1>
            <p className="investor-hub-hero-description">
              Everything you need to understand our investment process, capital protection framework, 
              and investor onboarding procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <div className="quick-links-content">
          <div className="quick-links-grid">
            <a href="#onboarding" className="quick-link">
              <UserCheck className="quick-link-icon" />
              <span className="quick-link-text">Onboarding Process</span>
            </a>
            <a href="#protection" className="quick-link">
              <ShieldCheck className="quick-link-icon" />
              <span className="quick-link-text">Capital Protection</span>
            </a>
            <a href="#faq" className="quick-link">
              <HelpCircle className="quick-link-icon" />
              <span className="quick-link-text">FAQ</span>
            </a>
            <a href="#privacy" className="quick-link">
              <Lock className="quick-link-icon" />
              <span className="quick-link-text">Privacy & Legal</span>
            </a>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section id="onboarding" className="onboarding-process-section">
        <div className="onboarding-process-content">
          <div className="onboarding-process-header">
            <h2 className="onboarding-process-title">
              Investor <span className="onboarding-process-title-highlight">Onboarding Process</span>
            </h2>
            <p className="onboarding-process-subtitle">
              Our streamlined 7-step process ensures compliance, transparency, and investor protection 
              from initial inquiry to capital deployment.
            </p>
          </div>

          <div className="onboarding-steps-grid">
            {onboardingSteps.map((item) => (
              <Card key={item.step} hover>
                <CardBody className="onboarding-step-card-body">
                  <div className="step-number-container">
                    <span className="step-number">{item.step}</span>
                  </div>
                  <div className="step-content">
                    <div className="step-header">
                      <h4>{item.title}</h4>
                      <span className="step-duration">Timeline: {item.duration}</span>
                    </div>
                    <p className="step-description">{item.description}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="timeline-note">
            <div className="timeline-note-flex">
              <AlertCircle className="timeline-note-icon" />
              <div>
                <h5 className="timeline-note-title">Total Onboarding Timeline</h5>
                <p className="timeline-note-text">
                  The complete onboarding process typically takes 3-4 weeks from initial inquiry to capital deployment. 
                  This timeline may vary based on document availability and individual circumstances. Our team is 
                  committed to making the process as efficient as possible while maintaining compliance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Protection Layers */}
      <section id="protection" className="protection-layers-section">
        <div className="protection-layers-content">
          <div className="protection-layers-header">
            <h2 className="protection-layers-title">
              Capital Protection <span className="protection-layers-title-highlight">Framework</span>
            </h2>
            <p className="protection-layers-subtitle">
              Four independent layers of protection work together to safeguard investor capital and minimize risk.
            </p>
          </div>

          <div className="protection-layers-grid">
            {protectionLayers.map((layer, index) => (
              <Card key={index} className="protection-layer-card">
                <CardHeader>
                  <h4>{layer.title}</h4>
                  <p className="layer-description">{layer.description}</p>
                </CardHeader>
                <CardBody>
                  <div className="layer-features">
                    {layer.features.map((feature, idx) => (
                      <div key={idx} className="layer-feature-item">
                        <ShieldCheck className="layer-feature-icon" />
                        <span className="layer-feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="resources-section">
        <div className="resources-content">
          <div className="resources-header">
            <h2 className="resources-title">
              Investor <span className="resources-title-highlight">Resources</span>
            </h2>
            <p className="resources-subtitle">
              Download comprehensive guides and documentation to understand our investment approach and processes.
            </p>
          </div>

          <div className="resources-grid">
            {resources.map((resource, index) => (
              <Card key={index} hover>
                <CardBody className="resource-card-body">
                  <div className="resource-icon-container">
                    <FileText className="resource-icon" />
                  </div>
                  <div className="resource-details">
                    <h5 className="resource-name">{resource.name}</h5>
                    <div className="resource-meta">
                      <span>{resource.type}</span>
                      <span>•</span>
                      <span>{resource.size}</span>
                    </div>
                    <button className="download-button">
                      <Download className="download-icon" />
                      <span className="download-text">Download</span>
                    </button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Legal */}
      <section id="privacy" className="privacy-legal-section">
        <div className="privacy-legal-content">
          <div className="privacy-legal-inner">
            <h2 className="privacy-legal-header">
              Privacy & <span className="privacy-legal-title-highlight">Legal Information</span>
            </h2>

            <div className="privacy-legal-cards">
              <Card>
                <CardHeader className="privacy-legal-card-header">
                  <Lock className="privacy-legal-card-icon" />
                  <h4>Data Privacy Policy</h4>
                </CardHeader>
                <CardBody className="privacy-legal-card-body">
                  <p className="policy-description">
                    HBC Holdings is committed to protecting the privacy and confidentiality of investor information. 
                    We collect only the information necessary for investment processing, regulatory compliance, and 
                    investor communication.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h6 className="policy-point-title">Information We Collect</h6>
                      <p className="policy-point-text">
                        Personal identification, financial information, investment objectives, accreditation status, 
                        and transaction history as required for KYC/AML compliance and investment management.
                      </p>
                    </div>
                    <div>
                      <h6 className="policy-point-title">How We Use Your Information</h6>
                      <p className="policy-point-text">
                        Processing investments, regulatory reporting, investor communications, portfolio management, 
                        and compliance with legal obligations.
                      </p>
                    </div>
                    <div>
                      <h6 className="policy-point-title">Data Protection</h6>
                      <p className="policy-point-text">
                        Industry-standard encryption, secure data storage, restricted access controls, and regular 
                        security audits protect all investor information.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card id="legal">
                <CardHeader className="privacy-legal-card-header">
                  <FileText className="privacy-legal-card-icon" />
                  <h4>Legal Disclaimers</h4>
                </CardHeader>
                <CardBody className="privacy-legal-card-body">
                  <div className="disclaimer-text">
                    <p>
                      <strong>Investment Risk:</strong> All investments involve risk, 
                      including the potential loss of principal. Target returns are projections only and are not 
                      guaranteed. Past performance does not guarantee future results.
                    </p>
                    <p>
                      <strong>Not Financial Advice:</strong> Information provided on 
                      this website does not constitute financial, legal, or tax advice. Investors should consult 
                      with qualified professional advisors before making investment decisions.
                    </p>
                    <p>
                      <strong>Accredited Investors Only:</strong> Investment 
                      opportunities are available only to accredited investors as defined by applicable securities 
                      regulations. Minimum qualification requirements apply.
                    </p>
                    <p>
                      <strong>Forward-Looking Statements:</strong> This website contains 
                      forward-looking statements regarding expected returns, market conditions, and investment 
                      performance. Actual results may differ materially from projections.
                    </p>
                    <p>
                      <strong>Regulatory Compliance:</strong> HBC Holdings operates in 
                      compliance with applicable securities laws and regulations. Investments are offered through 
                      private placements to qualified investors only.
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card id="terms">
                <CardHeader className="privacy-legal-card-header">
                  <BarChart3 className="privacy-legal-card-icon" />
                  <h4>Terms of Service</h4>
                </CardHeader>
                <CardBody className="privacy-legal-card-body">
                  <p className="disclaimer-text">
                    By accessing this website and expressing interest in HBC Holdings investment opportunities, 
                    you acknowledge and agree to the following terms:
                  </p>
                  <ul className="terms-list">
                    <li>You meet the accredited investor requirements in your jurisdiction</li>
                    <li>You have read and understood all risk disclosures and legal disclaimers</li>
                    <li>You acknowledge that investments are illiquid and subject to lock-up periods</li>
                    <li>You agree to provide accurate and complete information during onboarding</li>
                    <li>You understand that this website is for informational purposes only</li>
                    <li>You consent to electronic communications and document delivery</li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
