import { useState } from 'react'
import './App.css'
import LogoLoop from './components/HomePage/LogoLoop'
import AnimatedChart from './components/HomePage/AnimatedChart'
import ContactForm from './components/HomePage/ContactForm'
import TeamSection from './components/HomePage/TeamSection'
import ServicesSection from './components/HomePage/ServicesSection'
import AboutSection from './components/HomePage/AboutSection'
import PodcastSection from './components/HomePage/PodcastSection'
import ReviewsCarousel from './components/HomePage/ReviewsCarousel'
import BlogPage from './components/BlogPage/BlogPage'
import BlogSection from './components/HomePage/BlogSection'
import Footer from './components/HomePage/Footer'
import { Routes, Route, Link } from 'react-router-dom'
import { FaFileAlt } from 'react-icons/fa'
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
  ]

  const HomePageContent = () => (
    <>
      <main className="hero" id="top">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${3 + Math.random() * 4}s` }}></div>
          ))}
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, zIndex: 1, pointerEvents: 'none', paddingTop: '20vh' }}>
          <AnimatedChart />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Unlock the power of your data</h1>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
            <button className="cta-button">Book a Free Audit</button>
            <button className="cta-button" style={{ background: '#4a4a4a', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)', textShadow: 'none', transition: 'all 0.3s ease' }}>
              Book a Free Call
            </button>
          </div>
        </div>
      </main>
      <ServicesSection id="services-section" />
      <AboutSection id="about-section" />
      <div style={{ padding: '120px 0 20px', backgroundColor: '#0a0a0a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ textAlign: 'center', color: 'white', fontSize: '2rem', marginBottom: '40px' }}>Our trusted partners</h2>
        <div className="partners-section">
          <LogoLoop logos={partnerLogos} speed={20} direction="left" logoHeight={130} gap={48} pauseOnHover scaleOnHover fadeOut fadeOutColor="rgba(10, 10, 10, 1)" ariaLabel="Technology partners and tools" className="partners-marquee" />
        </div>
      </div>
      <section className="training-section">
        <h2 className="training-title">Training and Courses</h2>
        <div className="card-container">
          <div className="training-card">
            <h3 className="card-title">Data Analytics Training</h3>
            <p className="card-description">Learn the fundamentals of data analysis, from cleaning and modeling to advanced visualization.</p>
            <button className="cta-button card-button">View Courses</button>
          </div>
          <div className="training-card">
            <h3 className="card-title">Custom Workshops</h3>
            <p className="card-description">We create custom learning experiences tailored to your team's specific needs and goals.</p>
            <button className="cta-button card-button">View Courses</button>
          </div>
          <div className="training-card">
            <h3 className="card-title">Certification Programs</h3>
            <p className="card-description">Earn professional certifications in a range of data tools and technologies.</p>
            <button className="cta-button card-button">View Courses</button>
          </div>
        </div>
      </section>
      <PodcastSection id="podcast-section" />
      <BlogSection id="blog-section" />
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
            <a href="/#" className="nav-link"><img src={newLogo} alt="Magnusson Analytica Logo" style={{ height: '40px' }} /></a>
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
          <a href="/#services-section" className="mobile-link" onClick={() => setIsMenuOpen(false)}>What we do</a>
          <a href="/#about-section" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About us</a>
          <a href="/#podcast-section" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Podcasts</a>
          <a href="/#blog-section" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <a href="/#contact-form" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App