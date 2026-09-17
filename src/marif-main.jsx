import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./theme.css";
import MarifPage from "./MarifPage";

createRoot(document.getElementById("root")).render(
  <StrictMode><MarifPage /></StrictMode>,
);
