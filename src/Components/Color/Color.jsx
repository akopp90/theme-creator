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
  const [contrast, setContrast] = useState("");

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
      setContrast(data.contrast);
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
  };

  return (
    <div
      className="color-card grid-view"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <div className="color-card-content">
        <h3 className="color-card-headline">{color.hex}</h3>

        <div className="color-card-button-group">
          <CopyButton color={color.hex} />
          <button
            className="color-card-button button-delete material-icons"
            onClick={() => handleDelete(color.id)}
          >
            <span className="material-icons">delete</span>
          </button>
          <button
            className="color-card-button button-edit material-icons"
            onClick={(e) =>
              editColor
                ? (setEditColor(false),
                  e.target.classList.remove("edit-active"))
                : (setEditColor(true), e.target.classList.add("edit-active"))
            }
          >
            <span className="material-icons">edit</span>
          </button>
        </div>
      </div>
      <h4>{color.role}</h4>
      <p className="color-card-contrast">contrast: {color.contrastText}</p>
      <p className="color-card-contrast">contrast score: {contrast}</p>
      <p className={`color-card-${contrastData.toLowerCase()}`}>
        Overall Contrast Score: {contrastData}
      </p>

      {editColor && (
        <>
          <ColorForm color={color} onEditColor={handleEdit} />
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
            className="color-card-button-cancel-delete"
            onClick={() => setConfirmDelete(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
