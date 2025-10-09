// src/components/HomePage/CoursesSection.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './CoursesSection.css'; // New CSS file

export default function CoursesSection() {
    return (
        <section className="training-section">
            <h2 className="training-title">Training and Courses</h2>
            <div className="card-container">
                <div className="training-card">
                    <h3 className="card-title">Data Analytics Training</h3>
                    <p className="card-description">Learn the fundamentals of data analysis, from cleaning and modeling to advanced visualization.</p>
                    <Link to="/amplitude-courses"><button className="cta-button card-button">View Courses</button></Link>
                </div>
                <div className="training-card">
                    <h3 className="card-title">Custom Workshops</h3>
                    <p className="card-description">We create custom learning experiences tailored to your team's specific needs and goals.</p>
                    <Link to="/amplitude-courses"><button className="cta-button card-button">View Courses</button></Link>
                </div>
                <div className="training-card">
                    <h3 className="card-title">Certification Programs</h3>
                    <p className="card-description">Earn professional certifications in a range of data tools and technologies.</p>
                    <Link to="/amplitude-courses"><button className="cta-button card-button">View Courses</button></Link>
                </div>
            </div>
        </section>
    );
}