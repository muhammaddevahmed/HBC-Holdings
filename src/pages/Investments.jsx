import { Link } from "react-router-dom";
import {
  ArrowRight,
  Car,
  Leaf,
  Gem,
  Shield,
  TrendingUp,
  Clock,
  DollarSign,
  FileText,
  AlertCircle,
  ChevronRight,
  CheckCircle,
  BarChart3,
  Target,
  Sparkles,
  Building,
  Globe,
  Lock,
  Zap,
  Users,
  Award
} from "lucide-react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Card, { CardBody, CardHeader } from "../components/Card";
import "./Investments.css";

export default function Investments() {
  const divisions = [
    {
      id: "mobility",
      icon: <Car className="w-8 h-8" />,
      title: "Mobility Investment Series",
      subtitle: "High-Value Asset & Logistics Investments",
      description:
        "The Mobility Series focuses on investments backed by high-value automotive assets and specialized logistics operations supporting premium transportation and asset utilization. Capital is deployed into assets with established market demand, verifiable value, and liquidity characteristics.",
      image:
        "https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhdXRvbW90aXZlJTIwYXNzZXRzfGVufDF8fHx8MTc2NTg1NDU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: {
        minInvestment: "$50,000",
        minDuration: "24 months",
        targetReturns: "12-18% annually",
        riskProfile: "Moderate",
        liquidity: "Quarterly redemption windows"
      },
      features: [
        "Physical custody of automotive assets under HBC supervision",
        "Comprehensive insurance coverage based on asset value",
        "Diversification across vehicle types and usage profiles",
        "Professional storage, maintenance, and asset management",
        "Exposure to both asset value and operational revenue streams"
      ],
      capitalProtection: [
        "Regular market value monitoring and reassessment",
        "Insurance coverage aligned with asset replacement value",
        "Structured exit and asset liquidation procedures"
      ],
      investmentStructure:
        "Investments are backed directly by luxury vehicles, mobility fleets, and transportation-related revenue assets. Capital is deployed through structured contractual arrangements supported by asset documentation, and defined settlement terms. Returns may be generated through a combination of asset utilization and leasing income, logistics and service-related revenue, and selective asset rotation or disposal.",
      returnsDescription: "Asset utilization and leasing income, logistics revenue, asset appreciation"
    },
    {
      id: "sustainable",
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable & Eco-Investment Series",
      subtitle: "Infrastructure, Sustainability & Emerging Market Exposure",
      description:
        "The Sustainable & Eco-Investment Series focuses on revenue-generating sustainable projects across renewable energy, clean infrastructure, agriculture, and eco-friendly developments in select emerging markets. Our approach emphasizes projects with operational traction, defined cash flows, and alignment with long-term environmental trends.",
      image:
        "https://images.unsplash.com/photo-1758448617761-09367c1748d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBwcm9qZWN0c3xlbnwxfHx8fDE3NjU4NTQ1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: {
        minInvestment: "$100,000",
        minDuration: "24 months",
        targetReturns: "15-22% annually",
        riskProfile: "Moderate to High",
        liquidity: "Annual redemption windows"
      },
      features: [
        "Exposure to income-producing sustainable projects",
        "Geographic diversification across select developing markets",
        "Partnerships with experienced local operators",
        "Access to government incentives and regulatory support",
        "Environmental and operational performance reporting",
        "Alignment with ESG-oriented investment frameworks"
      ],
      capitalProtection: [
        "Revenue contracts with established counterparties",
        "Political and regulatory risk mitigation where applicable",
        "Local partnership structures to support compliance",
        "Phased capital deployment to manage exposure"
      ],
      investmentStructure:
        "Capital is allocated into project-specific investment structures tied to operational or near-operational assets. Deployment prioritizes projects with established or contracted revenue streams to reduce development-stage risk. Cash flows are structured with defined priority mechanisms, supporting capital recovery before profit distribution.",
      returnsDescription: "Project revenue streams, government incentives, environmental credits"
    },
    {
      id: "alternative",
      icon: <Gem className="w-8 h-8" />,
      title: "Alternative Investment Series",
      subtitle: "Diversified Non-Traditional Assets",
      description:
        "The Alternative Investment Series provides access to non-traditional, real-asset-backed opportunities designed to enhance portfolio diversification and provide potential inflation protection. Investments may include precious metals, commodities, secured private lending, trade-backed transactions, and short-cycle real-asset strategies.",
      image:
        "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHRlcm5hdGl2ZSUyMGludmVzdG1lbnRzJTIwYXNzZXRzfGVufDF8fHx8MTc2NTg1NDYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: {
        minInvestment: "$20,000",
        minDuration: "24 months",
        targetReturns: "10-16% annually",
        riskProfile: "High",
        liquidity: "Semi-annual redemption windows"
      },
      features: [
        "Allocation across multiple alternative asset classes",
        "Trade-backed and secured lending opportunities",
        "Short-cycle real-asset investments with defined timelines",
        "Access to institutional-grade structures",
        "Low correlation to traditional equity and fixed-income markets"
      ],
      capitalProtection: [
        "Structured transactions with defined collateral or security",
        "Diversification across asset types and counterparties",
        "Independent verification or documentation where applicable",
        "Defined recovery and settlement procedures"
      ],
      investmentStructure:
        "Investments are deployed through structured contractual arrangements tied to specific assets, trades, or secured positions. Each opportunity is assessed individually, with capital allocated based on asset coverage, transaction duration, and downside risk controls. HBC avoids open-ended exposure and prioritizes clearly defined investment cycles and exit pathways.",
      returnsDescription: "Asset appreciation, secured lending returns, trade-based profits"
    }
  ];

  const investmentHighlights = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Flexible Entry Points",
      description: "Minimum investments range from USD 25,000 to USD 100,000 depending on division."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Asset-Backed Focus",
      description: "Every program is supported by tangible assets, contractual revenue, or secured structures."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Defined Investment Terms",
      description: "Lock-in periods, exit rules, and settlement processes are outlined upfront."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Capital Protection Framework",
      description: "Multi-layered protection measures across all investment programs."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Professional Governance",
      description: "Structured oversight, compliance standards, and transparent reporting."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Investor Partnership",
      description: "Long-term alignment with investor interests and objectives."
    }
  ];

  return (
    <Layout activePage="/investments">
      {/* Hero Section */}
      <section className="investments-hero-section">
        <div className="hero-pattern"></div>
        <div className="investments-hero-content">
          <div className="investments-hero-text-container">
            <div className="hero-badge">
              <Sparkles className="hero-badge-icon" />
              <span>Structured Asset-Backed Opportunities</span>
            </div>
            <h1 className="investments-hero-title">
              Strategic <span className="highlight">Investment Divisions</span>
            </h1>
            <p className="investments-hero-description">
              Three distinct investment arms designed to provide access to structured, 
              asset-backed opportunities across multiple sectors. Each division follows 
              defined investment terms, disciplined deployment, and a focus on capital protection.
            </p>
            
            <div className="division-navigation">
              <span className="nav-label">Explore Our Divisions:</span>
              <div className="nav-buttons">
                {divisions.map((division) => (
                  <a
                    key={division.id}
                    href={`#${division.id}`}
                    className="nav-button"
                  >
                    {division.icon}
                    <span>{division.title.split(" ")[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="why-invest-section">
        <div className="why-invest-content">
          <div className="section-header">
            <h2 className="section-title">
              Institutional Discipline. <span className="accent">Practical Structures.</span>
            </h2>
            <p className="section-subtitle">
              HBC combines institutional investment discipline with pragmatic execution, 
              offering qualified investors access to non-traditional opportunities through 
              clear structures and defined risk frameworks.
            </p>
          </div>

          <div className="highlights-grid">
            {investmentHighlights.map((highlight, index) => (
              <Card key={index} className="highlight-card">
                <CardBody>
                  <div className="highlight-card-content">
                    <div className="highlight-icon">
                      {highlight.icon}
                    </div>
                    <h3 className="highlight-title">{highlight.title}</h3>
                    <p className="highlight-description">{highlight.description}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Division Details */}
      {divisions.map((division, index) => (
        <section
          key={division.id}
          id={division.id}
          className={`division-section ${index % 2 === 0 ? "even" : "odd"}`}
        >
          <div className="division-content">
            <div className="division-header">
              <div className="division-label">
                <div className="division-icon">{division.icon}</div>
                <span>Division {String.fromCharCode(65 + index)}</span>
              </div>
              <h2 className="division-title">{division.title}</h2>
              <p className="division-subtitle">{division.subtitle}</p>
            </div>

            <div className="division-grid">
              <div className="division-image-container">
                <img
                  src={division.image}
                  alt={division.title}
                  className="division-image"
                />
                <div className="image-overlay">
                  <div className="overlay-badge">
                    <Target className="w-4 h-4" />
                    <span>Structured Investment</span>
                  </div>
                </div>
              </div>

              <div className="division-details">
                <div className="overview-section">
                  <h3 className="section-heading">Overview</h3>
                  <p className="overview-text">{division.description}</p>
                </div>

                {/* Investment Details */}
                <div className="details-section">
                  <h3 className="section-heading">Investment Details</h3>
                  <div className="details-grid">
                    <div className="detail-card">
                      <div className="detail-icon">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <div className="detail-content">
                        <span className="detail-label">Minimum Investment</span>
                        <span className="detail-value">{division.details.minInvestment}</span>
                      </div>
                    </div>
                    <div className="detail-card">
                      <div className="detail-icon">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="detail-content">
                        <span className="detail-label">Minimum Duration</span>
                        <span className="detail-value">{division.details.minDuration}</span>
                      </div>
                    </div>
                    <div className="detail-card">
                      <div className="detail-icon">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div className="detail-content">
                        <span className="detail-label">Target Returns</span>
                        <span className="detail-value returns">{division.details.targetReturns}</span>
                      </div>
                    </div>
                    <div className="detail-card">
                      <div className="detail-icon">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div className="detail-content">
                        <span className="detail-label">Risk Profile</span>
                        <span className="detail-value risk">{division.details.riskProfile}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="features-section">
                  <h3 className="section-heading">
                    <CheckCircle className="section-heading-icon" />
                    Key Features & Advantages
                  </h3>
                  <div className="features-list">
                    {division.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <div className="feature-check">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capital Protection */}
                <div className="protection-section">
                  <h3 className="section-heading">
                    <Shield className="section-heading-icon" />
                    Capital Protection Measures
                  </h3>
                  <div className="protection-list">
                    {division.capitalProtection.map((measure, idx) => (
                      <div key={idx} className="protection-item">
                        <div className="protection-icon">
                          <Lock className="w-4 h-4" />
                        </div>
                        <span className="protection-text">{measure}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment Structure */}
                <div className="structure-section">
                  <h3 className="section-heading">
                    <FileText className="section-heading-icon" />
                    Investment Structure
                  </h3>
                  <div className="structure-content">
                    <p className="structure-text">{division.investmentStructure}</p>
                    <div className="returns-info">
                      <TrendingUp className="returns-icon" />
                      <span className="returns-label">Returns may include: {division.returnsDescription}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="division-cta">
                  <Link to="/express-interest">
                    <Button className="express-interest-btn">
                      Express Interest
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to={`/investor-hub/${division.id}`}>
                    <Button variant="outline" className="learn-more-btn">
                      View Detailed Terms
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Risk Disclaimer */}
      <section className="risk-disclaimer-section">
        <div className="risk-disclaimer-content">
          <div className="risk-disclaimer-header">
            <AlertCircle className="risk-icon" />
            <h3 className="risk-title">Important Investment Disclaimer</h3>
          </div>
          <div className="risk-disclaimer-body">
            <p className="risk-text">
              All investments carry risk, including the potential loss of principal. 
              Target returns are projections based on historical performance and current 
              market conditions and are not guaranteed. Past performance is not indicative 
              of future results.
            </p>
            <p className="risk-text">
              The information provided does not constitute financial, legal, or tax advice. 
              Investors should carefully review all offering materials and consult qualified 
              advisors before making any investment decision. Investment opportunities are 
              suitable only for investors who can afford to bear the risk of loss.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="investments-cta-section">
        <div className="investments-cta-content">
          <div className="cta-badge">
            <Sparkles className="cta-badge-icon" />
            <span>Exclusive Opportunities</span>
          </div>
          <h2 className="cta-title">Ready to Diversify Your Portfolio?</h2>
          <p className="cta-subtitle">
            Our investment team is available to discuss how these opportunities 
            may align with your financial objectives and risk tolerance.
          </p>
          <div className="cta-buttons">
            <Link to="/express-interest">
              <Button size="lg" className="primary-cta-btn">
                Express Interest
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="secondary-cta-btn">
                Schedule Consultation
              </Button>
            </Link>
          </div>
          <div className="trust-signals">
            <div className="trust-signal">
              <Shield className="trust-icon" />
              <span>Confidential Process</span>
            </div>
            <div className="trust-signal">
              <Clock className="trust-icon" />
              <span>24-Hour Response Time</span>
            </div>
            <div className="trust-signal">
              <Award className="trust-icon" />
              <span>Comprehensive Due Diligence</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}