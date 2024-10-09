import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { useState } from "react";

export default function ColorForm({ color, onAddColor, onEditColor }) {
  const [role, setRole] = useState("Color name");
  const buttonLabel = onAddColor ? "Add color" : "Edit Color";

  function handleSubmit(event) {
    event.preventDefault();
    const response = new FormData(event.target);
    const data = Object.fromEntries(response);

    if (onAddColor) {
      onAddColor(data);
    } else if (onEditColor) {
      onEditColor(color.id, data);
    }
  }
  return (
    <section className="color-form-container">
      <form className="color-form" onSubmit={handleSubmit}>
        <label htmlFor="role">
          Role
          <br />
          <input
            type="text"
            id="role"
            name="role"
            defaultValue={role}
            onChange={(event) => setRole(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="hex">
          Hex
          <br />
          <ColorInput id="hex" defaultValue={color.hex} />
        </label>
        <br />
        <label htmlFor="contrastText">
          Contrast Text
          <br />
          <ColorInput id="contrastText" defaultValue={color.contrastText} />
        </label>
        <br />
        <button>{buttonLabel}</button>
      </form>
    </section>
  );
}
