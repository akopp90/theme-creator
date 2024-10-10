import React from "react";
import { Palette, Wand2, Droplet, Share2, ChevronRight } from "lucide-react";
import Button from "../Button/Button";

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#3490dc",
  color: "white",
};

const secondaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: "white",
  color: "#3490dc",
  border: "2px solid #3490dc",
};

export default function LandingPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header
        style={{
          padding: "0 20px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#3490dc",
          }}
        >
          <Palette style={{ height: "24px", width: "24px" }} />
          <span
            style={{ marginLeft: "8px", fontSize: "24px", fontWeight: "bold" }}
          >
            ThemeCreator
          </span>
        </a>
        <nav style={{ marginLeft: "auto", display: "flex", gap: "24px" }}>
          <a
            href="#features"
            style={{
              fontSize: "14px",
              textDecoration: "none",
              color: "#4a5568",
            }}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            style={{
              fontSize: "14px",
              textDecoration: "none",
              color: "#4a5568",
            }}
          >
            How It Works
          </a>

          <a
            href="https://theme-creator-nine.vercel.app/"
            style={{
              fontSize: "14px",
              textDecoration: "none",
              color: "#4a5568",
            }}
          >
            Get Started
          </a>
        </nav>
      </header>
      <main style={{ flex: 1 }}>
        <section
          style={{
            padding: "48px 0",
            background: "linear-gradient(to bottom, white, #f7fafc)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 20px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Create Stunning Color Themes in Seconds
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "#4a5568",
                maxWidth: "700px",
                margin: "0 auto 24px",
              }}
            >
              Effortlessly design beautiful color palettes for your projects.
              Our intuitive tool helps you craft harmonious color schemes with
              ease.
            </p>
            <div>
              <Button thistyle={primaryButtonStyle}>Get Started</Button>
              <a href="#how-it-works">
                <button style={{ ...secondaryButtonStyle, marginLeft: "16px" }}>
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </section>
        <section
          id="features"
          style={{ padding: "48px 0", backgroundColor: "white" }}
        >
          <div
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
          >
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "48px",
              }}
            >
              Powerful Features
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "40px",
              }}
            >
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
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "24px",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                >
                  <feature.icon
                    style={{
                      height: "48px",
                      width: "48px",
                      color: "#3490dc",
                      marginBottom: "16px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#4a5568" }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          style={{ padding: "48px 0", backgroundColor: "#f7fafc" }}
        >
          <div
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
          >
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "48px",
              }}
            >
              How It Works
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "40px",
              }}
            >
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
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "24px",
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#3490dc",
                      color: "white",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "16px",
                    }}
                  >
                    {step.step}
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#4a5568" }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          style={{
            padding: "48px 0",
            backgroundColor: "#3490dc",
            color: "white",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 20px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Ready to Create Your Perfect Color Theme?
            </h2>
            <p
              style={{
                fontSize: "18px",
                maxWidth: "600px",
                margin: "0 auto 24px",
                opacity: 0.8,
              }}
            >
              Join thousands of designers and developers who are creating
              stunning color schemes with ThemeCreator.
            </p>
            <Button
              thisStyle={secondaryButtonStyle}
              onClick={() => (window.location.href = "/theme-manager")}
            >
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <footer
        style={{
          padding: "24px",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <p style={{ fontSize: "12px", color: "#4a5568" }}>
          © 2024 ThemeCreator. All rights reserved.
        </p>
        <nav style={{ display: "flex", gap: "16px" }}>
          <a
            href="#"
            style={{
              fontSize: "12px",
              color: "#4a5568",
              textDecoration: "none",
            }}
          >
            Terms of Service
          </a>
          <a
            href="#"
            style={{
              fontSize: "12px",
              color: "#4a5568",
              textDecoration: "none",
            }}
          >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
