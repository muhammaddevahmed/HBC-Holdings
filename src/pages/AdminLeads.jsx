import React, { useState, useRef } from 'react';
import { Search, Download, Eye, Edit, Users, DollarSign, MessageSquare, Upload, X, Filter, Calendar, Target, Phone, MapPin, Check, Send, ThumbsDown } from 'lucide-react';
import './AdminLeads.css';

const LeadModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    investmentRange: '',
    preferredInvestment: '',
    investmentExperience: '',
    source: '',
    notes: '',
    status: 'New'
  });

  const investmentRanges = [
    '$10k - $50k',
    '$50k - $100k',
    '$100k - $250k',
    '$250k - $500k',
    '$500k - $1M',
    '$1M+'
  ];

  const investmentInterests = [
    'Diversified',
    'Automotive',
    'Sustainable',
    'Technology',
    'Real Estate',
    'Healthcare',
    'Infrastructure',
    'Consumer Goods',
    'All Divisions'
  ];

  const sources = [
    'Website Form',
    'Referral',
    'Event',
    'Social Media',
    'Email Campaign',
    'Phone Inquiry',
    'Other'
  ];

  const statuses = [
    { value: 'New', label: 'New', color: 'blue' },
    { value: 'Contacted', label: 'Contacted', color: 'yellow' },
    { value: 'Qualified', label: 'Qualified', color: 'green' },
    { value: 'In Process', label: 'In Process', color: 'purple' },
    { value: 'Closed', label: 'Closed', color: 'gray' },
    { value: 'Accepted', label: 'Accepted', color: 'cyan' },
    { value: 'Rejected', label: 'Rejected', color: 'red' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="lead-modal-overlay" onClick={onClose}>
      <div className="lead-modal-content" onClick={e => e.stopPropagation()}>
        <div className="lead-modal-header">
          <h3 className="lead-modal-title">
            Add New Lead
          </h3>
          <button className="lead-modal-close" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="lead-form">
          <div className="form-section">
            <h4 className="form-section-title">Contact Information</h4>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter lead's full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="email@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Company name"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                  placeholder="Job title"
                />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h4 className="form-section-title">Investment Details</h4>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Investment Range *</label>
                <select
                  className="form-select"
                  value={formData.investmentRange}
                  onChange={(e) => setFormData({...formData, investmentRange: e.target.value})}
                  required
                >
                  <option value="">Select range</option>
                  {investmentRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Preferred Investment *</label>
                <select
                  className="form-select"
                  value={formData.preferredInvestment}
                  onChange={(e) => setFormData({...formData, preferredInvestment: e.target.value})}
                  required
                >
                  <option value="">Select interest</option>
                  {investmentInterests.map(interest => (
                    <option key={interest} value={interest}>{interest}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Investment Experience</label>
                <select
                  className="form-select"
                  value={formData.investmentExperience}
                  onChange={(e) => setFormData({...formData, investmentExperience: e.target.value})}
                >
                  <option value="">Select experience level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Experienced">Experienced</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h4 className="form-section-title">Lead Information</h4>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Source *</label>
                <select
                  className="form-select"
                  value={formData.source}
                  onChange={(e) => setFormData({...formData, source: e.target.value})}
                  required
                >
                  <option value="">Select source</option>
                  {sources.map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  {statuses.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h4 className="form-section-title">Additional Notes</h4>
            <div className="form-group">
              <textarea
                className="form-textarea"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                placeholder="Add any additional notes about this lead..."
                rows={4}
              />
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const LeadViewModal = ({ isOpen, onClose, lead }) => {
  if (!isOpen || !lead) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'status-new';
      case 'Contacted': return 'status-contacted';
      case 'Qualified': return 'status-qualified';
      case 'In Process': return 'status-in-process';
      case 'Closed': return 'status-closed';
      case 'Accepted': return 'status-accepted';
      case 'Rejected': return 'status-rejected';
      default: return 'status-new';
    }
  };

  return (
    <div className="lead-modal-overlay" onClick={onClose}>
      <div className="lead-modal-content" onClick={e => e.stopPropagation()}>
        <div className="lead-modal-header">
          <h3 className="lead-modal-title">Lead Details</h3>
          <button className="lead-modal-close" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="lead-view-content">
          <div className="lead-view-header">
            <div>
              <h4 className="lead-view-name">{lead.name}</h4>
              <p className="lead-view-email">{lead.email}</p>
            </div>
            <span className={`lead-view-status-badge ${getStatusColor(lead.status)}`}>
              {lead.status}
            </span>
          </div>
          
          <div className="lead-view-grid">
            <div className="lead-view-section">
              <h5 className="lead-view-section-title">Contact Information</h5>
              <div className="lead-view-info">
                <div className="lead-view-item">
                  <span className="lead-view-label">Phone</span>
                  <span className="lead-view-value">{lead.phone || 'Not provided'}</span>
                </div>
                <div className="lead-view-item">
                  <span className="lead-view-label">Company</span>
                  <span className="lead-view-value">{lead.company || 'Not provided'}</span>
                </div>
                <div className="lead-view-item">
                  <span className="lead-view-label">Position</span>
                  <span className="lead-view-value">{lead.position || 'Not provided'}</span>
                </div>
              </div>
            </div>
            
            <div className="lead-view-section">
              <h5 className="lead-view-section-title">Investment Details</h5>
              <div className="lead-view-info">
                <div className="lead-view-item">
                  <span className="lead-view-label">Investment Range</span>
                  <span className="lead-view-value">{lead.range}</span>
                </div>
                <div className="lead-view-item">
                  <span className="lead-view-label">Interest</span>
                  <span className="lead-view-value">{lead.interest}</span>
                </div>
                <div className="lead-view-item">
                  <span className="lead-view-label">Date Added</span>
                  <span className="lead-view-value">{lead.date}</span>
                </div>
              </div>
            </div>
          </div>
          
          {lead.notes && (
            <div className="lead-view-notes">
              <h6 className="lead-view-notes-title">Additional Notes</h6>
              <div className="lead-view-notes-content">
                {lead.notes}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AdminLeads() {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'John Anderson',
      email: 'john.a@email.com',
      phone: '+1 (555) 123-4567',
      company: 'TechCorp Inc.',
      position: 'CEO',
      range: '$100k-$250k',
      interest: 'Automotive',
      date: '2025-01-15',
      status: 'New',
      source: 'Website Form',
      notes: 'Interested in electric vehicle investments. Requested more information about automotive division.',
      experience: 'Experienced',
      kycSent: false
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      email: 'sarah.m@email.com',
      phone: '+1 (555) 987-6543',
      company: 'Global Investments',
      position: 'Investment Manager',
      range: '$250k-$500k',
      interest: 'Sustainable',
      date: '2025-01-15',
      status: 'Contacted',
      source: 'Referral',
      notes: 'Referred by Michael Chen. Very interested in sustainable energy projects.',
      experience: 'Professional',
      kycSent: false
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael.c@email.com',
      phone: '+1 (555) 456-7890',
      company: 'Wealth Builders LLC',
      position: 'Portfolio Manager',
      range: '$50k-$100k',
      interest: 'Diversified',
      date: '2025-01-14',
      status: 'New',
      source: 'Email Campaign',
      notes: 'Looking for diversified portfolio options. Beginner investor.',
      experience: 'Beginner',
      kycSent: false
    },
    {
      id: 4,
      name: 'Emily Johnson',
      email: 'emily.j@email.com',
      phone: '+1 (555) 234-5678',
      company: 'Johnson Family Office',
      position: 'Director',
      range: '$100k-$250k',
      interest: 'Alternative',
      date: '2025-01-14',
      status: 'Qualified',
      source: 'Event',
      notes: 'Met at investment conference. Interested in alternative assets.',
      experience: 'Intermediate',
      kycSent: false
    },
    {
      id: 5,
      name: 'Robert Williams',
      email: 'robert.w@email.com',
      phone: '+1 (555) 876-5432',
      company: 'Williams Enterprises',
      position: 'Founder',
      range: '$1M+',
      interest: 'All Divisions',
      date: '2025-01-13',
      status: 'In Process',
      source: 'Website Form',
      notes: 'High net worth individual. Wants comprehensive investment portfolio across all divisions.',
      experience: 'Professional',
      kycSent: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [interestFilter, setInterestFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewingLead, setViewingLead] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  const fileInputRef = useRef(null);

  const dashboardStats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Total Leads",
      value: leads.length.toString(),
      change: "+12%",
      color: "blue",
      type: "total"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "Qualified Leads",
      value: leads.filter(l => l.status === 'Qualified' || l.status === 'In Process').length.toString(),
      change: "+8%",
      color: "green",
      type: "active"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "New Leads",
      value: leads.filter(l => l.status === 'New').length.toString(),
      change: "+5%",
      color: "purple",
      type: "messages"
    },
    {
      icon: <Download className="w-6 h-6" />,
      label: "High Value",
      value: leads.filter(l => l.range.includes('$1M') || l.range.includes('$500k')).length.toString(),
      change: "+15%",
      color: "orange",
      type: "documents"
    }
  ];

  // Filter leads based on search and filters
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchesInterest = interestFilter === 'All' || lead.interest === interestFilter;
    
    return matchesSearch && matchesStatus && matchesInterest;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);

  const handleAddLead = () => {
    setIsModalOpen(true);
  };



  const handleViewLead = (lead) => {
    setViewingLead(lead);
    setIsViewModalOpen(true);
  };

  const handleDeleteLead = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads(leads.filter(lead => lead.id !== id));
    }
  };

  const handleAcceptLead = (id) => {
    setLeads(leads.map(lead =>
      lead.id === id ? { ...lead, status: 'Accepted' } : lead
    ));
  };

  const handleRejectLead = (id) => {
    setLeads(leads.map(lead =>
      lead.id === id ? { ...lead, status: 'Rejected' } : lead
    ));
  };

  const handleSendKyc = (id) => {
    setLeads(leads.map(lead =>
      lead.id === id ? { ...lead, kycSent: true } : lead
    ));
    alert('KYC form link sent!');
  };

  const handleSubmitLead = (formData) => {
    const newLead = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split('T')[0],
      kycSent: false
    };
    setLeads([...leads, newLead]);
  };

  const handleExportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Position', 'Investment Range', 'Interest', 'Status', 'Date', 'Source'];
    const csvData = [
      headers.join(','),
      ...leads.map(lead => [
        `"${lead.name}"`,
        `"${lead.email}"`,
        `"${lead.phone || ''}"`,
        `"${lead.company || ''}"`,
        `"${lead.position || ''}"`,
        `"${lead.range}"`,
        `"${lead.interest}"`,
        `"${lead.status}"`,
        `"${lead.date}"`,
        `"${lead.source || ''}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads_export_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleImportCSV = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split('\n');
      const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
      
      const newLeads = lines.slice(1)
        .filter(line => line.trim())
        .map(line => {
          const values = line.split(',').map(v => v.replace(/"/g, '').trim());
          const lead = {};
          headers.forEach((header, index) => {
            lead[header.toLowerCase().replace(/ /g, '')] = values[index] || '';
          });
          
          return {
            id: Date.now() + Math.random(),
            name: lead.name || '',
            email: lead.email || '',
            phone: lead.phone || '',
            company: lead.company || '',
            position: lead.position || '',
            range: lead.investmentrange || '$50k-$100k',
            interest: lead.interest || 'Diversified',
            date: lead.date || new Date().toISOString().split('T')[0],
            status: lead.status || 'New',
            source: lead.source || 'CSV Import'
          };
        });

      setLeads(prev => [...prev, ...newLeads]);
      alert(`Successfully imported ${newLeads.length} leads from CSV`);
    };

    reader.readAsText(file);
    event.target.value = ''; // Reset file input
  };

  const handleFilterReset = () => {
    setSearchTerm('');
    setStatusFilter('All');
    setInterestFilter('All');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'status-new';
      case 'Contacted': return 'status-contacted';
      case 'Qualified': return 'status-qualified';
      case 'In Process': return 'status-in-process';
      case 'Closed': return 'status-closed';
      case 'Accepted': return 'status-accepted';
      case 'Rejected': return 'status-rejected';
      default: return 'status-new';
    }
  };

  const statusOptions = ['All', 'New', 'Contacted', 'Qualified', 'In Process', 'Closed', 'Accepted', 'Rejected'];
  const interestOptions = ['All', 'Diversified', 'Automotive', 'Sustainable', 'Technology', 'Real Estate', 'Healthcare', 'Infrastructure', 'Consumer Goods', 'All Divisions'];

  return (
    <div className="leads-management-container">
      <div className="leads-header-section">
        <h1 className="leads-title">Leads Management</h1>
        <p className="leads-subtitle">
          Manage investor leads, track engagement, and convert prospects into clients
        </p>
      </div>

      {/* Stats Grid */}
      <div className="leads-stats-grid">
        {dashboardStats.map((stat, index) => (
          <div key={index} className={`lead-stat-card ${stat.type}`}>
            <div className="stat-card-header">
              <div className={`stat-icon-container ${stat.color}`}>
                {stat.icon}
              </div>
              <span className={`stat-change ${stat.change.startsWith('-') ? 'negative' : ''}`}>
                {stat.change}
              </span>
            </div>
            <div className="stat-value-section">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="leads-filters">
        <div className="filters-grid">
          <div className="filter-group">
            <label className="filter-label">Status</label>
            <select 
              className="filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">Investment Interest</label>
            <select 
              className="filter-select"
              value={interestFilter}
              onChange={(e) => setInterestFilter(e.target.value)}
            >
              {interestOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-actions">
            <button className="btn-filter" onClick={() => {}}>
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </button>
            <button className="btn-reset" onClick={handleFilterReset}>
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="leads-main-container">
        <div className="leads-main-header">
          <h2 className="leads-main-title">All Leads</h2>
          <div className="leads-header-actions">
            <div className="leads-search-container">
              <Search className="leads-search-icon" />
              <input
                type="text"
                placeholder="Search leads by name, email, or company..."
                className="leads-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="import-export-buttons">
              <button className="btn-export" onClick={handleExportCSV}>
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="import-file-input"
                  accept=".csv"
                  onChange={handleImportCSV}
                />
                <button 
                  className="btn-import"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-4 h-4" />
                  Import CSV
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="leads-table-container">
          <table className="leads-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Investment Range</th>
                <th>Interest</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentLeads.length > 0 ? (
                currentLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td>
                      <div className="font-medium text-gray-900">{lead.name}</div>
                      {lead.company && (
                        <div className="text-xs text-gray-500">{lead.company}</div>
                      )}
                    </td>
                    <td>{lead.email}</td>
                    <td>{lead.range}</td>
                    <td>{lead.interest}</td>
                    <td>{lead.date}</td>
                    <td>
                      <span className={`lead-status ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td>
                      <div className="lead-actions">
                        <button
                          className="lead-action-button view"
                          onClick={() => handleViewLead(lead)}
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {lead.status !== 'Accepted' && lead.status !== 'Rejected' && (
                          <>
                            <button
                              className="lead-action-button accept"
                              onClick={() => handleAcceptLead(lead.id)}
                              title="Accept"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              className="lead-action-button reject"
                              onClick={() => handleRejectLead(lead.id)}
                              title="Reject"
                            >
                              <ThumbsDown className="w-4 h-4" />
                            </button>
                          </>
                        )}
                        {lead.status === 'Accepted' && !lead.kycSent && (
                          <button
                            className="lead-action-button send-kyc"
                            onClick={() => handleSendKyc(lead.id)}
                            title="Send KYC Form Link"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        )}

                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-8">
                    <div className="text-gray-500">
                      No leads found matching your criteria
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredLeads.length > itemsPerPage && (
          <div className="leads-pagination">
            <div className="pagination-info">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredLeads.length)} of {filteredLeads.length} leads
            </div>
            <div className="pagination-controls">
              <button
                className="pagination-button"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              
              <button
                className="pagination-button"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Edit/Add Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        onSubmit={handleSubmitLead}
      />

      {/* View Modal */}
      <LeadViewModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setViewingLead(null);
        }}
        lead={viewingLead}
      />
    </div>
  );
}