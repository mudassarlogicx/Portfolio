import { useRef } from "react";
import { motion } from "framer-motion";
import "./EducationSection.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }
  })
};

const wordVariant = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  visible: {
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeSlide = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── Data ─────────────────────────────────────────────────────
const education = {
  degree: "BSCS",
  full: "Bachelor of Science in Computer Science",
  institution: "Government College University Faisalabad",
  short: "GCUF",
  duration: "2020 — 2024",
  cgpa: "3.48",
  cgpaOf: "4.00",
  tags: ["Computer Science", "Software Engineering", "Data Structures", "OOP", "Algorithms"],
};

const certifications = [
  {
    title: "Social Media Management",
    duration_label: "6-Month Course",
    year: "2020",
    institution: "Hogwarts Academy Institute",
    location: "Rawalpindi",
    tags: ["Content Strategy", "Meta Ads", "Campaign Management", "Analytics"],
  },
];

export default function EducationSection() {
  const sectionRef = useRef(null);
  const cgpaPercent = Math.round((parseFloat(education.cgpa) / parseFloat(education.cgpaOf)) * 100);

  return (
    <section className="edu-section" ref={sectionRef}>

      {/* ── Giant heading (no eyebrow) ── */}
      <div className="edu-heading-section">
        <div className="edu-heading-big">
          <motion.span
            className="edu-heading-word"
            variants={wordVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Always
          </motion.span>
          <motion.span
            className="edu-heading-word edu-heading-word--outline"
            variants={wordVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.12 }}
          >
            Learning
          </motion.span>
        </div>
      </div>

      {/* ══════════════ EDUCATION ══════════════ */}
      <div className="edu-block">
        <motion.div
          className="edu-sub-heading-row"
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className="edu-sub-eyebrow">Education</span>
          <span className="edu-sub-line" />
        </motion.div>

        <motion.div
          className="edu-degree-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          {/* Left accent stripe */}
          <div className="edu-degree-stripe" />

          {/* Left: badge + info */}
          <div className="edu-degree-left">
            <div className="edu-degree-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10L12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
              </svg>
            </div>
            <div className="edu-degree-abbr-block">
              <span className="edu-degree-abbr">{education.degree}</span>
              <span className="edu-duration-pill">{education.duration}</span>
            </div>
          </div>

          {/* Middle: degree info */}
          <div className="edu-degree-middle">
            <h3 className="edu-degree-full">{education.full}</h3>
            <div className="edu-institution-row">
              <span className="edu-institution">{education.institution}</span>
              <span className="edu-short-badge">{education.short}</span>
            </div>
            <div className="edu-tags-row">
              {education.tags.map((t, i) => (
                <motion.span
                  key={t}
                  className="edu-tag edu-tag--degree"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.06, y: -2 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right: CGPA */}
          <div className="edu-degree-right">
            <div className="edu-cgpa-ring-wrap">
              <svg viewBox="0 0 100 100" width="88" height="88" className="edu-cgpa-ring">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
                <motion.circle
                  cx="50" cy="50" r="42" fill="none"
                  stroke="url(#cgpaGradient)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 42}
                  initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - cgpaPercent / 100) }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FACC15" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="edu-cgpa-center">
                <span className="edu-cgpa-num">{education.cgpa}</span>
                <span className="edu-cgpa-of">/{education.cgpaOf}</span>
              </div>
            </div>
            <span className="edu-cgpa-label">CGPA</span>
          </div>
        </motion.div>
      </div>

      {/* ══════════════ CERTIFICATIONS ══════════════ */}
      <div className="edu-block">
        <motion.div
          className="edu-sub-heading-row"
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className="edu-sub-eyebrow">Certifications</span>
          <span className="edu-sub-line" />
        </motion.div>

        <div className="edu-cert-list">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="edu-cert-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Rotating badge */}
              <div className="edu-cert-seal-wrap">
                <motion.svg
                  viewBox="0 0 80 80" width="64" height="64" fill="none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="40" cy="40" r="36" stroke="rgba(250, 204, 21, 0.84)" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <circle cx="40" cy="40" r="28" stroke="rgba(250, 204, 21, 0.65)" strokeWidth="1"/>
                </motion.svg>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="edu-cert-seal-icon">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>

              {/* Middle: cert info */}
              <div className="edu-cert-middle">
                <div className="edu-cert-title-row">
                  <h3 className="edu-cert-title">{cert.title}</h3>
                  <span className="edu-duration-pill edu-duration-pill--cert">{cert.year}</span>
                </div>
                <span className="edu-cert-duration-label">{cert.duration_label}</span>

                <div className="edu-cert-inst-row">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span className="edu-cert-inst-name">{cert.institution}</span>
                  <span className="edu-cert-dot">•</span>
                  <span className="edu-cert-location">{cert.location}</span>
                </div>
              </div>

              {/* Right: tags */}
              <div className="edu-tags-row edu-tags-row--cert">
                {cert.tags.map((t, ti) => (
                  <motion.span
                    key={t}
                    className="edu-tag edu-tag--cert"
                    custom={ti}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.06, y: -2 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}