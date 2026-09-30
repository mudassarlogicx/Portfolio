import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.span
        className="theme-toggle-knob"
        animate={{ x: isDark ? 0 : 22 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
      >
        {isDark ? <Moon size={13} /> : <Sun size={13} />}
      </motion.span>
    </button>
  );
}