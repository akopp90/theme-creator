import "./ThemeSwitcher.css";
function ThemeSwitcher({ themes, activeTheme, setActiveTheme }) {
  return (
    <select
      value={activeTheme}
      onChange={(e) => setActiveTheme(e.target.value)}
    >
      {themes.map((theme) => (
        <option key={theme.id} value={theme.id}>
          {theme.name}
        </option>
      ))}
    </select>
  );
}

export default ThemeSwitcher;
