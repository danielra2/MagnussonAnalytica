// src/components/HomePage/Footer.jsx

import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3 className="footer-title">Magnusson Analytica</h3>
            <p className="footer-description">
              Driving business growth through data-driven insights and innovative solutions.
            </p>
          </div>
          <div className="footer-section footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-link-list">
              <li><a href="/#top" className="footer-link">Home</a></li>
              <li><a href="/#about-section" className="footer-link">About us</a></li>
              <li><a href="/#podcast-section" className="footer-link">Podcasts</a></li>
              <li><a href="/#contact-form" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section footer-contact">
            <h4 className="footer-links-title">Contact</h4>
            <p className="footer-contact-info">
              Email: info@magnusson.com<br />
              Phone: +40 700 000 000
            </p>
          </div>
        </div>

        <div className="footer-socials">
          <a href="https://www.instagram.com/magnussonanalytica_hq/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/magnusson-analytica/?originalSubdomain=uk" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/people/Magnusson-Analytica/61556230900777/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Magnusson Analytica. All rights reserved.
        </p>
      </div>
    </footer>
  );
}