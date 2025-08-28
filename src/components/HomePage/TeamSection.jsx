// src/components/HomePage/TeamSection.jsx

import React from 'react';
import './TeamSection.css';
import newTeamPhoto from 'C:/mycode/Website/WebsiteMagnusson/src/assets/img/daniphoto.jpg'; // Importă noua imagine  
import horatiuPhoto from 'C:/mycode/Website/WebsiteMagnusson/src/assets/img/Horatiu.jpg'
import alexPhoto from '../../assets/img/alexphoto.jpg'; // Import the new photos
import evertonPhoto from '../../assets/img/evertonphoto.jpg';
import lukaPhoto from '../../assets/img/lukaphoto.jpg';

const teamMembers = [
  {
     name: 'Alexander Magnusson',
    title: 'Founder & CEO',
    imgUrl: alexPhoto,
    
  },
  {
    name: 'Horatiu Cretu',
    title: 'Product Analyst',
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
    name: 'Laura White',
    title: 'Data Engineer',
    imgUrl: 'https://via.placeholder.com/400x400.png?text=Team+Member+6',
  },
  {
    name: 'Chris Evans',
    title: 'Solutions Architect',
    imgUrl: 'https://via.placeholder.com/400x400.png?text=Team+Member+7',
  },
  {
    name: 'Olivia Wilson',
    title: 'UI/UX Designer',
    imgUrl: 'https://via.placeholder.com/400x400.png?text=Team+Member+8',
  },
  {
    name: 'Daniel Thomas',
    title: 'Marketing Specialist',
    imgUrl: 'https://via.placeholder.com/400x400.png?text=Team+Member+9',
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