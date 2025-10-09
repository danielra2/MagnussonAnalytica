// src/components/HomePage/PodcastSection.jsx

import React from 'react';
import './PodcastSection.css';
import { FaPodcast } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { trackButtonClick } from '../../utils/amplitudeTracker'; // Importăm funcția de tracking

export default function PodcastSection() {
  
  // Funcție handler pentru click
  const handleCtaClick = () => {
    trackButtonClick('View All Episodes - Podcast Section', 'Homepage Podcast Section');
  };

  return (
    <section className="podcast-section" id="podcast-section">
      <div className="podcast-card">
        <div className="podcast-icon">
          <FaPodcast />
        </div>
        <h2 className="podcast-title">Listen to Our Podcast</h2>
        <p className="podcast-description">
          Tune in to "Data Driven Insights" where we explore the latest trends in data analytics,
          business intelligence, and technology with industry experts.
        </p>
        <Link 
          to="/podcasts"
          onClick={handleCtaClick} // NOU: Adăugăm tracking pe click
        >
          <button className="cta-button podcast-button">
            View All Episodes
          </button>
        </Link>
      </div>
    </section>
  );
}