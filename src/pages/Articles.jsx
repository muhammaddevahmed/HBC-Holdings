
import { 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Globe, 
  Building,
  Users,
  FileText,
  Target,
  DollarSign
} from "lucide-react";

export const categories = [
  { id: "education", name: "Investor Education", icon: <FileText className="category-icon" /> },
  { id: "updates", name: "Division Updates", icon: <Building className="category-icon" /> },
  { id: "analysis", name: "Market Analysis", icon: <TrendingUp className="category-icon" /> },
  { id: "risk", name: "Risk & Capital Management", icon: <Shield className="category-icon" /> },
  { id: "governance", name: "Company & Governance", icon: <Users className="category-icon" /> },
  { id: "stories", name: "Investor Stories", icon: <Target className="category-icon" /> }
];

export const featuredArticle = {
  id: "featured-1",
  title: "Q1 2026 Market Outlook: Strategic Allocation in a Shifting Economy",
  excerpt: "Analysis of current market conditions and strategic positioning for long-term capital preservation in volatile economic environments. Our team examines key indicators and allocation strategies.",
  category: "Market Analysis",
  categoryIcon: <TrendingUp className="category-icon" />,
  date: "2026-01-15",
  readTime: "8 min",
  author: "HBC Research Team",
  image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXQlMjBhbmFseXNpcyUyMGZpbmFuY2lhbHxlbnwxfHx8fDE3NjU4NTg5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  tags: ["Market Outlook", "Strategic Allocation", "Risk Management", "2026 Forecast"]
};

