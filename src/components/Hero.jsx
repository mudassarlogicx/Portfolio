import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Megaphone, Database, Video, PenTool } from "lucide-react";
import { FaReact, FaJs, FaCss3Alt, FaWhatsapp, FaWordpress, FaShopify } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiExpo, SiTypescript } from "react-icons/si";
import portrait from "../assets/hero-portrait.png";
import "./Hero.css";

const stack = [
  { label: "React",                   icon: FaReact       },
  { label: "React Native",            icon: SiExpo        },
  { label: "Database",                icon: Database      },
  { label: "Firebase",                icon: SiFirebase    },
  { label: "JavaScript",              icon: FaJs          },
  { label: "TypeScript",              icon: SiTypescript  },
  { label: "Tailwind CSS",            icon: SiTailwindcss },
  { label: "CSS3",                    icon: FaCss3Alt     },
  { label: "WordPress",               icon: FaWordpress   },
  { label: "Shopify",                 icon: FaShopify     },
  { label: "Social Media Management", icon: Megaphone     },
  { label: "Graphic Designing",       icon: PenTool       },
  { label: "Video Editing",           icon: Video         },
];
const ease = [0.16, 1, 0.3, 1];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const heroRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springX = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  const portraitX      = useTransform(springX, [-1, 1], [-16, 16]);
  const portraitY      = useTransform(springY, [-1, 1], [-14, 14]);
  const portraitRotate = useTransform(springX, [-1, 1], [-3,   3]);
  const glowX          = useTransform(springX, [-1, 1], [-30, 30]);
  const glowY          = useTransform(springY, [-1, 1], [-30, 30]);

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width  - 0.5) * 2);
    my.set(((e.clientY - rect.top)  / rect.height - 0.5) * 2);
  };

  const handleMouseLeave = () => { mx.set(0); my.set(0); };

  return (
    <section
      id="top"
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero__inner">
        <div className="hero__content">

          {/* Eyebrow — upar */}
          

          {/* Title — I design, manage and build. (build yellow) */}
          <h1 className="hero__title">
            {[
              { word: "I",       accent: false },
              { word: "design,", accent: false },
              { word: "manage",  accent: false },
              { word: "and",     accent: false },
              { word: "build.",  accent: true  },
            ].map(({ word, accent }, i) => (
              <motion.span
                key={i}
                className={`hero__title-word${accent ? " hero__title-word--accent" : ""}`}
                initial={{ opacity: 0, y: 60, skewY: 5 }}
                animate={{ opacity: 1, y: 0,  skewY: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
              >
                {word}
              </motion.span>
              
            ))}
          </h1>
              <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
          >
            Full-Stack Developer & Digital Creative · Pakistan
          </motion.span>
          {/* Subtitle */}
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease, delay: 0.65 }}
          >
            Full-stack development meets social media growth and design 
            — websites, mobile apps, and brand content, all handled by 
            one person, start to finish.
          </motion.p>

          {/* Buttons — sirf Book a call */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.8 }}
          >
            
             <a href="https://wa.me/923307262646"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta-primary"
            >
              <FaWhatsapp size={20} />
              Book a call
            </a>
          </motion.div>

          {/* Stack pills */}
          <motion.div
            className="hero__stack"
            initial="hidden"
            animate="visible"
            variants={{
              hidden:  {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 1 } },
            }}
          >
            {stack.map(({ label, icon: Icon }) => (
              <motion.span
                key={label}
                className="hero__stack-pill"
                variants={{
                  hidden:  { opacity: 0, scale: 0.7, y: 12 },
                  visible: {
                    opacity: 1, scale: 1, y: 0,
                    transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
                  },
                }}
              >
                <Icon size={15} />
                {label}
              </motion.span>
            ))}
          </motion.div>

        </div>

        {/* Portrait */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          <motion.div className="hero__glow" style={{ x: glowX, y: glowY }} />
          <motion.img
            src={portrait}
            alt="Portrait of Mudassar Qureshi"
            className="hero__portrait"
            style={{ x: portraitX, y: portraitY, rotate: portraitRotate }}
          />
        </motion.div>
      </div>
    </section>
  );
}