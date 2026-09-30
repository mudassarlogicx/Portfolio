import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import useGsapScrollTrigger from "../lib/useGsapScrollTrigger";

import DevsByteLogoImg from "../assets/devsbyte-logo.png";
import SkinEstheticsLogoImg from "../assets/skinesthetics-logo.png";
import AspireLogoImg from "../assets/aspire-logo.png";
import "./SocialMediaWork.css";

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const wordVariant = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  visible: {
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function BlueCard() {
  return (
    <div className="sm-card sm-card--blue">
      <span className="sm-card-label">The Organization I'm Currently With</span>
      <div className="sm-card-header">
        <div className="sm-logo-wrap sm-logo-wrap--blue">
          <img src={DevsByteLogoImg} alt="DevsByte" className="sm-logo" draggable={false} />
        </div>
        <div className="sm-name-block">
          <h3 className="sm-card-name">DevsByte</h3>
          <p className="sm-card-sub">Tech & Digital Agency</p>
        </div>
        <span className="sm-card-index">01</span>
      </div>
      <div className="sm-divider sm-divider--blue" />
      <p className="sm-card-desc">Currently working with DevsByte across the full digital spectrum, including website development, social media content creation, and managing Meta ad campaigns to grow the brand online.</p>
      <div className="sm-tags-row">
        {["Website Development", "Content Creation", "Meta Campaigns", "Brand Growth"].map(s => (
          <span key={s} className="sm-tag sm-tag--blue">{s}</span>
        ))}
      </div>
      <div className="sm-links-row">
        <a href="https://www.facebook.com/share/1BweZf88yN/" target="_blank" rel="noopener noreferrer" className="sm-link-btn sm-link-btn--blue"><FacebookIcon /> Facebook</a>
        <a href="https://www.instagram.com/devsbyte?stkn=MXVhaDJ0OTgxejR6NA==" target="_blank" rel="noopener noreferrer" className="sm-link-btn sm-link-btn--blue"><InstagramIcon /> Instagram</a>
        <a href="https://www.devsbyte.com" target="_blank" rel="noopener noreferrer" className="sm-link-btn sm-link-btn--blue"><GlobeIcon /> Website</a>
      </div>
    </div>
  );
}

function YellowCard() {
  return (
    <div className="sm-card sm-card--yellow">
      <span className="sm-card-label">The Clinic I Worked For</span>
      <div className="sm-card-header">
        <div className="sm-logo-wrap sm-logo-wrap--yellow">
          <img src={SkinEstheticsLogoImg} alt="Skin Esthetics" className="sm-logo" draggable={false} />
        </div>
        <div className="sm-name-block">
          <h3 className="sm-card-name">Skin Esthetics</h3>
          <p className="sm-card-sub">Skin & Laser Clinic</p>
        </div>
        <span className="sm-card-index">02</span>
      </div>
      <div className="sm-divider sm-divider--yellow" />
      <p className="sm-card-desc">Handled complete digital presence for a skin and laser clinic, from building their content identity to running targeted Meta campaigns that drove real client inquiries.</p>
      <div className="sm-tags-row">
        {["Content Creation", "Meta Campaigns", "Visual Strategy", "Brand Consistency"].map(s => (
          <span key={s} className="sm-tag sm-tag--yellow">{s}</span>
        ))}
      </div>
      <div className="sm-links-row">
        <a href="https://www.instagram.com/skinestheticsclinic.gk?stkn=NXRwNWFjc2lxeGIz" target="_blank" rel="noopener noreferrer" className="sm-link-btn sm-link-btn--yellow"><InstagramIcon /> Instagram</a>
        <a href="https://www.facebook.com/share/17tqZrJewy/" target="_blank" rel="noopener noreferrer" className="sm-link-btn sm-link-btn--yellow"><FacebookIcon /> Facebook</a>
      </div>
    </div>
  );
}

function RedCard() {
  return (
    <div className="sm-card sm-card--red">
      <span className="sm-card-label">The Organization I Worked For</span>
      <div className="sm-card-header">
        <div className="sm-logo-wrap sm-logo-wrap--red">
          <img src={AspireLogoImg} alt="Aspire Group of Colleges" className="sm-logo" draggable={false} />
        </div>
        <div className="sm-name-block">
          <h3 className="sm-card-name">Aspire Group of Colleges</h3>
          <p className="sm-card-sub">Educational Institute</p>
        </div>
        <span className="sm-card-index">03</span>
      </div>
      <div className="sm-divider sm-divider--red" />
      <p className="sm-card-desc">Managed the complete social media presence for the Aspire College Gujar Khan campus, from planning content and designing graphics to running the institute's Facebook page to grow consistent audience engagement.</p>
      <div className="sm-tags-row">
        {["Content Creation", "Graphic Design", "Facebook Management", "Brand Consistency"].map(s => (
          <span key={s} className="sm-tag sm-tag--red">{s}</span>
        ))}
      </div>
      <div className="sm-links-row">
        <a href="https://www.facebook.com/share/1DWgLASJUp/" target="_blank" rel="noopener noreferrer" className="sm-link-btn sm-link-btn--red"><FacebookIcon /> Facebook</a>
        <a href="https://aspirecolleges.edu.pk/" target="_blank" rel="noopener noreferrer" className="sm-link-btn sm-link-btn--red"><GlobeIcon /> Website</a>
      </div>
    </div>
  );
}

export default function SocialMediaWork() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null); 
  const rowRef = useRef(null);
  const blueWrapRef = useRef(null);
  const yellowWrapRef = useRef(null);
  const redWrapRef = useRef(null); 

  useGsapScrollTrigger(
    sectionRef,
    (gsap, ScrollTrigger) => {
      const track = trackRef.current;
      const row = rowRef.current;
      const blueWrap = blueWrapRef.current;
      const yellowWrap = yellowWrapRef.current;
      const redWrap = redWrapRef.current;

      const mm = gsap.matchMedia();

      // 🖥️ LARGE SCREEN — UNTOUCHED
      mm.add("(min-width: 901px)", () => {
        gsap.set(blueWrap, { x: -180, scale: 0.8, rotate: -6, opacity: 0, transformOrigin: "50% 50%" });
        gsap.set(yellowWrap, { x: 160, scale: 0.8, rotate: 6, opacity: 0, transformOrigin: "50% 50%" });
        gsap.set(redWrap, { x: 160, scale: 0.8, rotate: 6, opacity: 0, transformOrigin: "50% 50%" });

        gsap.to(blueWrap, {
          x: 0, scale: 1, rotate: 0, opacity: 1, ease: "none",
          scrollTrigger: { trigger: track, start: "top bottom", end: "top 20%", scrub: 0.3, invalidateOnRefresh: true },
        });

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: track, 
            start: "top 20%",
            end: () => "+=" + Math.round(window.innerHeight * 3.2), 
            pin: true, 
            pinSpacing: true, 
            scrub: 0.4, 
            anticipatePin: 1, 
            invalidateOnRefresh: true,
          },
        });

        tl.addLabel("start")
          .to({}, { duration: 0.3 }) 
          .addLabel("yellowIn")
          .to(yellowWrap, { x: 0, scale: 1, rotate: 0, opacity: 1, duration: 1 }, "yellowIn")
          .to({}, { duration: 0.6 }) 
          .addLabel("slideRow")
          .to(row, { x: () => -(blueWrap.offsetWidth + 24), duration: 1 }, "slideRow")
          .to(blueWrap, { opacity: 0, x: -60, duration: 0.8 }, "slideRow")
          .addLabel("redIn", "-=0.3")
          .to(redWrap, { x: 0, scale: 1, rotate: 0, opacity: 1, duration: 1 }, "redIn")
          .to({}, { duration: 1 }) 
          .addLabel("end");
      });

      // 📱 MOBILE & TABLET — SCROLL SWIPE ANIMATION
      mm.add("(max-width: 900px)", () => {
        // Set initial positions off-screen with rotation (autoAlpha prevents hidden card clicks)
        gsap.set(blueWrap, { x: -80, scale: 0.85, rotate: -4, autoAlpha: 0 });
        gsap.set(yellowWrap, { x: 80, scale: 0.85, rotate: 4, autoAlpha: 0 });
        gsap.set(redWrap, { x: 80, scale: 0.85, rotate: 4, autoAlpha: 0 });

        // First card enters exactly like desktop
        gsap.to(blueWrap, {
          x: 0, scale: 1, rotate: 0, autoAlpha: 1, ease: "none",
          scrollTrigger: { trigger: track, start: "top bottom", end: "top 25%", scrub: 0.5 }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: track,
            start: "top 20%",
            end: () => "+=" + Math.round(window.innerHeight * 2.5), // Gives plenty of scroll space
            pin: true,
            pinSpacing: true,
            scrub: 0.5,
            invalidateOnRefresh: true,
          }
        });

        tl.addLabel("start")
          .to({}, { duration: 0.3 }) 
          
          // Swipe to Card 2
          .addLabel("yellowIn")
          .to(blueWrap, { x: -80, scale: 0.85, rotate: -4, autoAlpha: 0, duration: 1 }, "yellowIn")
          .to(yellowWrap, { x: 0, scale: 1, rotate: 0, autoAlpha: 1, duration: 1 }, "yellowIn")
          
          .to({}, { duration: 0.6 }) // Pause so user can read Yellow Card
          
          // Swipe to Card 3
          .addLabel("redIn")
          .to(yellowWrap, { x: -80, scale: 0.85, rotate: -4, autoAlpha: 0, duration: 1 }, "redIn")
          .to(redWrap, { x: 0, scale: 1, rotate: 0, autoAlpha: 1, duration: 1 }, "redIn")
          
          .to({}, { duration: 0.6 }); // Pause before unpinning
      });

      return () => mm.revert();
    },
    []
  );

  const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "100%"]);

  return (
    <section className="sm-section" ref={sectionRef}>
      <div className="sm-heading-section">
        <div className="sm-heading-big">
          <div className="sm-heading-eyebrow-wrap">
            <motion.span className="sm-eyebrow" variants={wordVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
              Social Media
            </motion.span>
            <motion.span className="exp-line-grow" style={{ width: lineWidth }}></motion.span>
          </div>
          <motion.span className="sm-heading-word" variants={wordVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
            Brands
          </motion.span>
          <motion.span className="sm-heading-word sm-heading-word--outline" variants={wordVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.12 }}>
            I've Worked With
          </motion.span>
        </div>
      </div>

      <div className="sm-cards-track" ref={trackRef}>
        <div className="sm-cards-row" ref={rowRef}>
          <div className="sm-card-wrap" ref={blueWrapRef}>
            <BlueCard />
          </div>
          <div className="sm-card-wrap" ref={yellowWrapRef}>
            <YellowCard />
          </div>
          <div className="sm-card-wrap" ref={redWrapRef}>
            <RedCard />
          </div>
        </div>
      </div>
    </section>
  );
}