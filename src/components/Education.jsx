import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      school: "MIT World Peace University",
      year: "2023 - 2027",
      score: "CGPA: 7.93",
      details: "Focusing on core software engineering, cloud architecture, and modern computer networks. Hand-on projects in DevOps and AI/ML.",
      additional: "IoT Workshop Participant (March 2024)"
    },
    {
      degree: "12th CBSE",
      school: "Higher Secondary Education",
      year: "Completed",
      score: "Score: 68.4%",
      details: "Major in Science and Mathematics."
    },
    {
      degree: "10th CBSE",
      school: "Secondary Education",
      year: "Completed",
      score: "Score: 93.8%",
      details: "Strong foundation in analytics and core subjects."
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education Tracker</h2>
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{edu.year}</span>
                <h3 className="timeline-degree">{edu.degree}</h3>
                <h4 className="timeline-school">{edu.school}</h4>
                <div className="timeline-score">{edu.score}</div>
                <p className="timeline-details">{edu.details}</p>
                {edu.additional && <p className="timeline-additional">⭐ {edu.additional}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
