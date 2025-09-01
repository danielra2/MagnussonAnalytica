// src/components/HomePage/PodcastSection.jsx

import React from 'react';
import './PodcastSection.css';
import { FaPodcast } from 'react-icons/fa';

export default function PodcastSection() {
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
        <a href="https://magnussonanalytica.com/podcast/" target="_blank" rel="noopener noreferrer">
          <button className="cta-button podcast-button">
            View All Episodes
          </button>
        </a>
      </div>
    </section>
  );
}