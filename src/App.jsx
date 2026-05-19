import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import useScrollToTop from './hooks/useScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// SEO Landing Pages
const BestFreelancingCompanyIndia = lazy(() => import('./pages/BestFreelancingCompanyIndia'));
const CreativeAgencyForStartups = lazy(() => import('./pages/CreativeAgencyForStartups'));
const WhatsAppAutomationAgency = lazy(() => import('./pages/WhatsAppAutomationAgency'));
const WebsiteDevelopmentSmallBusiness = lazy(() => import('./pages/WebsiteDevelopmentSmallBusiness'));
const DoctorClinicAutomation = lazy(() => import('./pages/DoctorClinicAutomation'));
const AffordableBrandingAgency = lazy(() => import('./pages/AffordableBrandingAgency'));
const FastWebsiteDevelopment = lazy(() => import('./pages/FastWebsiteDevelopment'));

function AppShell() {
  useScrollToTop();

  return (
    <div className="relative min-h-screen bg-bg text-text antialiased">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <div className="grid-overlay" />
        <div className="hero-radial" />
      </div>

      <CustomCursor />
      <Navbar />

      <main id="main-content" className="relative z-10">
        <Suspense fallback={<div className="page-loader">Loading Xuro experience...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* SEO Landing Pages */}
            <Route path="/best-freelancing-company-in-india" element={<BestFreelancingCompanyIndia />} />
            <Route path="/creative-agency-startups" element={<CreativeAgencyForStartups />} />
            <Route path="/whatsapp-automation-agency" element={<WhatsAppAutomationAgency />} />
            <Route path="/website-development-small-business" element={<WebsiteDevelopmentSmallBusiness />} />
            <Route path="/doctor-clinic-automation" element={<DoctorClinicAutomation />} />
            <Route path="/affordable-branding-agency" element={<AffordableBrandingAgency />} />
            <Route path="/fast-website-development" element={<FastWebsiteDevelopment />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default AppShell;
