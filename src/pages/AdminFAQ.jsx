import React from 'react';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import Card, { CardBody } from '../components/Card';
import Button from '../components/Button';
import './Admin.css'; // Assuming Admin.css contains styles for admin components


export default function AdminFAQ() {
  const faqItems = [
    { id: 1, category: 'Getting Started', question: 'Who can invest with HBC Holdings?', views: 1523, updated: '2025-01-10' },
    { id: 2, category: 'Investment Process', question: 'How does your investment process work?', views: 1342, updated: '2025-01-08' },
    { id: 3, category: 'Capital Protection', question: 'How is my capital protected?', views: 2103, updated: '2025-01-05' }
  ];

  // TODO: Implement add/edit/delete functionality for FAQs

  return (
    <>
      <div className="main-content-header">
        <h2 className="main-content-title">FAQ Management</h2>
        <p className="main-content-subtitle">
          Manage and monitor your investment platform
        </p>
      </div>
      <div className="faq-grid">
        <div className="faq-header">
          <h3>All FAQs</h3>
          <Button onClick={() => console.log('Add FAQ')}> {/* Placeholder for actual modal */}
            <Plus className="w-4 h-4" />
            Add FAQ
          </Button>
        </div>

        <Card>
          <CardBody>
            <div className="faq-list">
              {faqItems.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <div className="faq-details">
                    <h5 className="faq-question">{faq.question}</h5>
                    <div className="faq-meta">
                      <span>{faq.category}</span>
                      <span>•</span>
                      <span>{faq.updated}</span>
                      <span>•</span>
                      <span>{faq.views} views</span>
                    </div>
                  </div>
                  <div className="faq-actions">
                    <button className="faq-action-button" onClick={() => console.log('View FAQ', faq.id)}>
                      <Eye className="faq-action-icon" />
                    </button>
                    <button className="faq-action-button" onClick={() => console.log('Edit FAQ', faq.id)}>
                      <Edit className="faq-action-icon" />
                    </button>
                    <button className="faq-action-button delete" onClick={() => console.log('Delete FAQ', faq.id)}>
                      <Trash2 className="faq-action-icon delete" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}