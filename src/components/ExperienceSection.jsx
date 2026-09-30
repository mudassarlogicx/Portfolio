import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CursaLogoImg from "../assets/cursahealth-logo.png";
import { ExternalLink,  ChevronDown } from "lucide-react";
import "./ExperienceSection.css";

// ══════════════════════════════════════════════
// DATA — future mein bas yahan object add karo
// ══════════════════════════════════════════════
const experiences = [
  {
    id: "cursa",
    logo: CursaLogoImg,
    company: "Cursa Health",
    desc: "Healthcare-focused development team — building and maintaining digital platforms for associate medical practices and external client projects.",
    role: "Software Engineer",
    date: "May 2025 — Present",
    active: true,
    what: "Building cross-platform applications using React JS and React Native, and responsive websites in WordPress — for Cursa Health's associate doctors as well as broader client projects, integrated with custom backend systems.",
    tech: ["React JS", "React Native", "Angular", "Cross-Platform", "Web Apps", "Mobile Apps", "REST APIs", "UI/UX"],
    links: [
      { label: "Website",  href: "https://cursahealth.com/",                          icon: "globe"    },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/cursa-health/",    icon: "linkedin" },
    ],
  },
  // ── Future company example (uncomment karo jab add karna ho) ──
  // {
  //   id: "company2",
  //   logo: Company2Logo,
  //   company: "Company Name",
  //   desc: "Short company description.",
  //   role: "Your Role",
  //   date: "Month Year — Month Year",
  //   active: false,
  //   what: "What you did there.",
  //   tech: ["Tech1", "Tech2"],
  //   links: [],
  // },
];

// ── Icons ──────────────────────────────────────
const GlobeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }
  })
};

// ── Single Experience Card ─────────────────────
function ExpCard({ exp, index }) {
  const [open, setOpen] = useState(index === 0); // pehla card default open

  return (
    <motion.div
      className={`exp-card ${open ? "exp-card--open" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      custom={index * 0.15}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ── Card Header — click to toggle ── */}
      <button className="exp-card-header" onClick={() => setOpen(!open)}>
        <div className="exp-card-header-left">
          <div className="exp-logo-wrap">
            <img src={exp.logo} alt={exp.company} className="exp-logo" />
          </div>
          <div className="exp-card-meta">
            <div className="exp-card-top-row">
              <h3 className="exp-company-name">{exp.company}</h3>
              {exp.active && (
                <span className="exp-status-badge">
                  <span className="exp-status-dot" />
                  Currently Working
                </span>
              )}
            </div>
            <p className="exp-role-title">{exp.role}</p>
            <p className="exp-role-date">{exp.date}</p>
          </div>
        </div>
        <motion.div
          className="exp-chevron"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {/* ── Card Body — animated expand ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="exp-card-body"
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="exp-card-body-inner">
              {/* Divider */}
              <div className="exp-card-divider" />

              {/* Company desc */}
              <p className="exp-company-desc">{exp.desc}</p>

              {/* What I build */}
              <div className="exp-what">
                <span className="exp-what-label">KEY RESPONSIBILITIES</span>
                <p className="exp-what-text">{exp.what}</p>
              </div>

              {/* Tech pills */}
              <div className="exp-tech-row">
                {exp.tech.map((t, i) => (
                  <motion.span
                    key={t}
                    className="exp-tech-pill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    whileHover={{ scale: 1.06, y: -2 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              {exp.links.length > 0 && (
                <div className="exp-links">
                  {exp.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-link-btn"
                    >
                      {link.icon === "globe" ? <GlobeIcon /> : <LinkedInIcon />}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main Section ───────────────────────────────
export default function ExperienceSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headingY  = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section className="exp-section" ref={sectionRef}>

      {/* ── Top label ── */}
      <motion.div
        className="exp-top-label"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <span className="exp-eyebrow">Work Experience</span>
        <motion.div className="exp-line-grow" style={{ width: lineWidth }} />
      </motion.div>

      {/* ── Big heading ── */}
      <div className="exp-heading-wrap">
        <motion.h2
          className="exp-heading"
          style={{ y: headingY }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Software
        </motion.h2>
        <motion.h2
          className="exp-heading exp-heading--outline"
          style={{ y: headingY }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          Engineer
        </motion.h2>
      </div>

      {/* ── Experience Cards ── */}
      <div className="exp-cards-list">
        {experiences.map((exp, i) => (
          <ExpCard key={exp.id} exp={exp} index={i} />
        ))}
      </div>

    </section>
  );
}