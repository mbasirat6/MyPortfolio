import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./theme.css";
import MarifPage from "./MarifPage";
import { HexagonBackground } from "./HexagonBackground.jsx";
import { initializeTheme } from "./portfolioTheme.js";

initializeTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode><HexagonBackground /><MarifPage /></StrictMode>,
);
