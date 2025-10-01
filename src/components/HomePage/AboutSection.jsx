// src/components/HomePage/AboutSection.jsx

import React from 'react';
import './AboutSection.css';
import { FaPhoneAlt, FaLaptopCode, FaChartLine } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="about-section" id="about-section">
      <div className="about-content-container">
        <h2 className="about-main-title">Product Growth, Simplified.</h2>
        <div className="about-partner-text">
          <p className="partner-text-base">
            We are proud to be an <span className="highlight-orange">Official Amplitude Partner</span>, specializing in a wide range of
            services including implementation, strategic support, and optimization.
          </p>
        </div>
        <div className="about-text-container">
          <p className="about-text">
            Finding the right partner for your analytics and marketing needs can be overwhelming.
            Juggling multiple collaborators only adds complexity to the mix.
          </p>
          <p className="about-text">
            At Magnusson Analytica, we bring everything you need under one roof, from implementation and
            strategy to long-term support and optimization. We're your dedicated partner, helping you
            unlock the full potential of your data to drive meaningful business results.
          </p>
        </div>

        <div className="how-it-works">
          <h3 className="how-it-works-title">How It Works:</h3>
          <ul className="how-it-works-list">
            <li className="how-it-works-item animated-item">
              <div className="icon-wrapper">
                <FaPhoneAlt />
              </div>
              <p className="how-it-works-text">
                Jump on a call with our team to discuss your needs and plan how our engagement can drive value for your business.
              </p>
            </li>
            <li className="how-it-works-item animated-item">
              <div className="icon-wrapper">
                <FaLaptopCode />
              </div>
              <p className="how-it-works-text">
                Our team of specialists handles everything from setup and training, to analysis and optimization, so you can focus on running your business.
              </p>
            </li>
            <li className="how-it-works-item animated-item">
              <div className="icon-wrapper">
                <FaChartLine />
              </div>
              <p className="how-it-works-text">
                Gain actionable insights, streamline operations, and achieve measurable growth with data-driven strategies that deliver real results.
              </p>
            </li>
          </ul>
        </div>
        <div className="about-cta-container">
          <a href="/#contact-form">
            <button className="cta-button">Let's Chat</button>
          </a>
        </div>
      </div>
    </section>
  );
}