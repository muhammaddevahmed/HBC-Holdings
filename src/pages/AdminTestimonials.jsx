import React, { useState } from 'react';
import { Plus, Eye, Edit, Trash2, Star, Calendar, Clock, Tag, X } from 'lucide-react';
import './AdminTestimonials.css';

const TestimonialModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    position: '',
    company: '',
    division: '',
    testimonial: '',
    rating: 5,
    duration: '',
    status: 'Pending'
  });

  const divisions = [
    'Diversified',
    'Automotive',
    'Sustainable',
    'Technology',
    'Real Estate',
    'Healthcare',
    'Infrastructure',
    'Consumer Goods'
  ];

  const statusOptions = [
    { value: 'Approved', label: 'Approved', color: 'green' },
    { value: 'Pending', label: 'Pending', color: 'yellow' },
    { value: 'Rejected', label: 'Rejected', color: 'red' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="testimonial-modal-overlay" onClick={onClose}>
      <div className="testimonial-modal-content" onClick={e => e.stopPropagation()}>
        <div className="testimonial-modal-header">
          <h3 className="testimonial-modal-title">
            {initialData ? 'Edit Testimonial' : 'Add New Testimonial'}
          </h3>
          <button className="testimonial-modal-close" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="testimonial-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter client's full name"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Position</label>
              <input
                type="text"
                className="form-input"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                placeholder="e.g., CEO, Investor"
              />
            </div>
          </div>
          
          <div className="form-row">
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
              <label className="form-label">Investment Division *</label>
              <select
                className="form-select"
                value={formData.division}
                onChange={(e) => setFormData({...formData, division: e.target.value})}
                required
              >
                <option value="">Select division</option>
                {divisions.map(division => (
                  <option key={division} value={division}>{division}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Investment Duration *</label>
              <input
                type="text"
                className="form-input"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                placeholder="e.g., 2+ years, 18+ months"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Rating</label>
              <div className="rating-input">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={`rating-star ${star <= formData.rating ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, rating: star})}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </span>
                ))}
                <span className="ml-2 text-gray-600">{formData.rating}/5</span>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Testimonial Text *</label>
            <textarea
              className="form-textarea"
              value={formData.testimonial}
              onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
              placeholder="Share the client's experience and feedback..."
              rows={4}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Status</label>
            <div className="status-selection">
              {statusOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  className={`status-option ${option.value.toLowerCase()} ${formData.status === option.value ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, status: option.value})}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {initialData ? 'Update Testimonial' : 'Add Testimonial'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const TestimonialViewModal = ({ isOpen, onClose, testimonial }) => {
  if (!isOpen || !testimonial) return null;

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="testimonial-modal-overlay" onClick={onClose}>
      <div className="testimonial-modal-content" onClick={e => e.stopPropagation()}>
        <div className="testimonial-modal-header">
          <h3 className="testimonial-modal-title">Testimonial Details</h3>
          <button className="testimonial-modal-close" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="testimonial-view-content">
          <div className="testimonial-view-header">
            <div className="testimonial-view-avatar">
              {getInitials(testimonial.name)}
            </div>
            <div>
              <h4 className="testimonial-view-name">{testimonial.name}</h4>
              <div className="testimonial-view-meta">
                <span className="testimonial-view-division">
                  <Tag className="w-3 h-3 mr-1" />
                  {testimonial.division}
                </span>
                <span className="testimonial-view-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-1">{testimonial.rating}.0</span>
                </span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-view-body">
            <p className="testimonial-view-text">
              {testimonial.testimonial || "No testimonial text provided."}
            </p>
          </div>
          
          <div className="testimonial-view-footer">
            <div className="testimonial-view-info">
              <span className="testimonial-view-label">Investment Duration</span>
              <span className="testimonial-view-value">
                <Clock className="w-4 h-4 inline mr-1" />
                {testimonial.duration}
              </span>
            </div>
            
            <div className="testimonial-view-info">
              <span className="testimonial-view-label">Status</span>
              <span className={`testimonial-view-value ${
                testimonial.status === 'Approved' ? 'text-green-600' :
                testimonial.status === 'Pending' ? 'text-yellow-600' :
                'text-red-600'
              }`}>
                {testimonial.status}
              </span>
            </div>
            
            <div className="testimonial-view-info">
              <span className="testimonial-view-label">Date Added</span>
              <span className="testimonial-view-value">
                <Calendar className="w-4 h-4 inline mr-1" />
                {testimonial.date}
              </span>
            </div>
            
            {testimonial.company && (
              <div className="testimonial-view-info">
                <span className="testimonial-view-label">Company</span>
                <span className="testimonial-view-value">{testimonial.company}</span>
              </div>
            )}
            
            {testimonial.position && (
              <div className="testimonial-view-info">
                <span className="testimonial-view-label">Position</span>
                <span className="testimonial-view-value">{testimonial.position}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([
    { 
      id: 1, 
      name: 'Michael R.', 
      position: 'CEO',
      company: 'TechCorp Inc.',
      rating: 5, 
      division: 'Diversified', 
      duration: '3+ years', 
      status: 'Approved', 
      date: '2024-12-20',
      testimonial: 'HBC Holdings has consistently delivered exceptional returns while maintaining transparent communication. Their diversified portfolio strategy has provided stability even during market volatility.'
    },
    { 
      id: 2, 
      name: 'Sarah L.', 
      position: 'Investment Manager',
      company: 'Global Investments',
      rating: 5, 
      division: 'Automotive', 
      duration: '2+ years', 
      status: 'Approved', 
      date: '2024-12-18',
      testimonial: 'The automotive division investments have exceeded expectations. The team expertise in emerging technologies and sustainable mobility has been impressive.'
    },
    { 
      id: 3, 
      name: 'James K.', 
      position: 'Portfolio Manager',
      company: 'Wealth Builders LLC',
      rating: 5, 
      division: 'Sustainable', 
      duration: '18+ months', 
      status: 'Pending', 
      date: '2025-01-10',
      testimonial: 'Very professional team with deep industry knowledge. Looking forward to seeing the long-term impact of their sustainable investment strategies.'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [viewingTestimonial, setViewingTestimonial] = useState(null);

  const handleAddTestimonial = () => {
    setEditingTestimonial(null);
    setIsModalOpen(true);
  };

  const handleEditTestimonial = (testimonial) => {
    setEditingTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleViewTestimonial = (testimonial) => {
    setViewingTestimonial(testimonial);
    setIsViewModalOpen(true);
  };

  const handleDeleteTestimonial = (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
    }
  };

  const handleSubmitTestimonial = (formData) => {
    if (editingTestimonial) {
      // Update existing testimonial
      setTestimonials(testimonials.map(testimonial => 
        testimonial.id === editingTestimonial.id ? { 
          ...testimonial, 
          ...formData,
          date: new Date().toISOString().split('T')[0]
        } : testimonial
      ));
    } else {
      // Add new testimonial
      const newTestimonial = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString().split('T')[0]
      };
      setTestimonials([...testimonials, newTestimonial]);
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const stats = {
    total: testimonials.length,
    approved: testimonials.filter(t => t.status === 'Approved').length,
    pending: testimonials.filter(t => t.status === 'Pending').length
  };

  return (
    <div className="testimonials-management-container">
      <div className="testimonials-header-section">
        <h1 className="testimonials-title">Testimonials Management</h1>
        <p className="testimonials-subtitle">
          Manage client testimonials and showcase success stories from your investors
        </p>
      </div>

      {/* Stats Overview */}
      <div className="testimonials-stats-grid">
        <div className="testimonial-stat-card">
          <div className="stat-icon total">
            <Star className="w-6 h-6" />
          </div>
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total Testimonials</div>
        </div>
        
        <div className="testimonial-stat-card">
          <div className="stat-icon approved">
            <Eye className="w-6 h-6" />
          </div>
          <div className="stat-value">{stats.approved}</div>
          <div className="stat-label">Approved</div>
        </div>
        
        <div className="testimonial-stat-card">
          <div className="stat-icon pending">
            <Clock className="w-6 h-6" />
          </div>
          <div className="stat-value">{stats.pending}</div>
          <div className="stat-label">Pending Review</div>
        </div>
      </div>

      {/* Testimonials List Container */}
      <div className="testimonials-list-container">
        <div className="testimonials-list-header">
          <h2 className="testimonials-list-title">All Testimonials</h2>
          <button className="testimonial-add-button" onClick={handleAddTestimonial}>
            <Plus className="w-4 h-4" />
            Add Testimonial
          </button>
        </div>

        <div className="testimonials-list-content">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-list-item">
                <div className="testimonial-item-content">
                  <div className="testimonial-avatar">
                    {getInitials(testimonial.name)}
                  </div>
                  <div className="testimonial-details">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <div className="testimonial-meta">
                      <span className="testimonial-division">
                        <Tag className="w-3 h-3 mr-1" />
                        {testimonial.division}
                      </span>
                      <span className="testimonial-duration">
                        <Clock className="w-3 h-3 mr-1" />
                        {testimonial.duration}
                      </span>
                      <span className="testimonial-rating">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                        {testimonial.rating}.0
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1">
                      <span className={`testimonial-status-badge status-${testimonial.status.toLowerCase()}`}>
                        {testimonial.status}
                      </span>
                      <span className="testimonial-date">
                        <Calendar className="w-3 h-3 mr-1" />
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-action-buttons">
                  <button 
                    className="testimonial-action-button view"
                    onClick={() => handleViewTestimonial(testimonial)}
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button 
                    className="testimonial-action-button edit"
                    onClick={() => handleEditTestimonial(testimonial)}
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    className="testimonial-action-button delete"
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="testimonials-empty-state">
              <Star className="testimonials-empty-icon w-12 h-12" />
              <h3 className="testimonials-empty-title">No Testimonials Found</h3>
              <p className="testimonials-empty-description">
                Get started by adding your first client testimonial to build trust and credibility.
              </p>
              <button className="testimonial-add-button" onClick={handleAddTestimonial}>
                <Plus className="w-4 h-4" />
                Add Your First Testimonial
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Edit/Add Modal */}
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTestimonial(null);
        }}
        onSubmit={handleSubmitTestimonial}
        initialData={editingTestimonial}
      />

      {/* View Modal */}
      <TestimonialViewModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setViewingTestimonial(null);
        }}
        testimonial={viewingTestimonial}
      />
    </div>
  );
}