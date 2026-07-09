import { lazy, Suspense, useLayoutEffect, useRef } from "react";
import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiSpringboot } from "react-icons/si";
import { portfolioData } from "../data/portfolioData";
import { gsap } from "../gsapConfig";
import SectionTitle from "./SectionTitle";

const SkillsOrbitScene = lazy(() => import("./SkillsOrbitScene"));

const skillIcons = {
  Java: FaJava,
  "JavaScript": SiJavascript,
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "Spring Boot": SiSpringboot,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
};

const Skills = () => {
  const sectionRef = useRef(null);
  const barRefs = useRef([]);

  barRefs.current = [];

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.fromTo(
        barRefs.current,
        { width: "0%" },
        {
          width: (_, target) => `${target.dataset.level}%`,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 74%",
          },
        },
      );
    }, sectionRef);

    return () => animationContext.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-shell">
      <SectionTitle
        eyebrow="Skills"
        title="Technical toolkit shaped by full stack project work."
      />
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
            {portfolioData.skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card group rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                      {(() => {
                        const SkillIcon = skillIcons[skill.name];
                        return SkillIcon ? <SkillIcon size={20} /> : null;
                      })()}
                    </div>
                    <span className="text-sm uppercase tracking-[0.15em] text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs text-cyan-200">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <span
                    data-level={skill.level}
                    ref={(element) => {
                      if (element) {
                        barRefs.current.push(element);
                      }
                    }}
                    className="block h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 shadow-[0_0_14px_rgba(51,214,255,0.55)]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  <span>Production Fit</span>
                  <span>{skill.level >= 85 ? "Strong" : "Growing"}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="glass-panel min-h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]">
          <Suspense
            fallback={<div className="h-full w-full bg-gradient-to-br from-cyan-400/10 to-emerald-300/10" />}
          >
            <SkillsOrbitScene skills={portfolioData.orbitSkills} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Skills;
