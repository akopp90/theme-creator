import "./LandingPage.css";
import Button from "../Button/Button";

function LandingPage() {
  return (
    <div className="">
      <div className="landing-page">
        <h1>Welcome to Theme Manager</h1>
        <p>Create, customize, and manage your color themes with ease.</p>
        <ul>
          <li>Create multiple themes</li>
          <li>Edit and delete themes</li>
          <li>Switch between themes instantly</li>
        </ul>

        <Button
          className="cta-button"
          onClick={() => (window.location.href = "/theme-manager")}
          text="Get Started"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
