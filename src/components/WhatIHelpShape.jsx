import { useRef, useState } from "react";
import useGsapScrollTrigger from "../lib/useGsapScrollTrigger";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  LayoutGrid,
  Palette,
  Megaphone,
  Clapperboard,
  Atom,
  Rocket,
  Code2,
  Video,
  Scissors,
  PenTool,
} from "lucide-react";
import "./WhatIHelpShape.css";

const CARDS = [
  {
    title: "Web Applications",
    icon: Globe,
    theme: "navy",
    desc: "Fast, scalable web apps built on clean architecture: from admin dashboards to real-time systems that update instantly across every session.",
    tags: ["React JS", "Real-time Data", "REST APIs", "Data Handling"],
  },
  {
    title: "Mobile Applications",
    icon: Smartphone,
    theme: "yellow",
    desc: "Cross-platform apps that feel native on iOS and Android from a single codebase, built for real-world use, not just demos.",
    tags: ["React Native", "Expo", "Offline Support", "Cross-Platform"],
  },
  {
    title: "E-Commerce Websites",
    icon: ShoppingCart,
    theme: "navy",
    desc: "Online stores built to convert: from product catalogs and secure checkout to a fast, mobile-friendly shopping experience.",
    tags: ["Shopify", "Product Catalogs", "Payments", "Performance"],
  },
  {
    title: "Static Websites",
    icon: LayoutGrid,
    theme: "yellow",
    desc: "Lightweight, fast-loading sites for portfolios, landing pages, and small businesses, built to load instantly and rank well.",
    tags: ["WordPress", "Landing Pages", "SEO Basics", "Fast Load"],
  },
  {
    title: "Digital Design",
    icon: Palette,
    theme: "navy",
    desc: "Scroll-stopping social content and graphics designed to match your brand: consistent, polished, and built to grab attention.",
    tags: ["Social Creatives", "Brand Consistency", "Posters & Banners"],
  },
  {
    title: "Social Media Presence",
    icon: Megaphone,
    theme: "yellow",
    desc: "Growing your brand online with targeted campaigns and consistent content that bring in real engagement and leads.",
    tags: ["Meta Campaigns", "Audience Growth", "Content Planning"],
  },
  {
    title: "Video Editing",
    icon: Clapperboard,
    theme: "navy",
    desc: "Polished, engaging edits for reels, cinematic trailers, and promotional content, built to hold attention and drive action.",
    tags: ["Reels & Shorts", "Trailer Editing", "Color Grading"],
  },
];
const TOOLS = [
  { name: "React", Icon: Atom },
  { name: "React Native", Icon: Smartphone },
  { name: "Expo", Icon: Rocket },
  { name: "VS Code", Icon: Code2 },
  { name: "Canva", Icon: Palette },
  { name: "Adobe Premiere Pro", Icon: Video },
  { name: "CapCut", Icon: Scissors },
  { name: "Adobe Illustrator", Icon: PenTool },
];

