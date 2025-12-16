import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Layout from "../components/Layout";
import Card, { CardBody } from "../components/Card";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "Who can invest with HBC Holdings?",
          answer:
            "Our investment opportunities are available to accredited investors who meet the qualification requirements defined by applicable securities regulations. Generally, this includes individuals with annual income exceeding $200,000 ($300,000 joint) for the past two years, or net worth exceeding $1 million excluding primary residence. Entity investors must meet similar threshold requirements.",
        },
        {
          question: "What is the minimum investment amount?",
          answer:
            "Minimum investment amounts vary by division: Sustainable & Emerging Markets requires $25,000 minimum; Luxury Automotive & Logistics requires $50,000 minimum; and Alternative Investments requires $100,000 minimum. We can discuss customized solutions for larger investment amounts across multiple divisions.",
        },
        {
          question: "How do I get started?",
          answer:
            "Begin by expressing your interest through our online form or contacting our team directly. We'll schedule a confidential consultation to discuss your investment objectives, review available opportunities, and explain our onboarding process. If you decide to proceed, we'll guide you through the qualification assessment, due diligence review, and KYC/AML compliance requirements.",
        },
      ],
    },
    {
      category: "Investment Process",
      questions: [
        {
          question: "How does your investment process work?",
          answer:
            "Our process follows seven structured steps: (1) Initial Inquiry and consultation, (2) Qualification Assessment to verify accreditation status, (3) Due Diligence Review where you receive comprehensive investment materials, (4) KYC/AML Compliance verification, (5) Agreement Execution with electronic signature, (6) Capital Deployment to escrow account, and (7) Investor Portal Access for ongoing management and reporting.",
        },
        {
          question: "What documents will I need to provide?",
          answer:
            "You'll need to provide: government-issued photo identification (passport or driver's license), proof of address (utility bill or bank statement), accreditation verification (tax returns, CPA letter, or brokerage statement), and source of funds documentation. For entity investors, additional corporate documents including formation documents, beneficial ownership information, and board resolutions may be required.",
        },
        {
          question: "How long does onboarding take?",
          answer:
            "The complete onboarding process typically takes 3-4 weeks from initial inquiry to capital deployment. This timeline includes qualification assessment (2-3 days), due diligence review period (5-7 days), KYC/AML compliance (3-5 days), agreement execution (2-3 days), and capital transfer (3-5 days). We strive to make the process as efficient as possible while maintaining compliance standards.",
        },
      ],
    },
    {
      category: "Capital Protection & Risk",
      questions: [
        {
          question: "How is my capital protected?",
          answer:
            "We employ a four-layer capital protection framework: (1) Asset Backing - all investments secured by physical assets with independently verified value, (2) Legal Structure - bankruptcy-remote SPVs with clear creditor priority, (3) Insurance & Custody - comprehensive coverage with established third-party custodians, and (4) Risk Management - continuous monitoring, diversification requirements, and stress testing. This multi-layered approach provides robust protection for investor capital.",
        },
        {
          question: "What are the main risks I should understand?",
          answer:
            "All investments carry risk, including potential loss of principal. Key risks include: market risk (asset value fluctuations), liquidity risk (limited redemption windows), operational risk (management and execution), counterparty risk (third-party dependencies), and regulatory risk (changes in laws or regulations). Our comprehensive risk disclosure documents provide detailed information about all material risks associated with each investment division.",
        },
        {
          question: "Are the projected returns guaranteed?",
          answer:
            "No. Target returns are projections based on historical performance, current market conditions, and our investment analysis. They are not guaranteed and actual results may differ materially. Past performance does not guarantee future results. All investments carry the risk of loss, and you could lose some or all of your invested capital.",
        },
        {
          question: "What happens if an underlying asset loses value?",
          answer:
            "Our conservative loan-to-value ratios (typically 60% or less) provide a buffer against asset value fluctuations. We conduct regular revaluations and maintain excess collateral coverage. If asset values decline significantly, we may: (1) require additional collateral, (2) liquidate positions early, (3) adjust portfolio allocations, or (4) implement other protective measures. Investor capital has priority in the waterfall structure.",
        },
      ],
    },
    {
      category: "Investment Terms & Liquidity",
      questions: [
        {
          question: "What are the investment durations?",
          answer:
            "Investment durations vary by division: Luxury Automotive & Logistics (24-36 months), Sustainable & Emerging Markets (36-48 months), and Alternative Investments (18-60 months depending on asset type). Each investment has a specific term outlined in the subscription agreement, with potential for early exit subject to liquidity provisions.",
        },
        {
          question: "Can I withdraw my investment early?",
          answer:
            "Limited liquidity options are available during designated redemption windows: Luxury Automotive & Logistics offers quarterly redemption windows, Sustainable & Emerging Markets offers annual windows, and Alternative Investments offers semi-annual windows. Early redemption requests are subject to available liquidity, may require advance notice (typically 30-90 days), and may be subject to early withdrawal penalties. Redemptions are not guaranteed and may be limited during periods of market stress.",
        },
        {
          question: "How are returns distributed?",
          answer:
            "Return distribution frequency depends on the investment division and specific terms. Generally, income-generating investments may provide quarterly distributions, while appreciation-focused investments typically distribute returns at maturity or redemption. All distributions are automatically reinvested unless you elect to receive cash distributions. You'll receive advance notice before any distribution event.",
        },
      ],
    },
    {
      category: "Reporting & Transparency",
      questions: [
        {
          question: "What kind of reporting will I receive?",
          answer:
            "Investors receive: (1) Monthly portfolio statements showing current positions and values, (2) Quarterly performance reports with detailed analytics, (3) Annual audited financial statements, (4) Real-time access to the investor portal with current holdings and documents, and (5) Ad-hoc updates for material events or changes. All reports comply with industry standards and regulatory requirements.",
        },
        {
          question: "Can I see the underlying assets?",
          answer:
            "Yes. We provide full transparency on underlying asset holdings. Investors have access through the portal to: detailed asset listings, current valuations, independent appraisal reports, insurance documentation, and custody confirmations. For certain asset classes like automotive investments, we can arrange physical inspections with advance notice.",
        },
        {
          question: "How often are assets valued?",
          answer:
            "Valuation frequency varies by asset class: liquid assets (daily market pricing), automotive assets (monthly monitoring with quarterly independent appraisals), real assets (quarterly valuations), and alternative assets (semi-annual to annual independent valuations). All valuations follow industry-standard methodologies and are performed by independent third parties where applicable.",
        },
      ],
    },
    {
      category: "Fees & Costs",
      questions: [
        {
          question: "What fees will I pay?",
          answer:
            "Our fee structure is transparent and competitive: Management Fee (1.5-2.0% annually on committed capital, depending on division), Performance Fee (15-20% of returns above the hurdle rate), and Administrative Fees (actual third-party costs for custody, valuation, legal, and audit services). All fees are clearly disclosed in the offering documents with no hidden charges. The performance fee includes a preferred return (hurdle rate) ensuring investors receive priority returns before performance fees apply.",
        },
        {
          question: "Are there any upfront fees?",
          answer:
            "There are no upfront fees, placement fees, or subscription fees. You pay only the ongoing management fee and performance fee based on results. Third-party costs (legal review, wire transfers, etc.) are borne by investors but are minimal and disclosed in advance.",
        },
      ],
    },
    {
      category: "Tax & Legal",
      questions: [
        {
          question: "What are the tax implications?",
          answer:
            "Tax treatment varies based on investment structure, your residency, and entity type. Generally, investments are structured as pass-through entities for tax purposes. You'll receive annual K-1 forms (for US investors) or appropriate tax reporting documents. We strongly recommend consulting with a qualified tax advisor regarding your specific situation. HBC Holdings does not provide tax advice.",
        },
        {
          question:
            "Can I invest through an entity (LLC, trust, retirement account)?",
          answer:
            "Yes. We accept investments from various entity types including: LLCs, corporations, trusts, family offices, and certain retirement accounts (subject to UBTI considerations). Entity investments require additional documentation including formation documents, beneficial ownership information, and authorized signatory verification. Our team can guide you through the entity investment process.",
        },
      ],
    },
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout activePage="/faq">
      {/* Hero Section */}
      <section className="faq-hero-section">
        <div className="faq-hero-content">
          <div className="faq-hero-text-container">
            <div className="faq-hero-icon-container">
              <HelpCircle className="faq-hero-icon" />
            </div>
            <h1 className="faq-hero-title">
              Frequently Asked{" "}
              <span className="faq-hero-title-highlight">Questions</span>
            </h1>
            <p className="faq-hero-description">
              Find answers to common questions about investing with HBC
              Holdings, our process, capital protection framework, and investor
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content-section">
        <div className="faq-content">
          <div className="faq-categories">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="faq-category-title">{category.category}</h3>
                <div className="faq-questions">
                  {category.questions.map((item, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === index;

                    return (
                      <Card key={questionIndex} className="faq-question-card">
                        <button
                          onClick={() =>
                            toggleQuestion(categoryIndex, questionIndex)
                          }
                          className="faq-question-button"
                        >
                          <div className="faq-question-header">
                            <h5 className="faq-question-title">
                              {item.question}
                            </h5>
                            <ChevronDown
                              className={`faq-question-icon ${
                                isOpen ? "open" : ""
                              }`}
                            />
                          </div>
                        </button>
                        {isOpen && (
                          <div className="faq-answer-container">
                            <div className="faq-answer">
                              <p className="faq-answer-text">{item.answer}</p>
                            </div>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="still-have-questions-section">
        <div className="still-have-questions-content">
          <h2 className="still-have-questions-title">
            Still Have{" "}
            <span className="still-have-questions-title-highlight">
              Questions?
            </span>
          </h2>
          <p className="still-have-questions-subtitle">
            Our investment team is here to help. Contact us directly or express
            your interest to schedule a confidential consultation.
          </p>
          <div className="still-have-questions-buttons">
            <Link to="/contact">
              <button className="contact-button">Contact Our Team</button>
            </Link>
            <Link to="/express-interest">
              <button className="express-interest-button">
                Express Interest
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
