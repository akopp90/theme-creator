import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { initialThemes } from "../../lib/themes";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Color from "../Color/Color";
import { uid } from "uid";
import ColorForm from "../ColorForm/ColorForm";
import "./ThemeManager.css";
import ThemePreview from "../ThemePreview/ThemePreview";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CssPreview from "../CssPreview/CssPreview";

function ThemeManager() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  const [addColor, setAddColor] = useState(false);
  const [addThemeName, setAddThemeName] = useState(false);
  const [themePrev, setThemePrev] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [cssPrev, setCssPrev] = useState(false);

  const [activeTheme, setActiveTheme] = useLocalStorageState("activeTheme", {
    defaultValue: initialThemes[0].id,
  });

  const addTheme = (newTheme) => {
    setThemes([...themes, newTheme]);
  };

  function handleAddColor(data) {
    const newColor = { id: uid(), ...data }; // Create a new color with a unique ID
    setThemes(
      themes.map((theme) =>
        theme.id === activeTheme
          ? { ...theme, colors: [...theme.colors, newColor] } // Add the new color to the active theme
          : theme
      )
    );
  }

  function handleDeleteColor(id) {
    if (activeTheme === initialThemes[0]) return;
    setThemes(
      themes.map((theme) =>
        theme.id === activeTheme
          ? {
              ...theme,
              colors: theme.colors.filter((color) => color.id !== id),
            } // Filter out the deleted color
          : theme
      )
    );
  }

  function handleEditColor(id, data) {
    if (activeTheme === initialThemes[0]) return;
    setThemes(
      themes.map((theme) =>
        theme.id === activeTheme
          ? {
              ...theme,
              colors: theme.colors.map(
                (color) => (color.id === id ? { ...color, ...data } : color) // Update the color if IDs match
              ),
            }
          : theme
      )
    );
  }
  function handleToggleGridView() {
    setGridView(!gridView);
    if (gridView) {
      for (
        let i = 0;
        i < document.getElementsByClassName("color-card").length;
        i++
      ) {
        document
          .getElementsByClassName("color-card")
          [i].classList.remove("grid-view");
        document
          .getElementsByClassName("color-card")
          [i].classList.add("list-view");
      }
    } else {
      for (
        let i = 0;
        i < document.getElementsByClassName("color-card").length;
        i++
      ) {
        document
          .getElementsByClassName("color-card")
          [i].classList.add("grid-view");
        document
          .getElementsByClassName("color-card")
          [i].classList.remove("list-view");
      }
    }
  }

  const deleteTheme = (id) => {
    if (id === initialThemes[0].id) return;
    setThemes(themes.filter((theme) => theme.id !== id));
    if (activeTheme === id) setActiveTheme(initialThemes[0].id);
  };

  const currentTheme = themes.find((theme) => theme.id === activeTheme);

  return (
    <>
      <Header />
      <div className="container wrapper">
        <div className="theme-manager-container">
          <h1>Theme Creator</h1>

          <div className="theme-manager">
            <ThemeSwitcher
              themes={themes}
              activeTheme={activeTheme}
              setActiveTheme={setActiveTheme}
            />
            <button
              onClick={() => {
                addThemeName ? setAddThemeName(false) : setAddThemeName(true);
              }}
            >
              Add Theme
            </button>
            {addThemeName && (
              <form
                className="add-theme-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  addTheme({
                    id: uid(),
                    name: e.target.elements.name.value,
                    colors: [],
                  });
                  setAddThemeName(false);
                }}
              >
                <label>Theme Name:</label>
                <input type="text" name="name" />
                <button className="add-button">Add</button>
              </form>
            )}
            {currentTheme.id !== initialThemes[0].id && (
              <button onClick={() => deleteTheme(currentTheme.id)}>
                Delete Theme
              </button>
            )}
          </div>
          <div>
            {currentTheme && (
              <div className="theme-details">
                {/* Theme editing UI */}
                <h2>{currentTheme.name}</h2>
                <div className="theme-button-wrapper">
                  <button
                    onClick={() => {
                      addColor ? setAddColor(false) : setAddColor(true);
                    }}
                  >
                    Add Color
                  </button>
                  <button
                    onClick={() => {
                      themePrev ? setThemePrev(false) : setThemePrev(true);
                    }}
                  >
                    Preview
                  </button>
                  <button
                    className="material-icons"
                    onClick={() => {
                      cssPrev ? setCssPrev(false) : setCssPrev(true);
                    }}
                  >
                    code
                  </button>
                  <button
                    className="material-icons list-grid-toggle"
                    onClick={handleToggleGridView}
                  >
                    {!gridView && (
                      <span className="material-icons" id="list-grid-toggle">
                        grid_view
                      </span>
                    )}
                    {gridView && (
                      <span className="material-icons" id="list-grid-toggle">
                        list
                      </span>
                    )}
                  </button>
                </div>
                {cssPrev && <CssPreview theme={currentTheme} />}
                {themePrev && <CssPreview theme={currentTheme} />}
                {addColor && (
                  <ColorForm
                    onAddColor={handleAddColor}
                    color={{
                      role: "Color name",
                      hex: "#ffffff",
                      contrastText: "#000000",
                    }}
                  />
                )}
                <div className="colors">
                  {currentTheme.colors.map((color) => (
                    <Color
                      key={color.id}
                      color={color}
                      onAddColor={handleAddColor}
                      onEditColor={handleEditColor}
                      onDeleteColor={handleDeleteColor}
                      activeTheme={activeTheme}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ThemeManager;
