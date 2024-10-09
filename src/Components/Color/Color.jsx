import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import CopyButton from "../CopyButton/CopyButton";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editColor, setEditColor] = useState(false);

  const handleDelete = (id) => {
    if (!confirmDelete) {
      setConfirmDelete(true);
    } else {
      onDeleteColor(id);
    }
  };
  const handleEdit = (id, data) => {
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
      <h3 className="color-card-headline">
        {color.hex}
        <CopyButton color={color.hex} />
      </h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <div className="color-card-buttons">
        {confirmDelete && (
          <>
            <span className="color-card-highlight">Really want to delete?</span>
            <button
              type="button"
              className="color-card-button-cancel"
              onClick={() => setConfirmDelete(false)}
            >
              Cancel
            </button>
          </>
        )}
        {editColor && (
          <>
            <ColorForm color={color} onEditColor={handleEdit} />
            <button
              type="button"
              className="color-card-button-cancel"
              onClick={() => setEditColor(false)}
            >
              Cancel
            </button>
          </>
        )}

        <button
          className="color-card-button"
          onClick={() => handleDelete(color.id)}
        >
          Delete
        </button>
        <button
          className="color-card-button"
          onClick={() => setEditColor(true)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
