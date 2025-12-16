import React from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import Card, { CardBody, CardHeader } from '../components/Card';
import Button from '../components/Button';
import './Admin.css'; // Assuming Admin.css contains styles for admin components

export default function AdminDivisions() {
  const investmentDivisions = [
    { id: 1, title: 'Luxury Automotive & Logistics', minInvestment: '$50,000', returns: '12-18%', duration: '24-36 months', status: 'Active' },
    { id: 2, title: 'Sustainable & Emerging Markets', minInvestment: '$25,000', returns: '15-22%', duration: '36-48 months', status: 'Active' },
    { id: 3, title: 'Alternative Investments', minInvestment: '$100,000', returns: '10-16%', duration: '18-60 months', status: 'Active' }
  ];

  // TODO: Implement add/edit/delete functionality for divisions

  return (
    <>
      <div className="main-content-header">
        <h2 className="main-content-title">Investment Divisions</h2>
        <p className="main-content-subtitle">
          Manage and monitor your investment platform
        </p>
      </div>
      <div className="divisions-grid">
        <div className="divisions-header">
          <h3>All Divisions</h3>
          <Button onClick={() => console.log('Add Division')}> {/* Placeholder for actual modal */}
            <Plus className="w-4 h-4" />
            Add Division
          </Button>
        </div>

        <div className="divisions-grid-container">
          {investmentDivisions.map((division) => (
            <Card key={division.id} hover>
              <CardBody className="division-card-body">
                <div className="division-card-header">
                  <div className="flex-1">
                    <h4 className="division-card-title">{division.title}</h4>
                    <div className="division-details-grid">
                      <div>
                        <div className="division-detail-label">Minimum Investment</div>
                        <div className="division-detail-value">{division.minInvestment}</div>
                      </div>
                      <div>
                        <div className="division-detail-label">Target Returns</div>
                        <div className="division-detail-value returns">{division.returns}</div>
                      </div>
                      <div>
                        <div className="division-detail-label">Duration</div>
                        <div className="division-detail-value">{division.duration}</div>
                      </div>
                    </div>
                  </div>
                  <div className="division-actions">
                    <button className="division-action-button" onClick={() => console.log('Edit Division', division.id)}>
                      <Edit className="division-action-icon" />
                    </button>
                    <button className="division-action-button delete" onClick={() => console.log('Delete Division', division.id)}>
                      <Trash2 className="division-action-icon delete" />
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}