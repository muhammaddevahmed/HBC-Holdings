import React from 'react';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import Card, { CardBody } from '../components/Card';
import Button from '../components/Button';
import './Admin.css'; // Assuming Admin.css contains styles for admin components


export default function AdminInsights() {
  const insights = [
    { id: 1, title: 'Q4 2024 Market Review', category: 'Market Analysis', date: '2025-01-15', views: 342, status: 'Published' },
    { id: 2, title: 'Sustainable Investment Opportunities', category: 'Sustainable Markets', date: '2025-01-10', views: 289, status: 'Published' },
    { id: 3, title: 'Luxury Automotive Trends', category: 'Automotive', date: '2025-01-05', views: 412, status: 'Published' }
  ];

  // TODO: Implement add/edit/delete functionality for insights

  return (
    <>
      <div className="main-content-header">
        <h2 className="main-content-title">Client Insights</h2>
        <p className="main-content-subtitle">
          Manage and monitor your investment platform
        </p>
      </div>
      <div className="insights-grid">
        <div className="insights-header">
          <h3>All Articles</h3>
          <Button onClick={() => console.log('Add Article')}> {/* Placeholder for actual modal */}
            <Plus className="w-4 h-4" />
            Add Article
          </Button>
        </div>

        <Card>
          <CardBody>
            <div className="insight-list">
              {insights.map((article) => (
                <div key={article.id} className="insight-item">
                  <div className="insight-details">
                    <h5 className="insight-title">{article.title}</h5>
                    <div className="insight-meta">
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                  <div className="insight-actions">
                    <button className="insight-action-button" onClick={() => console.log('View Article', article.id)}>
                      <Eye className="insight-action-icon" />
                    </button>
                    <button className="insight-action-button" onClick={() => console.log('Edit Article', article.id)}>
                      <Edit className="insight-action-icon" />
                    </button>
                    <button className="insight-action-button delete" onClick={() => console.log('Delete Article', article.id)}>
                      <Trash2 className="insight-action-icon delete" />
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