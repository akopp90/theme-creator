import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        © 2024{" "}
        <a
          href="https://kopp-andreas.de"
          target="_blank"
          className="footer-link"
        >
          Andreas Kopp
        </a>
        . All rights reserved.
      </p>
      <nav className="footer-nav">
        <a href="#" className="footer-link">
          Terms of Service
        </a>
        <a href="#" className="footer-link">
          Privacy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
