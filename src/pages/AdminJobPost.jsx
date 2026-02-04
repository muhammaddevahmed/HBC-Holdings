import React, { useState, useRef } from 'react';
import { Search, Download, Eye, Edit, Users, DollarSign, MessageSquare, Upload, X, Filter, Calendar, Target, Phone, MapPin, Check, Send, ThumbsDown, Briefcase, Clock } from 'lucide-react';
import './AdminLeads.css';
import './AdminJobPost.css';

const JobPostModal = ({ isOpen, onClose, onSubmit, job }) => {
  const [formData, setFormData] = useState(job || {
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    experience: '',
    salary: '',
    description: '',
    responsibilities: [],
    requirements: [],
  });

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
          <h3 className="lead-modal-title">{job ? 'Edit Job Post' : 'Add New Job Post'}</h3>
          <button className="lead-modal-close" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="lead-form">
          {/* Form fields for job post details */}
          <div className="form-section">
            <h4 className="form-section-title">Job Details</h4>
            <div className="form-grid">
                <div className="form-group">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-input" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="Job Title" required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Department</label>
                    <input type="text" className="form-input" value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} placeholder="Department" required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-input" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="Location" required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Type</label>
                    <select className="form-select" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} required>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Experience</label>
                    <input type="text" className="form-input" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} placeholder="Experience" required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Salary</label>
                    <input type="text" className="form-input" value={formData.salary} onChange={(e) => setFormData({...formData, salary: e.target.value})} placeholder="Salary"/>
                </div>
            </div>
          </div>
          <div className="form-section">
            <h4 className="form-section-title">Description</h4>
            <div className="form-group">
              <textarea className="form-textarea" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Job Description" rows={4}/>
            </div>
          </div>
          {/* ... more form fields for responsibilities, requirements, etc. */}
          
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {job ? 'Save Changes' : 'Add Job Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default function AdminJobPost() {
    const [jobPosts, setJobPosts] = useState([
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
      ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const handleAddJobPost = () => {
    setEditingJob(null);
    setIsModalOpen(true);
  };

  const handleEditJobPost = (job) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  const handleDeleteJobPost = (id) => {
    if (window.confirm('Are you sure you want to delete this job post?')) {
      setJobPosts(jobPosts.filter(job => job.id !== id));
    }
  };

  const handleSubmitJobPost = (formData) => {
    if (editingJob) {
      // Update existing job post
      setJobPosts(jobPosts.map(job => (job.id === editingJob.id ? { ...job, ...formData } : job)));
    } else {
      // Add new job post
      const newJobPost = {
        id: Date.now(),
        ...formData,
        posted: new Date().toISOString().split('T')[0]
      };
      setJobPosts([...jobPosts, newJobPost]);
    }
  };

  return (
    <div className="leads-management-container">
      <div className="leads-header-section">
        <h1 className="leads-title">Job Post Management</h1>
        <p className="leads-subtitle">
          Manage job openings for the careers page.
        </p>
      </div>

      <div className="leads-main-container">
        <div className="leads-main-header">
          <h2 className="leads-main-title">All Job Posts</h2>
          <div className="leads-header-actions">
            <button className="btn-submit" onClick={handleAddJobPost}>
              Add Job Post
            </button>
          </div>
        </div>

        <div className="leads-table-container">
          <table className="leads-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Department</th>
                <th>Location</th>
                <th>Type</th>
                <th>Posted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobPosts.length > 0 ? (
                jobPosts.map((job) => (
                  <tr key={job.id}>
                    <td>
                      <div className="font-medium text-gray-900">{job.title}</div>
                    </td>
                    <td>{job.department}</td>
                    <td>{job.location}</td>
                    <td>{job.type}</td>
                    <td>{job.posted}</td>
                    <td>
                      <div className="lead-actions">
                        <button
                          className="lead-action-button view"
                          onClick={() => handleEditJobPost(job)}
                          title="Edit Details"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="lead-action-button reject"
                          onClick={() => handleDeleteJobPost(job.id)}
                          title="Delete"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-8">
                    <div className="text-gray-500">
                      No job posts found.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <JobPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitJobPost}
        job={editingJob}
      />
    </div>
  );
}