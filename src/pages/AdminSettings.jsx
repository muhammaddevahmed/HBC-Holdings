import React from 'react';
import Card, { CardBody } from '../components/Card';
import './Admin.css';


export default function AdminSettings() {
  return (
    <>
      <div className="main-content-header">
        <h2 className="main-content-title">Settings</h2>
        <p className="main-content-subtitle">
          Manage and monitor your investment platform
        </p>
      </div>
      <div className="settings-grid">
        <Card>
          <CardBody>
            <div className="text-center py-12 text-gray-600">
              <p>Settings interface would go here.</p>
              <p>This section can include user management, site configurations, etc.</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}