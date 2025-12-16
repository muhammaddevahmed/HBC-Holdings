import React from 'react';
import { Search, Download, Eye, Edit } from 'lucide-react';
import Card, { CardBody } from '../components/Card';
import Button from '../components/Button';
import './Admin.css'; // Assuming Admin.css contains styles for admin components

export default function AdminLeads() {
  const recentLeads = [
    { id: 1, name: 'John Anderson', email: 'john.a@email.com', range: '$100k-$250k', interest: 'Automotive', date: '2025-01-15', status: 'New' },
    { id: 2, name: 'Sarah Martinez', email: 'sarah.m@email.com', range: '$250k-$500k', interest: 'Sustainable', date: '2025-01-15', status: 'Contacted' },
    { id: 3, name: 'Michael Chen', email: 'michael.c@email.com', range: '$50k-$100k', interest: 'Diversified', date: '2025-01-14', status: 'New' },
    { id: 4, name: 'Emily Johnson', email: 'emily.j@email.com', range: '$100k-$250k', interest: 'Alternative', date: '2025-01-14', status: 'Qualified' },
    { id: 5, name: 'Robert Williams', email: 'robert.w@email.com', range: '$1M+', interest: 'All Divisions', date: '2025-01-13', status: 'In Process' }
  ];

  return (
    <>
      <div className="main-content-header">
        <h2 className="main-content-title">Leads Management</h2>
        <p className="main-content-subtitle">
          Manage and monitor your investment platform
        </p>
      </div>
      <div className="leads-grid">
        <div className="leads-header">
          <h3>All Leads</h3>
          <div className="leads-header-actions">
            <div className="leads-search-container">
              <Search className="leads-search-icon" />
              <input
                type="text"
                placeholder="Search leads..."
                className="leads-search-input"
              />
            </div>
            <Button>
              Export to CSV
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Card>
          <CardBody>
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
                  {recentLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td>{lead.name}</td>
                      <td>{lead.email}</td>
                      <td>{lead.range}</td>
                      <td>{lead.interest}</td>
                      <td>{lead.date}</td>
                      <td>
                        <span className={`lead-status ${
                          lead.status === 'New' ? 'new' :
                          lead.status === 'Contacted' ? 'contacted' :
                          lead.status === 'Qualified' ? 'qualified' :
                          'in-process'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td>
                        <div className="lead-actions">
                          <button className="lead-action-button">
                            <Eye className="lead-action-icon" />
                          </button>
                          <button className="lead-action-button">
                            <Edit className="lead-action-icon" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}