import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiElementor, SiExpo, SiFirebase, SiTailwindcss, SiWordpress } from "react-icons/si";
import OdoNovaImg from "../assets/odonova.png";
import RestoPOSImg from "../assets/restopos.png";
import DevsByteImg from "../assets/devsbyte.png";
import "./DevelopmentWork.css";

// Update project content and demo URLs here.
const projects = [
  {
    id: "odonova",
    title: "OdoNova",
    category: "Web + Mobile",
    summary: "Fuel, expenses and maintenance in one place, with mileage tracking built for partial refills.",
    highlights: ["Smart mileage", "Multi-vehicle", "Live sync"],
    challenge: "Partial fuel top-ups make conventional full-tank mileage calculations unreliable.",
    solution: "A deferred calculation carries partial refills into the next full-tank cycle to calculate KM/L and cost per KM.",
    features: [
      { label: "Dashboard", desc: "Fuel averages, quick actions and station comparisons." },
      { label: "Expense reports", desc: "Monthly and yearly running costs." },
      { label: "Vehicle garage", desc: "Separate odometer records for each vehicle." },
      { label: "Refill logic", desc: "Partial and full refills in one calculation." },
      { label: "Maintenance alerts", desc: "Reminders by distance or time." },
      { label: "Cloud sync", desc: "Records kept up to date across devices." },
    ],
    stack: [
      { icon: FaReact, label: "React Native" },
      { icon: SiExpo, label: "Expo" },
      { icon: FaReact, label: "React.js" },
      { icon: SiFirebase, label: "Firebase" },
      { icon: SiTailwindcss, label: "NativeWind" },
    ],
    image: OdoNovaImg,
    imageAlt: "OdoNova vehicle expense and mileage app preview",
    demoUrl: "https://odonova.netlify.app/",
    accentColor: "#38BDF8",
  },
  {
    id: "restopos",
    title: "RestoPOS",
    category: "Web App · Multi-role",
    summary: "From table to kitchen, keep orders moving with live updates and dedicated views for every role.",
    highlights: ["Live orders", "Kitchen display", "Role-based access"],
    challenge: "Paper tickets and staff hand-offs slow down orders during busy service hours.",
    solution: "Orders flow from waiter to kitchen in real time, with separate admin, chef and waiter views and no page reloads.",
    features: [
      { label: "Admin dashboard", desc: "Waiter activity and operational insights." },
      { label: "Tables & waiters", desc: "Table status, session timers and order alerts." },
      { label: "Kitchen display", desc: "Track pending, preparing and ready orders." },
      { label: "Role-based access", desc: "Separate admin, chef and waiter workflows." },
      { label: "Digital orders", desc: "Table-side entry through to kitchen fulfilment." },
      { label: "Menu management", desc: "Update items, prices and categories." },
    ],
    stack: [
      { icon: FaReact, label: "React.js" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
      { icon: SiFirebase, label: "Firebase" },
    ],
    image: RestoPOSImg,
    imageAlt: "RestoPOS restaurant order management app preview",
    demoUrl: "https://resturantordersystem.netlify.app/",
    accentColor: "#F97316",
  },
  {
    id: "devsbyte",
    title: "DevsByte",
    category: "Company Website",
    summary: "A fully customized website for a modern tech company, built with WordPress and Elementor to feel at home on every screen.",
    highlights: ["Custom design", "Fully responsive", "Modern UI/UX"],
    stack: [
      { icon: SiWordpress, label: "WordPress" },
      { icon: SiElementor, label: "Elementor" },
    ],
    image: DevsByteImg,
    imageAlt: "DevsByte website shown on a laptop, tablet and mobile phone",
    demoUrl: "https://devsbyte.com/",
    linkLabel: "View website",
    showDetails: false,
    accentColor: "#41CFA0",
  },
];

const ease = [0.22, 1, 0.36, 1];

function ArrowIcon({ direction = "right", external = false }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false"
      style={direction === "left" ? { transform: "rotate(180deg)" } : undefined}
    >
      {external ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}
    </svg>
  );
}

