// src/components/HomePage/CoursesSection.jsx

import React from 'react';
import './CoursesSection.css'; // Importă noul fișier CSS

export default function CoursesSection() {
    return (
        <section className="training-section">
            <h2 className="training-title">Training and Courses</h2>
            <div className="card-container">
                <div className="training-card">
                    <h3 className="card-title">Data Analytics Training</h3>
                    <p className="card-description">Learn the fundamentals of data analysis, from cleaning and modeling to advanced visualization.</p>
                    <button className="cta-button card-button">View Courses</button>
                </div>
                <div className="training-card">
                    <h3 className="card-title">Custom Workshops</h3>
                    <p className="card-description">We create custom learning experiences tailored to your team's specific needs and goals.</p>
                    <button className="cta-button card-button">View Courses</button>
                </div>
                <div className="training-card">
                    <h3 className="card-title">Certification Programs</h3>
                    <p className="card-description">Earn professional certifications in a range of data tools and technologies.</p>
                    <button className="cta-button card-button">View Courses</button>
                </div>
            </div>
        </section>
    );
}