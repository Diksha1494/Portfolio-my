import { lazy, Suspense, useLayoutEffect, useRef } from "react";
import { portfolioData } from "../data/portfolioData";
import { gsap } from "../gsapConfig";
import SectionTitle from "./SectionTitle";

const AboutScene = lazy(() => import("./AboutScene"));

const About = () => {
  const sectionRef = useRef(null);
  const revealRefs = useRef([]);

  revealRefs.current = [];

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(revealRefs.current, {
        y: 42,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });
    }, sectionRef);

    return () => animationContext.revert();
  }, []);

  const collectRevealRef = (element) => {
    if (element) {
      revealRefs.current.push(element);
    }
  };

  return (
    <section id="about" ref={sectionRef} className="section-shell">
      <SectionTitle
        eyebrow="About"
        title="Strong fundamentals, steady execution, and curiosity for building."
      />
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div
          ref={collectRevealRef}
          className="glass-panel relative min-h-[380px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_28%)]" />
          <Suspense
            fallback={<div className="h-full w-full bg-gradient-to-br from-cyan-400/10 to-emerald-300/10" />}
          >
            <AboutScene />
          </Suspense>
        </div>
        <div className="space-y-5">
          {portfolioData.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              ref={collectRevealRef}
              className="rounded-[26px] border border-white/8 bg-white/[0.03] px-5 py-5 text-base leading-relaxed text-slate-300 backdrop-blur-xl md:text-lg"
            >
              {paragraph}
            </p>
          ))}
          <div ref={collectRevealRef} className="grid gap-3 sm:grid-cols-3">
            {portfolioData.about.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.85),rgba(15,23,42,0.55))] px-4 py-5 text-center shadow-[0_15px_40px_rgba(2,6,23,0.25)]"
              >
                <p className="font-display text-3xl font-semibold text-cyan-100">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
