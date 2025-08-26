import { useState } from 'react'
import './App.css'
import LogoLoop from './components/HomePage/LogoLoop'
import AnimatedChart from './components/HomePage/AnimatedChart' // Import the new component

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Logos for partnerships/technologies
  const partnerLogos = [
    {
      node: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#61dafb' }}>React</span>,
      title: "React",
      href: "https://react.dev"
    },
    {
      node: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }}>Next.js</span>,
      title: "Next.js",
      href: "https://nextjs.org"
    },
    {
      node: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#3178c6' }}>TypeScript</span>,
      title: "TypeScript",
      href: "https://www.typescriptlang.org"
    },
    {
      node: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#38bdf8' }}>Tailwind</span>,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com"
    },
    {
      node: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff6b35' }}>Analytics</span>,
      title: "Analytics Platform"
    },
    {
      node: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#00d4aa' }}>BigQuery</span>,
      title: "Google BigQuery"
    },
    {
      node: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff9500' }}>Tableau</span>,
      title: "Tableau"
    },
    {
      node: <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#e97627' }}>PowerBI</span>,
      title: "Microsoft Power BI"
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-shape logo-shape-1"></div>
              <div className="logo-shape logo-shape-2"></div>
              <div className="logo-shape logo-shape-3"></div>
            </div>
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
          <button className="cta-button">
            Book a Free Audit
          </button>
        </div>

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
      </main>

      {/* Partners/Technologies Marquee - MOVED HERE */}
      <div style={{ padding: '80px 0 20px', backgroundColor: '#0a0a0a' }}>
        <div className="partners-section">
          <LogoLoop
            logos={partnerLogos}
            speed={20} // CHANGED to 20 to slow down the animation
            direction="left"
            logoHeight={32}
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
    </div>
  )
}

export default App



