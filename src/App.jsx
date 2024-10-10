/* import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import useLocalStorageState from "use-local-storage-state";

import { uid } from "uid"; */
import "./App.css";

import ThemeManager from "./Components/ThemeManager/ThemeManager";

function App() {
  /* const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  }); */
  /* const color = { role: "Color name", hex: "#ffffff", contrastText: "#000000" };

  function handleAddColor(data) {
    setColors([{ id: uid(), ...data }, ...colors]);
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }
  function handleEditColor(id, data) {
    setColors(
      colors.map((color) =>
        color.id === id
          ? {
              ...color,
              role: data.role,
              hex: data.hex,
              contrastText: data.contrastText,
            }
          : color
      )
    );
  } */

  return (
    <main className="container">
      <div className="wrapper">
        <h1>Theme Creator</h1>
        <div>
          <ThemeManager />
        </div>
        {/* <div>
          <ColorForm onAddColor={handleAddColor} color={color} />
        </div>
        <div>
          {colors.map((color) => {
            return (
              <Color
                key={color.id}
                color={color}
                onAddColor={handleAddColor}
                onEditColor={handleEditColor}
                onDeleteColor={handleDeleteColor}
              />
            );
          })}
        </div> */}
      </div>
    </main>
  );
}

export default App;
