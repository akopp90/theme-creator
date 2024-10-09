import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { useState } from "react";

export default function ColorForm({ onSubmitColor }) {
  const [role, setRole] = useState("Color name");

  function handleSubmit(event) {
    event.preventDefault();
    const response = new FormData(event.target);
    const data = Object.fromEntries(response);

    onSubmitColor(data);
  }
  return (
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
        <ColorInput id="hex" defaultValue={onSubmitColor.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput
          id="contrastText"
          defaultValue={onSubmitColor.contrastText}
        />
      </label>
      <br />
      <button>ADD COLOR</button>
    </form>
  );
}
