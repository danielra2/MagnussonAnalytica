// src/components/BlogPage/BlogPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPage.css';

export default function BlogPage({ blogPosts }) {
  const { id } = useParams(); // Get the ID from the URL
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Find the blog post data based on the ID
  const selectedPost = blogPosts.find(post => post.id === id);

  useEffect(() => {
    if (!selectedPost) {
      setBlogPost(null);
      setIsLoading(false);
      return;
    }

    const fetchBlogContent = async () => {
      try {
        const response = await fetch(selectedPost.url);
        const htmlText = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        
        let contentDiv = doc.getElementById('contents');
        
        const title = doc.title;

        if (contentDiv) {
          contentDiv.querySelectorAll('[style]').forEach(el => el.removeAttribute('style'));
          contentDiv.querySelectorAll('style').forEach(el => el.remove());
          
          setBlogPost({ title, content: contentDiv.innerHTML });
        } else {
          setBlogPost({ title, content: "Content not found." });
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
        setIsLoading(false);
      }
    };

    fetchBlogContent();
  }, [selectedPost]);

  if (isLoading) {
    return (
      <div className="blog-page-container">
        <h1 className="blog-page-title">Loading Blog Post...</h1>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="blog-page-container">
        <h1 className="blog-page-title">Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="blog-page-container">
      <h1 className="blog-page-title">{blogPost.title}</h1>
      <div 
        className="blog-content-wrapper" 
        dangerouslySetInnerHTML={{ __html: blogPost.content }}
      />
    </div>
  );
}