// src/components/HomePage/CoursesSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesSection.css'; // Importă noul fișier CSS
import { trackButtonClick } from '../../utils/amplitudeTracker'; // Importăm funcția de tracking

export default function CoursesSection() {
  
    const trackClick = (courseName) => {
        trackButtonClick(courseName, 'Homepage Training Section');
    };

    return (
        <section className="training-section">
            <h2 className="training-title">Training and Courses</h2>
            <div className="card-container">
                <div className="training-card">
                    <h3 className="card-title">Data Analytics Training</h3>
                    <p className="card-description">Learn the fundamentals of data analysis, from cleaning and modeling to advanced visualization.</p>
                    <Link to="/amplitude-courses">
                        <button 
                            className="cta-button card-button"
                            onClick={() => trackClick('View Courses - Data Analytics')} // NOU: Tracking
                        >
                            View Courses
                        </button>
                    </Link>
                </div>
                <div className="training-card">
                    <h3 className="card-title">Custom Workshops</h3>
                    <p className="card-description">We create custom learning experiences tailored to your team's specific needs and goals.</p>
                    <Link to="/amplitude-courses">
                        <button 
                            className="cta-button card-button"
                            onClick={() => trackClick('View Courses - Custom Workshops')} // NOU: Tracking
                        >
                            View Courses
                        </button>
                    </Link>
                </div>
                <div className="training-card">
                    <h3 className="card-title">Certification Programs</h3>
                    <p className="card-description">Earn professional certifications in a range of data tools and technologies.</p>
                    <Link to="/amplitude-courses">
                        <button 
                            className="cta-button card-button"
                            onClick={() => trackClick('View Courses - Certification Programs')} // NOU: Tracking
                        >
                            View Courses
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}