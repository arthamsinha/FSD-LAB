import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Farmlink",
      type: "AI Agri-Marketplace",
      description: "An AI-based platform designed to connect farmers directly with buyers. Created detailed user journeys and interactive Figma prototypes. Recognized as the Winner of HackMIT-WPU 2025.",
      tech: ["AI", "UI/UX", "Figma", "Web"],
      link: "#"
    },
    {
      title: "E-Upchar",
      type: "Inclusive Healthcare Platform",
      description: "Built an AI-powered triage system that dynamically categorizes patients into green, yellow, or red zones based on urgency. Focused primarily on scalability, accessibility, and compliance with ABDM & DPDP frameworks.",
      tech: ["AI", "Healthcare", "Compliance"],
      link: "#"
    },
    {
      title: "ReliefRoute",
      type: "Disaster Management System",
      description: "A comprehensive tech solution tailored for disaster management. Features live interactive maps, data dashboards, and intelligent resource optimization models to aid responders.",
      tech: ["React", "FastAPI", "Maps"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-body">
                <p>{project.description}</p>
              </div>
              <div className="project-footer">
                <ul className="project-tech">
                  {project.tech.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a href={project.link} className="project-link" aria-label={`View ${project.title}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
