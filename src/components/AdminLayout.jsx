import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, MessageSquare, FileText, TrendingUp, Settings, 
  LogOut, BarChart3
} from 'lucide-react';
import '../pages/Admin.css'; // Assuming Admin.css contains styles for the sidebar and admin layout

export default function AdminLayout() {
  const navigate = useNavigate();
  const navigation = [
    { id: 'dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: '/admin' },
    { id: 'leads', icon: <Users className="w-5 h-5" />, label: 'Leads Management', path: '/admin/leads' },
    { id: 'divisions', icon: <TrendingUp className="w-5 h-5" />, label: 'Investment Divisions', path: '/admin/divisions' },
    { id: 'insights', icon: <FileText className="w-5 h-5" />, label: 'Client Insights', path: '/admin/insights' },
    { id: 'faq', icon: <MessageSquare className="w-5 h-5" />, label: 'FAQ Management', path: '/admin/faq' },
    { id: 'testimonials', icon: <BarChart3 className="w-5 h-5" />, label: 'Testimonials', path: '/admin/testimonials' },
    { id: 'analytics', icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics', path: '/admin/analytics' },
    { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/admin/settings' }
  ];

  const handleLogout = () => {
    // Implement actual logout logic here
    console.log('Logging out...');
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-content">
            <div className="sidebar-logo">
              <span className="sidebar-logo-text">HBC</span>
            </div>
            <div>
              <div className="sidebar-title">HBC Holdings</div>
              <div className="sidebar-subtitle">Admin Panel</div>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-nav-menu">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-nav-button ${isActive ? 'active' : ''}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="sidebar-nav-button">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="main-content-inner">
          {/* The Outlet renders the matched child route component */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}