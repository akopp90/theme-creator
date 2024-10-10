import "./Button.css";

const Button = ({ children, thisStyle }) => {
  console.log(thisStyle);
  return (
    <button
      onClick={() => (window.location.href = "/theme-manager")}
      style={{ thisStyle }}
      className="cta-button"
    >
      {children}
    </button>
  );
};

export default Button;
