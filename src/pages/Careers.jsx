import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Award, 
  Users, 
  Shield, 
  Upload, 
  Send,
  ChevronDown,
  Building,
  Globe,
  FileText,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';
import './Careers.css';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    cv: null
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Investment Research Analyst',
      department: 'Investment & Research',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'Competitive + Bonus',
      description: 'Conduct in-depth research on investment opportunities across mobility, logistics, and alternative assets.',
      responsibilities: [
        'Perform due diligence on potential investments',
        'Develop financial models and valuation analyses',
        'Monitor market trends and sector developments',
        'Prepare investment committee presentations',
        'Support portfolio management activities'
      ],
      requirements: [
        'Bachelor\'s degree in Finance, Economics, or related field',
        '3+ years in investment research or financial analysis',
        'CFA charter or progress preferred',
        'Strong Excel and financial modeling skills',
        'Excellent analytical and communication skills'
      ],
      posted: '2024-01-15'
    },
    {
      id: 2,
      title: 'Compliance Officer',
      department: 'Operations & Compliance',
      location: 'London, UK',
      type: 'Full-time',
      experience: '5+ years',
      salary: 'Competitive',
      description: 'Ensure adherence to regulatory requirements and internal compliance frameworks.',
      responsibilities: [
        'Develop and implement compliance policies',
        'Monitor regulatory developments',
        'Conduct KYC/AML checks',
        'Provide compliance training',
        'Manage regulatory reporting'
      ],
      requirements: [
        '5+ years in financial services compliance',
        'Deep knowledge of FCA regulations',
        'Experience with investment funds',
        'Strong attention to detail',
        'Professional certification preferred'
      ],
      posted: '2024-01-10'
    },
    {
      id: 3,
      title: 'Portfolio Manager - Mobility',
      department: 'Asset Management',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '7+ years',
      salary: 'Competitive + Carry',
      description: 'Manage and optimize our luxury automotive and mobility investment portfolio.',
      responsibilities: [
        'Oversee portfolio performance and strategy',
        'Develop asset management plans',
        'Manage client relationships',
        'Execute buy/sell decisions',
        'Coordinate with operational teams'
      ],
      requirements: [
        '7+ years in asset management',
        'Experience in automotive/mobility sector',
        'Proven track record of portfolio performance',
        'Strong negotiation skills',
        'International experience preferred'
      ],
      posted: '2024-01-05'
    },
    {
      id: 4,
      title: 'Financial Reporting Specialist',
      department: 'Finance & Reporting',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      salary: 'Competitive',
      description: 'Prepare and manage investor reporting and financial statements.',
      responsibilities: [
        'Prepare quarterly investor reports',
        'Manage financial statement preparation',
        'Coordinate with external auditors',
        'Develop reporting automation',
        'Ensure regulatory compliance'
      ],
      requirements: [
        'CPA certification',
        '4+ years in financial reporting',
        'Experience with investment funds',
        'Strong knowledge of GAAP/IFRS',
        'Advanced Excel skills'
      ],
      posted: '2024-01-03'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setApplicationForm(prev => ({
      ...prev,
      cv: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle application submission
    console.log('Application submitted:', applicationForm);
    alert('Application submitted successfully!');
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      coverLetter: '',
      cv: null
    });
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1 className="careers-hero-title">
            Careers at <span className="careers-hero-highlight">HBC</span>
          </h1>
          <p className="careers-hero-subtitle">
            Join a disciplined team focused on structured, asset-backed investments
          </p>
          <div className="careers-hero-description">
            <p>
              HBC operates with a lean, expert-driven structure. We hire selectively, 
              prioritizing deep expertise, uncompromising integrity, and long-term alignment 
              with our investment philosophy.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work & Who We Look For */}
      <section className="careers-culture">
        <div className="culture-grid">
          <div className="culture-card">
            <div className="culture-card-header">
              <Users className="culture-icon" />
              <h3>How We Work</h3>
            </div>
            <ul className="culture-list">
              <li>
                <div className="culture-badge">Lean Teams</div>
                <p>Small, focused teams with direct accountability</p>
              </li>
              <li>
                <div className="culture-badge">High Accountability</div>
                <p>Clear ownership and performance measurement</p>
              </li>
              <li>
                <div className="culture-badge">Confidential Environment</div>
                <p>Discretion and privacy in all operations</p>
              </li>
              <li>
                <div className="culture-badge">Cross-functional</div>
                <p>Collaboration across investment disciplines</p>
              </li>
            </ul>
          </div>

          <div className="culture-card">
            <div className="culture-card-header">
              <Award className="culture-icon" />
              <h3>Who We Look For</h3>
            </div>
            <div className="departments-grid">
              <div className="department">
                <Briefcase className="department-icon" />
                <div>
                  <h4>Investment & Research</h4>
                  <p>Analysts, Researchers, Strategists</p>
                </div>
              </div>
              <div className="department">
                <Shield className="department-icon" />
                <div>
                  <h4>Operations & Compliance</h4>
                  <p>Officers, Managers, Specialists</p>
                </div>
              </div>
              <div className="department">
                <Building className="department-icon" />
                <div>
                  <h4>Asset Management</h4>
                  <p>Portfolio Managers, Asset Specialists</p>
                </div>
              </div>
              <div className="department">
                <FileText className="department-icon" />
                <div>
                  <h4>Finance & Reporting</h4>
                  <p>Controllers, Reporting Specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="careers-openings">
        <div className="openings-header">
          <h2>Current Openings</h2>
          <p className="openings-subtitle">
            Explore opportunities to join our disciplined investment team
          </p>
        </div>

        <div className="openings-grid">
          {jobOpenings.map(job => (
            <div 
              key={job.id} 
              className={`job-card ${selectedJob?.id === job.id ? 'selected' : ''}`}
              onClick={() => setSelectedJob(job)}
            >
              <div className="job-card-header">
                <div className="job-title-section">
                  <h3>{job.title}</h3>
                  <span className="job-department">{job.department}</span>
                </div>
                {selectedJob?.id === job.id && (
                  <ChevronDown className="job-expand-icon expanded" />
                )}
              </div>
              
              <div className="job-details">
                <div className="job-detail">
                  <MapPin className="job-detail-icon" />
                  <span>{job.location}</span>
                </div>
                <div className="job-detail">
                  <Clock className="job-detail-icon" />
                  <span>{job.type}</span>
                </div>
                <div className="job-detail">
                  <Briefcase className="job-detail-icon" />
                  <span>{job.experience}</span>
                </div>
                <div className="job-detail">
                  <DollarSign className="job-detail-icon" />
                  <span>{job.salary}</span>
                </div>
              </div>

              <p className="job-description">{job.description}</p>

              {selectedJob?.id === job.id && (
                <div className="job-expanded-details">
                  <div className="job-section">
                    <h4>Key Responsibilities</h4>
                    <ul className="job-list">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="job-section">
                    <h4>Requirements</h4>
                    <ul className="job-list">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="job-posted">
                    <Calendar className="posted-icon" />
                    <span>Posted: {job.posted}</span>
                  </div>

                  <button 
                    className="apply-now-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="confidential-notice">
          <Shield className="notice-icon" />
          <div>
            <p>
              <strong>Confidential Recruitment:</strong> We do not publicly list all available roles. 
              Exceptional candidates may submit expressions of interest for future opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="careers-application" id="application-form">
        <div className="application-container">
          <div className="application-header">
            <h2>Submit Your Application</h2>
            <p className="application-subtitle">
              {selectedJob 
                ? `Applying for: ${selectedJob.title}`
                : 'Submit your CV for consideration'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name *
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Smith"
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address *
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john.smith@example.com"
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="cv">
                  CV/Resume *
                  <div className="file-upload">
                    <Upload className="upload-icon" />
                    <span>
                      {applicationForm.cv 
                        ? applicationForm.cv.name 
                        : 'Click to upload or drag and drop'}
                    </span>
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">
                Cover Letter
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={applicationForm.coverLetter}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Tell us about your interest in HBC and relevant experience..."
                />
              </label>
            </div>

            <div className="form-footer">
              <div className="privacy-note">
                <Shield className="privacy-icon" />
                <p>
                  Your information is confidential and used only for recruitment purposes. 
                  We will contact you only if your profile matches our requirements.
                </p>
              </div>

              <button type="submit" className="submit-btn">
                <Send className="submit-icon" />
                Submit Application
              </button>
            </div>
          </form>

          
        </div>
      </section>
    </div>
  );
};

export default Careers;