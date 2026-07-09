import { useLayoutEffect, useRef } from "react";
import { portfolioData } from "../data/portfolioData";
import { gsap } from "../gsapConfig";
import SectionTitle from "./SectionTitle";

const Resume = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  itemRefs.current = [];

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(itemRefs.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
        },
      });
    }, sectionRef);

    return () => animationContext.revert();
  }, []);

  const collectRef = (element) => {
    if (element) {
      itemRefs.current.push(element);
    }
  };

  const { education, experience, achievements } = portfolioData.resume;

  return (
    <section id="resume" ref={sectionRef} className="section-shell">
      <SectionTitle
        eyebrow="Resume"
        title="Education, experience, and achievements at a glance."
        subtitle="A compact snapshot of academic performance, leadership experience, and career-building milestones."
      />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_1.25fr]">
        <div className="space-y-6">
          <div ref={collectRef} className="glass-panel p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Education</p>
            <h3 className="mt-3 font-display text-2xl text-white">{education.degree}</h3>
            <p className="mt-2 text-sm text-slate-300">{education.institute}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Duration</p>
                <p className="mt-2 text-sm text-slate-200">{education.duration}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Academic Score</p>
                <p className="mt-2 text-sm text-slate-200">{education.score}</p>
              </div>
            </div>
          </div>

          <div ref={collectRef} className="glass-panel p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Achievements</p>
            <div className="mt-4 space-y-3">
              {achievements.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                  <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={collectRef} className="glass-panel p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Experience</p>
          <div className="mt-5 space-y-5">
            {experience.map((item) => (
              <article
                key={`${item.title}-${item.organization}`}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-xl text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{item.organization}</p>
                  </div>
                  <p className="text-sm text-cyan-200">{item.duration}</p>
                </div>
                <div className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <p key={point} className="text-sm leading-relaxed text-slate-200">
                      {point}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
