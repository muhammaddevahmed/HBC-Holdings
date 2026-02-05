import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  TrendingUp,
  FileText,
  Shield,
  BarChart3,
  Globe,
  Target,
  Users,
  Building,
  ChevronRight,
  Tag,
  User
} from "lucide-react";
import Card, { CardBody } from "../components/Card";
import { articles, categories, featuredArticle } from "./Articles";
import ArticleDetail from "./ArticleDetail";
import "./Insights.css";

export default function Insights() {
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("id");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  if (articleId) {
    return <ArticleDetail />;
  }

  const filteredArticles = selectedCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="insights-hero-section">
        <div className="hero-pattern"></div>
        <div className="insights-hero-content">
          <div className="insights-hero-text-container">
            <div className="hero-badge">
              <FileText className="badge-icon" />
              <span>Market Insights & Analysis</span>
            </div>
            <h1 className="insights-hero-title">
              Stay Informed with <span className="highlight">HBC Insights</span>
            </h1>
            <p className="insights-hero-description">
              Market commentary, sector updates, and investment insights from the HBC team. 
              Our focus is on asset-backed strategies, risk management, and long-term capital 
              positioning across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-section">
        <div className="category-content">
          <div className="category-header">
            <h3 className="category-title">Explore by Category</h3>
            <p className="category-subtitle">Filter insights by investment focus</p>
          </div>
          <div className="category-grid">
            <button 
              className={`category-card ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory("all");
                setVisibleCount(6);
              }}
            >
              <TrendingUp className="category-icon" />
              <span className="category-name">All Insights</span>
            </button>
            {categories.map((category) => (
              <button 
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setVisibleCount(6);
                }}
              >
                {category.icon}
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-article-section">
        <div className="featured-article-content">
          <div className="section-badge">
            <Target className="badge-icon" />
            <span>Featured Analysis</span>
          </div>
          <Card className="featured-article-card">
            <div className="featured-article-grid">
              <div className="featured-article-image-container">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="featured-article-image"
                />
                <div className="image-overlay">
                  <div className="category-tag">
                    {featuredArticle.category}
                  </div>
                </div>
              </div>
              <CardBody className="featured-article-body">
                <div className="article-meta">
                  <div className="meta-item">
                    <Calendar className="meta-icon" />
                    <span>{formatDate(featuredArticle.date)}</span>
                  </div>
                  <div className="meta-item">
                    <Clock className="meta-icon" />
                    <span>{featuredArticle.readTime} read</span>
                  </div>
                  <div className="meta-item">
                    <User className="meta-icon" />
                    <span>{featuredArticle.author}</span>
                  </div>
                </div>
                <h2 className="featured-article-title">{featuredArticle.title}</h2>
                <p className="featured-article-excerpt">{featuredArticle.excerpt}</p>
                <div className="article-tags">
                  {featuredArticle.tags?.map((tag, index) => (
                    <span key={index} className="tag">
                      <Tag className="tag-icon" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/insights?id=${featuredArticle.id}`}>
                  <button className="read-article-btn">
                    Read Full Analysis
                    <ArrowRight className="btn-icon" />
                  </button>
                </Link>
              </CardBody>
            </div>
          </Card>
        </div>
      </section>

      {/* Article Grid */}
      <section className="article-grid-section">
        <div className="article-grid-content">
          <div className="section-header">
            <h2 className="section-title">
              Latest <span className="accent">Insights</span>
            </h2>
            <p className="section-subtitle">
              Stay updated with our latest market analysis and investment perspectives
            </p>
          </div>

          <div className="article-grid">
            {visibleArticles.map((article, index) => (
              <Card key={index} className="article-card">
                <CardBody className="article-card-body">
                  <div className="article-header">
                    <div className="article-category">
                      {article.categoryIcon}
                      <span>{article.category}</span>
                    </div>
                    <div className="article-read-time">
                      <Clock className="read-time-icon" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <div className="article-meta">
                      <div className="meta-item">
                        <Calendar className="meta-icon" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="meta-item">
                        <User className="meta-icon" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <Link to={`/insights?id=${article.id}`}>
                      <button className="read-more-btn">
                        Read More
                        <ChevronRight className="btn-icon" />
                      </button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="load-more-container">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More Insights
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          )}
        </div>
      </section>

     

      {/* Disclaimer */}
      <section className="disclaimer-section">
        <div className="disclaimer-content">
          <div className="disclaimer-box">
            <Shield className="disclaimer-icon" />
            <div className="disclaimer-text">
              <strong>Important:</strong> This content is provided for informational purposes only 
              and does not constitute investment advice. Past performance is not indicative of 
              future results. Investors should conduct their own research and consult with qualified 
              financial advisors before making any investment decisions.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}