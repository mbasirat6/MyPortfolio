import { useEffect, useId, useRef, useState } from "react";
import { selectTheme, themes } from "./portfolioTheme";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "grey");
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const trigger = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    function dismiss(event) {
      if (!container.current?.contains(event.target)) setOpen(false);
    }
    function escape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("focusin", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("focusin", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <div className="theme-switcher" ref={container}>
      <button className="theme-trigger" type="button" ref={trigger}
        aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)}>
        <span className={`theme-swatch theme-swatch-${theme}`} aria-hidden="true" />
        Themes
        <span className="theme-chevron" aria-hidden="true">⌄</span>
      </button>
      <div id={panelId} className="theme-panel" hidden={!open} role="group" aria-label="Portfolio theme">
        <p className="theme-panel-label">Choose your atmosphere</p>
        {themes.map((option) => (
          <button key={option.id} type="button" className="theme-option" aria-pressed={theme === option.id}
            onClick={() => {
              selectTheme(option.id);
              setTheme(option.id);
              setOpen(false);
              trigger.current?.focus();
            }}>
            <span className={`theme-swatch theme-swatch-${option.id}`} aria-hidden="true" />
            <span><strong>{option.label}</strong><small>{option.description}</small></span>
            <span className="theme-check" aria-hidden="true">{theme === option.id ? "✓" : ""}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
