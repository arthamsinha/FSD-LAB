import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Artham Sinha</h3>
            <p>Building scalable digital experiences.</p>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <span>📍</span>
                Pune, Maharashtra, India
              </li>
              <li>
                <span>✉️</span>
                <a href="mailto:arthamsinha2004@gmail.com">arthamsinha2004@gmail.com</a>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:+919881853044">+91 9881853044</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Artham Sinha. All Rights Reserved.</p>
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
