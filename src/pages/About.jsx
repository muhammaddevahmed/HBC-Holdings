import {
  Target,
  Eye,
  Shield,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  BarChart3,
  FileText,
  Building,
  Lock,
  Globe,
  Clock,
  DollarSign,
  Zap,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import Card, { CardBody } from "../components/Card";
import Button from "../components/Button";
import "./About.css";

export default function About() {
  const coreValues = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Built for Discretion",
      description:
        "We handle every investment with confidentiality and professionalism. Investor privacy and information security are fundamental to our operations.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Focused on Trust",
      description:
        "Trust is earned through consistency, transparency, and disciplined execution. We prioritize long-term relationships over short-term outcomes.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Designed for Longevity",
      description:
        "Our strategies are structured to withstand market cycles, not chase volatility. Sustainability and durability guide every decision.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Investor-Centric",
      description:
        "Investor interests remain central to our decision-making. Alignment, clarity, and accountability are core to how we operate.",
    },
  ];

  const whyHBGPoints = [
    {
      number: "1",
      title: "Structured Investment Frameworks",
      description:
        "Every HBC investment operates under clearly defined terms, lock-in periods, governance structures, and exit procedures. We avoid informal arrangements and undefined commitments.",
    },
    {
      number: "2",
      title: "Asset-Backed & Trade-Driven Focus",
      description:
        "Our programs emphasize tangible assets, operational cash flow, and trade-backed instruments rather than purely speculative exposure.",
    },
    {
      number: "3",
      title: "Risk-Managed Capital Deployment",
      description:
        "Capital is deployed progressively, with diversification, internal controls, and oversight designed to mitigate downside exposure.",
    },
    {
      number: "4",
      title: "Defined Term & Settlement Policies",
      description:
        "Lock-in periods, early exit rules, settlement processes, and options are established upfront without ambiguity.",
    },
    {
      number: "5",
      title: "Professional Governance & Compliance",
      description:
        "HBC operates under internal compliance standards, KYC/AML requirements, and documented legal agreements across all investment programs.",
    },
    {
      number: "6",
      title: "Long-Term Partnership Mindset",
      description:
        "We view investors as partners in structured growth, not short-term participants pursuing market volatility.",
    },
  ];

  const investmentPhilosophy = [
    {
      title: "Lean & Efficient Operations",
      description:
        "We maintain a streamlined operating structure to reduce unnecessary overhead and focus resources on sourcing, due diligence, and investor reporting.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Asset-Backed by Design",
      description:
        "Every investment must be supported by tangible or revenue-generating assets with independently verifiable value. This principle underpins our capital protection approach.",
      icon: <Building className="w-8 h-8" />,
    },
    {
      title: "Rigorous Due Diligence",
      description:
        "All opportunities undergo comprehensive legal, financial, and operational review before capital deployment. No investment proceeds without documented assessment and approval.",
      icon: <FileText className="w-8 h-8" />,
    },
  ];

  const capitalProtection = [
    { number: "1", title: "Physical or revenue-generating asset backing" },
    {
      number: "2",
      title: "Notarized and legally recognized investment agreements",
    },
    { number: "3", title: "Insurance coverage (where applicable)" },
    { number: "4", title: "Commercial contracts and asset documentation" },
    {
      number: "5",
      title: "Post-dated instruments or structured repayment mechanisms",
    },
    {
      number: "6",
      title: "Phased and controlled capital deployment frameworks",
    },
  ];

  const timeline = [
    {
      year: "2015",
      event: "Company Founded",
      description:
        "HBC was established with a focus on structured, asset-backed investments.",
    },
    {
      year: "2019",
      event: "First Fund Launch",
      description:
        "Launch of the Mobility & Luxury Automotive investment division.",
    },
    {
      year: "2021",
      event: "Expansion",
      description:
        "Introduction of Sustainable Markets and Alternative Investment programs.",
    },
    {
      year: "2023",
      event: "Milestone Achieved",
      description: "Surpassed $200M in assets under management.",
    },
    {
      year: "2025",
      event: "Digital Platform",
      description:
        "Launch of investor portal and enhanced reporting infrastructure.",
    },
    {
      year: "2026",
      event: "Continued Growth",
      description:
        "Expansion into additional markets with over 500 active investors.",
    },
  ];

  const teamExpertise = [
    {
      area: "Mobility & Logistics",
      description:
        "Specialized knowledge in automotive assets and supply chain optimization",
    },
    {
      area: "Eco-Infrastructure",
      description:
        "Experience in sustainable projects and renewable energy investments",
    },
    {
      area: "Alternative Investment",
      description:
        "Expertise in non-traditional asset classes and structured finance",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-container">
            <div className="hero-badge">
              <CheckCircle className="hero-badge-icon" />
              <span>Structured Asset-Backed Investments</span>
            </div>
            <h1 className="hero-title">
              Private Investment Firm Focused on{" "}
              <span className="highlight">Structured Growth</span>
            </h1>
            <p className="hero-description">
              HBC is a private investment firm focused on structured,
              asset-backed, and alternative investment programs. Our approach
              prioritizes capital discipline, risk management, and long-term
              value creation across carefully selected sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are-section">
        <div className="who-we-are-content">
          <div className="who-we-are-grid">
            <div>
              <h2 className="section-title">
                Who <span className="accent-text">We Are</span>
              </h2>
              <p className="section-text">
                HBC was established on a practical principle: investment
                structures should be clear, disciplined, and grounded in real
                assets — not speculation.
              </p>
              <p className="section-text">
                HBC designs and manages structured programs that give investors
                access to professionally managed opportunities without requiring
                day-to-day involvement. Each program is governed by defined
                terms, documented processes, and established exit frameworks.
              </p>

              <div className="expertise-section">
                <h3 className="expertise-title">
                  Our Team Brings Experience Across:
                </h3>
                <div className="expertise-grid">
                  {teamExpertise.map((item, index) => (
                    <div key={index} className="expertise-card">
                      <div className="expertise-icon">
                        {index === 0 && <TrendingUp className="w-5 h-5" />}
                        {index === 1 && <Globe className="w-5 h-5" />}
                        {index === 2 && <BarChart3 className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="expertise-area">{item.area}</h4>
                        <p className="expertise-description">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmVkJTIwZmluYW5jaWFsJTIwbW9kZWx8ZW58MXx8fHwxNzY1ODM3OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="HBC Structured Finance Team"
                className="who-we-are-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission-section">
        <div className="vision-mission-content">
          <div className="vision-mission-grid">
            <Card className="vision-card">
              <CardBody>
                <div className="vision-mission-card-content">
                  <div className="icon-container">
                    <Eye className="card-icon" />
                  </div>
                  <h3 className="card-title">Our Vision</h3>
                  <p className="card-text">
                    To stand among the world's most trusted private investment
                    groups, building structures and partnerships designed to
                    endure.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="mission-card">
              <CardBody>
                <div className="vision-mission-card-content">
                  <div className="icon-container">
                    <Target className="card-icon" />
                  </div>
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">
                    To act as responsible stewards of investor capital, guided
                    by discipline, trust, and long-term thinking.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-section">
        <div className="core-values-content">
          <div className="core-values-header">
            <h2 className="section-title">
              Our <span className="accent-text">Core Values</span>
            </h2>
            <p className="section-subtitle">
              Our values guide how we structure investments, manage
              relationships, and operate as a firm.
            </p>
          </div>

          <div className="core-values-grid">
            {coreValues.map((value, index) => (
              <Card key={index} className="value-card">
                <CardBody>
                  <div className="value-card-content">
                    <div className="value-icon-container">{value.icon}</div>
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why HBG */}
      <section className="why-hbg-section">
        <div className="why-hbg-content">
          <div className="why-hbg-header">
            <h2 className="section-title">
              Why <span className="accent-text">Choose HBC</span>
            </h2>
            <p className="section-subtitle">
              A disciplined approach to structured investment management
            </p>
          </div>

          <div className="why-hbg-grid">
            {whyHBGPoints.map((point, index) => (
              <div key={index} className="why-hbg-card">
                <div className="point-number">{point.number}</div>
                <div className="point-content">
                  <h3 className="point-title">{point.title}</h3>
                  <p className="point-description">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="philosophy-section">
        <div className="philosophy-content">
          <div className="philosophy-header">
            <h2 className="section-title">
              Investment <span className="accent-text">Philosophy</span>
            </h2>
            <p className="section-subtitle">
              Our investment philosophy is built on discipline, structure, and
              risk awareness.
            </p>
          </div>

          <div className="philosophy-grid">
            {investmentPhilosophy.map((principle, index) => (
              <Card key={index} className="philosophy-card">
                <CardBody>
                  <div className="philosophy-card-content">
                    <div className="philosophy-icon">{principle.icon}</div>
                    <h3 className="philosophy-title">{principle.title}</h3>
                    <p className="philosophy-description">
                      {principle.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Protection */}
      <section className="protection-section">
        <div className="protection-content">
          <div className="protection-grid">
            <div>
              <h2 className="section-title">
                Capital Protection{" "}
                <span className="accent-text">Framework</span>
              </h2>
              <p className="section-text">
                HBC applies a multi-layered approach to capital protection,
                designed to reduce risk exposure, though they do not eliminate
                investment risk entirely.
              </p>
              <div className="protection-points">
                {capitalProtection.map((item, index) => (
                  <div key={index} className="protection-point">
                    <div className="protection-number">{item.number}</div>
                    <span className="protection-text">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NldCUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzY1ODUxMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Capital Protection Framework"
                className="protection-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Responsibility */}
      <section className="responsibility-section">
        <div className="responsibility-content">
          <div className="responsibility-header">
            <h2 className="section-title">
              Corporate <span className="accent-text">Responsibility</span>
            </h2>
            <p className="section-subtitle">
              HBC integrates responsible investment considerations into its
              operations
            </p>
          </div>

          <div className="responsibility-grid">
            <div className="responsibility-card">
              <Heart className="responsibility-icon" />
              <h3>Sustainable & Eco-Focused Projects</h3>
              <p>
                Investments aligned with environmental sustainability and
                long-term ecological value
              </p>
            </div>
            <div className="responsibility-card">
              <Building className="responsibility-icon" />
              <h3>Infrastructure Development</h3>
              <p>
                Supporting economic development through essential infrastructure
                investments
              </p>
            </div>
            <div className="responsibility-card">
              <Globe className="responsibility-icon" />
              <h3>Social Impact Initiatives</h3>
              <p>
                Select initiatives aligned with long-term value creation and
                community development
              </p>
            </div>
          </div>

          <p className="responsibility-note">
            Responsibility and sustainability are treated as part of risk
            management, not marketing narratives.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="timeline-content">
          <div className="timeline-header">
            <h2 className="section-title">
              The <span className="accent-text">HBC Journey</span>
            </h2>
            <p className="section-subtitle">
              Building disciplined investment structures since 2015
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-item-content">
                    <Card className="timeline-card">
                      <CardBody>
                        <div className="timeline-year">{item.year}</div>
                        <h4 className="timeline-event">{item.event}</h4>
                        <p className="timeline-description">
                          {item.description}
                        </p>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="timeline-dot"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-content">
          <div className="about-cta-text">
            <h2 className="about-cta-title">Invest with HBC</h2>
            <p className="about-cta-subtitle">
              Explore structured, asset-backed investment opportunities designed
              with discipline, clarity, and long-term focus.
            </p>
          </div>
          <Link to="/express-interest">
            <Button size="lg" style={{ backgroundColor: "#1f4d2e" }}>
              Express Investment Interest
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
