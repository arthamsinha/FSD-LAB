import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text animate">
          <p className="greeting">Hi there, I am</p>
          <h1 className="name">Artham Sinha.</h1>
          <h2 className="title">I build things for the web and beyond.</h2>
          <p className="description">
            I'm an enthusiastic Computer Science student focused on solving real-world problems. 
            Passionate about UI/UX, full-stack dev, cloud computing, and AI/ML.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn">Check out my work</a>
            <a href="#about" className="btn btn-outline">More about me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
