// src/components/HomePage/YouTubeSection.jsx

import React from 'react';
import './YouTubeSection.css';
import { FaYoutube } from 'react-icons/fa';
import { trackButtonClick } from '../../utils/amplitudeTracker'; // Importăm funcția de tracking

export default function YouTubeSection() {
  const videoId = 'WiNFZBLpjDQ';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  // Funcție handler pentru click
  const handleCtaClick = () => {
    trackButtonClick('View YouTube Channel Button', 'Homepage YouTube Section');
  };

  return (
    <section className="youtube-section">
      <div className="youtube-container">
        <h2 className="youtube-title">Visit Our YouTube Channel</h2>
        <p className="youtube-description">
          Tune in to our latest videos and deep dives into the world of data analytics and business growth.
        </p>
        <div className="youtube-video-wrapper">
          <iframe
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a 
          href="https://www.youtube.com/@magnussonanalytica" 
          target="_blank" 
          rel="noopener noreferrer"
          className="youtube-button"
          onClick={handleCtaClick} // NOU: Adăugăm tracking pe click
        >
          <FaYoutube /> View Channel
        </a>
      </div>
    </section>
  );
}