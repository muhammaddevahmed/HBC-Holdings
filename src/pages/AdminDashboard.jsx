import React from 'react';
import { Users, DollarSign, MessageSquare, Download } from 'lucide-react';
import Card, { CardBody, CardHeader } from '../components/Card';
import './Admin.css'; // Assuming Admin.css contains styles for admin components

export default function AdminDashboard() {
  const dashboardStats = [
    { icon: <Users className="w-6 h-6" />, label: 'Total Leads', value: '247', change: '+12%', color: 'blue' },
    { icon: <DollarSign className="w-6 h-6" />, label: 'Active Investors', value: '523', change: '+8%', color: 'green' },
    { icon: <MessageSquare className="w-6 h-6" />, label: 'New Messages', value: '34', change: '+5%', color: 'purple' },
    { icon: <Download className="w-6 h-6" />, label: 'Document Downloads', value: '1,892', change: '+15%', color: 'orange' }
  ];

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
        <h2 className="main-content-title">Dashboard</h2>
        <p className="main-content-subtitle">
          Manage and monitor your investment platform
        </p>
      </div>
      <div className="dashboard-grid">
        {/* Stats Grid */}
        <div className="dashboard-grid">
          {dashboardStats.map((stat, index) => (
            <Card key={index}>
              <CardBody className="stat-card-body">
                <div className="stat-card-header">
                  <div className={`stat-icon-container ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <span className="stat-change">{stat.change}</span>
                </div>
                <div className="stat-value-section">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="activity-grid">
          <Card>
            <CardHeader>
              <h4>Recent Leads</h4>
            </CardHeader>
            <CardBody>
              <div className="recent-leads-list">
                {recentLeads.slice(0, 5).map((lead) => (
                  <div key={lead.id} className="lead-item">
                    <div>
                      <div className="lead-name">{lead.name}</div>
                      <div className="lead-email">{lead.email}</div>
                    </div>
                    <span className={`lead-status ${
                      lead.status === 'New' ? 'new' :
                      lead.status === 'Contacted' ? 'contacted' :
                      lead.status === 'Qualified' ? 'qualified' :
                      'in-process'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h4>Analytics Overview</h4>
            </CardHeader>
            <CardBody>
              <div className="analytics-overview">
                <div>
                  <div className="progress-bar-container">
                    <span className="progress-bar-label">Website Traffic</span>
                    <span className="progress-bar-value">12,453 visits</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-foreground" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="progress-bar-container">
                    <span className="progress-bar-label">Form Submissions</span>
                    <span className="progress-bar-value">247 leads</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-foreground" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="progress-bar-container">
                    <span className="progress-bar-label">Document Downloads</span>
                    <span className="progress-bar-value">1,892 downloads</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-foreground" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="progress-bar-container">
                    <span className="progress-bar-label">Conversion Rate</span>
                    <span className="progress-bar-value">23.4%</span>
                  </div>
                  <div className="progress-bar-background">
                    <div className="progress-bar-foreground" style={{ width: '23%' }}></div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}