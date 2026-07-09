import { useEffect } from "react";
import Lenis from "lenis";

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
    });

    let rafId = 0;

    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      if (window.lenis === lenis) {
        window.lenis = undefined;
      }
    };
  }, []);
};

export default useLenisScroll;