export const articles = [
  // Investor Education
  {
    id: "edu-1",
    title: "Understanding Asset-Backed Investment Structures",
    excerpt: "A comprehensive guide to how asset-backed investments are structured, secured, and managed for capital preservation.",
    category: "Investor Education",
    categoryIcon: <FileText className="category-icon" />,
    date: "2026-01-10",
    readTime: "6 min",
    author: "HBC Investment Team"
  },
  {
    id: "edu-2",
    title: "How Lock-In Periods Support Capital Stability",
    excerpt: "Exploring the rationale behind investment lock-in periods and their role in maintaining portfolio stability.",
    category: "Investor Education",
    categoryIcon: <FileText className="category-icon" />,
    date: "2025-12-15",
    readTime: "5 min",
    author: "HBC Research Team"
  },
  {
    id: "edu-3",
    title: "Risk vs. Return in Alternative Investment Vehicles",
    excerpt: "Analyzing the risk-return profile of alternative investments compared to traditional asset classes.",
    category: "Investor Education",
    categoryIcon: <FileText className="category-icon" />,
    date: "2025-11-20",
    readTime: "7 min",
    author: "HBC Analysis Team"
  },

  // Division Updates
  {
    id: "update-1",
    title: "ESG Integration: Measuring Impact Alongside Returns",
    excerpt: "How HBC integrates environmental, social, and governance factors into investment decisions while maintaining focus on returns.",
    category: "Division Updates",
    categoryIcon: <Building className="category-icon" />,
    date: "2026-01-05",
    readTime: "8 min",
    author: "HBC Sustainable Division"
  },
  {
    id: "update-2",
    title: "Mobility & Logistics: Asset Utilization Trends",
    excerpt: "Latest trends in high-value mobility portfolios and optimization strategies for asset utilization.",
    category: "Division Updates",
    categoryIcon: <Building className="category-icon" />,
    date: "2025-12-20",
    readTime: "6 min",
    author: "HBC Mobility Team"
  },
  {
    id: "update-3",
    title: "Eco-Infrastructure: Growth in Sustainable Markets",
    excerpt: "Analysis of infrastructure-led growth opportunities in emerging sustainable markets.",
    category: "Division Updates",
    categoryIcon: <Building className="category-icon" />,
    date: "2025-11-15",
    readTime: "7 min",
    author: "HBC Eco Division"
  },

  // Market Analysis
  {
    id: "analysis-1",
    title: "Investor Confidence in Alternative Assets",
    excerpt: "Current sentiment analysis and confidence indicators in the alternative investment space.",
    category: "Market Analysis",
    categoryIcon: <TrendingUp className="category-icon" />,
    date: "2025-12-10",
    readTime: "5 min",
    author: "HBC Research Team"
  },
  {
    id: "analysis-2",
    title: "Macroeconomic Trends Impacting Private Capital",
    excerpt: "How global macroeconomic factors are shaping private capital allocation strategies.",
    category: "Market Analysis",
    categoryIcon: <TrendingUp className="category-icon" />,
    date: "2025-11-25",
    readTime: "9 min",
    author: "HBC Analysis Team"
  },
  {
    id: "analysis-3",
    title: "Green Infrastructure in Southeast Asia",
    excerpt: "Market opportunities and investment trends in Southeast Asia's green infrastructure sector.",
    category: "Market Analysis",
    categoryIcon: <TrendingUp className="category-icon" />,
    date: "2025-10-30",
    readTime: "8 min",
    author: "HBC Research Team"
  },

  // Risk & Capital Management
  {
    id: "risk-1",
    title: "Liquidity Management in Long-Term Structures",
    excerpt: "Strategies for effective liquidity management within long-term investment frameworks.",
    category: "Risk & Capital Management",
    categoryIcon: <Shield className="category-icon" />,
    date: "2025-12-05",
    readTime: "6 min",
    author: "HBC Risk Team"
  },
  {
    id: "risk-2",
    title: "Capital Protection as a Design Principle",
    excerpt: "Why capital protection should be integrated from inception rather than added as an afterthought.",
    category: "Risk & Capital Management",
    categoryIcon: <Shield className="category-icon" />,
    date: "2025-11-10",
    readTime: "7 min",
    author: "HBC Investment Team"
  },
  {
    id: "risk-3",
    title: "Structured Approach to Risk Management",
    excerpt: "HBC's methodology for systematic risk assessment and mitigation in alternative investments.",
    category: "Risk & Capital Management",
    categoryIcon: <Shield className="category-icon" />,
    date: "2025-10-15",
    readTime: "8 min",
    author: "HBC Analysis Team"
  },

  // Company & Governance
  {
    id: "gov-1",
    title: "A Decade of Disciplined Growth: HBC Milestones",
    excerpt: "Reflecting on HBC's journey and key milestones in building a disciplined investment firm.",
    category: "Company & Governance",
    categoryIcon: <Users className="category-icon" />,
    date: "2025-11-30",
    readTime: "5 min",
    author: "HBC Leadership"
  },
  {
    id: "gov-2",
    title: "Operating Lean: Focused Teams Strengthen Discipline",
    excerpt: "How HBC's lean operational model enhances investment discipline and decision-making.",
    category: "Company & Governance",
    categoryIcon: <Users className="category-icon" />,
    date: "2025-10-20",
    readTime: "6 min",
    author: "HBC Operations Team"
  },
  {
    id: "gov-3",
    title: "Strategic Oversight: Aligning Capital, Risk, Performance",
    excerpt: "Our approach to governance that aligns capital allocation with risk management and performance objectives.",
    category: "Company & Governance",
    categoryIcon: <Users className="category-icon" />,
    date: "2025-09-25",
    readTime: "7 min",
    author: "HBC Governance Committee"
  },

  // Investor Stories
  {
    id: "story-1",
    title: "Mid-Year Portfolio Overview 2025",
    excerpt: "Review of capital deployment and asset mix across HBC's investment divisions.",
    category: "Investor Stories",
    categoryIcon: <Target className="category-icon" />,
    date: "2025-10-05",
    readTime: "6 min",
    author: "HBC Portfolio Team"
  },
  {
    id: "story-2",
    title: "Year-End Operational Summary 2025",
    excerpt: "Comprehensive review of portfolio activity and performance across the year.",
    category: "Investor Stories",
    categoryIcon: <Target className="category-icon" />,
    date: "2025-09-15",
    readTime: "8 min",
    author: "HBC Operations Team"
  },
  {
    id: "story-3",
    title: "Lessons from a Long-Term Allocation Strategy",
    excerpt: "Insights gained from implementing and maintaining long-term capital allocation strategies.",
    category: "Investor Stories",
    categoryIcon: <Target className="category-icon" />,
    date: "2025-08-20",
    readTime: "7 min",
    author: "HBC Investment Team"
  }
];