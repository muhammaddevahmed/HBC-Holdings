import { Link } from 'react-router-dom';
import { ArrowRight, Car, Leaf, Gem, Shield, TrendingUp, Clock, DollarSign, FileText, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card, { CardBody, CardHeader } from '../components/Card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import './Investments.css';

export default function Investments() {
  const divisions = [
    {
      id: 'automotive',
      icon: <Car className="w-8 h-8" />,
      title: 'Luxury Automotive & Logistics',
      subtitle: 'High-Value Asset Investments',
      description: 'Strategic investments in luxury and exotic automotive assets, combined with logistics infrastructure that serves high-value transportation needs. Each investment is backed by physical assets with verified market value and strong liquidity profiles.',
      image: 'https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY1NzEzNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        minInvestment: '$50,000',
        targetReturns: '12-18% annually',
        duration: '24-36 months',
        riskLevel: 'Moderate',
        liquidity: 'Quarterly redemption windows'
      },
      features: [
        'Physical custody of all automotive assets',
        'Independent appraisals from certified valuers',
        'Insurance coverage for full asset value',
        'Diversification across multiple vehicle categories',
        'Professional storage and maintenance',
        'Exit strategy through established dealer networks'
      ],
      capitalProtection: [
        'Asset value typically exceeds loan-to-value ratio of 60%',
        'Monthly market value monitoring',
        'Comprehensive insurance coverage',
        'Legal ownership structure with clear investor priority'
      ],
      investmentStructure: 'Investors participate through a dedicated special purpose vehicle (SPV) that holds title to the underlying automotive assets and logistics contracts. Returns are generated through a combination of asset appreciation, rental income, and logistics service fees.'
    },
    {
      id: 'sustainable',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainable & Emerging Markets',
      subtitle: 'Growth-Oriented Green Investments',
      description: 'Focused investments in renewable energy projects, sustainable agriculture, and emerging market opportunities that combine environmental impact with attractive financial returns. Our approach targets projects with strong fundamentals in rapidly growing sectors.',
      image: 'https://images.unsplash.com/photo-1758448617761-09367c1748d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3NjU4MDk5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        minInvestment: '$25,000',
        targetReturns: '15-22% annually',
        duration: '36-48 months',
        riskLevel: 'Moderate-High',
        liquidity: 'Annual redemption windows'
      },
      features: [
        'Focus on revenue-generating sustainable projects',
        'Geographic diversification across emerging markets',
        'Partnership with established local operators',
        'Government incentives and subsidies where applicable',
        'Environmental impact reporting',
        'Alignment with ESG investment criteria'
      ],
      capitalProtection: [
        'Revenue contracts with credit-worthy counterparties',
        'Physical asset backing (solar panels, equipment, land)',
        'Political risk insurance in emerging markets',
        'Local partnership structures for regulatory protection'
      ],
      investmentStructure: 'Investments are structured through project-specific SPVs with clear cash flow priorities. Capital is deployed into operational or near-operational projects with established revenue streams, reducing development risk.'
    },
    {
      id: 'alternative',
      icon: <Gem className="w-8 h-8" />,
      title: 'Alternative Investments',
      subtitle: 'Diversified Non-Traditional Assets',
      description: 'Sophisticated investments in precious metals, commodities, art, collectibles, and other alternative asset classes that provide portfolio diversification and inflation protection. Each opportunity is carefully selected for its store-of-value characteristics and market liquidity.',
      image: 'https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHRlcm5hdGl2ZSUyMGludmVzdG1lbnQlMjBnb2xkfGVufDF8fHx8MTc2NTgwOTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: {
        minInvestment: '$100,000',
        targetReturns: '10-16% annually',
        duration: '18-60 months',
        riskLevel: 'Moderate',
        liquidity: 'Semi-annual redemption windows'
      },
      features: [
        'Allocation across multiple alternative asset categories',
        'Physical storage in secured, insured facilities',
        'Regular independent valuations',
        'Access to institutional-grade opportunities',
        'Low correlation with traditional markets',
        'Inflation hedge characteristics'
      ],
      capitalProtection: [
        'Physical possession and third-party custody',
        'All-risk insurance coverage',
        'Diversification across asset types and storage locations',
        'Independent authentication and grading where applicable'
      ],
      investmentStructure: 'A master fund structure allows for diversification across multiple alternative asset categories while maintaining operational efficiency. Assets are held through specialized custody arrangements with established vault operators and secure storage facilities.'
    }
  ];

  return (
    <Layout activePage="/investments">
      {/* Hero Section */}
      <section className="investments-hero-section">
        <div className="investments-hero-content">
          <div className="investments-hero-text-container">
            <h1 className="investments-hero-title">
              Investment <span className="investments-hero-title-highlight">Divisions</span>
            </h1>
            <p className="investments-hero-description">
              Three specialized investment arms, each designed to deliver superior risk-adjusted returns 
              through carefully structured, asset-backed opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="overview-cards-section">
        <div className="overview-cards-content">
          <div className="overview-cards-grid">
            <div className="overview-card overview-card-1">
              <DollarSign className="overview-card-icon" />
              <h4 className="overview-card-title">Flexible Entry Points</h4>
              <p className="overview-card-description">
                Minimum investments starting from $25,000 across different divisions
              </p>
            </div>
            <div className="overview-card overview-card-2">
              <Shield className="overview-card-icon" />
              <h4 className="overview-card-title">Asset-Backed Security</h4>
              <p className="overview-card-description">
                Every investment secured by tangible, independently valued assets
              </p>
            </div>
            <div className="overview-card overview-card-3">
              <TrendingUp className="overview-card-icon" />
              <h4 className="overview-card-title">Consistent Returns</h4>
              <p className="overview-card-description">
                Target returns of 10-22% annually depending on division and risk profile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Division Details */}
      {divisions.map((division, index) => (
        <section 
          key={division.id} 
          id={division.id}
          className={`division-details-section ${index % 2 === 0 ? 'even' : 'odd'}`}
        >
          <div className="division-details-content">
            <div className={`division-details-grid ${index % 2 === 1 ? 'odd' : ''}`}>
              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="division-image-container">
                  <ImageWithFallback
                    src={division.image}
                    alt={division.title}
                    className="division-image"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`division-content ${index % 2 === 1 ? 'odd' : 'even'}`}>
                <div className="division-icon-container">
                  {division.icon}
                </div>
                <h2 className="division-title">{division.title}</h2>
                <p className="division-subtitle">{division.subtitle}</p>
                <p className="division-description">{division.description}</p>

                {/* Key Details */}
                <Card className="investment-details-card">
                  <CardHeader>
                    <h4>Investment Details</h4>
                  </CardHeader>
                  <CardBody>
                    <div className="investment-details-grid">
                      <div>
                        <div className="detail-label">Minimum Investment</div>
                        <div className="detail-value">{division.details.minInvestment}</div>
                      </div>
                      <div>
                        <div className="detail-label">Target Returns</div>
                        <div className="detail-value returns">{division.details.targetReturns}</div>
                      </div>
                      <div>
                        <div className="detail-label">Investment Duration</div>
                        <div className="detail-value">{division.details.duration}</div>
                      </div>
                      <div>
                        <div className="detail-label">Risk Level</div>
                        <div className="detail-value">{division.details.riskLevel}</div>
                      </div>
                    </div>
                    <div className="liquidity-details">
                      <div className="detail-label">Liquidity Options</div>
                      <div className="detail-value">{division.details.liquidity}</div>
                    </div>
                  </CardBody>
                </Card>

                {/* Key Features */}
                <div className="features-container">
                  <h4 className="container-title">
                    <TrendingUp className="container-title-icon" />
                    Key Features
                  </h4>
                  <div className="features-grid">
                    {division.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <div className="feature-bullet-container">
                          <div className="feature-bullet"></div>
                        </div>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capital Protection */}
                <div className="protection-container">
                  <h4 className="container-title">
                    <Shield className="container-title-icon" />
                    Capital Protection Measures
                  </h4>
                  <div className="protection-measures">
                    <div className="protection-measures-list">
                      {division.capitalProtection.map((measure, idx) => (
                        <div key={idx} className="protection-measure-item">
                          <AlertCircle className="protection-measure-icon" />
                          <span className="protection-measure-text">{measure}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Investment Structure */}
                <div className="structure-container">
                  <h4 className="container-title">
                    <FileText className="container-title-icon" />
                    Investment Structure
                  </h4>
                  <p className="structure-text">
                    {division.investmentStructure}
                  </p>
                </div>

                {/* CTA */}
                <div className="division-cta-buttons">
                  <Link to="/express-interest">
                  <Button>
                    Express Interest
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/investor-hub">
                  <Button variant="outline">
                    Learn More
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
          <div className="risk-disclaimer-flex">
            <AlertCircle className="risk-disclaimer-icon" />
            <div>
              <h5 className="risk-disclaimer-title">Important Investment Disclaimer</h5>
              <p className="risk-disclaimer-text">
                All investments carry risk, including the potential loss of principal. Target returns are projections 
                based on historical performance and current market conditions and are not guaranteed. Past performance 
                is not indicative of future results. The information provided does not constitute financial advice. 
                Investors should carefully review all offering documents and consult with qualified financial, legal, 
                and tax advisors before making any investment decision. Investments are suitable only for sophisticated 
                investors who can afford to lose their entire investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Diversify Your Portfolio?
          </h2>
          <p className="cta-subtitle">
            Our investment team is ready to discuss how these opportunities align with your financial objectives 
            and risk tolerance. Express your interest today for a confidential consultation.
          </p>
          <div className="cta-buttons">
            <Link to="/express-interest">
              <Button size="lg">
                Express Interest
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="contact-us-button"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
