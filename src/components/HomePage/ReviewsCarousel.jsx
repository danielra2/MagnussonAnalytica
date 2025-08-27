// src/components/HomePage/ReviewsCarousel.jsx

import React, { useState } from 'react';
import './ReviewsCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ewaPhoto from '../../assets/img/ewaphoto.jpeg'; // Import the new image

// Placeholder data for reviews
const reviews = [
  {
    name: 'Ewa Salwa',
    title: 'Head Of Digital Marketing',
    company: 'BeActive',
    text: 'Magnusson Analytica guided our IT and marketing department through Amplitude implementation which led to a long term cooperation. Honestly? We just wanted someone to set things up. Instead we gained a real partner. We feel taken care of and really appreciate their expertise and way of thinking. It is great to work with someone that really knows it all within the service they provide. We look forward to expanding together and recommend other projects to them.',
    photoUrl: ewaPhoto, // Use the imported image here
  },
  {
    name: 'John Smith',
    title: 'CEO',
    company: 'Tech Solutions',
    text: 'Working with Magnusson Analytica was a game-changer for our business. Their insights helped us streamline our data processes and make better decisions, leading to significant growth.',
    photoUrl: 'https://via.placeholder.com/150x150.png?text=John',
  },
  {
    name: 'Sarah Lee',
    title: 'Director of Analytics',
    company: 'Global Corp',
    text: 'The team at Magnusson Analytica is incredibly knowledgeable and professional. They delivered a solution that was not only robust but also perfectly tailored to our specific needs.',
    photoUrl: 'https://via.placeholder.com/150x150.png?text=Sarah',
  },
];

export default function ReviewsCarousel() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentReview];

  return (
    <section className="reviews-section">
      <h2 className="reviews-main-title">Customer Reviews</h2>
      <div className="reviews-carousel">
        <button onClick={prevReview} className="carousel-button prev-button">
          <FaChevronLeft />
        </button>
        <div className="review-card">
          <div className="review-content">
            <p className="review-text">"{current.text}"</p>
            <div className="reviewer-info">
              <img src={current.photoUrl} alt={current.name} className="reviewer-photo" />
              <div className="reviewer-details">
                <p className="reviewer-name">{current.name}</p>
                <p className="reviewer-title">{current.title}</p>
                <p className="reviewer-company">| {current.company}</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={nextReview} className="carousel-button next-button">
          <FaChevronRight />
        </button>
      </div>
      <div className="carousel-dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentReview ? 'active' : ''}`}
            onClick={() => setCurrentReview(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}