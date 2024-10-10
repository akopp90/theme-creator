import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import ThemeManager from "./Components/ThemeManager/ThemeManager";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/theme-manager" element={<ThemeManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
