// src/components/HomePage/TeamSection.jsx

import React from 'react';
import './TeamSection.css';
import newTeamPhoto from 'C:/mycode/Website/WebsiteMagnusson/src/assets/img/daniphoto.jpg'; // Importă noua imagine  

const teamMembers = [
  {
    name: 'Daniel Radoi', // Am actualizat numele pentru noua imagine
    title: 'Product Analyst',
    imgUrl: newTeamPhoto, // Am înlocuit URL-ul placeholder cu imaginea importată
  },
  {
    name: 'John Doe',
    title: 'Lead Data Scientist',
    imgUrl: 'https://via.placeholder.com/400x400.png?text=Team+Member+2',
  },
  {
    name: 'Robert Brown',
    title: 'Data Analyst',
    imgUrl: 'https://via.placeholder.com/400x400.png?text=Team+Member+3',
  },
  {
    name: 'Emily Davis',
    title: 'Business Intelligence',
    imgUrl: 'https://via.placeholder.com/400x400.png?text=Team+Member+4',
  },
  {
    name: 'Michael Clark',
    title: 'Senior Consultant',
    imgUrl: 'https://via.placeholder.com/400x400.png?text=Team+Member+5',
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