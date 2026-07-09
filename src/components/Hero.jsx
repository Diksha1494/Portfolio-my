import { lazy, Suspense, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowDownTray, HiArrowTrendingUp, HiMiniArrowUpRight, HiSparkles } from "react-icons/hi2";
import { portfolioData } from "../data/portfolioData";
import { gsap } from "../gsapConfig";

const HeroScene = lazy(() => import("./HeroScene"));

const Hero = () => {
  const sectionRef = useRef(null);
  const nameLettersRef = useRef([]);
  const titleLettersRef = useRef([]);
  const subtitleRef = useRef(null);
  const actionsRef = useRef(null);
  const heroCardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  nameLettersRef.current = [];
  titleLettersRef.current = [];

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.set([...nameLettersRef.current, ...titleLettersRef.current], {
        opacity: 0,
        y: 72,
        rotateX: -35,
        transformOrigin: "0% 100%",
      });

      gsap.set([subtitleRef.current, actionsRef.current], {
        opacity: 0,
        y: 20,
      });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .to(nameLettersRef.current, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.045,
        })
        .to(
          titleLettersRef.current,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.03,
          },
          "-=0.65",
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.3",
        )
        .to(
          actionsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.35",
        );
    }, sectionRef);

    return () => animationContext.revert();
  }, []);

  const handleAnchorClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;

    if (window.lenis) {
      window.lenis.scrollTo(section, { offset: -78, duration: 1.1 });
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderAnimatedText = (text, refList) =>
    text.split("").map((character, index) => (
      <span
        key={`${character}-${index}`}
        ref={(element) => {
          if (element) {
            refList.current.push(element);
          }
        }}
        className="inline-block"
      >
        {character === " " ? "\u00A0" : character}
      </span>
    ));

  const handlePointerMove = (event) => {
    if (!heroCardRef.current || window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const bounds = heroCardRef.current.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;

    setTiltStyle({
      transform: `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const resetPointer = () => {
    setTiltStyle({
      transform: "perspective(1400px) rotateX(0deg) rotateY(0deg)",
    });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-36"
    >
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a0a] sm:bg-gradient-to-r sm:from-black/35 sm:via-transparent sm:to-black/25" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div
          ref={heroCardRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          className="relative"
          style={tiltStyle}
        >
          <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl lg:block" />
          <div className="absolute right-10 top-0 hidden h-28 w-28 rounded-full bg-fuchsia-500/20 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.92),rgba(15,23,42,0.62))] p-6 shadow-[0_25px_120px_rgba(8,15,35,0.55)] backdrop-blur-2xl md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_28%)]" />
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-cyan-100/90"
              >
                <HiSparkles className="text-cyan-300" />
                Portfolio 2026
              </motion.div>
              <p className="mb-3 text-sm uppercase tracking-[0.42em] text-slate-500">
                Hi, I&apos;m
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
                {renderAnimatedText(portfolioData.profile.name, nameLettersRef)}
              </h1>
              <h2 className="mt-3 font-display text-lg text-slate-200 sm:text-xl md:text-3xl">
                {renderAnimatedText(portfolioData.profile.title, titleLettersRef)}
              </h2>
              <p
                ref={subtitleRef}
                className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
              >
                {portfolioData.profile.subtitle}
              </p>
              <div ref={actionsRef} className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  onClick={(event) => handleAnchorClick(event, "projects")}
                  className="hero-action-primary group rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] text-slate-950"
                >
                  <span className="flex items-center gap-2">
                    View Projects
                    <HiMiniArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
                <a
                  href={portfolioData.profile.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-action-secondary rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] text-cyan-100"
                >
                  <span className="flex items-center gap-2">
                    <HiArrowDownTray />
                    Download Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="grid gap-4"
        >
          <div className="glass-panel overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-3 md:p-4">
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src={portfolioData.profile.image}
                alt={portfolioData.profile.name}
                className="h-[420px] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Profile</p>
                <p className="mt-2 font-display text-2xl text-white">{portfolioData.profile.name}</p>
                <p className="mt-1 text-sm text-slate-300">{portfolioData.profile.title}</p>
              </div>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 md:p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Snapshot</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {portfolioData.about.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                  <p className="mt-3 font-display text-2xl text-cyan-100">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-[30px] border border-white/10 bg-white/[0.045] p-6 md:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/8 text-cyan-200">
                <HiArrowTrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Focused On</p>
                <p className="mt-1 text-sm text-slate-200">
                  Full stack engineering, clean UI systems, and recruiter-ready product presentation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
