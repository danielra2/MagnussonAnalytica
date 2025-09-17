// src/components/PodcastPage/PodcastPage.jsx

import React from 'react';
import './PodcastPage.css';
import { FaPlayCircle, FaMicrophoneAlt } from 'react-icons/fa';

// Placeholder data for your podcast episodes
const podcasts = [
  {
    id: 1,
    title: 'Full-Funnel Innovations & Lifecycle Strategy in Amplitude',
    description: 'An insightful discussion on the latest trends and tools shaping the world of product analytics, with special guest Jane Doe.',
    date: 'September 1, 2025',
  },
  {
    id: 2,
    title: 'Scaling Smarter: AWS, Agentic AI, and Funnel Analysis from the Amplitude Community',
    description: 'Learn the foundational steps and key considerations for building a data warehouse that grows with your business.',
    date: 'August 15, 2025',
  },
  {
    id: 3,
    title: 'Marketing Automation with Data',
    description: 'Explore how to leverage data to create intelligent marketing campaigns that drive higher engagement and conversion rates.',
    date: 'July 30, 2025',
  },
  {
    id: 4,
    title: 'Data-Driven Decision Making',
    description: 'We sit down with a CEO to discuss how they transformed their business by putting data at the center of every decision.',
    date: 'July 15, 2025',
  },
];

export default function PodcastPage() {
  return (
    <div className="podcast-page-container">
      <h1 className="podcast-page-title">Welcome to the Product Pulse</h1>
      <p className="podcast-page-description">
        Tune in to our podcast where we explore the latest trends in data analytics,
        business intelligence, and technology with industry experts.
      </p>

      <div className="podcast-episodes-grid">
        {podcasts.map((episode) => (
          <div key={episode.id} className="podcast-episode-card animated-card">
            {episode.id === 1 ? (
              <div className="podcast-iframe-container">
                <iframe
                  width="100%"
                  height="180"
                  frameBorder="no"
                  scrolling="no"
                  seamless
                  src="https://share.transistor.fm/e/ad20787c?theme=dark"
                ></iframe>
              </div>
            ) : episode.id === 2 ? (
              <div className="podcast-iframe-container">
                <iframe
                  width="100%"
                  height="180"
                  frameBorder="no"
                  scrolling="no"
                  seamless
                  src="https://share.transistor.fm/e/e8b1e533?theme=dark"
                ></iframe>
              </div>
            ) : (
              <div className="podcast-card-image">
                <FaMicrophoneAlt className="mic-icon" />
              </div>
            )}
            <div className="podcast-card-content">
              <h2 className="podcast-episode-title">{episode.title}</h2>
              <p className="podcast-episode-description">{episode.description}</p>
              <div className="podcast-episode-meta">
                <p className="podcast-episode-date">{episode.date}</p>
              </div>
            </div>
            {episode.id !== 1 && episode.id !== 2 && (
              <a href="#" className="play-link" aria-label={`Play episode: ${episode.title}`}>
                <FaPlayCircle className="play-icon" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}