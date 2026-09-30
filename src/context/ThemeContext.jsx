import { createContext, useContext, useState, useEffect, useMemo } from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "portfolio-theme";

// ── Figure out the theme to start with ──────────────────────
// Priority: saved preference → system preference → dark (default)
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved;

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to <html> as data-theme="dark" | "light"
  // and keep it in sync with localStorage.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({ theme, isDark: theme === "dark", toggleTheme, setTheme }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// ── Hook ─────────────────────────────────────────────────────
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside a <ThemeProvider>");
  }
  return ctx;
}