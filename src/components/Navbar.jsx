import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../context/ThemeToggle";
import "./Navbar.css";

// ── Robust Scroll helper with Header Offset ──────────────────
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const navOffset = 80; // Navbar height offset
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// ── id map: label → section id ────────────────────────────
const links = [
  { label: "Work", targetId: "development" },
  { label: "Services", targetId: "services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Mobile navigation handler with slight delay to prevent animation cancellation
  const handleMobileClick = (targetId) => {
    setOpen(false);
    setTimeout(() => {
      scrollToId(targetId);
    }, 120);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__brand-mark">MQ</span>
          <span className="navbar__brand-name">Mudassar Qureshi</span>
        </a>

        {/* Desktop links */}
        <nav className="navbar__links">
          {links.map((link) => (
            <button
              key={link.targetId}
              className="navbar__link"
              onClick={() => scrollToId(link.targetId)}
            >
              {link.label}
            </button>
          ))}
          <button
            className="navbar__cta"
            onClick={() => scrollToId("contact")}
          >
            Contact
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile hamburger */}
        <div className="navbar__mobile-actions">
          <ThemeToggle />
          <button
            className={`navbar__burger ${open ? "navbar__burger--open" : ""}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="navbar__dropdown"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((link) => (
              <button
                key={link.targetId}
                className="navbar__dropdown-link"
                onClick={() => handleMobileClick(link.targetId)}
              >
                {link.label}
              </button>
            ))}
            <button
              className="navbar__dropdown-cta"
              onClick={() => handleMobileClick("contact")}
            >
              Contact
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}