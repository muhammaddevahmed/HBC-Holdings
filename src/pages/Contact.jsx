import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Linkedin, Twitter, Facebook, Clock, Shield, User } from 'lucide-react';
import Layout from '../components/Layout';
import Input, { Textarea, Select } from '../components/Input';
import Button from '../components/Button';
import Card, { CardBody, CardHeader } from '../components/Card';
import './Contact.css';
import Chatbot from '../components/Chatbot';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'investment-inquiry', label: 'Investment Inquiry' },
    { value: 'existing-investor', label: 'Existing Investment Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'media', label: 'Media & Press Inquiry' },
    { value: 'other', label: 'Other' }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'info@HBC.com',
      description: 'For investment inquiries and general questions',
      link: 'mailto:info@HBC.com',
      linkText: 'Send Email',
      directAction: true
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'WhatsApp',
      details: '+1 (555) 123-4567',
      description: 'Quick questions and general inquiries (non-transactional)',
      link: 'https://wa.me/15551234567',
      linkText: 'Start Chat',
      directAction: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Monday–Saturday | 24/7 Availability',
      link: 'tel:+15551234567',
      linkText: 'Call Now',
      directAction: true
    },

  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout activePage="/contact">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <div className="contact-hero-text-container">
            <h1 className="contact-hero-title">
              Contact <span className="contact-hero-title-highlight">HBC</span>
            </h1>
            <p className="contact-hero-description">
              Our investment team is ready to answer your questions and discuss how HBC can help you
              achieve your financial objectives through structured, asset-backed investment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="contact-methods-content">
          <div className="contact-methods-header">
            <div className="contact-methods-title-container">
              <h2 className="contact-methods-title">
                Choose Your <span className="contact-methods-title-highlight">Contact Method</span>
              </h2>
              <div className="contact-methods-badge">
                <Clock className="w-4 h-4" />
                <span>Response within 24 business hours</span>
              </div>
            </div>
            <p className="contact-methods-subtitle">
              Reach out through your preferred channel. All CTAs are direct-action buttons and will take you immediately to the selected contact method.
            </p>
          </div>

          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <Card key={index} hover className="contact-method-card">
                <CardBody>
                  <div className="contact-method-icon-container">
                    {method.icon}
                    {method.directAction && (
                      <div className="direct-action-badge">
                        <Send className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                  <h4 className="contact-method-title">{method.title}</h4>
                  <p className="contact-method-details">{method.details}</p>
                  <p className="contact-method-description">{method.description}</p>
                  <a 
                    href={method.link}
                    className="contact-method-link"
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {method.linkText}
                    <span className="contact-method-link-arrow">→</span>
                  </a>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-form-info-section">
        <div className="contact-form-info-content">
          <div className="contact-form-info-grid">
            {/* Form Column */}
            <div className="contact-form-column">
              <div className="contact-form-header">
                <h3 className="form-title">Send Us a Message</h3>
                <div className="form-security-notice">
                  <Shield className="w-5 h-5" />
                  <span>Your information is kept confidential</span>
                </div>
              </div>
              
              <Card className="contact-form-card">
                <CardBody>
                  {submitted ? (
                    <div className="form-submitted">
                      <div className="form-submitted-icon-container">
                        <Send className="form-submitted-icon" />
                      </div>
                      <h4 className="form-submitted-title">Message Sent Successfully!</h4>
                      <p className="form-submitted-text">
                        Thank you for contacting HBC. Our investment team will respond within 24 business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="form-container">
                      <Input
                        label="Full Name*"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        icon={<User className="w-5 h-5" />}
                        required
                      />
                      
                      <div className="form-grid">
                        <Input
                          label="Email Address*"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.smith@example.com"
                          icon={<Mail className="w-5 h-5" />}
                          required
                        />
                        <Input
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          icon={<Phone className="w-5 h-5" />}
                        />
                      </div>

                      <Select
                        label="Subject*"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        options={subjectOptions}
                        required
                      />

                      <Textarea
                        label="Message*"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        className="form-textarea"
                        rows="6"
                        required
                      />

                      <div className="form-actions">
                        <div className="form-compliance">
                          <div className="recaptcha-notice">
                            <Shield className="w-4 h-4" />
                            <span>This form is protected by reCAPTCHA and subject to spam filtering.</span>
                          </div>
                          <p className="form-privacy-note">
                            Your information is kept confidential and used solely for communication with HBC.
                          </p>
                        </div>

                        <Button type="submit" className="form-submit-button" size="lg">
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </form>
                  )}
                </CardBody>
              </Card>
            </div>

            {/* Info Column */}
            <div className="contact-info-column">
              {/* Business Hours */}
              <Card className="info-card">
                <CardHeader className="info-card-header">
                  <Clock className="w-6 h-6" />
                  <h4>Business Hours</h4>
                </CardHeader>
                <CardBody>
                  <div className="business-hours-content">
                    <div className="business-hours-main">
                      <div className="business-hours-item">
                        <span className="business-hours-period">Monday–Saturday</span>
                        <span className="business-hours-time">24/7 Availability</span>
                      </div>
                    </div>
                    <div className="business-hours-note">
                      <p>
                        For urgent investor matters outside business hours, please email us and we will respond as soon as possible.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Connect With Us */}
              <Card className="info-card">
                <CardHeader className="info-card-header">
                  <div className="social-header">
                    <h4>Connect With Us</h4>
                    <p className="social-subtitle">
                      Follow HBC on social media for market insights, company updates, and investment education.
                    </p>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="social-media-links">
                    <a 
                      href="https://linkedin.com/company/HBC" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-media-link"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="social-media-icon" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://twitter.com/HBC" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-media-link"
                      aria-label="Twitter"
                    >
                      <Twitter className="social-media-icon" />
                      <span>Twitter</span>
                    </a>
                    <a 
                      href="https://facebook.com/HBC" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-media-link"
                      aria-label="Facebook"
                    >
                      <Facebook className="social-media-icon" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </CardBody>
              </Card>

              {/* Map */}
              <Card className="info-card">
                <CardHeader className="info-card-header">
                  <MapPin className="w-6 h-6" />
                  <h4>Our Location</h4>
                </CardHeader>
                <CardBody>
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.399949788853!2d-74.013876342823!3d40.70563081823443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1127c8da59%3A0x29514a499343c16c!2sFinancial%20District%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v16225562Financial%20District"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="HBC Office Location"
                    ></iframe>
                  </div>
                </CardBody>
              </Card>

              {/* Footer Compliance */}
              <div className="footer-compliance">
                <div className="compliance-icon">
                  <Shield className="w-5 h-5" />
                </div>
                <p className="compliance-text">
                  Submitting an inquiry does not constitute an offer to invest. All investment opportunities are
                  subject to eligibility, compliance review, and formal documentation. Investments involve risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions-section">
        <div className="quick-actions-content">
          <h2 className="quick-actions-title">
            Ready to Get Started?
          </h2>
          <p className="quick-actions-subtitle">
            Express your investment interest or review our available opportunities to begin your journey with HBC.
          </p>
          <div className="quick-actions-buttons">
            <Link to="/express-interest">
              <Button size="lg" className="quick-actions-button">
                Express Interest
              </Button>
            </Link>
            <Link to="/investments">
              <Button 
                variant="outline" 
                size="lg"
                className="quick-actions-button-outline"
              >
                View Investment Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Chatbot />
    </Layout>
  );
}