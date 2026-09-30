// ─────────────────────────────────────────────
//  motionVariants.js  —  Shared Framer Motion
//  variants used across all Work sub-sections
// ─────────────────────────────────────────────

// ── Fade + slide-up (section entrance) ────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Stagger container (wraps a list of children) ─
export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// ── Individual stagger child (used inside staggerContainer) ─
export const staggerChild = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Fast stagger child (Graphic Design grid — snappy feel) ─
export const staggerChildFast = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Card hover (Development + Social Media cards) ─
export const cardHover = {
  rest: { y: 0, boxShadow: "0 0 0px rgba(250,204,21,0)" },
  hover: {
    y: -8,
    boxShadow: "0 20px 60px rgba(250,204,21,0.12)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ── Subtle scale hover (Graphic Design grid images) ─
export const imageHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
};

// ── Overlay fade-in (Graphic Design name overlay) ─
export const overlayFade = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.25 } },
};

// ── Modal entrance (Lightbox / Video modal) ──────
export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const modalContent = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.93,
    transition: { duration: 0.2 },
  },
};

// ── Pill hover (deliverable tags) ────────────────
export const pillHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

// ── Section heading reveal (left-aligned slide) ──
export const headingReveal = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Video thumbnail: fade + scale entrance ───────
export const videoCardEntrance = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Play icon pulse (Video thumbnails hover) ─────
export const playPulse = {
  rest: { scale: 1, opacity: 0.85 },
  hover: {
    scale: 1.15,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};