import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Investor.css';

const Investor = () => {
  const [activeTab, setActiveTab] = useState('testimonials');
  const [openFaq, setOpenFaq] = useState(null);

  const testimonials = [
    {
      id: 1,
      text: "Before investing, I wanted a clear understanding of risk, structure, and capital protection. The HBC team was thorough, transparent, and realistic. Over time, the consistency of reporting and disciplined approach stood out more than anything else.",
      name: "Zaynab R.",
      duration: "2+ Years",
      division: "Mobility & Logistics",
      role: "Healthcare Consultant",
      location: "Dubai, UAE"
    },
    {
      id: 2,
      text: "The team at HBC is incredibly knowledgeable and responsive. I appreciate their conservative approach to valuation and the multiple layers of protection they build into each investment structure. There are no exaggerated promises — just clear processes and well-managed execution.",
      name: "Daniel M.",
      duration: "4+ Years",
      division: "Multi-Division Portfolio",
      role: "Private Investor",
      location: "London, UK"
    },
    {
      id: 3,
      text: "Capital preservation was my priority entering retirement. HBC has delivered consistent performance through various market conditions. Their focus on asset-backed investments aligns perfectly with my risk tolerance.",
      name: "Matthew A.W",
      duration: "5+ Years",
      division: "Alternative Investments",
      role: "Former Executive",
      location: "Accra, Ghana"
    },
    {
      id: 4,
      text: "As a family office representative, I value the rigorous due diligence and asset-backed approach that HBC employs. Their luxury automotive division has performed exceptionally well, and the team's expertise in alternative assets is impressive.",
      name: "Ahmed Y.",
      duration: "2+ Years",
      division: "Mobility & Alternative Investments",
      role: "Wealth Advisor",
      location: "Doha, Qatar"
    },
    {
      id: 5,
      text: "Consistent communication and structured reporting made a significant difference for me. The performance has met my expectations, and I appreciate the quarterly updates that keep me informed.",
      name: "Prasit K.",
      duration: "3+ Years",
      division: "Diversified Portfolio",
      role: "Tech Entrepreneur",
      location: "Bangkok, TH"
    },
    {
      id: 6,
      text: "After selling my company, I needed a disciplined alternative to traditional markets. HBC delivered exactly what I needed. The onboarding process was professional, and provides clarity without unnecessary complexity.",
      name: "Michael R.",
      duration: "18+ Months",
      division: "Sustainable & Emerging Division",
      role: "Independent Investor",
      location: "New York, NY"
    }
  ];

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "Who can invest with HBC?",
          a: "HBC investment programs are available to qualified investors who meet the applicable eligibility and compliance requirements."
        },
        {
          q: "What is the minimum amount?",
          a: "Minimum investment amounts vary by division: Mobility & Logistics Series: USD 50,000; Alternative Investment Vehicles: USD 20,000; Sustainable & Emerging Markets: USD 100,000. Customized solutions may be considered for larger investment amounts across multiple divisions."
        },
        {
          q: "How do I get started?",
          a: "You may begin by submitting an expression of interest through our website or contacting our investment team directly. A confidential consultation will be scheduled to discuss your objectives, explain available investment divisions, and outline the onboarding process."
        }
      ]
    },
    {
      title: "Investment Process",
      questions: [
        {
          q: "How does your investment process work?",
          a: "Our investment onboarding follows a structured seven-step process: Initial inquiry and confidential consultation; Qualification and suitability assessment; Due diligence review and document disclosure; KYC/AML and compliance verification; Agreement execution (digital or physical); Capital transfer to an HBC-approved account; Ongoing investor communication and reporting."
        },
        {
          q: "What documents will I need to provide?",
          a: "Investors are required to provide: Valid government-issued photo identification; Proof of address (where applicable); Entity investors may be required to submit additional documentation."
        },
        {
          q: "How long does onboarding take?",
          a: "The complete onboarding process takes 3 to 10 business days, depending on the completeness of documentation and compliance verification. Timelines may vary for entity investors or cross border transactions."
        }
      ]
    },
    {
      title: "Capital Protection & Risk",
      questions: [
        {
          q: "How is my capital protected?",
          a: "HBC employs a multi-layered capital protection framework, which may include: Asset backing: investments are supported by tangible or revenue-generating assets; Legal structuring: defined contractual and settlement frameworks; Insurance and custody arrangements (where applicable); Active risk management and oversight. This approach is designed to mitigate downside risk; however, it does not eliminate risk entirely."
        },
        {
          q: "What are the main risks I should understand?",
          a: "All investments involve risk, including the potential loss of capital. Key risks include: Market risk (asset value fluctuations); Liquidity risk (limited redemption windows); Operational risk (execution and management); Counterparty risk; Regulatory or legal risk. Our comprehensive risk disclosure documents provide detailed information about all material risks associated with each investment division."
        }
      ]
    },
    {
      title: "Investment Terms & Liquidity",
      questions: [
        {
          q: "What are the investment durations?",
          a: "Investment terms range from a minimum of 24 months up to 10 years, depending on the selected division and investment structure."
        },
        {
          q: "Can I withdraw my investment early?",
          a: "Early withdrawal is not permitted during lock-in periods. After the lock-in period, early exit requests may be considered subject to: Advance written notice (typically 30–90 days); Available liquidity; Applicable penalties, including forfeiture of unpaid returns. Early exits are not guaranteed."
        },
        {
          q: "Are returns guaranteed?",
          a: "No. All returns are projected based on historical performance and market conditions and are not guaranteed."
        }
      ]
    },
    {
      title: "Reporting & Transparency",
      questions: [
        {
          q: "What kind of reporting will I receive?",
          a: "Investors may receive: Quarterly performance summaries; Annual payout or position statements; Material event notifications; Secure email or portal updates. Reporting frequency and format may vary by division."
        }
      ]
    },
    {
      title: "Fees & Costs",
      questions: [
        {
          q: "Are there any upfront fees?",
          a: "HBC does not charge upfront subscription or placement fees. Certain third-party costs (e.g., legal reviews, transfer fees) may apply and will be disclosed in advance."
        }
      ]
    }
  ];

  return (
    <div className="investor-page">
      <div className="page-header">
        <h1>Investor Information</h1>
        <p className="header-subtitle">Transparent, structured, and disciplined private investing</p>
      </div>
      
      <div className="tabs-container">
        <div className="tabs-header">
          <button 
            className={`tab-button ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            Investor Testimonials
          </button>
          <button 
            className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            Frequently Asked Questions
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'testimonials' ? (
            <div className="testimonials-tab">
              <div className="section-header">
                <h2>Investor Experiences with HBC</h2>
                <p className="section-subtitle">Read feedback from verified investors who have partnered with HBC across multiple investment divisions.</p>
              </div>
              
              <div className="metrics-container">
                <div className="metric-card">
                  <div className="metric-value">98%</div>
                  <div className="metric-label">Investor Satisfaction</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">4.9<span className="metric-subtext">/5.0</span></div>
                  <div className="metric-label">Average Rating</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">95%</div>
                  <div className="metric-label">Investor Retention Rate</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">500+</div>
                  <div className="metric-label">Active & Past Investors</div>
                </div>
              </div>
              
              <div className="testimonials-grid">
                {testimonials.map(testimonial => (
                  <div className="testimonial-card" key={testimonial.id}>
                    <div className="testimonial-text">"{testimonial.text}"</div>
                    <div className="testimonial-author">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-details">
                        <div className="detail-item">
                          <span className="detail-label">Investment Duration:</span> {testimonial.duration}
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Division:</span> {testimonial.division}
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Role:</span> {testimonial.role}
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Location:</span> {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="privacy-note">
                <p><strong>Privacy & Disclosure:</strong> All testimonials are from verified investors. Names, roles, and locations have been modified or partially redacted to protect privacy. Testimonials reflect individual experiences and do not guarantee future performance. Past results are not indicative of future outcomes.</p>
              </div>
              
              <div className="cta-section">
                <h3>Join Our Community of Investors</h3>
                <p className="cta-subtitle">Experience the structured, transparent, and disciplined approach to private investing with HBC.</p>
                
                                  <div className="cta-buttons">
                                    <Link to="/express-interest" className="btn btn-primary">Express Your Interest</Link>
                                    <Link to="/investments" className="btn btn-secondary">View Investment Divisions</Link>
                                  </div>              </div>
            </div>
          ) : (
            <div className="faq-tab">
              <div className="section-header">
                <h2>Frequently Asked Questions</h2>
                <p className="section-subtitle">Find answers to common questions about investing with HBC, our investment process, capital protection framework, and investor requirements.</p>
              </div>
              
              <div className="faq-container">
                {faqCategories.map((category, index) => (
                  <div className="faq-category" key={index}>
                    <h3 className="faq-category-title">{category.title}</h3>
                    <div className="faq-questions">
                      {category.questions.map((faq, idx) => (
                        <div className={`faq-item ${openFaq === `${index}-${idx}` ? 'active' : ''}`} key={idx}>
                          <button 
                            className="faq-question"
                            onClick={() => setOpenFaq(openFaq === `${index}-${idx}` ? null : `${index}-${idx}`)}
                          >
                            <span>{faq.q}</span>
                            <span className="faq-icon">{openFaq === `${index}-${idx}` ? '-' : '+'}</span>
                          </button>
                          <div className="faq-answer">
                            <p>{faq.a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="additional-questions">
                <h3>Still Have Questions?</h3>
                <p>Our investment team is available to assist you. Contact us directly or express your interest to schedule a confidential consultation.</p>
                
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
                  <Link to="/express-interest" className="btn btn-secondary">Express Interest</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Investor;