import "./CopyButton.css";
const CopyButton = ({ color }) => {
  return (
    <button
      className="color-card-copy"
      onClick={() => navigator.clipboard.writeText(color)}
    >
      Copy
    </button>
  );
};

export default CopyButton;
