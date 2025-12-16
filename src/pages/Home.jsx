import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Lock, ArrowRight, CheckCircle, BarChart3, Users, Award } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card, { CardBody } from '../components/Card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import './Home.css';

export default function Home() {
  const investmentArms = [
    {
      title: 'Luxury Automotive & Logistics',
      description: 'Strategic investments in high-value automotive assets and logistics infrastructure with tangible collateral backing.',
      icon: '🚗',
      minInvestment: '$50,000',
      returns: '12-18% annually',
      link: '/investments#automotive'
    },
    {
      title: 'Sustainable & Emerging Markets',
      description: 'Growth-focused investments in renewable energy, green technology, and emerging market opportunities.',
      icon: '🌱',
      minInvestment: '$25,000',
      returns: '15-22% annually',
      link: '/investments#sustainable'
    },
    {
      title: 'Alternative Investments',
      description: 'Diversified portfolio including precious metals, commodities, and non-traditional asset classes.',
      icon: '💎',
      minInvestment: '$100,000',
      returns: '10-16% annually',
      link: '/investments#alternative'
    }
  ];

  const capitalProtection = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Asset-Backed Security',
      description: 'Every investment is secured by tangible, liquid assets with verified market value'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Structural Safeguards',
      description: 'Multi-layered protection mechanisms including escrow accounts and third-party custody'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Risk Diversification',
      description: 'Strategic allocation across asset classes and geographic markets to minimize concentration risk'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Transparent Reporting',
      description: 'Quarterly portfolio updates and annual audited financial statements for all investors'
    }
  ];

  const trustSignals = [
    { metric: '$250M+', label: 'Assets Under Management' },
    { metric: '500+', label: 'Active Investors' },
    { metric: '15+', label: 'Years Combined Experience' },
    { metric: '98%', label: 'Investor Retention Rate' }
  ];

  return (
    <Layout activePage="#home">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="home-hero-background-image">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1634474588578-7f0565a1cea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBpbnZlc3RtZW50JTIwZmluYW5jZXxlbnwxfHx8fDE3NjU4MDk5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Corporate Investment"
          />
        </div>
        <div className="home-hero-content">
          <div className="home-hero-text-container">
            <div className="hero-badge">
              <CheckCircle className="hero-badge-icon" />
              <span className="hero-badge-text">Regulated & Asset-Backed Investments</span>
            </div>
            <h1 className="home-hero-title">
              Asset-Backed. Secure. <br />
              <span className="home-hero-title-highlight">Structured Investments.</span>
            </h1>
            <p className="home-hero-description">
              HBC Holdings provides institutional-grade investment opportunities backed by tangible assets, 
              combining capital preservation with attractive returns for qualified investors.
            </p>
            <div className="home-hero-buttons">
              <Link to="/investments">
                <Button size="lg">
                  View Investment Options
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/express-interest">
                <Button variant="outline" size="lg">
                  Express Interest
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="trust-signals-section">
        <div className="trust-signals-content">
          <div className="trust-signals-grid">
            {trustSignals.map((item, index) => (
              <div key={index}>
                <p className="trust-signal-metric">{item.metric}</p>
                <p className="trust-signal-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="about-preview-content">
          <div>
            <h2 className="about-preview-title">A Foundation of Trust & Expertise</h2>
            <p className="about-preview-text">
              HBC Holdings was founded by a consortium of seasoned financial analysts, portfolio managers, 
              and industry veterans. Our leadership team brings over 50 years of combined experience 
              from top-tier global financial institutions. We are dedicated to democratizing access to 
              secure, high-yield investment opportunities that were once reserved for institutional players.
            </p>
            <p className="about-preview-text-final">
              Our investment philosophy is rooted in rigorous due diligence, transparent operations, and a 
              steadfast commitment to capital preservation.
            </p>
            <div className="about-preview-button-container">
              <Link to="/about">
                <Button>
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="about-preview-image-container">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtfGVufDF8fHx8MTc2NTgwOTk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="HBC Holdings Team"
              className="about-preview-image"
            />
          </div>
        </div>
      </section>

      {/* Investment Arms Section */}
      <section className="investment-arms-section">
        <div className="investment-arms-content">
          <div className="investment-arms-header">
            <h2 className="investment-arms-title">Our Investment Arms</h2>
            <p className="investment-arms-subtitle">
              We focus on distinct, high-growth sectors where our expertise and strategic approach can 
              generate maximum value while ensuring robust capital protection.
            </p>
          </div>
          <div className="investment-arms-grid">
            {investmentArms.map((arm, index) => (
              <Card key={index} className="investment-arm-card">
                <CardBody className="investment-arm-card-body">
                  <div className="investment-arm-icon">{arm.icon}</div>
                  <h3 className="investment-arm-title">{arm.title}</h3>
                  <p className="investment-arm-description">{arm.description}</p>
                  <div className="investment-arm-details">
                    <p><strong>Minimum Investment:</strong> {arm.minInvestment}</p>
                    <p><strong>Targeted Returns:</strong> {arm.returns}</p>
                  </div>
                  <Link to={arm.link}>
                    <Button 
                      variant="outline" 
                      className="learn-more-button"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Protection Section */}
      <section className="capital-protection-section">
        <div className="capital-protection-content">
          <div className="capital-protection-header">
            <h2 className="capital-protection-title">Unwavering Commitment to Capital Protection</h2>
            <p className="capital-protection-subtitle">
              Our primary mandate is the preservation of your capital. We employ a multi-layered 
              security framework to safeguard every investment.
            </p>
          </div>
          <div className="capital-protection-grid">
            {capitalProtection.map((item, index) => (
              <div key={index} className="protection-item">
                <div className="protection-item-icon-container">
                  {item.icon}
                </div>
                <h3 className="protection-item-title">{item.title}</h3>
                <p className="protection-item-description">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="capital-protection-button-container">
            <Link to="/investor-hub">
              <Button size="lg">
                View Complete Protection Framework
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <Users className="cta-icon" />
          <h2 className="cta-title">
            Become a Qualified Investor with HBC Holdings
          </h2>
          <p className="cta-subtitle">
            Join a select group of investors benefiting from institutional-grade, asset-backed opportunities. 
            Begin your journey towards secure and structured wealth growth today.
          </p>
          <div className="cta-buttons">
            <Link to="/express-interest">
              <Button 
                variant="outline" 
                size="lg"
                className="express-interest-button-cta"
              >
                Express Interest
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="contact-us-button-cta"
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