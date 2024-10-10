import "./CopyButton.css";
import { useEffect, useState } from "react";

const CopyButton = ({ color }) => {
  const [buttonText, setButtonText] = useState("copy_all");

  useEffect(() => {
    // Reset button text whenever color changes
    setButtonText("copy_all");
  }, [color]);

  function handleClick() {
    navigator.clipboard.writeText(color);
    setButtonText("Copied to clipboard!");

    // Reset the button text after 3 seconds
    setTimeout(() => {
      setButtonText("copy_all");
    }, 3000);
  }

  return (
    <button className="color-card-copy-button" onClick={handleClick}>
      <span className="material-icons">{buttonText}</span>
    </button>
  );
};

export default CopyButton;
