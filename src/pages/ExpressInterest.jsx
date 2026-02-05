import { Link } from "react-router-dom";
import { useState } from "react";
import { Send, CheckCircle, Shield, Lock } from "lucide-react";
import Input, { Textarea, Select } from "../components/Input";
import Button from "../components/Button";
import Card, { CardBody, CardHeader } from "../components/Card";
import "./ExpressInterest.css";

export default function ExpressInterest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    investmentRange: "",
    investmentInterest: "",
    message: "",
    gdprConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const investmentRanges = [
    { value: "", label: "Select Investment Range" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k-250k", label: "$100,000 - $250,000" },
    { value: "250k-500k", label: "$250,000 - $500,000" },
    { value: "500k-1m", label: "$500,000 - $1,000,000" },
    { value: "1m+", label: "$1,000,000+" },
  ];

  const investmentDivisions = [
    { value: "", label: "Select Investment Division" },
    { value: "automotive", label: "Luxury Automotive & Logistics" },
    { value: "sustainable", label: "Sustainable & Emerging Markets" },
    { value: "alternative", label: "Alternative Investments" },
    {
      value: "diversified",
      label: "Diversified Portfolio (Multiple Divisions)",
    },
    { value: "consultation", label: "Need Consultation to Decide" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.investmentRange)
      newErrors.investmentRange = "Investment range is required";
    if (!formData.investmentInterest)
      newErrors.investmentInterest = "Investment interest is required";
    if (!formData.gdprConsent)
      newErrors.gdprConsent = "You must agree to the privacy policy";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      investmentRange: "",
      investmentInterest: "",
      message: "",
      gdprConsent: false,
    });
  };

  if (submitted) {
    return (
      <>
        <section className="submitted-section">
          <div className="submitted-content">
            <Card className="submitted-card">
              <CardBody className="submitted-card-body">
                <div className="submitted-icon-container">
                  <CheckCircle className="submitted-icon" />
                </div>
                <h2 className="submitted-title">
                  Thank You for Your Interest!
                </h2>
                <p className="submitted-subtitle">
                  Your expression of interest has been successfully submitted.
                </p>
                <p className="submitted-text">
                  Our investment team will review your information and contact
                  you within 48 business hours to discuss available
                  opportunities and next steps in the investor onboarding
                  process.
                </p>
                <div className="next-steps-box">
                  <p className="next-steps-text">
                    <strong>What happens next:</strong> You will receive a
                    confirmation email shortly. A member of our team will reach
                    out to schedule a confidential consultation to discuss your
                    investment objectives and answer any questions you may have.
                  </p>
                </div>
                <div className="submitted-buttons">
                  <Link to="/">
                    <Button>Return to Home</Button>
                  </Link>
                  <Link to="/investments">
                    <Button variant="outline">View Investment Options</Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">
              Express Your{" "}
              <span className="hero-title-highlight">Investment Interest</span>
            </h1>
            <p className="hero-description">
              Begin your journey with HBC Holdings. Complete the form below and
              our team will contact you to discuss investment opportunities
              tailored to your objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="trust-signals-section">
        <div className="trust-signals-content">
          <div className="trust-signals-grid">
            <div>
              <Shield className="trust-signal-icon" />
              <h5 className="trust-signal-title">Secure Submission</h5>
              <p className="trust-signal-description">
                Your information is encrypted and protected with
                industry-standard security
              </p>
            </div>
            <div>
              <Lock className="trust-signal-icon" />
              <h5 className="trust-signal-title">Confidential Review</h5>
              <p className="trust-signal-description">
                All investor information is kept strictly confidential and never
                shared
              </p>
            </div>
            <div>
              <CheckCircle className="trust-signal-icon" />
              <h5 className="trust-signal-title">No Obligation</h5>
              <p className="trust-signal-description">
                Expressing interest does not create any investment obligation or
                commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="form-content">
          <Card>
            <CardHeader>
              <h3 className="form-header">Investment Interest Form</h3>
              <p className="form-description">
                Please provide accurate information so we can better understand
                your investment needs. All fields marked with * are required.
              </p>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} className="form-container">
                {/* Personal Information */}
                <div>
                  <h4 className="form-section-title">Personal Information</h4>
                  <div className="form-grid">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      error={errors.name}
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.smith@example.com"
                      required
                      error={errors.email}
                    />
                  </div>
                  <div className="form-grid form-grid-margin">
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                    <Input
                      label="Country of Residence"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                      required
                      error={errors.country}
                    />
                  </div>
                </div>

                {/* Investment Details */}
                <div>
                  <h4 className="form-section-title">Investment Details</h4>
                  <div className="form-grid">
                    <Select
                      label="Investment Range"
                      name="investmentRange"
                      value={formData.investmentRange}
                      onChange={handleChange}
                      options={investmentRanges}
                      required
                      error={errors.investmentRange}
                    />
                    <Select
                      label="Investment Interest"
                      name="investmentInterest"
                      value={formData.investmentInterest}
                      onChange={handleChange}
                      options={investmentDivisions}
                      required
                      error={errors.investmentInterest}
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <Textarea
                    label="Additional Information (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your investment objectives, timeline, or any specific questions you have..."
                    className="form-textarea"
                  />
                </div>

                {/* GDPR Consent */}
                <div className="gdpr-consent-container">
                  <label className="gdpr-consent-label">
                    <input
                      type="checkbox"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleChange}
                      className="gdpr-consent-checkbox"
                    />
                    <span className="gdpr-consent-text">
                      I agree to the{" "}
                      <a
                        href="/investor-hub#privacy"
                        className="gdpr-consent-link"
                      >
                        Privacy Policy
                      </a>{" "}
                      and consent to HBC Holdings collecting and processing my
                      personal information for the purpose of evaluating my
                      investment interest. I understand that I can withdraw
                      consent at any time. *
                    </span>
                  </label>
                  {errors.gdprConsent && (
                    <p className="gdpr-consent-error">{errors.gdprConsent}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="form-buttons">
                  <Button
                    type="submit"
                    size="lg"
                    className="form-submit-button"
                  >
                    Submit Expression of Interest
                    <Send className="w-5 h-5" />
                  </Button>
                  <Link to="/contact">
                    <Button type="button" variant="outline" size="lg">
                      Contact Us Instead
                    </Button>
                  </Link>
                </div>

                {/* Spam Protection Notice */}
                <p className="form-recaptcha">
                  This form is protected by reCAPTCHA and subject to spam
                  filtering. By submitting this form, you acknowledge that you
                  are a real person expressing genuine investment interest.
                </p>
              </form>
            </CardBody>
          </Card>

          {/* Information Notice */}
          <div className="info-notice">
            <h5 className="info-notice-title">
              What Happens After You Submit?
            </h5>
            <ul className="info-notice-list">
              <li className="info-notice-list-item">
                <span className="info-notice-list-item-bullet">•</span>
                <span>
                  You'll receive an immediate confirmation email acknowledging
                  your submission
                </span>
              </li>
              <li className="info-notice-list-item">
                <span className="info-notice-list-item-bullet">•</span>
                <span>
                  Our investment team will review your information within 48
                  business hours
                </span>
              </li>
              <li className="info-notice-list-item">
                <span className="info-notice-list-item-bullet">•</span>
                <span>
                  We'll schedule a confidential consultation to discuss your
                  investment objectives
                </span>
              </li>
              <li className="info-notice-list-item">
                <span className="info-notice-list-item-bullet">•</span>
                <span>
                  If qualified, you'll receive detailed investment materials and
                  begin the onboarding process
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
