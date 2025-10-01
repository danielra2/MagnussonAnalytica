// src/components/HomePage/TeamSection.jsx

import React from 'react';
import './TeamSection.css';
import newTeamPhoto from '../../assets/img/daniphoto.jpg'; // Importă noua imagine  
import horatiuPhoto from '../../assets/img/Horatiu.jpg'
import alexPhoto from '../../assets/img/alexphoto.jpg'; // Import the new photos
import evertonPhoto from '../../assets/img/evertonphoto.jpg';
import lukaPhoto from '../../assets/img/lukaphoto.jpg';
import andreeaCatalanPhoto from '../../assets/img/andreeacatalan.png';
import andreeaLupsanPhoto from '../../assets/img/andreealupsan.png';
import fredrikJonssonPhoto from '../../assets/img/fredrikjohnson.png';
import paulOanceaPhoto from '../../assets/img/pauloancea.png';

const teamMembers = [
  {
     name: 'Alexander Magnusson',
    title: 'Founder & CEO',
    imgUrl: alexPhoto,
    
  },
  {
    name: 'Horatiu Cretu',
    title: 'Senior Product Analyst',
    imgUrl: horatiuPhoto,
  },
  {
    name: 'Daniel Radoi', // Am actualizat numele pentru noua imagine
    title: 'Product Analyst',
    imgUrl: newTeamPhoto, // Am înlocuit URL-ul placeholder cu imaginea importată
   
  },
  {
    name: 'Everton Scaciota',
    title: 'Senior Data Engineer',
    imgUrl: evertonPhoto,
  },
  {
    name: 'Luka Kniewald',
    title: 'Head of Marketing',
    imgUrl: lukaPhoto,
  },
  {
    name: 'Andreea Catalan',
    title: 'Project Coordinator',
    imgUrl: andreeaCatalanPhoto,
  },
  {
    name: 'Andreea Lupsan',
    title: 'Data Governance Specialist',
    imgUrl: andreeaLupsanPhoto,
  },
  {
    name: 'Fredrik Jonsson',
    title: 'VP of Sales & Partnerships',
    imgUrl: fredrikJonssonPhoto,
  },
  {
    name: 'Paul Oancea',
    title: 'Product Analyst',
    imgUrl: paulOanceaPhoto,
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <img
              src={member.imgUrl}
              alt={member.name}
              className="member-photo"
            />
            <div className="member-overlay">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}