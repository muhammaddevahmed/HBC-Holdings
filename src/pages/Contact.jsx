import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Linkedin, Twitter, Facebook } from 'lucide-react';
import Layout from '../components/Layout';
import Input, { Textarea, Select } from '../components/Input';
import Button from '../components/Button';
import Card, { CardBody, CardHeader } from '../components/Card';
import './Contact.css';

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
    { value: 'existing-investor', label: 'Existing Investor Support' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'media', label: 'Media & Press Inquiries' },
    { value: 'other', label: 'Other' }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'invest@hbcholdings.com',
      description: 'For investment inquiries and general questions',
      link: 'mailto:invest@hbcholdings.com',
      linkText: 'Send Email'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'WhatsApp',
      details: '+1 (555) 123-4567',
      description: 'Quick questions and instant messaging',
      link: 'https://wa.me/15551234567',
      linkText: 'Start Chat'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
      link: 'tel:+15551234567',
      linkText: 'Call Now'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: '123 Financial District, New York, NY 10004',
      description: 'By appointment only',
      link: '#',
      linkText: 'Get Directions'
    }
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
    // In a real application, this would send data to a backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout activePage="/contact">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <div className="contact-hero-text-container">
            <h1 className="contact-hero-title">
              Get in <span className="contact-hero-title-highlight">Touch</span>
            </h1>
            <p className="contact-hero-description">
              Our investment team is ready to answer your questions and discuss how HBC Holdings 
              can help you achieve your financial objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="contact-methods-content">
          <div className="contact-methods-header">
            <h2 className="contact-methods-title">
              Choose Your <span className="contact-methods-title-highlight">Contact Method</span>
            </h2>
            <p className="contact-methods-subtitle">
              Reach out through your preferred channel. We typically respond within 24 hours during business days.
            </p>
          </div>

          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <Card key={index} hover className="contact-method-card">
                <CardBody>
                  <div className="contact-method-icon-container">
                    {method.icon}
                  </div>
                  <h4 className="contact-method-title">{method.title}</h4>
                  <p className="contact-method-details">{method.details}</p>
                  <p className="contact-method-description">{method.description}</p>
                  <a 
                    href={method.link}
                    className="contact-method-link"
                  >
                    {method.linkText} →
                  </a>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-content">
          <div className="contact-form-grid">
            {/* Form */}
            <div>
              <h3 className="form-title">Send Us a Message</h3>
              <Card>
                <CardBody>
                  {submitted ? (
                    <div className="form-submitted">
                      <div className="form-submitted-icon-container">
                        <Send className="form-submitted-icon" />
                      </div>
                      <h4 className="form-submitted-title">Message Sent!</h4>
                      <p className="form-submitted-text">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="form-container">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                      
                      <div className="form-grid">
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.smith@example.com"
                          required
                        />
                        <Input
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <Select
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        options={subjectOptions}
                        required
                      />

                      <Textarea
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        className="form-textarea"
                        required
                      />

                      <Button type="submit" className="form-submit-button" size="lg">
                        Send Message
                        <Send className="w-5 h-5" />
                      </Button>

                      <p className="form-recaptcha">
                        This form is protected by reCAPTCHA and subject to spam filtering.
                      </p>
                    </form>
                  )}
                </CardBody>
              </Card>
            </div>

            {/* Office Information */}
            <div>
              <h3 className="office-info-title">Office Information</h3>
              
              <Card className="office-info-card">
                <CardHeader>
                  <h4>Headquarters</h4>
                </CardHeader>
                <CardBody>
                  <div className="office-info-card-body">
                    <div className="office-info-item">
                      <MapPin className="office-info-icon" />
                      <div>
                        <p className="office-info-label">Address</p>
                        <p className="office-info-value">
                          123 Financial District<br />
                          New York, NY 10004<br />
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="office-info-item">
                      <Phone className="office-info-icon" />
                      <div>
                        <p className="office-info-label">Phone</p>
                        <a href="tel:+15551234567" className="office-info-link">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="office-info-item">
                      <Mail className="office-info-icon" />
                      <div>
                        <p className="office-info-label">Email</p>
                        <a href="mailto:invest@hbcholdings.com" className="office-info-link">
                          invest@hbcholdings.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="office-info-card">
                <CardHeader>
                  <h4>Business Hours</h4>
                </CardHeader>
                <CardBody>
                  <div className="space-y-2 text-sm">
                    <div className="business-hours-item">
                      <span className="business-hours-day">Monday - Friday</span>
                      <span className="business-hours-time">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="business-hours-item">
                      <span className="business-hours-day">Saturday - Sunday</span>
                      <span className="business-hours-time">Closed</span>
                    </div>
                  </div>
                  <div className="business-hours-note">
                    <p>
                      For urgent investor matters outside business hours, please email us and we'll respond 
                      as soon as possible.
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h4>Connect With Us</h4>
                </CardHeader>
                <CardBody>
                  <p className="social-media-text">
                    Follow HBC Holdings on social media for market insights, company updates, 
                    and investment education.
                  </p>
                  <div className="social-media-links">
                    <a 
                      href="https://linkedin.com/company/hbcholdings" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-media-link"
                    >
                      <Linkedin className="social-media-icon" />
                    </a>
                    <a 
                      href="https://twitter.com/hbcholdings" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-media-link"
                    >
                      <Twitter className="social-media-icon" />
                    </a>
                    <a 
                      href="https://facebook.com/hbcholdings" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-media-link"
                    >
                      <Facebook className="social-media-icon" />
                    </a>
                  </div>
                </CardBody>
              </Card>
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
            Express your investment interest or review our available opportunities to begin your journey 
            with HBC Holdings.
          </p>
          <div className="quick-actions-buttons">
            <Link to="/express-interest">
            <Button size="lg" >
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
    </Layout>
  );
}
