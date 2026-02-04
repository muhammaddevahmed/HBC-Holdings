import React, { useState, useRef } from "react";
import {
  Plus,
  Eye,
  Edit,
  Trash2,
  X,
  Star,
  Calendar,
  Clock,
  Image as ImageIcon,
  HelpCircle,
  Check,
  Upload,
} from "lucide-react";
import Card, { CardBody } from "../components/Card";
import "./AdminInsights.css";
import { categories as websiteCategories } from "./Articles";

const categories = websiteCategories.map((c) => c.name);

const InsightModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      category: "",
      date: "",
      readTime: "",
      image: "",
      excerpt: "",
      content: "",
      isFeatured: false,
    },
  );

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="insight-modal-overlay" onClick={onClose}>
      <div
        className="insight-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="insight-modal-header">
          <h3 className="insight-modal-title">
            {initialData ? "Edit Article" : "Add New Article"}
          </h3>
          <button className="insight-modal-close" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="insight-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Title *</label>
              <input
                type="text"
                className="form-input"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Category *</label>
              <select
                className="form-select"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Date *</label>
              <input
                type="date"
                className="form-input"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                Read Time (e.g., "5 min read") *
              </label>
              <input
                type="text"
                className="form-input"
                value={formData.readTime}
                onChange={(e) =>
                  setFormData({ ...formData, readTime: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Article Image *</label>
            <div className="url-input-group">
              <div className="input-with-icon">
                <ImageIcon className="input-icon-left" />
                <input
                  type="text"
                  className="form-input pl-10"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="Image URL or upload from device"
                  required
                />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                style={{ display: "none" }}
                accept="image/*"
              />
              <button
                type="button"
                className="btn-gallery"
                onClick={() => fileInputRef.current.click()}
              >
                <Upload className="w-4 h-4" />
                Upload from Device
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Excerpt *
              <div className="tooltip-trigger">
                <HelpCircle className="w-4 h-4 text-gray-400" />
                <div className="tooltip-content">
                  A short summary (1-2 sentences) displayed on the card to
                  preview the article.
                </div>
              </div>
            </label>
            <p className="field-helper-text">
              This brief summary appears on the main insights page cards to
              entice readers to click.
            </p>
            <textarea
              className="form-textarea"
              rows={3}
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Content (HTML Supported) *</label>
            <textarea
              className="form-textarea"
              rows={10}
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label
              className="form-label"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <input
                type="checkbox"
                checked={formData.isFeatured}
                onChange={(e) =>
                  setFormData({ ...formData, isFeatured: e.target.checked })
                }
              />
              Mark as Featured Article
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {initialData ? "Update Article" : "Publish Article"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function AdminInsights() {
  const [insights, setInsights] = useState([
    {
      id: 1,
      title: "Q4 2024 Market Review: Navigating Volatility",
      category: "Market Analysis",
      date: "2025-01-15",
      readTime: "8 min read",
      views: 342,
      isFeatured: true,
      excerpt:
        "Comprehensive analysis of fourth quarter performance across luxury automotive and sustainable markets.",
      image: "https://images.unsplash.com/photo-1634474588578-7f0565a1cea5",
      content: `
        <p>The fourth quarter of 2024 presented a complex landscape for global investors, characterized by heightened volatility in traditional equity markets and shifting monetary policies. However, alternative assets continued to demonstrate their value as robust diversifiers and stores of wealth.</p>
        <h3>Market Overview</h3>
        <p>While public markets reacted nervously to inflationary pressures and geopolitical tensions, the private alternative sector showed remarkable resilience. Our analysis indicates a growing flight to quality, with tangible assets such as luxury collectibles and sustainable infrastructure projects commanding premium valuations.</p>
        <h3>Luxury Automotive Performance</h3>
        <p>The blue-chip automotive market defied broader economic headwinds. Auction results from Geneva and Monterey highlighted a sustained appetite for limited-production hypercars and pre-war classics. Our index of investment-grade vehicles returned 4.2% in Q4 alone.</p>
        <h3>Strategic Positioning for 2025</h3>
        <p>Looking ahead, we maintain a defensive yet opportunistic stance. We are increasing allocations to asset-backed private credit and tangible luxury assets while selectively deploying capital into high-growth sustainable ventures.</p>
      `,
    },
    {
      id: 2,
      title: "Sustainable Investment Opportunities",
      category: "Sustainable Markets",
      date: "2025-01-10",
      readTime: "6 min read",
      views: 289,
      isFeatured: false,
      excerpt:
        "Exploring the intersection of environmental impact and financial returns in developing economies.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
      content: `
        <p>Emerging markets are leaping past traditional development phases, adopting green technologies at an unprecedented rate. This "leapfrog" effect is creating unique investment opportunities that combine substantial environmental impact with attractive financial returns.</p>
        <h3>The Leapfrog Effect</h3>
        <p>Just as many developing nations skipped landline telecommunications to go straight to mobile, they are now bypassing centralized fossil fuel grids in favor of distributed renewable energy.</p>
        <h3>Key Sectors of Growth</h3>
        <p><strong>Renewable Energy Infrastructure:</strong> We are seeing 15-18% IRRs in solar and wind projects in Vietnam and the Philippines, supported by long-term power purchase agreements (PPAs).</p>
        <p><strong>E-Mobility:</strong> The two-wheeler market in India and Indonesia is electrifying rapidly. Our investments in battery swapping infrastructure are capitalizing on this massive shift in urban mobility.</p>
      `,
    },
    {
      id: 3,
      title: "Automotive Division: Electric Vehicle Market Growth",
      category: "Automotive Division",
      date: "2025-01-05",
      readTime: "7 min read",
      views: 421,
      isFeatured: true,
      excerpt:
        "Analysis of EV market trends and our strategic positioning in the luxury segment.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400&h=400",
      content: "<p>Full article content here...</p>",
    },
    {
      id: 4,
      title: "Regulatory Changes Impacting Alternative Investments",
      category: "Regulatory",
      date: "2024-12-28",
      readTime: "5 min read",
      views: 156,
      isFeatured: false,
      excerpt:
        "Overview of recent regulatory updates and their implications for our investment strategies.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&h=400",
      content: "<p>Full article content here...</p>",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingInsight, setEditingInsight] = useState(null);

  const handleAdd = () => {
    setEditingInsight(null);
    setIsModalOpen(true);
  };

  const handleEdit = (insight) => {
    setEditingInsight(insight);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      setInsights(insights.filter((i) => i.id !== id));
    }
  };

  const handleSubmit = (data) => {
    if (editingInsight) {
      setInsights(
        insights.map((i) =>
          i.id === editingInsight.id ? { ...i, ...data } : i,
        ),
      );
    } else {
      setInsights([...insights, { ...data, id: Date.now(), views: 0 }]);
    }
  };

  const featuredCount = insights.filter((i) => i.isFeatured).length;
  const totalViews = insights.reduce((sum, i) => sum + i.views, 0);
  const avgViews =
    insights.length > 0 ? Math.round(totalViews / insights.length) : 0;

  return (
    <div className="insights-management-container">
      {/* Header Section */}
      <div className="insights-header-section">
        <h2 className="insights-title">Client Insights Management</h2>
        <p className="insights-subtitle">
          Manage articles, market updates, and featured content for client
          portal
        </p>
      </div>

      {/* Stats Dashboard */}
      <div className="insights-stats-grid">
        <div className="stat-card">
          <div className="stat-value">{insights.length}</div>
          <div className="stat-label">Total Articles</div>
          <div className="stat-change positive">
            +{insights.filter((i) => i.date.includes("2025-01")).length} this
            month
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{featuredCount}</div>
          <div className="stat-label">Featured Articles</div>
          <div className="stat-change positive">
            {featuredCount > 0 ? "Active" : "None"}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{categories.length}</div>
          <div className="stat-label">Categories</div>
          <div className="stat-change positive">All active</div>
        </div>
      </div>

      {/* Articles List */}
      <div className="insights-list-container">
        <div className="insights-list-header">
          <div>
            <h3 className="insights-list-title">All Articles</h3>
            <p className="insights-subtitle" style={{ marginTop: "0.25rem" }}>
              {insights.length} articles published • {featuredCount} featured
            </p>
          </div>
          <button className="insight-add-button" onClick={handleAdd}>
            <Plus className="w-4 h-4" />
            Add Article
          </button>
        </div>

        <Card>
          <CardBody style={{ padding: 0 }}>
            {insights.length === 0 ? (
              <div className="insights-empty-state">
                <div className="empty-state-icon">
                  <Eye className="w-16 h-16" />
                </div>
                <h3 className="empty-state-title">No articles yet</h3>
                <p className="empty-state-description">
                  Get started by creating your first client insight article.
                  Share market updates, analysis, and strategic perspectives
                  with your clients.
                </p>
                <button className="insight-add-button" onClick={handleAdd}>
                  <Plus className="w-4 h-4" />
                  Create First Article
                </button>
              </div>
            ) : (
              <div className="insight-list">
                {insights.map((article) => (
                  <div key={article.id} className="insight-item">
                    <div className="insight-image">
                      <img
                        src={article.image}
                        alt={article.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=400&h=400";
                        }}
                      />
                    </div>
                    <div className="insight-details">
                      <h5 className="insight-title">
                        {article.title}
                        {article.isFeatured && (
                          <span className="featured-badge">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </h5>
                      <div className="insight-meta">
                        <div className="meta-item">
                          <span
                            className="category"
                            style={{
                              backgroundColor: "#f0fdf4",
                              color: "#166534",
                              padding: "0.125rem 0.5rem",
                              borderRadius: "0.375rem",
                              fontSize: "0.75rem",
                              fontWeight: "500",
                            }}
                          >
                            {article.category}
                          </span>
                        </div>
                        <div className="meta-item">
                          <Calendar className="meta-icon" />
                          <span>
                            {new Date(article.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}
                          </span>
                        </div>
                        <div className="meta-item">
                          <Clock className="meta-icon" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="meta-item">
                          <span className="excerpt">
                            {article.excerpt.substring(0, 60)}...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="insight-actions">
                      <button
                        className="insight-action-button"
                        onClick={() => handleEdit(article)}
                        title="Edit article"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="insight-action-button delete"
                        onClick={() => handleDelete(article.id)}
                        title="Delete article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardBody>
        </Card>
      </div>

      {/* Modal */}
      <InsightModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingInsight}
      />
    </div>
  );
}
