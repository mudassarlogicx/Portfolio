// ─────────────────────────────────────────────────────────────
//  useGsapScrollTrigger.js  —  Custom React hook
//
//  Handles GSAP + ScrollTrigger registration, execution,
//  and cleanup so components don't leak listeners.
//
//  Usage:
//    const containerRef = useRef(null);
//    useGsapScrollTrigger(containerRef, (gsap, ScrollTrigger) => {
//      // your GSAP timeline / ScrollTrigger logic here
//      // return a cleanup function if needed
//    }, [dependencies]);
// ─────────────────────────────────────────────────────────────

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * @param {React.RefObject} containerRef  - ref on the wrapper element
 * @param {Function}        callback      - receives (gsap, ScrollTrigger)
 *                                          return a cleanup fn if needed
 * @param {Array}           deps          - useEffect dependency array
 */
const useGsapScrollTrigger = (containerRef, callback, deps = []) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cleanup = callback(gsap, ScrollTrigger);

      // Refresh ScrollTrigger after DOM settles (handles dynamic content)
      ScrollTrigger.refresh();

      return cleanup;
    }, containerRef);

    return () => {
      ctx.revert(); // kills all GSAP animations + ScrollTriggers in scope
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useGsapScrollTrigger;


// ─────────────────────────────────────────────────────────────
//  HORIZONTAL SCROLL-SCRUB PRESET
//  Ready-to-use factory for DevelopmentWork.jsx
//
//  Example:
//    createHorizontalScrub({
//      trigger: ".dev-cards-wrapper",
//      track:   ".dev-cards-track",
//      scrub:   1.2,
//    });
// ─────────────────────────────────────────────────────────────

export const createHorizontalScrub = ({
  trigger,
  track,
  scrub = 1.2,
  start = "top top",
  end,
  pinSpacing = true,
}) => {
  const trackEl = document.querySelector(track);
  if (!trackEl) return;

  // Calculate how far to scroll horizontally
  const scrollWidth = trackEl.scrollWidth - trackEl.offsetWidth;

  const calculatedEnd =
    end ?? `+=${trackEl.scrollWidth - window.innerWidth}px`;

  gsap.to(track, {
    x: -scrollWidth,
    ease: "none",
    scrollTrigger: {
      trigger,
      start,
      end: calculatedEnd,
      scrub,
      pin: true,
      pinSpacing,
      anticipatePin: 1,
    },
  });
};