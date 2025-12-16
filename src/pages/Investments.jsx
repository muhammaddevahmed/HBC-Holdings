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
} from "lucide-react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Card, { CardBody, CardHeader } from "../components/Card";
import "./Investments.css";

export default function Investments() {
  const divisions = [
    {
      id: "automotive",
      icon: <Car className="w-8 h-8" />,
      title: "Luxury Automotive & Logistics",
      subtitle: "High-Value Asset Investments",
      description:
        "Strategic investments in luxury and exotic automotive assets, combined with logistics infrastructure that serves high-value transportation needs. Each investment is backed by physical assets with verified market value and strong liquidity profiles.",
      image:
        "https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY1NzEzNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: {
        minInvestment: "$50,000",
        targetReturns: "12-18% annually",
        duration: "24-36 months",
        riskLevel: "Moderate",
        liquidity: "Quarterly redemption windows",
      },
      features: [
        "Physical custody of all automotive assets",
        "Independent appraisals from certified valuers",
        "Insurance coverage for full asset value",
        "Diversification across multiple vehicle categories",
        "Professional storage and maintenance",
        "Exit strategy through established dealer networks",
      ],
      capitalProtection: [
        "Asset value typically exceeds loan-to-value ratio of 60%",
        "Monthly market value monitoring",
        "Comprehensive insurance coverage",
        "Legal ownership structure with clear investor priority",
      ],
      investmentStructure:
        "Investors participate through a dedicated special purpose vehicle (SPV) that holds title to the underlying automotive assets and logistics contracts. Returns are generated through a combination of asset appreciation, rental income, and logistics service fees.",
    },
    {
      id: "sustainable",
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable & Emerging Markets",
      subtitle: "Growth-Oriented Green Investments",
      description:
        "Focused investments in renewable energy projects, sustainable agriculture, and emerging market opportunities that combine environmental impact with attractive financial returns. Our approach targets projects with strong fundamentals in rapidly growing sectors.",
      image:
        "https://images.unsplash.com/photo-1758448617761-09367c1748d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NjU4MDk5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: {
        minInvestment: "$25,000",
        targetReturns: "15-22% annually",
        duration: "36-48 months",
        riskLevel: "Moderate-High",
        liquidity: "Annual redemption windows",
      },
      features: [
        "Focus on revenue-generating sustainable projects",
        "Geographic diversification across emerging markets",
        "Partnership with established local operators",
        "Government incentives and subsidies where applicable",
        "Environmental impact reporting",
        "Alignment with ESG investment criteria",
      ],
      capitalProtection: [
        "Revenue contracts with credit-worthy counterparties",
        "Physical asset backing (solar panels, equipment, land)",
        "Political risk insurance in emerging markets",
        "Local partnership structures for regulatory protection",
      ],
      investmentStructure:
        "Investments are structured through project-specific SPVs with clear cash flow priorities. Capital is deployed into operational or near-operational projects with established revenue streams, reducing development risk.",
    },
    {
      id: "alternative",
      icon: <Gem className="w-8 h-8" />,
      title: "Alternative Investments",
      subtitle: "Diversified Non-Traditional Assets",
      description:
        "Sophisticated investments in precious metals, commodities, art, collectibles, and other alternative asset classes that provide portfolio diversification and inflation protection. Each opportunity is carefully selected for its store-of-value characteristics and market liquidity.",
      image:
        "https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHRlcm5hdGl2ZSUyMGludmVzdG1lbnQlMjBnb2xkfGVufDF8fHx8MTc2NTgwOTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      details: {
        minInvestment: "$100,000",
        targetReturns: "10-16% annually",
        duration: "18-60 months",
        riskLevel: "Moderate",
        liquidity: "Semi-annual redemption windows",
      },
      features: [
        "Allocation across multiple alternative asset categories",
        "Physical storage in secured, insured facilities",
        "Regular independent valuations",
        "Access to institutional-grade opportunities",
        "Low correlation with traditional markets",
        "Inflation hedge characteristics",
      ],
      capitalProtection: [
        "Physical possession and third-party custody",
        "All-risk insurance coverage",
        "Diversification across asset types and storage locations",
        "Independent authentication and grading where applicable",
      ],
      investmentStructure:
        "A master fund structure allows for diversification across multiple alternative asset categories while maintaining operational efficiency. Assets are held through specialized custody arrangements with established vault operators and secure storage facilities.",
    },
  ];

  return (
    <Layout activePage="/investments">
      {/* Hero Section with Gradient Overlay */}
      <section className="investments-hero-section">
        <div className="investments-hero-overlay"></div>
        <div className="investments-hero-content">
          <div className="investments-hero-text-container">
            <div className="badge-container">
              <span className="badge">
                <Sparkles className="w-4 h-4" />
                Institutional Grade
              </span>
            </div>
            <h1 className="investments-hero-title">
              Strategic <span className="investments-hero-title-highlight">Investment</span> Divisions
            </h1>
            <p className="investments-hero-description">
              Three specialized investment arms, each engineered to deliver superior 
              risk-adjusted returns through meticulously structured, asset-backed opportunities.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">$25K+</div>
                <div className="stat-label">Minimum Investment</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10-22%</div>
                <div className="stat-label">Target Returns</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Asset Backed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="division-nav-section">
        <div className="division-nav-content">
          <h3 className="division-nav-title">Explore Our Divisions</h3>
          <div className="division-nav-tabs">
            {divisions.map((division) => (
              <a
                key={division.id}
                href={`#${division.id}`}
                className="division-nav-tab"
              >
                {division.icon}
                <span>{division.title.split(" ")[0]}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Cards with Hover Effects */}
      <section className="overview-cards-section">
        <div className="overview-cards-content">
          <h3 className="section-heading">Why Invest With Us</h3>
          <p className="section-subheading">
            Combining institutional rigor with innovative investment strategies
          </p>
          <div className="overview-cards-grid">
            <div className="overview-card overview-card-1">
              <div className="overview-card-inner">
                <DollarSign className="overview-card-icon" />
                <h4 className="overview-card-title">Flexible Entry Points</h4>
                <p className="overview-card-description">
                  Minimum investments starting from $25,000 across different divisions
                </p>
                <div className="overview-card-cta">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="overview-card overview-card-2">
              <div className="overview-card-inner">
                <Shield className="overview-card-icon" />
                <h4 className="overview-card-title">Asset-Backed Security</h4>
                <p className="overview-card-description">
                  Every investment secured by tangible, independently valued assets
                </p>
                <div className="overview-card-cta">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="overview-card overview-card-3">
              <div className="overview-card-inner">
                <TrendingUp className="overview-card-icon" />
                <h4 className="overview-card-title">Consistent Returns</h4>
                <p className="overview-card-description">
                  Target returns of 10-22% annually depending on division and risk profile
                </p>
                <div className="overview-card-cta">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Division Details with Enhanced Styling */}
      {divisions.map((division, index) => (
        <section
          key={division.id}
          id={division.id}
          className={`division-details-section ${
            index % 2 === 0 ? "even" : "odd"
          }`}
        >
          <div className="division-details-content">
            <div className="division-header">
              <div className="division-badge">
                <div className="division-icon-container">{division.icon}</div>
                <span>Division {index + 1}</span>
              </div>
            </div>
            <div
              className={`division-details-grid ${
                index % 2 === 1 ? "odd" : ""
              }`}
            >
              {/* Image with Overlay */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="division-image-container">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="division-image"
                  />
                  <div className="division-image-overlay">
                    <div className="overlay-badge">
                      <Target className="w-4 h-4" />
                      Institutional Focus
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`division-content ${
                  index % 2 === 1 ? "odd" : "even"
                }`}
              >
                <h2 className="division-title">{division.title}</h2>
                <p className="division-subtitle">{division.subtitle}</p>
                <p className="division-description">{division.description}</p>

                {/* Key Details Card with Enhanced Design */}
                <Card className="investment-details-card">
                  <CardHeader>
                    <div className="card-header-icon">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <h4>Investment Details</h4>
                  </CardHeader>
                  <CardBody>
                    <div className="investment-details-grid">
                      {Object.entries(division.details).map(([key, value]) => (
                        <div key={key} className="detail-item">
                          <div className="detail-label">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </div>
                          <div className={`detail-value ${key === 'targetReturns' ? 'returns' : ''}`}>
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                {/* Key Features with Enhanced Visuals */}
                <div className="features-container">
                  <h4 className="container-title">
                    <div className="title-icon-wrapper">
                      <TrendingUp className="container-title-icon" />
                    </div>
                    Key Features & Advantages
                  </h4>
                  <div className="features-grid">
                    {division.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <div className="feature-icon-container">
                          <CheckCircle className="feature-icon" />
                        </div>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capital Protection with Enhanced Design */}
                <div className="protection-container">
                  <h4 className="container-title">
                    <div className="title-icon-wrapper">
                      <Shield className="container-title-icon" />
                    </div>
                    Capital Protection Measures
                  </h4>
                  <div className="protection-measures">
                    <div className="protection-measures-list">
                      {division.capitalProtection.map((measure, idx) => (
                        <div key={idx} className="protection-measure-item">
                          <div className="protection-measure-icon-container">
                            <Shield className="protection-measure-icon" />
                          </div>
                          <span className="protection-measure-text">
                            {measure}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Investment Structure */}
                <div className="structure-container">
                  <h4 className="container-title">
                    <div className="title-icon-wrapper">
                      <FileText className="container-title-icon" />
                    </div>
                    Investment Structure
                  </h4>
                  <p className="structure-text">
                    {division.investmentStructure}
                  </p>
                </div>

                {/* CTA Buttons with Enhanced Styling */}
                <div className="division-cta-buttons">
                  <Link to="/express-interest">
                    <Button className="express-interest-btn">
                      <span>Express Interest</span>
                      <div className="button-icon-wrapper">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Button>
                  </Link>
                  <Link to={`/investor-hub/${division.id}`}>
                    <Button variant="outline" className="detailed-info-btn">
                      <span>Detailed Information</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Risk Disclaimer with Enhanced Design */}
      <section className="risk-disclaimer-section">
        <div className="risk-disclaimer-content">
          <div className="risk-disclaimer-flex">
            <div className="risk-disclaimer-icon-container">
              <AlertCircle className="risk-disclaimer-icon" />
            </div>
            <div className="risk-disclaimer-text-container">
              <h5 className="risk-disclaimer-title">
                Important Investment Disclaimer
              </h5>
              <p className="risk-disclaimer-text">
                All investments carry risk, including the potential loss of
                principal. Target returns are projections based on historical
                performance and current market conditions and are not
                guaranteed. Past performance is not indicative of future
                results. The information provided does not constitute financial
                advice. Investors should carefully review all offering documents
                and consult with qualified financial, legal, and tax advisors
                before making any investment decision. Investments are suitable
                only for sophisticated investors who can afford to lose their
                entire investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Visuals */}
      <section className="cta-section">
        <div className="cta-pattern"></div>
        <div className="cta-content">
          <div className="cta-badge">
            <Sparkles className="w-5 h-5" />
            Exclusive Opportunities
          </div>
          <h2 className="cta-title">Ready to Diversify Your Portfolio?</h2>
          <p className="cta-subtitle">
            Our investment team is ready to discuss how these opportunities
            align with your financial objectives and risk tolerance. Express
            your interest today for a confidential consultation.
          </p>
          <div className="cta-buttons">
            <Link to="/express-interest">
              <Button size="lg" className="cta-primary-btn">
                <span>Express Interest</span>
                <div className="button-icon-wrapper-lg">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="contact-us-button">
                Schedule Consultation
              </Button>
            </Link>
          </div>
          <div className="cta-footer">
            <div className="cta-footer-item">
              <Shield className="w-5 h-5" />
              <span>Confidential Process</span>
            </div>
            <div className="cta-footer-item">
              <Clock className="w-5 h-5" />
              <span>24h Response Time</span>
            </div>
            <div className="cta-footer-item">
              <FileText className="w-5 h-5" />
              <span>Comprehensive Due Diligence</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}