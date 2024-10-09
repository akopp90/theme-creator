import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleClick = (id) => {
    if (!confirmDelete) {
      setConfirmDelete(true);
    } else {
      onDeleteColor(id);
    }
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <div className="color-card-buttons">
        {confirmDelete && (
          <>
            <span className="color-card-highlight">Really delete?</span>
            <button
              type="button"
              className="color-card-button"
              onClick={() => setConfirmDelete(false)}
            >
              Cancel
            </button>
          </>
        )}
        <button
          className="color-card-button"
          onClick={() => handleClick(color.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
