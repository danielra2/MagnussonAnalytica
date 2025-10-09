import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import './App.css';
import LogoLoop from './components/HomePage/LogoLoop';
import AnimatedChart from './components/HomePage/AnimatedChart'; // CRITIC: Asigură-te că acest import există
import ContactForm from './components/HomePage/ContactForm';
import TeamSection from './components/HomePage/TeamSection';
import ServicesSection from './components/HomePage/ServicesSection';
import AboutSection from './components/HomePage/AboutSection';
import PodcastSection from './components/HomePage/PodcastSection';
import ReviewsCarousel from './components/HomePage/ReviewsCarousel';
import BlogPage from './components/BlogPage/BlogPage';
import BlogSection from './components/HomePage/BlogSection';
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
import AmplitudeCoursesPage from './components/AmplitudeCoursesPage/AmplitudeCoursesPage.jsx';
import { trackButtonClick } from './utils/amplitudeTracker'; 

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
        {/* BLOC ANIMATIE PARTICULE (BULE) */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${3 + Math.random() * 4}s` }}></div>
          ))}
        </div>
        {/* BLOC ANIMATIE CHART (GRAFIC) */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, zIndex: 1, pointerEvents: 'none', paddingTop: '20vh' }}>
          <AnimatedChart />
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">Unlock the power of your data</h1>
          <div className="hero-cta-buttons">
            <a 
              href="#contact-form" 
              className="cta-button hero-main-cta"
              onClick={() => trackButtonClick('Book Free Audit', 'Homepage Hero Section')} 
            >
              Book a Free Audit
            </a>
            <a 
              href="https://calendar.notion.so/meet/alexandermagnusson/0az364lq3" 
              className="cta-button hero-secondary-cta"
              onClick={() => trackButtonClick('Book Free Call - Notion', 'Homepage Hero Section')}
              style={{ background: '#4a4a4a', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)', textShadow: 'none', transition: 'all 0.3s ease' }}
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </main>
      <ServicesSection id="services-section" />
      <AboutSection id="about-section" />
      <CollaborationSection />
      <div style={{ padding: '120px 0 20px', backgroundColor: '#0a0a0a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ textAlign: 'center', color: 'white', fontSize: '2rem', marginBottom: '40px' }}>Our trusted partners</h2>
        <div className="partners-section">
          <LogoLoop logos={partnerLogos} speed={20} direction="left" logoHeight={130} gap={48} pauseOnHover scaleOnHover fadeOut fadeOutColor="rgba(10, 10, 10, 1)" ariaLabel="Technology partners and tools" className="partners-marquee" />
        </div>
      </div>
      <CoursesSection />
      <PodcastSection id="podcast-section" />
      <BlogSection id="blog-section" />
      <YouTubeSection />
      <ContactForm id="contact-form" />
      <ReviewsCarousel />
      <TeamSection />
    </>
  );

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="/#" className="nav-link"><img src={newLogo} alt="Magnusson Analytica" style={{ height: '40px' }} /></a>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="/#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/#about-section" className="nav-link">About us</a></li>
            <li className="nav-item"><a href="/#podcast-section" className="nav-link">Podcasts</a></li>
            <li className="nav-item"><a href="/#blog-section" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="/#contact-form" className="nav-link">Contact Us</a></li>
          </ul>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}><span></span><span></span><span></span></div>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/#" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/#about-section" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About us</a>
          <a href="/#podcast-section" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Podcasts</a>
          <a href="/#blog-section" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <a href="/#contact-form" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/blogs" element={<BlogListPage blogPosts={blogPosts} />} />
        <Route path="/blogs/:id" element={<BlogPage blogPosts={blogPosts} />} />
        <Route path="/podcasts" element={<PodcastPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/amplitude-courses" element={<AmplitudeCoursesPage />} />
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