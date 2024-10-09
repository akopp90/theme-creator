import "./CopyButton.css";
import { useEffect, useState } from "react";

const CopyButton = ({ color }) => {
  const [buttonText, setButtonText] = useState("Copy");

  useEffect(() => {
    // Reset button text whenever color changes
    setButtonText("Copy");
  }, [color]);

  function handleClick() {
    navigator.clipboard.writeText(color);
    setButtonText("Copied to clipboard!");

    // Reset the button text after 3 seconds
    setTimeout(() => {
      setButtonText("Copy");
    }, 3000);
  }

  return (
    <button className="color-card-copy-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default CopyButton;
