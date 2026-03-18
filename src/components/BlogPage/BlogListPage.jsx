// src/components/BlogPage/BlogListPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './BlogListPage.css';
import { ICP_INDUSTRIES_SENTENCE } from '../../constants/icp';

export default function BlogListPage({ blogPosts }) {
  return (
    <div className="blog-list-page-container">
      <h1 className="blog-list-page-title">Blog & Insights</h1>
      <p className="blog-list-description">
        Stay up-to-date with practical insights for product, growth, and data teams in
        {' '}
        {ICP_INDUSTRIES_SENTENCE}.
      </p>
      <div className="blog-posts-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post-card">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-description">{post.description}</p>
            <Link to={`/blogs/${post.id}`} className="read-more-link">
              Read More
              <span className="arrow-icon">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}