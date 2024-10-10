import "./Color.css";
import { useState, useEffect } from "react";
import ColorForm from "../ColorForm/ColorForm";
import CopyButton from "../CopyButton/CopyButton";

export default function Color({
  color,
  onDeleteColor,
  onEditColor,
  activeTheme,
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editColor, setEditColor] = useState(false);
  const [contrastData, setContrastData] = useState("");

  useEffect(() => {
    async function fetchContrast() {
      //console.log(color.hex, color.contrastText);
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //console.log(response);
      const data = await response.json();
      //console.log(data.overall);
      setContrastData(data.overall);
    }
    fetchContrast();
  }, [color]);

  const handleDelete = (id) => {
    if (activeTheme === "t1") return;
    if (!confirmDelete) {
      setConfirmDelete(true);
    } else {
      onDeleteColor(id);
    }
  };
  const handleEdit = (id, data) => {
    if (activeTheme === "t1") return;
    onEditColor(id, data);
    console.log(data);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <div className="color-card-content">
        <h3 className="color-card-headline">{color.hex}</h3>
        <CopyButton color={color.hex} />
      </div>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <p className={`color-card-${contrastData.toLowerCase()}`}>
        Overall Contrast Score: {contrastData}
      </p>

      <div className="color-card-button-group">
        <button
          className="color-card-button button-delete"
          onClick={() => handleDelete(color.id)}
        >
          Delete
        </button>
        <button
          className="color-card-button button-edit"
          onClick={() => setEditColor(true)}
        >
          Edit
        </button>
      </div>
      {editColor && (
        <>
          <ColorForm color={color} onEditColor={handleEdit} />
          <button
            type="button"
            className="color-card-button-cancel button-cancel-edit"
            onClick={() => setEditColor(false)}
          >
            Cancel
          </button>
        </>
      )}
      {confirmDelete && (
        <div className="color-card-delete">
          <span className="color-card-highlight">Really want to delete?</span>
          <button
            type="button"
            className="color-card-button-ok"
            onClick={() => handleDelete(color.id)}
          >
            Yes
          </button>
          <button
            type="button"
            className="color-card-button-cancel"
            onClick={() => setConfirmDelete(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
