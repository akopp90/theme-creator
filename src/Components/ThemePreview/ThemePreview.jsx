import "./ThemePreview.css";

const ThemePreview = ({ theme }) => {
  return (
    <div className="theme-preview">
      <h2>{theme.name}</h2> {/* Display theme name */}
      <div className="landing-preview">
        <div
          className="featured-color"
          style={{ backgroundColor: theme.colors[0].hex }}
        >
          <h3>{theme.colors[0].role}</h3>
        </div>
        <div className="color-container">
          {theme.colors.map((color) => (
            <div
              key={color.id}
              className="color-box"
              style={{ backgroundColor: color.hex }}
            >
              <p style={{ color: color.contrastText }}>{color.role}</p>
            </div>
          ))}
        </div>
        <div
          className="featured-color"
          style={{ backgroundColor: theme.colors[1].hex }}
        >
          <h3>{theme.colors[1].role}</h3>
        </div>
      </div>
    </div>
  );
};

export default ThemePreview;
