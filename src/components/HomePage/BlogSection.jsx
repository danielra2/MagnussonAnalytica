// src/components/HomePage/BlogSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';
import './BlogSection.css';

export default function BlogSection() {
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
        <Link to="/blog">
          <button className="cta-button blog-button">
            Read Blog
          </button>
        </Link>
      </div>
    </section>
  );
}