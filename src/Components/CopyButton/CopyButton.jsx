import "./CopyButton.css";
import { useEffect, useState } from "react";

const CopyButton = ({ color }) => {
  const [buttonText, setButtonText] = useState(true);

  useEffect(() => {
    // Reset button text whenever color changes
    setButtonText(true);
    if (buttonText === false) {
      document
        .getElementsByClassName("color-card-copy-button")[0]
        .classList.add("hidden");
    } else {
      document
        .getElementsByClassName("color-card-copy-button")[0]
        .classList.remove("hidden");
    }
  }, [color]);

  function handleClick() {
    navigator.clipboard.writeText(color);
    setButtonText(false);

    // Reset the button text after 3 seconds
    setTimeout(() => {
      setButtonText(true);
    }, 3000);
  }

  return (
    <>
      <span className="color-card-copy-button-text">
        {buttonText ? "" : "Copied to clipboard"}
      </span>
      <button
        className="color-card-copy-button material-icons"
        onClick={handleClick}
      >
        <span className="material-icons">copy_all</span>
      </button>
    </>
  );
};

export default CopyButton;
