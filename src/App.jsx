import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import './App.css';
import LogoLoop from './components/HomePage/LogoLoop';
import AnimatedChart from './components/HomePage/AnimatedChart';
import WhyMagnussonBand from './components/HomePage/WhyMagnussonBand';
import ContactForm from './components/HomePage/ContactForm';
import TeamSection from './components/HomePage/TeamSection';
import ProcessTimelineSection from './components/HomePage/ProcessTimelineSection';
import FitDisciplineSection from './components/HomePage/FitDisciplineSection';
import FounderAuthoritySection from './components/HomePage/FounderAuthoritySection';
import StackSpecializationsSection from './components/HomePage/StackSpecializationsSection';
import ServicesSection from './components/HomePage/ServicesSection';
import ProofCaseStudiesSection from './components/HomePage/ProofCaseStudiesSection';
import AboutSection from './components/HomePage/AboutSection';
import PodcastSection from './components/HomePage/PodcastSection';
import ReviewsCarousel from './components/HomePage/ReviewsCarousel';
import BlogPage from './components/BlogPage/BlogPage';
import BlogSection from './components/HomePage/BlogSection';
import AnalyticsGlossarySection from './components/HomePage/AnalyticsGlossarySection';
import Footer from './components/HomePage/Footer';
import { FaFileAlt } from 'react-icons/fa';
import beactiveImg from './assets/img/BeActive.png';
import busuuImg from './assets/img/Busuu.png';
import brainlyImg from './assets/img/Brainly.png';
import owlLabsImg from './assets/img/owl_labs.png';
import saltBankImg from './assets/img/Salt-Bank.png';
import srfImg from './assets/img/srf.png';
import superBetImg from './assets/img/superbet.png';
import szallasImg from './assets/img/szallas.png';
import tbiImg from './assets/img/tbi.jpg';
import newLogo from './assets/img/Magnusson-Analytica-Logo (1).webp';
import BlogListPage from './components/BlogPage/BlogListPage';
import CollaborationSection from './components/HomePage/CollaborationSection';
import PodcastPage from './components/PodcastPage/PodcastPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage/PrivacyPolicyPage.jsx';
import YouTubeSection from './components/HomePage/YouTubeSection';
import CoursesSection from './components/HomePage/CoursesSection';
import FAQSection from './components/HomePage/FAQSection';
import AmplitudeCoursesPage from './components/AmplitudeCoursesPage/AmplitudeCoursesPage.jsx';
import EnrollmentEmbedPage from './components/EnrollmentEmbedPage/EnrollmentEmbedPage.jsx'; // Import formular embed
import CareersPage from './components/CareersPage/CareersPage.jsx';
import EngineeringPage from './components/CareersPage/EngineeringPage.jsx';
import BusinessInternshipPage from './components/CareersPage/BusinessInternshipPage.jsx';
import MarketingPage from './components/CareersPage/MarketingPage.jsx';
import ABTestingCalculatorPage from './components/ToolsPage/ABTestingCalculatorPage.jsx';
import { trackButtonClick } from './utils/amplitudeTracker'; 
import {
  BRAND_LOCATION_LINE,
  BRAND_NAME,
  BRAND_REGIONAL_FOCUS,
} from './constants/brand';
import { CONVERSION_OFFER } from './constants/conversionOffer';
import { ICP_CLARITY, ICP_INDUSTRIES_SENTENCE } from './constants/icp';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const blogPosts = [
    {
      id: '1',
      title: 'How to Design your Data Strategy: GTM vs Direct SDK',
      description: 'Explore the crucial differences between Google Tag Manager and Direct SDK to build a robust data strategy for your business.',
      url: 'https://docs.google.com/document/d/e/2PACX-1vSK_vqIl5C_KU57D5WUtRORjv9vCn8J8L2gpMTrbLPcTZAtjY-7mNpWpiLyzTfNeRFaZ0RIbKPZ7hLJ/pub'
    },
    {
      id: '2',
      title: 'The Power of Product Analytics in Driving Growth',
      description: 'Learn how leveraging product analytics can provide actionable insights and lead to significant business growth.',
      url: 'https://docs.google.com/document/d/e/2PACX-1vSK_vqIl5C_KU57D5WUtRORjv9vCn8J8L2gpMTrbLPcTZAtjY-7mNpWpiLyzTfNeRFaZ0RIbKPZ7hLJ/pub'
    },
    {
      id: '3',
      title: 'Why Data Warehousing is a Game-Changer for Modern Businesses',
      description: 'Discover the benefits of building a scalable data infrastructure to streamline operations and enhance decision-making.',
      url: 'https://docs.google.com/document/d/e/2PACX-1vSK_vqIl5C_KU57D5WUtRORjv9vCn8J8L2gpMTrbLPcTZAtjY-7mNpWpiLyzTfNeRFaZ0RIbKPZ7hLJ/pub'
    },
    {
      id: '4',
      title: 'The Power of Product Analytics in Driving Growth',
      description: 'Learn how leveraging product analytics can provide actionable insights and lead to significant business growth.',
      url: 'https://docs.google.com/document/d/e/2PACX-1vSK_vqIl5C_KU57D5WUtRORjv9vCn8J8L2gpMTrbLPcTZAtjY-7mNpWpiLyzTfNeRFaZ0RIbKPZ7hLJ/pub'
    },
  ];

  const partnerLogos = [
    { src: beactiveImg, title: "Beactive", alt: "Beactive Logo" },
    { src: busuuImg, title: "Busuu", alt: "Busuu Logo" },
    { src: brainlyImg, title: "Brainly", alt: "Brainly Logo" },
    { src: owlLabsImg, title: "Owl Labs", alt: "Owl Labs Logo" },
    { src: saltBankImg, title: "Salt Bank", alt: "Salt Bank Logo" },
    { src: srfImg, title: "SRF", alt: "SRF Logo" },
    { src: superBetImg, title: "Superbet", alt: "Superbet Logo" },
    { src: szallasImg, title: "Szallas.hu", alt: "Szallas.hu Logo" },
    { src: tbiImg, title: "TBI", alt: "TBI Logo" },
  ];

  const HomePageContent = () => (
    <>
      <main className="hero" id="top">
        {/* BLOC ANIMATIE PARTICULE */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${3 + Math.random() * 4}s` }}></div>
          ))}
        </div>
        {/* BLOC ANIMATIE CHART */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, zIndex: 1, pointerEvents: 'none', paddingTop: '20vh' }}>
          <AnimatedChart />
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">unlock the power of your data</h1>
          <p className="hero-icp-line">
            {ICP_CLARITY.coreAudience}
          </p>
          <div className="hero-cta-buttons">
            <a 
              href="#contact-form" 
              className="cta-button hero-main-cta"
              onClick={() => trackButtonClick(CONVERSION_OFFER.primaryCtaLabel, 'Homepage Hero Section')} 
            >
              {CONVERSION_OFFER.primaryCtaLabel}
            </a>
            <a 
              href="https://calendar.notion.so/meet/alexandermagnusson/0az364lq3" 
              className="cta-button hero-secondary-cta"
              onClick={() => trackButtonClick(CONVERSION_OFFER.secondaryCtaLabel, 'Homepage Hero Section')}
            >
              {CONVERSION_OFFER.secondaryCtaLabel}
            </a>
          </div>
          <Link
            to="/amplitude-courses"
            className="hero-tertiary-cta"
            onClick={() => trackButtonClick(CONVERSION_OFFER.tertiaryCtaLabel, 'Homepage Hero Section')}
          >
            {CONVERSION_OFFER.tertiaryCtaLabel}
          </Link>
          <ul className="hero-proof-list" aria-label="Quantified outcomes">
            <li>Spot analytics issues before they distort reporting</li>
            <li>Turn messy funnels into a practical next-step plan</li>
            <li>Industries served most often: {ICP_INDUSTRIES_SENTENCE}</li>
            <li>{BRAND_LOCATION_LINE}. Regional focus: {BRAND_REGIONAL_FOCUS}.</li>
            <li>{partnerLogos.length} visible partner brands in our track record</li>
          </ul>
        </div>
      </main>
      <WhyMagnussonBand partnerCount={partnerLogos.length} />
      <ServicesSection id="services-section" />
      <ProofCaseStudiesSection />
      <ProcessTimelineSection />
      <FitDisciplineSection />
      <StackSpecializationsSection />
      <AboutSection id="about-section" />
      <CollaborationSection />
      <div style={{ padding: '120px 0 20px', backgroundColor: '#0a0a0a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ textAlign: 'center', color: '#ff6b35', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.8rem', fontWeight: 700, margin: '0 0 10px' }}>Client &amp; Partner Track Record</p>
        <h2 style={{ textAlign: 'center', color: 'white', fontSize: 'clamp(1.9rem, 3.9vw, 2.8rem)', fontWeight: 700, lineHeight: 1.12, margin: '0 0 10px', background: 'linear-gradient(135deg, #ffffff 0%, #ff6b35 52%, #f7931e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Trusted by product &amp; growth teams at</h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', margin: '0 0 40px' }}>{partnerLogos.length} verified client &amp; partner brands across SaaS, ecommerce, fintech, and edtech</p>
        <div className="partners-section">
          <LogoLoop logos={partnerLogos} speed={20} direction="left" logoHeight={130} gap={48} pauseOnHover scaleOnHover fadeOut fadeOutColor="rgba(10, 10, 10, 1)" ariaLabel="Technology partners and tools" className="partners-marquee" />
        </div>
      </div>
      <CoursesSection />
      <AnalyticsGlossarySection />
      <PodcastSection id="podcast-section" />
      <BlogSection id="blog-section" />
      <YouTubeSection />
      <FAQSection />
      <ContactForm id="contact-form" />
      <ReviewsCarousel />
      <TeamSection />
      <FounderAuthoritySection />
    </>
  );

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link to="/" className="nav-link"><img src={newLogo} alt={BRAND_NAME} style={{ height: '40px' }} /></Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="/#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/#about-section" className="nav-link">About us</a></li>
            <li className="nav-item"><Link to="/podcasts" className="nav-link">Podcasts</Link></li>
            <li className="nav-item"><Link to="/blogs" className="nav-link">Blog</Link></li>
            <li className="nav-item"><Link to="/tools" className="nav-link">Tools</Link></li>
            <li className="nav-item"><Link to="/careers" className="nav-link">Careers</Link></li>
            <li className="nav-item"><a href="/#contact-form" className="nav-link">Get Audit Plan</a></li>
          </ul>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}><span></span><span></span><span></span></div>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/#" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/#about-section" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About us</a>
          <Link to="/podcasts" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Podcasts</Link>
          <Link to="/blogs" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/tools" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Tools</Link>
          <Link to="/careers" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Careers</Link>
          <a href="/#contact-form" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Get Audit Plan</a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/blogs" element={<BlogListPage blogPosts={blogPosts} />} />
        <Route path="/blogs/:id" element={<BlogPage blogPosts={blogPosts} />} />
        <Route path="/podcasts" element={<PodcastPage />} />
        <Route path="/tools" element={<ABTestingCalculatorPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/amplitude-courses" element={<AmplitudeCoursesPage />} />
        <Route path="/enrollment-embed" element={<EnrollmentEmbedPage />} /> {/* RUTA FORMARULUI DE REZERVARE */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/engineering" element={<EngineeringPage />} />
        <Route path="/careers/business-internship" element={<BusinessInternshipPage />} />
        <Route path="/careers/marketing" element={<MarketingPage />} />
      </Routes>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Reject"
        enableDeclineButton
        onAccept={() => {
          console.log("Cookies accepted!");
        }}
        onDecline={() => {
          console.log("Cookies rejected!");
        }}
        cookieName="magnussonCookieConsent"
        style={{
          background: "#1a1a1a",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
        buttonStyle={{
          background: "linear-gradient(135deg, #ff6b35 0%, #d73027 100%)",
          color: "white",
          borderRadius: "50px",
          fontWeight: "600",
          fontSize: "1rem",
          padding: "10px 20px",
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "rgba(255, 255, 255, 0.7)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          borderRadius: "50px",
          fontWeight: "600",
          fontSize: "1rem",
          padding: "10px 20px",
        }}
        expires={150}
      >
        This website uses cookies to enhance user experience and for analytics. By clicking "Accept", you agree to our use of cookies. <Link to="/privacy-policy" style={{ color: '#ff6b35' }}>Learn More</Link>
      </CookieConsent>
    </div>
  );
}

export default App;