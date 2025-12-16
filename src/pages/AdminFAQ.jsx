import React, { useState } from 'react';
import { Plus, Eye, Edit, Trash2, BarChart3, RefreshCw, X, Tag, Calendar, TrendingUp } from 'lucide-react';
import './AdminFAQ.css';

const FAQModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    question: '',
    answer: '',
    category: '',
    isPublished: true
  });

  const categories = [
    'Getting Started',
    'Investment Process',
    'Capital Protection',
    'Fees & Charges',
    'Account Management',
    'Withdrawals',
    'Security',
    'General'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="faq-modal-overlay" onClick={onClose}>
      <div className="faq-modal-content" onClick={e => e.stopPropagation()}>
        <div className="faq-modal-header">
          <h3 className="faq-modal-title">
            {initialData ? 'Edit FAQ' : 'Add New FAQ'}
          </h3>
          <button className="faq-modal-close" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="faq-form">
          <div className="form-group">
            <label className="form-label">Question</label>
            <input
              type="text"
              className="form-input"
              value={formData.question}
              onChange={(e) => setFormData({...formData, question: e.target.value})}
              placeholder="Enter the frequently asked question"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Answer</label>
            <textarea
              className="form-textarea"
              value={formData.answer}
              onChange={(e) => setFormData({...formData, answer: e.target.value})}
              placeholder="Provide a detailed answer"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              required
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">
              <input
                type="checkbox"
                checked={formData.isPublished}
                onChange={(e) => setFormData({...formData, isPublished: e.target.checked})}
                className="mr-2"
              />
              Publish immediately
            </label>
          </div>
          
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {initialData ? 'Update FAQ' : 'Add FAQ'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FAQViewModal = ({ isOpen, onClose, faq }) => {
  if (!isOpen || !faq) return null;

  return (
    <div className="faq-modal-overlay" onClick={onClose}>
      <div className="faq-modal-content faq-view-modal" onClick={e => e.stopPropagation()}>
        <div className="faq-modal-header">
          <h3 className="faq-modal-title">FAQ Details</h3>
          <button className="faq-modal-close" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="faq-view-content">
          <h4 className="faq-view-question">{faq.question}</h4>
          
          <div className="faq-view-answer">
            {faq.answer || "No answer provided for this FAQ."}
          </div>
          
          <div className="faq-view-meta">
            <div className="faq-view-meta-item">
              <span className="faq-view-meta-label">Category</span>
              <span className="faq-view-meta-value">{faq.category}</span>
            </div>
            
            <div className="faq-view-meta-item">
              <span className="faq-view-meta-label">Status</span>
              <span className="faq-view-meta-value">
                {faq.isPublished ? (
                  <span className="text-green-600">Published</span>
                ) : (
                  <span className="text-yellow-600">Draft</span>
                )}
              </span>
            </div>
            
            <div className="faq-view-meta-item">
              <span className="faq-view-meta-label">Last Updated</span>
              <span className="faq-view-meta-value">{faq.updated}</span>
            </div>
            
            <div className="faq-view-meta-item">
              <span className="faq-view-meta-label">Views</span>
              <span className="faq-view-meta-value">{faq.views.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AdminFAQ() {
  const [faqItems, setFaqItems] = useState([
    { 
      id: 1, 
      category: 'Getting Started', 
      question: 'Who can invest with HBC Holdings?', 
      answer: 'HBC Holdings welcomes both accredited and non-accredited investors who meet our minimum investment requirements. We cater to:\n\n• Individual investors with a minimum investment of $10,000\n• Institutional investors with customized solutions\n• Retirement accounts (IRA, 401k rollovers)\n• Trusts and family offices\n\nAll investors must pass our suitability assessment to ensure our investment strategies align with their financial goals.',
      views: 1523, 
      updated: '2025-01-10',
      isPublished: true
    },
    { 
      id: 2, 
      category: 'Investment Process', 
      question: 'How does your investment process work?', 
      answer: 'Our investment process follows a structured 5-step approach:\n\n1. Initial Consultation: We understand your financial goals, risk tolerance, and investment horizon.\n2. Portfolio Design: Our experts create a customized portfolio based on your objectives.\n3. Due Diligence: Thorough analysis of investment opportunities and risk assessment.\n4. Execution: Implementation of the investment strategy with continuous monitoring.\n5. Review & Rebalancing: Quarterly performance reviews and portfolio adjustments as needed.\n\nWe maintain transparency throughout the process with regular updates.',
      views: 1342, 
      updated: '2025-01-08',
      isPublished: true
    },
    { 
      id: 3, 
      category: 'Capital Protection', 
      question: 'How is my capital protected?', 
      answer: 'We employ multiple layers of protection to safeguard your investments:\n\n• Diversification: Spread investments across multiple asset classes and geographies\n• Insurance Coverage: All investments are covered by our comprehensive insurance policy\n• Risk Management: Continuous monitoring with automated risk controls\n• Segregated Accounts: Client funds are held in separate, protected accounts\n• Regulatory Compliance: Adherence to all financial regulations and best practices\n\nOur protection strategy has maintained a 99.7% capital preservation rate over the past decade.',
      views: 2103, 
      updated: '2025-01-05',
      isPublished: true
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [viewingFaq, setViewingFaq] = useState(null);

  const handleAddFaq = () => {
    setEditingFaq(null);
    setIsModalOpen(true);
  };

  const handleEditFaq = (faq) => {
    setEditingFaq(faq);
    setIsModalOpen(true);
  };

  const handleViewFaq = (faq) => {
    setViewingFaq(faq);
    setIsViewModalOpen(true);
  };

  const handleDeleteFaq = (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      setFaqItems(faqItems.filter(faq => faq.id !== id));
    }
  };

  const handleSubmitFaq = (formData) => {
    if (editingFaq) {
      // Update existing FAQ
      setFaqItems(faqItems.map(faq => 
        faq.id === editingFaq.id ? { 
          ...faq, 
          ...formData, 
          updated: new Date().toISOString().split('T')[0] 
        } : faq
      ));
    } else {
      // Add new FAQ
      const newFaq = {
        id: Date.now(),
        ...formData,
        views: 0,
        updated: new Date().toISOString().split('T')[0]
      };
      setFaqItems([...faqItems, newFaq]);
    }
  };

  const stats = {
    total: faqItems.length,
    published: faqItems.filter(faq => faq.isPublished).length,
    draft: faqItems.filter(faq => !faq.isPublished).length
  };

  return (
    <div className="faq-management-container">
      <div className="faq-header-section">
        <h1 className="faq-title">FAQ Management</h1>
        <p className="faq-subtitle">
          Manage frequently asked questions and provide valuable information to investors
        </p>
      </div>

      {/* Stats Overview - Removed Views Card */}
      <div className="faq-stats-grid">
        <div className="faq-stat-card">
          <div className="stat-icon question">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total FAQs</div>
        </div>
        
        <div className="faq-stat-card">
          <div className="stat-icon update">
            <RefreshCw className="w-6 h-6" />
          </div>
          <div className="stat-value">{stats.published}</div>
          <div className="stat-label">Published</div>
        </div>
      </div>

      {/* FAQ List Container */}
      <div className="faq-list-container">
        <div className="faq-list-header">
          <h2 className="faq-list-title">All FAQs</h2>
          <button className="faq-add-button" onClick={handleAddFaq}>
            <Plus className="w-4 h-4" />
            Add FAQ
          </button>
        </div>

        <div className="faq-list-content">
          {faqItems.length > 0 ? (
            faqItems.map((faq) => (
              <div key={faq.id} className="faq-list-item">
                <div className="faq-item-content">
                  <h4 className="faq-item-question">{faq.question}</h4>
                  <div className="faq-item-meta">
                    <span className="faq-category-badge">
                      <Tag className="w-3 h-3 mr-1" />
                      {faq.category}
                    </span>
                    <span className="faq-meta-item">
                      <Calendar className="w-3 h-3" />
                      Updated {faq.updated}
                    </span>
                    <span className="faq-meta-item">
                      <TrendingUp className="w-3 h-3" />
                      {faq.views.toLocaleString()} views
                    </span>
                    <span className={`faq-meta-item ${faq.isPublished ? 'text-green-600' : 'text-yellow-600'}`}>
                      {faq.isPublished ? '● Published' : '● Draft'}
                    </span>
                  </div>
                </div>
                <div className="faq-action-buttons">
                  <button 
                    className="faq-action-button view"
                    onClick={() => handleViewFaq(faq)}
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button 
                    className="faq-action-button edit"
                    onClick={() => handleEditFaq(faq)}
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    className="faq-action-button delete"
                    onClick={() => handleDeleteFaq(faq.id)}
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="faq-empty-state">
              <BarChart3 className="faq-empty-icon w-12 h-12" />
              <h3 className="faq-empty-title">No FAQs Found</h3>
              <p className="faq-empty-description">
                Get started by adding your first FAQ to help your investors.
              </p>
              <button className="faq-add-button" onClick={handleAddFaq}>
                <Plus className="w-4 h-4" />
                Add Your First FAQ
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Edit/Add Modal */}
      <FAQModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingFaq(null);
        }}
        onSubmit={handleSubmitFaq}
        initialData={editingFaq}
      />

      {/* View Modal */}
      <FAQViewModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setViewingFaq(null);
        }}
        faq={viewingFaq}
      />
    </div>
  );
}