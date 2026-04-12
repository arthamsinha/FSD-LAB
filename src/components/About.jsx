import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! My name is <strong>Artham Sinha</strong> and I enjoy creating things that live on the internet. 
              My interest in web development and software engineering started when I was exploring how technology could solve 
              real-world problems efficiently.
            </p>
            <p>
              Currently, I am pursuing my B.Tech in Computer Science at MIT World Peace University (2023–2027) 
              with a CGPA of 7.93. I've had the privilege of deeply studying subjects like Operating Systems, 
              DBMS, Cloud Computing, and DevOps.
            </p>
            <p>
              I am highly interested in the intersection of AI/ML, having already participated and won hackathons 
              by building AI-based platforms. My main goal is to build accessible, inclusive, and highly scalable solutions.
            </p>
            <div className="stats-box">
              <div className="stat">
                <h3>Location</h3>
                <p>Pune, Maharashtra, India</p>
              </div>
              <div className="stat">
                <h3>Interest</h3>
                <p>Cloud, AI/ML, DevOps</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                AS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
