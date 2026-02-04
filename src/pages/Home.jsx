import { Link } from "react-router-dom";
import {
  Shield,
  TrendingUp,
  Lock,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Award,
  Car,
  Leaf,
  Puzzle,
  Clock,
  FileText,
  DollarSign,
  Building,
} from "lucide-react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Card, { CardBody } from "../components/Card";
import "./Home.css";

export default function Home() {
  const investmentArms = [
    {
      title: "Mobility Investment Series",
      description:
        "Strategic investments in high-value automotive assets and mobility-linked infrastructure, designed for stable income and capital protection.",
      icon: <Car className="w-8 h-8" />,
      minInvestment: "$50,000",
      minDuration: "24 months",
      link: "/investments#automotive",
      color: "#1f4d2e",
    },
    {
      title: "Sustainable & Eco-Investment Series",
      description:
        "Revenue-generating investments focused on sustainable infrastructure and emerging market projects aligned with long-term environmental and economic value.",
      icon: <Leaf className="w-8 h-8" />,
      minInvestment: "$100,000",
      minDuration: "24 months",
      link: "/investments#sustainable",
      color: "#2e6b43",
    },
    {
      title: "Alternative Investment Series",
      description:
        "Diversified non-traditional asset opportunities, including trade-backed transactions and secured structures.",
      icon: <Puzzle className="w-8 h-8" />,
      minInvestment: "$20,000",
      minDuration: "24 months",
      link: "/investments#alternative",
      color: "#c8a24d",
    },
  ];

  const capitalProtection = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Asset-Backed Security",
      description:
        "Investments are secured by tangible or revenue-generating assets with verified market value.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Structural Safeguards",
      description:
        "Clearly defined legal structures, settlement mechanisms, and exit protocols.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Risk Diversification",
      description:
        "Strategic allocation across asset classes, sectors, and regions to reduce concentration risk.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Transparent Reporting",
      description:
        "Consistent quarterly updates and performance insights for all investors.",
    },
  ];

  const trustSignals = [
    { metric: "$300M+", label: "Assets Under Management", icon: <DollarSign className="w-8 h-8" /> },
    { metric: "500+", label: "Active Investors", icon: <Users className="w-8 h-8" /> },
    { metric: "10+", label: "Years Combined Leadership Experience", icon: <Award className="w-8 h-8" /> },
    { metric: "98%", label: "Investor Retention Rate", icon: <TrendingUp className="w-8 h-8" /> },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Express Interest",
      description: "Submit your initial inquiry through our secure portal",
    },
    {
      step: "2",
      title: "Qualification & Verification",
      description: "Complete our investor qualification process",
    },
    {
      step: "3",
      title: "Capital Deployment",
      description: "Funds are allocated to structured, asset-backed opportunities",
    },
    {
      step: "4",
      title: "Returns, Reporting & Oversight",
      description: "Receive consistent returns with transparent quarterly reporting",
    },
  ];

  const testimonials = [
    {
      quote: "From onboarding to reporting, everything felt structured and transparent. I appreciated the conservative approach and the fact that capital protection was clearly prioritized.",
      author: "Amina K., Private Investor",
      series: "Mobility Series | 3+ Years",
    },
    {
      quote: "HBG doesn't overpromise. The team focuses on execution, asset quality, and communication — which is exactly what I look for in alternative investments.",
      author: "Thomas R., Portfolio Consultant",
      series: "Multi-Division Portfolio | 4+ Years",
    },
    {
      quote: "What stood out for me was the discipline. Reporting is clear, and expectations are realistic.",
      author: "Samuel D., Business Owner",
      series: "Alternative Investments | 2+ Years",
    },
  ];

  return (
    <Layout activePage="#home">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="home-hero-content">
          <div className="home-hero-text-container">
            <div className="hero-badge">
              <CheckCircle className="hero-badge-icon" />
              <span className="hero-badge-text">
                Structured & Asset-Backed Investments
              </span>
            </div>
            <h1 className="home-hero-title">
              Smart Capital Meets <span className="highlight-text">Real Assets</span>
            </h1>
            <p className="home-hero-description">
              HBG offers carefully structured, asset-backed investment opportunities 
              designed to protect capital while delivering consistent, long-term returns 
              for qualified investors.
            </p>
            <div className="home-hero-buttons">
              <Link to="/investments">
                <Button size="lg" style={{ backgroundColor: '#1f4d2e' }}>
                  View Investment Options
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" style={{ borderColor: '#1f4d2e', color: '#1f4d2e' }}>
                  Learn More
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
              <div key={index} className="trust-signal">
                <div className="trust-signal-icon" style={{ color: '#1f4d2e' }}>
                  {item.icon}
                </div>
                <p className="trust-signal-metric">{item.metric}</p>
                <p className="trust-signal-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Statement */}
      <section className="foundation-section">
        <div className="foundation-content">
          <div className="foundation-text">
            <h2 className="foundation-title">
              A Foundation Built on Structure, Discipline, and Trust
            </h2>
            <div className="foundation-paragraphs">
              <p className="foundation-text-para">
                HBG was established to bridge the gap between institutional-grade investment 
                strategies and qualified private investors. Our leadership brings deep experience 
                across asset-backed investing, risk management, and alternative markets.
              </p>
              <p className="foundation-text-para">
                We prioritize disciplined capital deployment, rigorous due diligence, and 
                transparent reporting—ensuring every investment is supported by real assets, 
                clear structures, and defined risk frameworks.
              </p>
            </div>
            <div className="foundation-button">
              <Link to="/about">
                <Button style={{ backgroundColor: '#1f4d2e' }}>
                  Learn more about HBC
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="foundation-image">
            <div className="foundation-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmVkJTIwZmluYW5jaWFsJTIwbW9kZWx8ZW58MXx8fHwxNzY1ODM3OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Structured Financial Model"
                className="foundation-image-content"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Divisions */}
      <section className="investment-divisions-section">
        <div className="investment-divisions-content">
          <div className="investment-divisions-header">
            <h2 className="investment-divisions-title">Investment Divisions</h2>
            <p className="investment-divisions-subtitle">
              Strategic opportunities across carefully selected sectors
            </p>
          </div>
          <div className="investment-divisions-grid">
            {investmentArms.map((division, index) => (
              <Card key={index} className="investment-division-card">
                <CardBody className="investment-division-card-body">
                  <div 
                    className="investment-division-icon"
                    style={{ backgroundColor: `${division.color}20` }}
                  >
                    <div style={{ color: division.color }}>
                      {division.icon}
                    </div>
                  </div>
                  <h3 className="investment-division-title">{division.title}</h3>
                  <p className="investment-division-description">
                    {division.description}
                  </p>
                  <div className="investment-division-details">
                    <div className="investment-detail">
                      <span className="detail-label">Minimum Investment:</span>
                      <span className="detail-value">{division.minInvestment}</span>
                    </div>
                    <div className="investment-detail">
                      <span className="detail-label">Minimum Duration:</span>
                      <span className="detail-value">{division.minDuration}</span>
                    </div>
                  </div>
                  <Link to={division.link} target="_blank">
                    <Button 
                      variant="outline" 
                      className="learn-more-button"
                      style={{ borderColor: division.color, color: division.color }}
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

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="how-it-works-content">
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-subtitle">
            A structured process designed for clarity and security
          </p>
          <div className="how-it-works-steps">
            {howItWorks.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="how-it-works-button">
            <Link to="/express-interest" >
              <Button size="lg" style={{ backgroundColor: '#1f4d2e' }}>
                Start Investing
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capital Protection */}
      <section className="capital-protection-section">
        <div className="capital-protection-content">
          <div className="capital-protection-header">
            <h2 className="capital-protection-title">
              Your Capital Comes First
            </h2>
            <p className="capital-protection-subtitle">
              Preserving investor capital is central to HBG's philosophy. Each investment 
              incorporates layered protection frameworks designed to manage downside risk.
            </p>
          </div>
          <div className="capital-protection-grid">
            {capitalProtection.map((item, index) => (
              <div key={index} className="protection-item">
                <div className="protection-item-icon-container">
                  {item.icon}
                </div>
                <h3 className="protection-item-title">{item.title}</h3>
                <p className="protection-item-description">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="capital-protection-button-container">
            <Link to="/protection-framework" >
              <Button size="lg" style={{ backgroundColor: '#1f4d2e' }}>
                View Complete Protection Framework
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-content">
          <h2 className="testimonials-title">Investor Experiences</h2>
          <p className="testimonials-subtitle" >
            What our investors say about working with HBC
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardBody className="testimonial-card-body">
                  <div className="testimonial-quote">"{testimonial.quote}"</div>
                  <div className="testimonial-author">{testimonial.author}</div>
                  <div className="testimonial-series">{testimonial.series}</div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{background:"#2e6b43"}} className="cta-section">
        <div className="cta-content">
          <Users className="cta-icon" />
          <h2 className="cta-title">
            Become a Qualified Investor with HBC
          </h2>
          <p className="cta-subtitle" style={{color:"whitesmoke"}}>
            Join a select group of investors accessing structured, asset-backed opportunities 
            designed for long-term stability and growth.
          </p>
          <div className="cta-buttons">
            <Link to="/express-interest" >
              <Button
                size="lg"
                style={{ backgroundColor: '#ffffff', color: '#1f4d2e' }}
                className="express-interest-button-cta"
              >
                Express Interest
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact" >
              <Button
                variant="outline"
                size="lg"
                className="contact-us-button-cta"
                style={{ borderColor: '#ffffff', color: '#ffffff' }}
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