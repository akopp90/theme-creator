import { Palette } from "lucide-react";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <Palette className="logo-icon" />
        <span className="logo-text">ThemeCreator</span>
      </a>
      <nav className="nav">
        <a href="#features" className="nav-link">
          Features
        </a>
        <a href="#how-it-works" className="nav-link">
          How It Works
        </a>
        <a href="https://theme-creator-nine.vercel.app/" className="nav-link">
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Header;
