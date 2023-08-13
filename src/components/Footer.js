import React from 'react';
import './Footer.css'; // Import your CSS file for the footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/SahilSinghTomar">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sahil-singh-tomar-83b22b22a/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
