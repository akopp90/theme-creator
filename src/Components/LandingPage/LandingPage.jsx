import React from "react";
import { Palette, Wand2, Droplet, Share2, ChevronRight } from "lucide-react";
import Button from "../Button/Button";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page-container">
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
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Create Stunning Color Themes in Seconds
            </h1>
            <p className="hero-description">
              Effortlessly design beautiful color palettes for your projects.
              Our intuitive tool helps you craft harmonious color schemes with
              ease.
            </p>
            <div className="hero-buttons">
              <Button className="button primary-button">Get Started</Button>
              <a href="#how-it-works">
                <button className="button secondary-button">Learn More</button>
              </a>
            </div>
          </div>
        </section>
        <section id="features" className="features-section">
          <div className="section-content">
            <h2 className="section-title">Powerful Features</h2>
            <div className="features-grid">
              {[
                {
                  icon: Wand2,
                  title: "Smart Color Suggestions",
                  description:
                    "Get intelligent color recommendations based on color theory and design principles.",
                },
                {
                  icon: Droplet,
                  title: "Real-time Preview",
                  description:
                    "See your color choices come to life instantly with our live preview feature.",
                },
                {
                  icon: Share2,
                  title: "Easy Export & Sharing",
                  description:
                    "Export your themes in various formats and share them with your team effortlessly.",
                },
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <feature.icon className="feature-icon" />
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="how-it-works-section">
          <div className="section-content">
            <h2 className="section-title">How It Works</h2>
            <div className="steps-grid">
              {[
                {
                  step: 1,
                  title: "Choose Base Color",
                  description:
                    "Start by selecting your primary color to set the foundation of your theme.",
                },
                {
                  step: 2,
                  title: "Adjust Palette",
                  description:
                    "Fine-tune your color scheme with our intuitive adjustment tools.",
                },
                {
                  step: 3,
                  title: "Export & Use",
                  description:
                    "Download your theme in various formats or copy the code to use in your projects.",
                },
              ].map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-number">{step.step}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Create Your Perfect Color Theme?
            </h2>
            <p className="cta-description">
              Join thousands of designers and developers who are creating
              stunning color schemes with ThemeCreator.
            </p>
            <Button
              className="button secondary-button"
              onClick={() => (window.location.href = "/theme-manager")}
            >
              Get Started
            </Button>
          </div>
        </section>
      </main>
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
    </div>
  );
}