export default function WhatIHelpShape() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const introRef = useRef(null);
  const deckWrapRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGsapScrollTrigger(
    sectionRef,
    (gsap, ScrollTrigger) => {
      const intro = introRef.current;
      const deckWrap = deckWrapRef.current;
      const cards = cardRefs.current;
      const last = cards.length - 1;

      // Entrance Animations
      const headingEls = intro.querySelectorAll(".wis-eyebrow, .wis-heading, .wis-sub");
      const toolsLabel = intro.querySelector(".wis-tools-label");
      const toolEls = intro.querySelectorAll(".wis-tool");

      gsap.set(headingEls, { opacity: 0, y: 46, filter: "blur(10px)" });
      gsap.set(toolsLabel, { opacity: 0, y: 16 });
      gsap.set(toolEls, { opacity: 0, y: 22, scale: 0.6 });
      gsap.set(deckWrap, { opacity: 0, y: 90, rotateX: -35, scale: 0.9 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
        .to(headingEls, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power4.out", stagger: 0.12 })
        .to(toolsLabel, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.45")
        .to(toolEls, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(2.2)", stagger: 0.045 }, "-=0.35")
        .to(deckWrap, { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1.3, ease: "power4.out" }, "-=1");

      const mm = gsap.matchMedia();

      // ══════════════════════════════════════════════════
      // DESKTOP: TILTED ENTRANCE & FAST SCROLL SNAP
      // ══════════════════════════════════════════════════
      mm.add("(min-width: 901px)", () => {
        cards.forEach((card, i) => {
          gsap.set(card, {
            y: i === 0 ? 0 : 260,
            rotateX: i === 0 ? 0 : -22,
            rotateZ: i === 0 ? 0 : i % 2 === 0 ? 6 : -6, // Card dynamic sideways tilt angle
            scale: i === 0 ? 1 : 0.88,
            opacity: i === 0 ? 1 : 0,
            zIndex: i + 1,
            transformOrigin: "bottom center",
          });
        });

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            // Shorter scroll distance (35% viewport per card instead of 95%)
            end: () => "+=" + Math.round(window.innerHeight * last * 0.35),
            pin: true,
            pinSpacing: true,
            scrub: 0.4, // Responsive and snappy scrub
            anticipatePin: 1,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
            snap: {
              snapTo: "labels",
              duration: { min: 0.2, max: 0.4 }, // Quick auto-complete duration
              delay: 0.02, // Instant snap response on scroll nudge
              ease: "power2.out",
            },
            onUpdate: (self) => {
              const idx = Math.min(last, Math.round(self.progress * last));
              setActiveIndex((prev) => (prev === idx ? prev : idx));
            },
          },
        });

        for (let k = 0; k < last; k++) {
          tl.addLabel(`step-${k}`)
            // Pichla card thoda peechay sink aur slightly tilt hoga
            .to(
              cards[k],
              { scale: 0.88, opacity: 0.3, y: -15, rotateX: 10, rotateZ: k % 2 === 0 ? -4 : 4, duration: 1, ease: "power2.inOut" },
              `step-${k}`
            )
            // Naya card tilted angle se float hota hua aa kar bilkul flat 0deg ho jayega
            .to(
              cards[k + 1],
              { y: 0, rotateX: 0, rotateZ: 0, scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
              `step-${k}`
            );
        }

        tl.addLabel("end");
      });

      // ══════════════════════════════════════════════════
      // MOBILE
      // ══════════════════════════════════════════════════
      mm.add("(max-width: 900px)", () => {
        cards.forEach((card) => {
          gsap.set(card, { y: 60, opacity: 0 });
          gsap.to(card, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          });
        });
      });

      return () => mm.revert();
    },
    []
  );

  return (
    <section className="wis-section" ref={sectionRef} id="services">
      <div className="wis-grid" ref={gridRef}>
        <div className="wis-left" ref={introRef}>
          <div>
            <span className="wis-eyebrow">Services</span>
            <h2 className="wis-heading">
              What I Help You
              <br />
              to <span className="wis-heading-accent">Shape</span>...
            </h2>
            <p className="wis-sub">
              From code to content — everything you need to build and grow your brand online.
            </p>
          </div>

          <div className="wis-tools">
            <span className="wis-tools-label">Tools That I Use</span>
            <div className="wis-tools-row">
              {TOOLS.map(({ name, Icon }) => (
                <div className="wis-tool" key={name} title={name} aria-label={name}>
                  <Icon size={15} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wis-deck-wrap" ref={deckWrapRef}>
          <div className="wis-deck">
            {CARDS.map((c, i) => {
              const CardIcon = c.icon;
              return (
                <div
                  className={`wis-card wis-card--${c.theme}`}
                  key={c.title}
                  ref={(el) => (cardRefs.current[i] = el)}
                >
                  <span className="wis-card-index">{String(i + 1).padStart(2, "0")}</span>
                  <div className="wis-card-icon">
                    <CardIcon size={18} />
                  </div>
                  <h3 className="wis-card-title">{c.title}</h3>
                  <p className="wis-card-desc">{c.desc}</p>
                  <div className="wis-card-tags">
                    {c.tags.map((tag) => (
                      <span className="wis-card-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="wis-deck-progress">
            {CARDS.map((_, i) => (
              <span
                key={i}
                className={`wis-deck-dot${i === activeIndex ? " is-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}