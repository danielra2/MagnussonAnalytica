// src/components/BlogPage/BlogPage.jsx

import React, { useState, useEffect } from 'react';
import './BlogPage.css';

export default function BlogPage() {
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // The public URL from your published Google Doc
  const publishedDocUrl = 'https://docs.google.com/document/d/e/2PACX-1vSK_vqIl5C_KU57D5WUtRORjv9vCn8J8L2gpMTrbLPcTZAtjY-7mNpWpiLyzTfNeRFaZ0RIbKPZ7hLJ/pub';

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const response = await fetch(publishedDocUrl);
        const htmlText = await response.text();

        // Use DOMParser to safely extract the main content
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        
        // Find the main content div, which typically has this ID in published Google Docs
        const contentDiv = doc.getElementById('contents');
        
        // Extract the title from the document title
        const title = doc.title;

        if (contentDiv) {
          // Set the content with dangerouslySetInnerHTML to render the HTML
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
  }, [publishedDocUrl]);

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