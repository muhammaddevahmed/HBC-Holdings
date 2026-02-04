import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Investments from "./pages/Investments";
import InvestorHub from "./pages/InvestorHub";
import ExpressInterest from "./pages/ExpressInterest";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import Investor from "./pages/Investor";
import Careers from "./pages/Careers";
import Login from "./components/Login";
import Legal from "./pages/Legal&Complince";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminLayout from "./components/AdminLayout"; // Import the new AdminLayout

// Import new admin sub-pages

import AdminLeads from "./pages/AdminLeads";

import AdminInsights from "./pages/AdminInsights";

import AdminTestimonials from "./pages/AdminTestimonials";
import AdminJobPost from "./pages/AdminJobPost";
import AdminSettings from "./pages/AdminSettings";

import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";

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
        path="/investor"
        element={
          <DefaultLayout>
            <Investor />
          </DefaultLayout>
        }
      />
       <Route
        path="/legal"
        element={
          <DefaultLayout>
            <Legal />
          </DefaultLayout>
        }
      />
      
      <Route
        path="/careers"
        element={
          <DefaultLayout>
            <Careers />
          </DefaultLayout>
        }
      />
      <Route path="/login" element={<Login />} />

      {/* Admin Routes using AdminLayout */}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="leads" element={<AdminLeads />} />
          <Route path="insights" element={<AdminInsights />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
          <Route path="job-post" element={<AdminJobPost />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Route>
    </Routes>
  );
}
