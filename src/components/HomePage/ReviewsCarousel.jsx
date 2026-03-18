// src/components/HomePage/ReviewsCarousel.jsx

import React, { useState } from 'react';
import './ReviewsCarousel.css';
import { FaChevronLeft, FaChevronRight, FaLinkedin, FaStar } from 'react-icons/fa';
import ewaPhoto from '../../assets/img/ewaphoto.jpeg';

const reviews = [
  {
    name: 'Ewa Salwa',
    title: 'Head Of Digital Marketing',
    company: 'BeActive',
    text: 'Magnusson Analytica guided our IT and marketing department through Amplitude implementation which led to a long term cooperation. Honestly? We just wanted someone to set things up. Instead we gained a real partner. We feel taken care of and really appreciate their expertise and way of thinking. It is great to work with someone that really knows it all within the service they provide. We look forward to expanding together and recommend other projects to them.',
    photoUrl: ewaPhoto,
    rating: 5,
    source: 'LinkedIn',
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
    <section className="reviews-section" aria-labelledby="reviews-title">
      <header className="reviews-header">
        <p className="reviews-kicker">Testimonials</p>
        <h2 id="reviews-title" className="reviews-main-title">What clients say</h2>
        <p className="reviews-subtitle">Verified testimonials from product and growth leaders we've worked with directly.</p>
      </header>
      <div className="reviews-carousel">
        <button onClick={prevReview} className="carousel-button prev-button" aria-label="Previous review">
          <FaChevronLeft aria-hidden="true" />
        </button>
        <div className="review-card">
          <div className="review-content">
            <div className="review-stars" aria-label={`${current.rating} out of 5 stars`}>
              {[...Array(current.rating)].map((_, i) => (
                <FaStar key={i} className="review-star" aria-hidden="true" />
              ))}
            </div>
            <p className="review-text">&ldquo;{current.text}&rdquo;</p>
            <div className="reviewer-info">
              <img src={current.photoUrl} alt={current.name} className="reviewer-photo" />
              <div className="reviewer-details">
                <p className="reviewer-name">{current.name}</p>
                <p className="reviewer-title">{current.title}</p>
                <p className="reviewer-company">{current.company}</p>
              </div>
            </div>
            <div className="review-source-badge" aria-label={`Verified on ${current.source}`}>
              <FaLinkedin className="review-source-icon" aria-hidden="true" />
              <span>Verified on {current.source}</span>
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