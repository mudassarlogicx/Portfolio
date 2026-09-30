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
            <div className="dev-arrow-controls" aria-label="Project navigation">
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
            <span className="dev-meta-note">Explore the build. Try the live demo.</span>
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