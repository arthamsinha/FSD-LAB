import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "FastAPI"]
    },
    {
      title: "Databases",
      skills: ["MySQL"]
    },
    {
      title: "Tools & Design",
      skills: ["Figma (UI/UX, Wireframes)"]
    },
    {
      title: "Core Concepts",
      skills: ["Cloud Computing", "DevOps", "Operating Systems", "Computer Networks", "IoT"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">My Technical Toolbox</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-icon">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
