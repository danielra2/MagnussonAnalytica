import { useState } from 'react'
import './App.css'
import LogoLoop from './components/HomePage/LogoLoop'
import AnimatedChart from './components/HomePage/AnimatedChart'
import ContactForm from './components/HomePage/ContactForm'
import TeamSection from './components/HomePage/TeamSection'
import ServicesSection from './components/HomePage/ServicesSection'
import AboutSection from './components/HomePage/AboutSection' // NEW: Import AboutSection
import Footer from './components/HomePage/Footer'
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

  // Logos for partnerships/technologies
  const partnerLogos = [
    {
      src: beactiveImg,
      title: "Beactive",
      alt: "Beactive Logo"
    },
    {
      src: busuuImg,
      title: "Busuu",
      alt: "Busuu Logo"
    },
    {
      src: brainlyImg,
      title: "Brainly",
      alt: "Brainly Logo"
    },
    {
      src: owlLabsImg,
      title: "Owl Labs",
      alt: "Owl Labs Logo"
    },
    {
      src: saltBankImg,
      title: "Salt Bank",
      alt: "Salt Bank Logo"
    },
    {
      src: srfImg,
      title: "SRF",
      alt: "SRF Logo"
    },
    {
      src: superBetImg,
      title: "Superbet",
      alt: "Superbet Logo"
    },
    {
      src: szallasImg,
      title: "Szallas.hu",
      alt: "Szallas.hu Logo"
    },
    {
      src: tbiImg,
      title: "TBI",
      alt: "TBI Logo"
    }
  ]

  return (
    <div className="app">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <img src={newLogo} alt="Magnusson Analytica Logo" style={{ height: '40px' }} />
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#what-we-do" className="nav-link">What we do</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About us</a>
            </li>
            <li className="nav-item">
              <a href="#podcasts" className="nav-link">Podcasts</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact Us</a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#what-we-do" className="mobile-link" onClick={() => setIsMenuOpen(false)}>What we do</a>
          <a href="#about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About us</a>
          <a href="#podcasts" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Podcasts</a>
          <a href="#contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        {/* Animated Chart in the background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1, // Adjust this value to control the "washed out" effect
          zIndex: 1,
          pointerEvents: 'none',
          paddingTop: '20vh' // Adjust position as needed
        }}>
          <AnimatedChart />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Unlock the power of your data
          </h1>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
            <button className="cta-button">
              Book a Free Audit
            </button>
            <button className="cta-button" style={{
              background: '#4a4a4a', // Grey background
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
              textShadow: 'none',
              transition: 'all 0.3s ease',
            }}>
              Book a Free Call
            </button>
          </div>
        </div>
      </main>
      
      {/* NEW: About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />

      {/* Partners Section */}
      <div style={{
        padding: '120px 0 20px',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '2rem',
          marginBottom: '40px',
        }}>
          Our trusted partners
        </h2>
        <div className="partners-section">
          <LogoLoop
            logos={partnerLogos}
            speed={20}
            direction="left"
            logoHeight={24}
            gap={48}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="rgba(10, 10, 10, 1)"
            ariaLabel="Technology partners and tools"
            className="partners-marquee"
          />
        </div>
      </div>

      {/* Training Section */}
      <section className="training-section">
        <h2 className="training-title">
          Training and Courses
        </h2>
        <div className="card-container">
          <div className="training-card">
            <h3 className="card-title">Data Analytics Training</h3>
            <p className="card-description">
              Learn the fundamentals of data analysis, from cleaning and
              modeling to advanced visualization.
            </p>
            <button className="cta-button card-button">View Courses</button>
          </div>
          <div className="training-card">
            <h3 className="card-title">Custom Workshops</h3>
            <p className="card-description">
              We create custom learning experiences tailored to your team's
              specific needs and goals.
            </p>
            <button className="cta-button card-button">View Courses</button>
          </div>
          <div className="training-card">
            <h3 className="card-title">Certification Programs</h3>
            <p className="card-description">
              Earn professional certifications in a range of data tools and
              technologies.
            </p>
            <button className="cta-button card-button">View Courses</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Team Section */}
      <TeamSection />
      
      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default App