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
import Login from "./components/Login";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminLayout from "./components/AdminLayout"; // Import the new AdminLayout

// Import new admin sub-pages

import AdminLeads from "./pages/AdminLeads";

import AdminInsights from "./pages/AdminInsights";
import AdminFAQ from "./pages/AdminFAQ";
import AdminTestimonials from "./pages/AdminTestimonials";

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
      <Route path="/login" element={<Login />} />

      {/* Admin Routes using AdminLayout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminLeads />} />{" "}
        {/* Default child route for /admin */}
        <Route path="leads" element={<AdminLeads />} />
        <Route path="insights" element={<AdminInsights />} />
        <Route path="faq" element={<AdminFAQ />} />
        <Route path="testimonials" element={<AdminTestimonials />} />
      </Route>
    </Routes>
  );
}
