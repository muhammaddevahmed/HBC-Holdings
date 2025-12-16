import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import Layout from '../components/Layout';
import Card, { CardBody } from '../components/Card';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Michael R.',
      role: 'Private Investor',
      location: 'New York, NY',
      rating: 5,
      testimonial: 'HBC Holdings has exceeded my expectations in every way. Their transparent approach to capital protection and consistent communication gives me complete confidence in my investment. The returns have been excellent, and I appreciate the quarterly updates that keep me informed.',
      investmentDuration: '3+ years',
      division: 'Diversified Portfolio'
    },
    {
      name: 'Sarah L.',
      role: 'Family Office Director',
      location: 'Los Angeles, CA',
      rating: 5,
      testimonial: 'As someone managing family wealth, I value the rigorous due diligence and asset-backed approach that HBC Holdings employs. Their luxury automotive division has performed exceptionally well, and the team\'s expertise in alternative assets is impressive.',
      investmentDuration: '2+ years',
      division: 'Luxury Automotive & Alternative Investments'
    },
    {
      name: 'James K.',
      role: 'Tech Entrepreneur',
      location: 'San Francisco, CA',
      rating: 5,
      testimonial: 'After selling my company, I was looking for investment opportunities that combined strong returns with capital preservation. HBC Holdings delivered exactly what I needed. The onboarding process was professional, and the investor portal makes it easy to track my investments.',
      investmentDuration: '18+ months',
      division: 'Sustainable & Emerging Markets'
    },
    {
      name: 'Patricia M.',
      role: 'Real Estate Investor',
      location: 'Miami, FL',
      rating: 5,
      testimonial: 'The team at HBC Holdings is incredibly knowledgeable and responsive. I appreciate their conservative approach to valuation and the multiple layers of protection they build into each investment structure. This is wealth management done right.',
      investmentDuration: '4+ years',
      division: 'All Divisions'
    },
    {
      name: 'David C.',
      role: 'Retired Executive',
      location: 'Chicago, IL',
      rating: 5,
      testimonial: 'In retirement, protecting my capital while generating steady returns is paramount. HBC Holdings has delivered consistent performance through various market conditions. Their focus on asset-backed investments aligns perfectly with my risk tolerance.',
      investmentDuration: '5+ years',
      division: 'Alternative Investments'
    },
    {
      name: 'Jennifer T.',
      role: 'Medical Professional',
      location: 'Boston, MA',
      rating: 5,
      testimonial: 'I was initially skeptical about alternative investments, but the HBC team took the time to explain their strategy and show me the data. Three years later, I\'m extremely satisfied with both the returns and the level of transparency they provide.',
      investmentDuration: '3+ years',
      division: 'Luxury Automotive'
    }
  ];

  const stats = [
    { value: '98%', label: 'Investor Satisfaction Rate' },
    { value: '4.9/5.0', label: 'Average Rating' },
    { value: '95%', label: 'Investor Retention' },
    { value: '500+', label: 'Happy Investors' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="testimonials-hero-content">
          <div className="testimonials-hero-text-container">
            <h1 className="testimonials-hero-title">
              Investor <span className="testimonials-hero-title-highlight">Testimonials</span>
            </h1>
            <p className="testimonials-hero-description">
              Read what our investors have to say about their experience with HBC Holdings. 
              Real feedback from real investors.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-content">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid-section">
        <div className="testimonials-grid-content">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover className="testimonial-card">
                <CardBody className="testimonial-card-body">
                  {/* Quote Icon */}
                  <div className="quote-icon-container">
                    <Quote className="quote-icon" />
                  </div>

                  {/* Rating */}
                  <div className="rating-container">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="star-icon" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="testimonial-text">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Investment Details */}
                  <div className="investment-details">
                    <div className="investment-detail">
                      <strong>Investment Duration:</strong> {testimonial.investmentDuration}
                    </div>
                    <div className="investment-detail">
                      <strong>Division:</strong> {testimonial.division}
                    </div>
                  </div>

                  {/* Author Info */}
                  <div>
                    <h5 className="author-name">{testimonial.name}</h5>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="privacy-notice-section">
        <div className="privacy-notice-content">
          <p className="privacy-notice-text">
            <strong>Privacy Protection:</strong> All testimonials are from verified HBC Holdings investors. 
            Last names and specific identifying details have been partially redacted to protect investor privacy. 
            These testimonials represent the individual experiences of investors and may not be representative 
            of all investor experiences. Past performance does not guarantee future results.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Join Our Community of Satisfied Investors
          </h2>
          <p className="cta-subtitle">
            Experience the same level of service, transparency, and performance that our investors 
            have come to expect from HBC Holdings.
          </p>
          <div className="cta-buttons">
            <Link to="/express-interest">
            <button 
              
              className="express-interest-button"
            >
              Express Your Interest
            </button>
            </Link>
            <Link to="/investments">
            <button 
              
              className="view-investments-button"
            >
              View Investment Options
            </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
