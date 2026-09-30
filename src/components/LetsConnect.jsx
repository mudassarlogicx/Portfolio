import { useRef } from "react";
import useGsapScrollTrigger from "../lib/useGsapScrollTrigger";
import "./LetsConnect.css";

// ── Icons ─────────────────────────────────────
const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C22 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.5-.15.14-.3.3-.13.58.17.29.76 1.26 1.64 2.04 1.13.99 2.08 1.3 2.37 1.44.29.15.46.13.63-.06.17-.19.71-.83.9-1.11.19-.29.38-.24.63-.14.25.1 1.6.75 1.87.89.27.14.46.2.53.32.07.12.07.68-.17 1.35z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4.3" />
    <circle cx="17.35" cy="6.65" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const AtIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M16 12v1.5a2.5 2.5 0 005 0V12a9 9 0 10-5.5 8.28" />
  </svg>
);

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function LetsConnect() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const menuRef = useRef(null);

  useGsapScrollTrigger(
    sectionRef,
    (gsap) => {
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" }
        }
      );

      const cols = gridRef.current.querySelectorAll(".lc-col");
      gsap.fromTo(cols,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" }
        }
      );

      const menuBtns = menuRef.current.querySelectorAll(".lc-menu-btn-yellow");
      gsap.fromTo(menuBtns,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.5)",
          scrollTrigger: { trigger: menuRef.current, start: "top 90%" }
        }
      );
    },
    []
  );

  return (
    <section className="lc-section" ref={sectionRef} id="contact">

      {/* Heading */}
      <div className="lc-heading-block" ref={headingRef}>
        <span className="lc-eyebrow">Let's Connect</span>
        <h2 className="lc-heading">
          Lets <span className="lc-heading-accent">build</span><br />
          incredible work together.
        </h2>
      </div>

      {/* Grid */}
      <div className="lc-grid" ref={gridRef}>

        {/* Email */}
        <div className="lc-col">
          <span className="lc-col-icon"><MailIcon /></span>
          <p className="lc-label">Email</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=officialmudassarqureshi@gmail.com&su=Let's Connect&body=Hi Mudassar, I came across your portfolio and would like to discuss..."
            target="_blank"
            rel="noopener noreferrer"
            className="lc-big-link"
          >
            <span className="lc-link-text">officialmudassarqureshi@gmail.com</span>
            <span className="lc-icon-wrap"><ArrowUpRight /></span>
          </a>
        </div>

        {/* WhatsApp — number hidden */}
        <div className="lc-col">
          <span className="lc-col-icon"><WhatsAppIcon /></span>
          <p className="lc-label">WhatsApp</p>
          <a
            href="https://wa.me/923307262646"
            target="_blank"
            rel="noopener noreferrer"
            className="lc-big-link"
          >
            <span className="lc-link-text">Message me</span>
            <span className="lc-icon-wrap"><ArrowUpRight /></span>
          </a>
        </div>

        {/* Socials */}
        <div className="lc-col">
          <span className="lc-col-icon"><AtIcon /></span>
          <p className="lc-label">Socials</p>
          <div className="lc-social-row">
            <a href="https://www.linkedin.com/in/mudassar-javed-qureshi-90b9a9414" target="_blank" rel="noopener noreferrer" className="lc-social-link">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/mudassar_qurexhi?igsi=YjJ0ejc2NnVqMndt" target="_blank" rel="noopener noreferrer" className="lc-social-link">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/share/19LuuB47BB/" target="_blank" rel="noopener noreferrer" className="lc-social-link">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Menu Buttons */}
      <div className="lc-menu-row" ref={menuRef}>
        <button type="button" className="lc-menu-btn-yellow" onClick={() => scrollToId("development")}>
          Work <ArrowUpRight />
        </button>
        <button type="button" className="lc-menu-btn-yellow" onClick={() => scrollToId("services")}>
          Services <ArrowUpRight />
        </button>
      </div>

      {/* Big Name */}
      <div className="lc-name-wrap">
        <h1 className="lc-name">MR. MUDASSAR</h1>
      </div>

    </section>
  );
}