import React, { useState } from 'react';
import './AdminSettings.css';
import './AdminLeads.css';

const AdminSettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Add logic to change password
    console.log('Password change submitted');
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    // Add logic to change email
    console.log('Email change submitted');
  };

  return (
    <div className="admin-settings">
      <h2>Admin Settings</h2>

      <div className="settings-section">
        <h3>Change Password</h3>
        <form onSubmit={handlePasswordChange} className="settings-form">
          <div className="form-group">
            <label htmlFor="current-password">Current Password</label>
            <input
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-new-password">Confirm New Password</label>
            <input
              id="confirm-new-password"
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              placeholder="Confirm your new password"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Update Password
          </button>
        </form>
      </div>

      <div className="settings-section">
        <h3>Change Email</h3>
        <form onSubmit={handleEmailChange} className="settings-form">
          <div className="form-group">
            <label htmlFor="new-email">New Email</label>
            <input
              id="new-email"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter your new email"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Update Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettings;
