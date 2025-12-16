import React from 'react';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import Card, { CardBody } from '../components/Card';
import Button from '../components/Button';
import './Admin.css'; // Assuming Admin.css contains styles for admin components

export default function AdminTestimonials() {
  const testimonials = [
    { id: 1, name: 'Michael R.', rating: 5, division: 'Diversified', duration: '3+ years', status: 'Approved', date: '2024-12-20' },
    { id: 2, name: 'Sarah L.', rating: 5, division: 'Automotive', duration: '2+ years', status: 'Approved', date: '2024-12-18' },
    { id: 3, name: 'James K.', rating: 5, division: 'Sustainable', duration: '18+ months', status: 'Pending', date: '2025-01-10' }
  ];

  // TODO: Implement add/edit/delete functionality for testimonials

  return (
    <>
      <div className="main-content-header">
        <h2 className="main-content-title">Testimonials Management</h2>
        <p className="main-content-subtitle">
          Manage and monitor your investment platform
        </p>
      </div>
      <div className="testimonials-grid">
        <div className="testimonials-header">
          <h3>All Testimonials</h3>
          <Button onClick={() => console.log('Add Testimonial')}> {/* Placeholder for actual modal */}
            <Plus className="w-4 h-4" />
            Add Testimonial
          </Button>
        </div>

        <Card>
          <CardBody>
            <div className="testimonial-list">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item">
                  <div className="testimonial-details">
                    <h5 className="testimonial-name">{testimonial.name}</h5>
                    <div className="testimonial-meta">
                      <span>{testimonial.division}</span>
                      <span>•</span>
                      <span>{testimonial.duration}</span>
                      <span>•</span>
                      <span>Rating: {testimonial.rating}</span>
                    </div>
                    <span className={`testimonial-status ${
                      testimonial.status === 'Approved' ? 'approved' : 'pending'
                    }`}>
                      {testimonial.status}
                    </span>
                  </div>
                  <div className="testimonial-actions">
                    <button className="testimonial-action-button" onClick={() => console.log('View Testimonial', testimonial.id)}>
                      <Eye className="testimonial-action-icon" />
                    </button>
                    <button className="testimonial-action-button" onClick={() => console.log('Edit Testimonial', testimonial.id)}>
                      <Edit className="testimonial-action-icon" />
                    </button>
                    <button className="testimonial-action-button delete" onClick={() => console.log('Delete Testimonial', testimonial.id)}>
                      <Trash2 className="testimonial-action-icon delete" />
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