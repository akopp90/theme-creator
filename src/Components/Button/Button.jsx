import "./Button.css";

const Button = () => {
  return (
    <button
      className="cta-button"
      onClick={() => (window.location.href = "/theme-manager")}
    >
      Get Started!
    </button>
  );
};

export default Button;
