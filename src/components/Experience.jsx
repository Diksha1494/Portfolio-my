import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineBuildingOffice2, HiSparkles } from "react-icons/hi2";
import { portfolioData } from "../data/portfolioData";
import { gsap } from "../gsapConfig";
import SectionTitle from "./SectionTitle";

const icons = [HiOutlineBriefcase, HiOutlineBuildingOffice2];

const Experience = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  cardRefs.current = [];

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(cardRefs.current, {
        x: -36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });
    }, sectionRef);

    return () => animationContext.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-shell">
      <SectionTitle
        eyebrow="Experience"
        title="Leadership, outreach, and professional exposure in motion."
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-[18px] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-cyan-300/70 via-fuchsia-300/30 to-transparent md:block" />
        <div className="space-y-8">
          {portfolioData.experience.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={`${item.title}-${item.organization}`}
                ref={(element) => {
                  if (element) {
                    cardRefs.current.push(element);
                  }
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative grid gap-4 md:grid-cols-[54px_1fr]"
              >
                <div className="relative hidden md:flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/35 bg-slate-950/80 text-cyan-200 shadow-[0_0_35px_rgba(56,189,248,0.16)]">
                    <Icon size={18} />
                  </div>
                </div>
                <div className="timeline-card rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl md:p-7">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3 md:hidden">
                        <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/35 bg-slate-950/80 text-cyan-200">
                          <Icon size={18} />
                        </div>
                        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
                          Professional Role
                        </p>
                      </div>
                      <h3 className="font-display text-2xl text-white">{item.title}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                        {item.organization}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/8 px-4 py-2 text-xs uppercase tracking-[0.22em] text-fuchsia-200">
                      <HiSparkles size={14} />
                      {item.duration}
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-4 text-sm leading-relaxed text-slate-200"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
