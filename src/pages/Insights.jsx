import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import Layout from "../components/Layout";
import Card, { CardBody } from "../components/Card";
import { featuredArticle, articles } from "./articles";
import ArticleDetail from "./ArticleDetail";

import "./Insights.css";

export default function Insights() {
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("id");
  const [visibleCount, setVisibleCount] = useState(6);

  if (articleId) {
    return <ArticleDetail />;
  }

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

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
    <Layout activePage="/insights">
      {/* Hero Section */}
      <section className="insights-hero-section">
        <div className="insights-hero-content">
          <div className="insights-hero-text-container">
            <h1 className="insights-hero-title">
              Client Updates &{" Insights"}
              <span className="insights-hero-title-highlight">Insights</span>
            </h1>
            <p className="insights-hero-description">
              Stay informed with market analysis, portfolio updates, and
              investment insights from the HBC Holdings team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-article-section">
        <div className="featured-article-content">
          <div className="featured-article-badge">Featured Article</div>
          <Card hover className="featured-article-card">
            <div className="featured-article-grid">
              <div className="featured-article-image-container">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="featured-article-image"
                />
              </div>
              <CardBody className="featured-article-body">
                <div className="featured-article-meta">
                  <span className="featured-article-category">
                    {featuredArticle.category}
                  </span>
                  <div className="featured-article-date">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featuredArticle.date)}
                  </div>
                  <div className="featured-article-read-time">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                <h3 className="featured-article-title">
                  {featuredArticle.title}
                </h3>
                <p className="featured-article-excerpt">
                  {featuredArticle.excerpt}
                </p>
                <Link to={`/insights?id=${featuredArticle.id}`}>
                  <button className="read-more-button">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
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
          <h2 className="article-grid-title">
            Recent <span className="article-grid-title-highlight">Updates</span>
          </h2>

          <div className="article-grid">
            {visibleArticles.map((article, index) => (
              <Card key={index} hover className="article-card">
                <CardBody className="article-card-body">
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                  </div>
                  <h4 className="article-title">{article.title}</h4>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <div className="article-date">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </div>
                    <div className="article-read-time">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <Link to={`/insights?id=${article.id}`}>
                    <button className="read-more-button">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="load-more-container">
              <button className="load-more-button" onClick={handleLoadMore}>
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
