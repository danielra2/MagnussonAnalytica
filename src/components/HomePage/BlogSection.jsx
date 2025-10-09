// src/components/HomePage/BlogSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';
import './BlogSection.css';
import { trackButtonClick } from '../../utils/amplitudeTracker'; // Importăm funcția de tracking

export default function BlogSection() {
    
  // Funcție handler pentru click
  const handleCtaClick = () => {
    trackButtonClick('Read Blog - Blog Section', 'Homepage Blog Section');
  };

  return (
    <section className="blog-section" id="blog-section">
      <div className="blog-card">
        <div className="blog-icon">
          <FaFileAlt />
        </div>
        <h2 className="blog-title">Read Our Blog</h2>
        <p className="blog-description">
          Stay up-to-date with the latest news, case studies, and expert insights in the world of data analytics and technology.
        </p>
        <Link to="/blogs">
          <button 
            className="cta-button blog-button"
            onClick={handleCtaClick} // NOU: Adăugăm tracking pe click
          >
            Read Blog
          </button>
        </Link>
      </div>
    </section>
  );
}