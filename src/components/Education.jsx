import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineBuildingLibrary, HiOutlineSparkles } from "react-icons/hi2";
import { portfolioData } from "../data/portfolioData";
import { gsap } from "../gsapConfig";
import SectionTitle from "./SectionTitle";

const accentStyles = {
  cyan: {
    icon: "text-cyan-100 bg-cyan-300/10 border-cyan-200/25 shadow-[0_0_42px_rgba(34,211,238,0.18)]",
    glow: "from-cyan-300/26 via-sky-300/12 to-transparent",
    text: "text-cyan-100",
    bar: "from-cyan-300 via-sky-300 to-fuchsia-300",
  },
  violet: {
    icon: "text-violet-100 bg-violet-300/10 border-violet-200/25 shadow-[0_0_42px_rgba(196,181,253,0.18)]",
    glow: "from-violet-300/26 via-fuchsia-300/12 to-transparent",
    text: "text-violet-100",
    bar: "from-violet-300 via-fuchsia-300 to-cyan-300",
  },
  emerald: {
    icon: "text-emerald-100 bg-emerald-300/10 border-emerald-200/25 shadow-[0_0_42px_rgba(110,231,183,0.16)]",
    glow: "from-emerald-300/24 via-cyan-300/12 to-transparent",
    text: "text-emerald-100",
    bar: "from-emerald-300 via-cyan-300 to-sky-300",
  },
};

const icons = [HiOutlineAcademicCap, HiOutlineBuildingLibrary, HiOutlineSparkles];

const AnimatedNumber = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrame;
    const start = performance.now();
    const duration = 1200;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  const formattedValue = value < 10 ? displayValue.toFixed(2) : Math.round(displayValue);

  return (
    <>
      {formattedValue}
      {suffix}
    </>
  );
};

const EducationIllustration = ({ index, accent }) => {
  const styles = accentStyles[accent];

  return (
    <div className="relative h-24 overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/42 md:h-28">
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.glow}`} />
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.22)]" />
      <div className="absolute left-1/2 top-[42%] h-9 w-20 -translate-x-1/2 rounded-t-full border border-white/15 bg-white/[0.08]" />
      <div className="absolute left-1/2 top-[50%] h-8 w-24 -translate-x-1/2 rounded-[14px] border border-white/15 bg-slate-950/55" />
      <div className="absolute left-1/2 top-[34%] h-1.5 w-20 -translate-x-1/2 rotate-[-8deg] rounded-full bg-white/75 shadow-[0_0_22px_rgba(255,255,255,0.22)]" />
      <span className="education-orb absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-cyan-200" style={{ animationDelay: `${index * 0.2}s` }} />
      <span className="education-orb absolute right-[20%] top-[68%] h-1.5 w-1.5 rounded-full bg-fuchsia-200" style={{ animationDelay: `${index * 0.35}s` }} />
      <span className="absolute bottom-3 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/18" />
    </div>
  );
};

const EducationCard = ({ item, index, collectRef }) => {
  const Icon = icons[index % icons.length];
  const styles = accentStyles[item.accent] ?? accentStyles.cyan;

  return (
    <motion.article
      ref={collectRef}
      className={`education-card group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#08111f]/82 p-4 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 md:p-5 ${
        item.featured ? "lg:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.58, delay: index * 0.08 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-80 transition-opacity duration-500 group-hover:opacity-100`} />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/5 blur-3xl" />
      <div className="relative grid gap-4 md:grid-cols-[1fr_170px] md:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${styles.icon}`}>
              <Icon size={22} />
            </div>
            <div>
              <p className={`text-[11px] uppercase tracking-[0.24em] ${styles.text}`}>{item.level}</p>
              <h3 className="mt-1.5 font-display text-xl leading-tight text-white md:text-2xl">
                {item.institute}
              </h3>
            </div>
          </div>

          <div className="mt-4 grid gap-2">
            <p className="text-sm leading-relaxed text-slate-200">{item.degree}</p>
            {item.branch ? <p className="text-sm leading-relaxed text-slate-300">{item.branch}</p> : null}
            <div className="flex flex-wrap gap-2">
              {item.university ? (
                <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-slate-200">
                  University: {item.university}
                </span>
              ) : null}
              {item.board ? (
                <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-slate-200">
                  Board: {item.board}
                </span>
              ) : null}
              <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-slate-200">
                {item.duration ?? item.year}
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/18 p-3">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.metricLabel}</p>
                <p className={`mt-1 font-display text-3xl font-semibold ${styles.text}`}>
                  <AnimatedNumber value={item.metricValue} suffix={item.metricSuffix} />
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                Milestone {index + 1}
              </span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.span
                className={`block h-full rounded-full bg-gradient-to-r ${styles.bar} shadow-[0_0_18px_rgba(103,232,249,0.35)]`}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.12, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
        <EducationIllustration index={index} accent={item.accent} />
      </div>
    </motion.article>
  );
};

const Education = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  cardRefs.current = [];

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(".education-timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          end: "bottom 45%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => animationContext.revert();
  }, []);

  const collectRef = (element) => {
    if (element) {
      cardRefs.current.push(element);
    }
  };

  return (
    <section id="education" ref={sectionRef} className="section-shell education-shell">
      <SectionTitle
        eyebrow="Education"
        title="An academic journey shaped by engineering depth and consistent performance."
        subtitle="Three milestones connected through a futuristic academic timeline."
      />

      <div className="relative">
        <div className="education-timeline-line absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300 via-fuchsia-300 to-emerald-300 shadow-[0_0_28px_rgba(103,232,249,0.52)] lg:block" />
        <div className="grid gap-4 lg:pl-14">
          {portfolioData.resume.educationMilestones.map((item, index) => (
            <div key={`${item.level}-${item.institute}`} className="relative">
              <span className="absolute -left-[3.15rem] top-6 hidden h-4 w-4 rounded-full border border-white/20 bg-cyan-200 shadow-[0_0_28px_rgba(103,232,249,0.8)] lg:block" />
              <EducationCard item={item} index={index} collectRef={collectRef} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
