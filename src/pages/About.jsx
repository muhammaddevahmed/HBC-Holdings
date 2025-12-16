import { Target, Eye, Shield, Users, TrendingUp, Award, CheckCircle, BarChart3 } from 'lucide-react';
import Layout from '../components/Layout';
import Card, { CardBody } from '../components/Card';

import './About.css';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Capital Preservation First',
      description: 'We prioritize the protection of investor capital above all else, ensuring every investment is backed by tangible, verified assets.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Consistent Performance',
      description: 'Our structured approach delivers reliable, risk-adjusted returns across market cycles through strategic diversification.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Transparency & Integrity',
      description: 'We maintain the highest standards of disclosure, providing investors with complete visibility into their investments.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Investor-Centric Focus',
      description: 'Every decision is made with our investors\' best interests at the forefront, ensuring alignment and mutual success.'
    }
  ];

  const operatingPrinciples = [
    {
      title: 'Lean & Efficient Structure',
      description: 'Our streamlined operations minimize overhead costs, ensuring maximum value delivery to investors. We focus resources on deal sourcing, due diligence, and investor relations rather than unnecessary bureaucracy.',
      icon: <BarChart3 className="w-8 h-8 text-[#5DD923]" />
    },
    {
      title: 'Asset-Backed Everything',
      description: 'Every investment opportunity must be secured by tangible, liquid assets with independently verified market value. This non-negotiable principle provides the foundation for our capital protection framework.',
      icon: <Shield className="w-8 h-8 text-[#5DD923]" />
    },
    {
      title: 'Rigorous Due Diligence',
      description: 'Our investment committee conducts comprehensive analysis of every opportunity, including legal, financial, and operational due diligence before any capital deployment.',
      icon: <Award className="w-8 h-8 text-[#5DD923]" />
    }
  ];

  const timeline = [
    { year: '2018', event: 'Company Founded', description: 'HBC Holdings established with focus on asset-backed investments' },
    { year: '2019', event: 'First Fund Launch', description: 'Launched Luxury Automotive investment division' },
    { year: '2021', event: 'Expansion', description: 'Added Sustainable Markets and Alternative Investments arms' },
    { year: '2023', event: '$100M Milestone', description: 'Surpassed $100M in assets under management' },
    { year: '2024', event: 'Digital Platform', description: 'Launched comprehensive investor portal and digital reporting' },
    { year: '2025', event: 'Continued Growth', description: 'Expanding into new markets with 500+ active investors' }
  ];

  return (
    <Layout activePage="#about">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">
              About <span className="hero-title-highlight">HBC Holdings</span>
            </h1>
            <p className="hero-description">
              We are a specialized investment firm dedicated to providing secure, asset-backed investment 
              opportunities that deliver consistent returns while prioritizing capital preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are-section">
        <div className="who-we-are-content">
          <div className="who-we-are-grid">
            <div>
              <h2 className="who-we-are-title">
                Who <span className="who-we-are-title-highlight">We Are</span>
              </h2>
              <p className="who-we-are-text">
                HBC Holdings was founded on a simple but powerful principle: institutional-grade investment 
                opportunities should be accessible to qualified investors through transparent, asset-backed structures 
                that prioritize capital protection.
              </p>
              <p className="who-we-are-text">
                We are a team of seasoned investment professionals with extensive experience in alternative assets, 
                structured finance, and risk management. Our collective expertise spans private equity, real assets, 
                and emerging markets, giving us a unique perspective on value creation and capital preservation.
              </p>
              <p className="who-we-are-text-final">
                Unlike traditional investment firms burdened by legacy infrastructure and bloated cost structures, 
                we operate with a lean, technology-enabled model that delivers superior value to our investors. 
                Every dollar of management fee is reinvested into deal sourcing, due diligence, and investor services.
              </p>
              <div className="stats-grid">
                
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY1NzkyMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="HBC Holdings Team"
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
            <Card className="vision-mission-card">
              <CardBody>
                <div className="card-body-flex">
                  <div className="card-icon-container">
                    <Eye className="card-icon" />
                  </div>
                  <div>
                    <h3 className="card-title">Our Vision</h3>
                    <p className="card-text">
                      To become the most trusted name in structured, asset-backed investments by delivering 
                      consistent returns while maintaining an unwavering commitment to capital preservation 
                      and operational transparency.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="vision-mission-card-mission">
              <CardBody>
                <div className="card-body-flex">
                  <div className="card-icon-container-mission">
                    <Target className="card-icon" />
                  </div>
                  <div>
                    <h3 className="card-title">Our Mission</h3>
                    <p className="card-text">
                      To provide qualified investors with access to institutional-grade investment opportunities 
                      through a combination of rigorous due diligence, strategic asset selection, and comprehensive 
                      risk management frameworks.
                    </p>
                  </div>
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
            <h2 className="core-values-title">
              Our <span className="core-values-title-highlight">Core Values</span>
            </h2>
            <p className="core-values-subtitle">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="core-values-grid">
            {values.map((value, index) => (
              <Card key={index} hover>
                <CardBody className="value-card-body">
                  <div className="value-card-icon-container">
                    {value.icon}
                  </div>
                  <h5 className="value-card-title">{value.title}</h5>
                  <p className="value-card-description">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="investment-philosophy-section">
        <div className="investment-philosophy-content">
          <div className="investment-philosophy-header">
            <h2 className="investment-philosophy-title">
              Investment <span className="investment-philosophy-title-highlight">Philosophy</span>
            </h2>
            <p className="investment-philosophy-subtitle">
              Our approach is built on three fundamental principles that ensure sustainable, 
              risk-adjusted returns for our investors.
            </p>
          </div>

          <div className="investment-philosophy-grid">
            {operatingPrinciples.map((principle, index) => (
              <div key={index} className="principle-card">
                <div className="principle-card-icon">{principle.icon}</div>
                <h4 className="principle-card-title">{principle.title}</h4>
                <p className="principle-card-description">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Protection Approach */}
      <section className="capital-protection-section">
        <div className="capital-protection-content">
          <div className="capital-protection-grid">
            <div>
              <img
                src="https://images.unsplash.com/photo-1634474588578-7f0565a1cea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBpbnZlc3RtZW50JTIwZmluYW5jZXxlbnwxfHx8fDE3NjU4MDk5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Capital Protection"
                className="capital-protection-image"
              />
            </div>
            <div>
              <h2 className="capital-protection-title">
                Capital Protection <span className="capital-protection-title-highlight">Framework</span>
              </h2>
              <p className="capital-protection-description">
                Our multi-layered capital protection approach ensures that investor funds are safeguarded 
                through independent verification, structural safeguards, and continuous monitoring.
              </p>
              <div className="steps-container">
                <div className="step">
                  <div className="step-number-container">
                    <span className="step-number">1</span>
                  </div>
                  <div>
                    <h5 className="step-title">Collateral Verification</h5>
                    <p className="step-description">
                      Independent third-party valuation of all underlying assets before investment deployment
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number-container">
                    <span className="step-number">2</span>
                  </div>
                  <div>
                    <h5 className="step-title">Custody & Escrow</h5>
                    <p className="step-description">
                      Assets held in third-party custody with established financial institutions
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number-container">
                    <span className="step-number">3</span>
                  </div>
                  <div>
                    <h5 className="step-title">Continuous Monitoring</h5>
                    <p className="step-description">
                      Real-time tracking of asset values and market conditions with quarterly revaluation
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number-container">
                    <span className="step-number">4</span>
                  </div>
                  <div>
                    <h5 className="step-title">Legal Structures</h5>
                    <p className="step-description">
                      Bankruptcy-remote special purpose vehicles with clear investor priority
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="timeline-content">
          <div className="timeline-header">
            <h2 className="timeline-title">
              Our <span className="timeline-title-highlight">Journey</span>
            </h2>
            <p className="timeline-subtitle">
              Building trust and delivering value since 2018
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-items">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-item-content">
                    <Card hover>
                      <CardBody>
                        <div className="timeline-item-year">{item.year}</div>
                        <h5 className="timeline-item-title">{item.event}</h5>
                        <p className="timeline-item-description">{item.description}</p>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="timeline-dot"></div>
                  <div className="timeline-item-spacer"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}