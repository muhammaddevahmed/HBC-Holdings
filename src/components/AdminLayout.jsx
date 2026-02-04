import { useState } from "react";
import { NavLink, Outlet, useNavigate, Navigate, Link } from "react-router-dom";
import {
  Users,
  MessageSquare,
  FileText,
  LogOut,
  BarChart3,
  Menu,
  X,
  Settings,
} from "lucide-react";
import "../pages/Admin.css";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    {
      id: "leads",
      icon: <Users className="w-5 h-5" />,
      label: "Leads Management",
      path: "/admin/leads",
    },
    {
      id: "insights",
      icon: <FileText className="w-5 h-5" />,
      label: "Client Insights",
      path: "/admin/insights",
    },
    {
      id: "testimonials",
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Testimonials",
      path: "/admin/testimonials",
    },
    {
      id: "job-post",
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Job Post",
      path: "/admin/job-post",
    },
    {
      id: "settings",
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      path: "/admin/settings",
    },
  ];

  const isAuthenticated = localStorage.getItem("isAdminAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="admin-layout">
      {/* Mobile Toggle Button */}
      <button
        className={`mobile-toggle ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-content">
            <Link to="/">
              <img
                src="../public/logo.png"
                alt="HBC Logo"
                style={{ height: "5rem" }}
              />
            </Link>
            <div>
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
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `sidebar-nav-button ${isActive ? "active" : ""}`
                }
                end
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="sidebar-nav-button logout">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="main-content"
        onClick={() => isSidebarOpen && closeSidebar()}
      >
        <div className="main-content-inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
