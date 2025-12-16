import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Investments from "./pages/Investments";
import InvestorHub from "./pages/InvestorHub";
import ExpressInterest from "./pages/ExpressInterest";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import KYC from "./pages/KYC";
import Testimonials from "./pages/Testimonials";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminLayout from "./components/AdminLayout"; // Import the new AdminLayout

// Import new admin sub-pages
import AdminDashboard from "./pages/AdminDashboard";
import AdminLeads from "./pages/AdminLeads";
import AdminDivisions from "./pages/AdminDivisions";
import AdminInsights from "./pages/AdminInsights";
import AdminFAQ from "./pages/AdminFAQ";
import AdminTestimonials from "./pages/AdminTestimonials";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminSettings from "./pages/AdminSettings";


// Layout for pages with Header and Footer
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Layout>{children}</Layout>
      <Footer />
    </>
  );
}



export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/about"
        element={
          <DefaultLayout>
            <About />
          </DefaultLayout>
        }
      />
      <Route
        path="/investments"
        element={
          <DefaultLayout>
            <Investments />
          </DefaultLayout>
        }
      />
      <Route
        path="/investor-hub"
        element={
          <DefaultLayout>
            <InvestorHub />
          </DefaultLayout>
        }
      />
      <Route
        path="/express-interest"
        element={
          <DefaultLayout>
            <ExpressInterest />
          </DefaultLayout>
        }
      />
      <Route
        path="/faq"
        element={
          <DefaultLayout>
            <FAQ />
          </DefaultLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <DefaultLayout>
            <Contact />
          </DefaultLayout>
        }
      />
      <Route
        path="/insights"
        element={
          <DefaultLayout>
            <Insights />
          </DefaultLayout>
        }
      />
      <Route
        path="/kyc"
        element={
          <DefaultLayout>
            <KYC />
          </DefaultLayout>
        }
      />
      <Route
        path="/testimonials"
        element={
          <DefaultLayout>
            <Testimonials />
          </DefaultLayout>
        }
      />
      
      {/* Admin Routes using AdminLayout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} /> {/* Default child route for /admin */}
        <Route path="leads" element={<AdminLeads />} />
        <Route path="divisions" element={<AdminDivisions />} />
        <Route path="insights" element={<AdminInsights />} />
        <Route path="faq" element={<AdminFAQ />} />
        <Route path="testimonials" element={<AdminTestimonials />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}