function ProjectCard({ project, index, reduceMotion, onSwipe }) {
  const [expanded, setExpanded] = useState(false);
  const touchStart = useRef(null);
  const detailsId = `development-${project.id}-details`;
  const hasDetails = project.showDetails !== false && Boolean(project.features?.length);
  const linkLabel = project.linkLabel || "Live demo";

  // Swipe only on the preview. Vertical page scrolling stays native.
  const handleTouchStart = (event) => {
    if (event.touches.length !== 1) {
      touchStart.current = null;
      return;
    }
    const { clientX, clientY } = event.touches[0];
    touchStart.current = { x: clientX, y: clientY };
  };
  const handleTouchEnd = (event) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || !event.changedTouches[0]) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      onSwipe(dx < 0 ? 1 : -1);
    }
  };

  return (
    <article className="dev-card" style={{ "--card-accent": project.accentColor }}>
      <div className="dev-card-main">
        <div
          className="dev-card-image-wrap"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => { touchStart.current = null; }}
        >
          <span className="dev-card-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <img src={project.image} alt={project.imageAlt} className="dev-card-image" decoding="async" draggable={false} />
          <span className="dev-preview-label" aria-hidden="true">Project preview</span>
          <span className="dev-swipe-hint" aria-hidden="true">Swipe to explore ↔</span>
        </div>

        <div className="dev-card-body">
          <header className="dev-card-header">
            <p className="dev-card-category">{project.category}</p>
            <h3 className="dev-card-title">{project.title}</h3>
            <p className="dev-card-summary">{project.summary}</p>
          </header>
          <ul className="dev-highlights" aria-label="Project highlights">
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <ul className="dev-stack-row" aria-label="Technologies used">
            {project.stack.map(({ icon: Icon, label }) => (
              <li className="dev-stack-pill" key={label}>
                <Icon aria-hidden="true" focusable="false" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <div className="dev-card-actions">
            <a
              className="dev-demo-link" href={project.demoUrl}
              target="_blank" rel="noopener noreferrer"
              aria-label={`View ${project.title} ${project.linkLabel ? "website" : "live demo"} (opens in a new tab)`}
            >
              <span>{linkLabel}</span><ArrowIcon external />
            </a>
            {hasDetails && <button
              className="dev-details-toggle" type="button"
              aria-expanded={expanded} aria-controls={detailsId}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? "Less detail" : "Project details"}
              <svg className="dev-details-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>}
          </div>
        </div>
      </div>

      {/* Secondary content stays in normal document flow on every screen. */}
      {hasDetails && <div id={detailsId}>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              className="dev-details-reveal" key="details"
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease }}
            >
              <div className="dev-details-content">
                <div className="dev-story-grid">
                  <div>
                    <h4 className="dev-detail-heading">The challenge</h4>
                    <p>{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="dev-detail-heading dev-detail-heading--accent">My approach</h4>
                    <p>{project.solution}</p>
                  </div>
                </div>
                <ul className="dev-feature-list" aria-label="All project features">
                  {project.features.map((feature, featureIndex) => (
                    <li className="dev-feature-row" key={feature.label}>
                      <span className="dev-feature-num" aria-hidden="true">{String(featureIndex + 1).padStart(2, "0")}</span>
                      <div><h4>{feature.label}</h4><p>{feature.desc}</p></div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>}
    </article>
  );
}

export default function DevelopmentWork() {
  const [{ current, direction }, setSelection] = useState({ current: 0, direction: 1 });
  const tabRefs = useRef([]);
  const reduceMotion = useReducedMotion();
  const project = projects[current];

  const selectProject = (index) => {
    setSelection((previous) => index === previous.current ? previous : {
      current: index,
      direction: index > previous.current ? 1 : -1,
    });
  };
  const stepProject = (step) => {
    setSelection((previous) => ({
      current: (previous.current + step + projects.length) % projects.length,
      direction: step,
    }));
  };
  const handleTabKeyDown = (event, index) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % projects.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + projects.length) % projects.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = projects.length - 1;
    else return;
    event.preventDefault();
    selectProject(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="dev-work" id="development" aria-labelledby="development-heading">
      <div className="dev-work-inner">
        <header className="dev-heading-section">
          <motion.p
            className="dev-eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease }}
          >Development · Selected work</motion.p>
          <motion.h2
            className="dev-heading-big" id="development-heading"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}
          >
            {["Latest", "Projects"].map((word) => (
              <span className="dev-heading-mask" key={word}>
                <motion.span
                  className="dev-heading-word"
                  variants={{
                    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : "105%" },
                    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.7, ease } },
                  }}
                >{word}</motion.span>
              </span>
            ))}
          </motion.h2>
          <p className="dev-heading-sub">Real problems. Thoughtful builds. Take a look inside.</p>
        </header>

        <motion.div
          className="dev-showcase"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease }}
        >
          <div className="dev-toolbar">
            <div className="dev-project-tabs" role="tablist" aria-label="Choose a project">
              {projects.map((item, index) => (
                <button
                  className={`dev-project-tab${index === current ? " is-active" : ""}`}
                  style={{ "--card-accent": item.accentColor }} key={item.id}
                  id={`development-tab-${item.id}`}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  type="button" role="tab" aria-selected={index === current}
                  aria-controls="development-project-panel" tabIndex={index === current ? 0 : -1}
                  onClick={() => selectProject(index)} onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span className="dev-tab-number" aria-hidden="true">0{index + 1}</span>{item.title}
                </button>
              ))}
            </div>
            <div className="dev-arrow-controls dev-arrow-controls--desktop" aria-label="Project navigation">
              <button className="dev-chevron" type="button" onClick={() => stepProject(-1)} aria-label="Previous project"><ArrowIcon direction="left" /></button>
              <button className="dev-chevron" type="button" onClick={() => stepProject(1)} aria-label="Next project"><ArrowIcon /></button>
            </div>
          </div>

          <div className="dev-card-viewport" id="development-project-panel" role="tabpanel" aria-labelledby={`development-tab-${project.id}`} tabIndex={0}>
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={project.id} custom={direction}
                variants={{
                  enter: (travel) => ({ opacity: 0, x: reduceMotion ? 0 : travel * 24 }),
                  center: { opacity: 1, x: 0 },
                  exit: (travel) => ({ opacity: 0, x: reduceMotion ? 0 : travel * -16 }),
                }}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: reduceMotion ? 0 : 0.22, ease }}
              >
                <ProjectCard project={project} index={current} reduceMotion={reduceMotion} onSwipe={stepProject} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="dev-meta-row">
            <span className="dev-meta-note">{project.linkLabel ? "Explore the design. Visit the website." : "Explore the build. Try the live demo."}</span>
            <div className="dev-arrow-controls dev-arrow-controls--mobile" aria-label="Project navigation">
              <button className="dev-chevron" type="button" onClick={() => stepProject(-1)} aria-label="Previous project"><ArrowIcon direction="left" /></button>
              <button className="dev-chevron" type="button" onClick={() => stepProject(1)} aria-label="Next project"><ArrowIcon /></button>
            </div>
            <p className="dev-counter" aria-live="polite" aria-atomic="true">
              <span className="dev-sr-only">{project.title}, project </span>
              <span style={{ color: project.accentColor }}>{String(current + 1).padStart(2, "0")}</span>
              <span aria-hidden="true"> / </span><span className="dev-sr-only"> of </span>
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
