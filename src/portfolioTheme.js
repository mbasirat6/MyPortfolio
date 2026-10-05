const storageKey = "portfolio-theme";

export const themes = [
  { id: "grey", label: "Grey", description: "Charcoal & silver" },
  { id: "pearl", label: "Pearl Light", description: "Soft silver & daylight" },
];

function isTheme(value) {
  return themes.some((theme) => theme.id === value);
}

export function initializeTheme() {
  let theme = "grey";
  try {
    const saved = localStorage.getItem(storageKey);
    if (isTheme(saved)) theme = saved;
  } catch { /* Keep the default when storage is unavailable. */ }
  document.documentElement.dataset.theme = theme;
}

export function selectTheme(theme) {
  if (!isTheme(theme)) return;
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(storageKey, theme);
  } catch { /* Theme switching still works without storage. */ }
}
