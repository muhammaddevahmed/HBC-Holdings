import { useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  User,
  ArrowRight,
} from "lucide-react";
import Layout from "../components/Layout";
import { featuredArticle, articles } from "./articles";
import "./ArticleDetail.css";

export default function ArticleDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  // Combine all articles to search
  const allArticles = [featuredArticle, ...articles];
  const article = allArticles.find((a) => a.id === id);

  // Get related articles (exclude current)
  const relatedArticles = articles.filter((a) => a.id !== id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <Layout activePage="/insights">
        <div className="article-not-found">
          <h2>Article Not Found</h2>
          <p>
            The article you are looking for does not exist or has been moved.
          </p>
          <Link to="/insights" className="back-link">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout activePage="/insights">
      <article className="article-detail-page">
        {/* Hero Section */}
        <div className="article-hero">
          <div className="article-hero-overlay"></div>
          <img
            src={article.image}
            alt={article.title}
            className="article-hero-image"
          />
          <div className="article-hero-content">
            <div className="article-container">
              <Link to="/insights" className="hero-back-link">
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </Link>
              <div className="article-badges">
                <span className="article-category-badge">
                  {article.category}
                </span>
              </div>
              <h1 className="article-hero-title">{article.title}</h1>
              <div className="article-hero-meta">
                <div className="meta-item">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.date)}
                </div>
                <div className="meta-item">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="article-content-wrapper">
          <div className="article-container">
            <div className="article-main-content">
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="article-footer-actions">
                <div className="article-tags">
                  <Tag className="w-4 h-4" />
                  <span>Investment</span>
                  <span>{article.category}</span>
                  <span>Finance</span>
                </div>
              </div>

              {/* Author Box */}
              <div className="article-author-box">
                <div className="author-avatar">
                  <User className="w-8 h-8" />
                </div>
                <div className="author-info">
                  <h4>HBC Investment Team</h4>
                  <p>
                    Our team of analysts and portfolio managers provides expert
                    insights into alternative asset markets and structured
                    investments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="related-articles-section">
          <div className="article-container">
            <h3 className="related-title">Related Insights</h3>
            <div className="related-articles-grid">
              {relatedArticles.map((related) => (
                <Link
                  to={`/insights?id=${related.id}`}
                  key={related.id}
                  className="related-card"
                >
                  <div className="related-image-container">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="related-image"
                    />
                  </div>
                  <div className="related-content">
                    <span className="related-category">{related.category}</span>
                    <h4 className="related-card-title">{related.title}</h4>
                    <div className="related-meta">
                      <span className="related-read-time">
                        {related.readTime}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
