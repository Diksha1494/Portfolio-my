import { motion } from "framer-motion";
import { HiOutlineSparkles, HiOutlineStar, HiOutlineTrophy, HiOutlineAcademicCap } from "react-icons/hi2";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

const iconMap = [HiOutlineTrophy, HiOutlineStar, HiOutlineAcademicCap, HiOutlineSparkles];

const Achievements = () => {
  return (
    <section id="achievements" className="section-shell">
      <SectionTitle
        eyebrow="Achievements"
        title="Milestones that add credibility beyond the resume line."
        subtitle="A concise record of competitive practice, hackathon participation, and consistent technical growth."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {portfolioData.resume.achievements.map((item, index) => {
          const Icon = iconMap[index % iconMap.length];

          return (
            <motion.article
              key={item}
              className="achievement-card group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.12),transparent_32%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.12)]">
                  <Icon size={22} />
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    Highlight {index + 1}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-200">{item}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
