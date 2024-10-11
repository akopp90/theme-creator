import React from "react";
import "./CssPreview.css";
import "../../assets/prism/prism.css";

const CssPreview = ({ theme }) => {
  const generateCssCode = () => {
    return `
:root {
  ${theme.colors.map((color) => `--${color.role}: ${color.hex};`).join("\n  ")}
}

body {
  background-color: var(--${theme.colors[0].role});
  color: var(--${theme.colors[1].role});
}

.button {
  background-color: var(--${theme.colors[2].role});
  color: var(--${theme.colors[3].role});
}

/* Add more CSS rules using your theme colors */
    `.trim();
  };

  return (
    <pre>
      <code className="language-css">{generateCssCode()}</code>
    </pre>
  );
};

export default CssPreview;
