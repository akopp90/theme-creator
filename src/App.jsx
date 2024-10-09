import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(color) {
    setColors([{ id: uid(), ...color }, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <div>
        <ColorForm onSubmitColor={handleAddColor} />
      </div>

      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
