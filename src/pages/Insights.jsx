import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';
import Card, { CardBody } from '../components/Card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import './Insights.css';

export default function Insights() {
  const featuredArticle = {
    title: 'Q4 2024 Market Review: Navigating Volatility in Alternative Assets',
    excerpt: 'Our comprehensive analysis of fourth quarter performance across luxury automotive, sustainable markets, and alternative investment divisions. Key insights on market trends and strategic positioning for 2025.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Market Analysis',
    image: 'https://images.unsplash.com/photo-1634474588578-7f0565a1cea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBpbnZlc3RtZW50JTIwZmluYW5jZXxlbnwxfHx8fDE3NjU4MDk5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  };

  const articles = [
    {
      title: 'The Rise of Sustainable Investment Opportunities in Emerging Markets',
      excerpt: 'Exploring the intersection of environmental impact and financial returns in developing economies. Our latest portfolio additions in renewable energy and green technology.',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Sustainable Markets'
    },
    {
      title: 'Luxury Automotive Market Trends: Collectible Value Appreciation',
      excerpt: 'Analysis of recent auction results and private sales data showing continued strength in high-value automotive assets. Portfolio implications and new acquisition opportunities.',
      date: '2025-01-05',
      readTime: '5 min read',
      category: 'Automotive Division'
    },
    {
      title: 'Capital Protection in Uncertain Times: Our Multi-Layer Approach',
      excerpt: 'Detailed examination of how our four-layer capital protection framework performed during recent market volatility. Real-world examples and investor case studies.',
      date: '2024-12-20',
      readTime: '7 min read',
      category: 'Risk Management'
    },
    {
      title: 'Year-End Portfolio Review: 2024 Performance Highlights',
      excerpt: 'Comprehensive review of 2024 performance across all investment divisions. Key achievements, lessons learned, and strategic outlook for the year ahead.',
      date: '2024-12-15',
      readTime: '10 min read',
      category: 'Performance Update'
    },
    {
      title: 'Alternative Assets: Diversification Beyond Traditional Markets',
      excerpt: 'Why sophisticated investors are allocating capital to precious metals, commodities, and collectibles. Portfolio construction strategies and risk considerations.',
      date: '2024-12-01',
      readTime: '6 min read',
      category: 'Alternative Investments'
    },
    {
      title: 'Regulatory Update: New Compliance Requirements for 2025',
      excerpt: 'Overview of upcoming regulatory changes affecting private investment funds. What investors need to know about enhanced reporting and disclosure requirements.',
      date: '2024-11-25',
      readTime: '5 min read',
      category: 'Regulatory'
    },
    {
      title: 'ESG Integration: Measuring Impact Alongside Returns',
      excerpt: 'How we incorporate environmental, social, and governance factors into investment analysis. Reporting frameworks and transparency initiatives.',
      date: '2024-11-15',
      readTime: '7 min read',
      category: 'ESG & Impact'
    },
    {
      title: 'Investor Spotlight: Building Wealth Through Structured Investments',
      excerpt: 'Anonymous case study of a long-term investor\'s journey with HBC Holdings. Portfolio evolution, returns achieved, and strategic decision-making over 5+ years.',
      date: '2024-11-01',
      readTime: '8 min read',
      category: 'Investor Stories'
    },
    {
      title: 'Market Volatility: Opportunity or Risk?',
      excerpt: 'Our investment committee\'s perspective on recent market movements and implications for asset-backed investments. Strategic positioning and tactical adjustments.',
      date: '2024-10-20',
      readTime: '6 min read',
      category: 'Market Analysis'
    }
  ];

  const categories = [
    'All Articles',
    'Market Analysis',
    'Performance Update',
    'Sustainable Markets',
    'Automotive Division',
    'Alternative Investments',
    'Risk Management',
    'ESG & Impact',
    'Regulatory'
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Layout activePage="/insights">
      {/* Hero Section */}
      <section className="insights-hero-section">
        <div className="insights-hero-content">
          <div className="insights-hero-text-container">
            <h1 className="insights-hero-title">
              Client Updates & <span className="insights-hero-title-highlight">Insights</span>
            </h1>
            <p className="insights-hero-description">
              Stay informed with market analysis, portfolio updates, and investment insights from the HBC Holdings team.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter-section">
        <div className="category-filter-content">
          <div className="category-filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className="category-filter-button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-article-section">
        <div className="featured-article-content">
          <div className="featured-article-badge">
            Featured Article
          </div>
          <Card hover className="featured-article-card">
            <div className="featured-article-grid">
              <div className="featured-article-image-container">
                <ImageWithFallback
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
                <h3 className="featured-article-title">{featuredArticle.title}</h3>
                <p className="featured-article-excerpt">{featuredArticle.excerpt}</p>
                <button className="read-more-button">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </button>
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
            {articles.map((article, index) => (
              <Card key={index} hover className="article-card">
                <CardBody className="article-card-body">
                  <div className="article-meta">
                    <span className="article-category">
                      {article.category}
                    </span>
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
                  <button className="read-more-button">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="load-more-container">
            <button className="load-more-button">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-icon-container">
            <TrendingUp className="newsletter-icon" />
          </div>
          <h2 className="newsletter-title">
            Stay Informed
          </h2>
          <p className="newsletter-subtitle">
            Subscribe to receive our latest market insights, portfolio updates, and investment education 
            directly to your inbox.
          </p>
          <div className="subscription-form-container">
            <div className="subscription-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="subscription-input"
              />
              <button className="subscribe-button">
                Subscribe
              </button>
            </div>
            <p className="subscription-note">
              For existing investors only. We respect your privacy and never share your information.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
