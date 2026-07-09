import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiSpringboot, SiStripe, SiSupabase, SiTailwindcss, SiJsonwebtokens } from "react-icons/si";

const techIcons = {
  React: SiReact,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Express: SiExpress,
  "REST API": SiJavascript,
  JWT: SiJsonwebtokens,
  "Next.js": SiNextdotjs,
  Supabase: SiSupabase,
  Tailwind: SiTailwindcss,
  Realtime: SiJavascript,
  "Spring Boot": SiSpringboot,
  JavaScript: SiJavascript,
  Jsoup: SiJavascript,
  "Chrome API": SiJavascript,
  Stripe: SiStripe,
  Redux: SiRedux,
};

const getProjectVisual = (title) => {
  const name = title.toLowerCase();

  if (name.includes("book")) {
    return {
      label: "Learning storefront",
      tint: "from-amber-300/34 via-rose-300/18 to-cyan-300/14",
      panels: ["Catalog", "Orders", "Readers"],
      metrics: ["1.8k", "92%", "24"],
      bars: [72, 48, 86, 60],
    };
  }

  if (name.includes("expense")) {
    return {
      label: "Fintech analytics",
      tint: "from-emerald-300/32 via-cyan-300/22 to-sky-400/14",
      panels: ["Spend", "Budget", "Trends"],
      metrics: ["₹42k", "18%", "7"],
      bars: [64, 91, 55, 78],
    };
  }

  if (name.includes("xchango")) {
    return {
      label: "Realtime exchange",
      tint: "from-violet-300/34 via-fuchsia-300/22 to-cyan-300/12",
      panels: ["Tokens", "Chats", "Courses"],
      metrics: ["320", "Live", "12"],
      bars: [82, 66, 74, 92],
    };
  }

  if (name.includes("management")) {
    return {
      label: "Productivity cockpit",
      tint: "from-sky-300/32 via-indigo-300/20 to-emerald-300/12",
      panels: ["Tasks", "Sprint", "Team"],
      metrics: ["84%", "42", "9"],
      bars: [42, 88, 76, 58],
    };
  }

  if (name.includes("research")) {
    return {
      label: "Research workspace",
      tint: "from-cyan-300/30 via-blue-300/18 to-fuchsia-300/14",
      panels: ["Extract", "Summarize", "Cite"],
      metrics: ["AI", "4.2s", "98%"],
      bars: [95, 72, 54, 84],
    };
  }

  return {
    label: "Commerce interface",
    tint: "from-pink-300/30 via-orange-300/18 to-cyan-300/12",
    panels: ["Cart", "Checkout", "Sales"],
    metrics: ["2.4x", "Fast", "36"],
    bars: [69, 86, 62, 74],
  };
};

const ProjectMockup = ({ project }) => {
  const visual = getProjectVisual(project.title);

  return (
    <div className="project-visual relative h-64 overflow-hidden rounded-t-[28px] bg-[#050914]">
      <div className={`absolute inset-0 bg-gradient-to-br ${visual.tint}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.2),transparent_25%),radial-gradient(circle_at_22%_78%,rgba(125,211,252,0.2),transparent_28%)]" />
      <div className="absolute left-1/2 top-1/2 h-44 w-[82%] -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] rounded-[24px] border border-white/15 bg-slate-950/72 p-3 shadow-[0_34px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.03]">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-cyan-100">
            {visual.label}
          </span>
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-cols-[0.8fr_1.2fr] gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3">
            <div className="h-16 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(103,232,249,0.55),rgba(192,132,252,0.2)_48%,rgba(15,23,42,0.2)_100%)] shadow-[0_0_35px_rgba(34,211,238,0.16)]" />
            <div className="mt-3 space-y-2">
              {visual.panels.map((panel) => (
                <div key={panel} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
                  <span className="h-1.5 flex-1 rounded-full bg-white/18" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <div className="grid grid-cols-3 gap-2">
              {visual.metrics.map((metric) => (
                <div key={metric} className="rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 text-center">
                  <span className="font-display text-sm text-white">{metric}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/18 p-3">
              <div className="flex h-20 items-end gap-2">
                {visual.bars.map((bar, index) => (
                  <span
                    key={`${bar}-${index}`}
                    className="project-bar flex-1 rounded-t-lg bg-gradient-to-t from-cyan-300 to-fuchsia-200 shadow-[0_0_22px_rgba(103,232,249,0.28)]"
                    style={{ height: `${bar}%`, animationDelay: `${index * 0.16}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute right-10 top-8 h-24 w-24 rounded-full bg-fuchsia-300/16 blur-3xl" />
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1200}
      scale={1.01}
      glareEnable
      glareMaxOpacity={0.18}
      glareBorderRadius="28px"
      className="h-full"
    >
      <article className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#07101d]/90 transition-all duration-500 hover:border-cyan-200/45 hover:shadow-[0_34px_90px_rgba(6,20,48,0.56)]">
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(51,214,255,0.28),transparent_55%)]" />
        </span>
        <ProjectMockup project={project} />
        <div className="relative space-y-5 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl text-white">{project.title}</h3>
            <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Case Study
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => {
              const Icon = techIcons[item];

              return (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-100/15 bg-cyan-300/5 px-3 py-1 text-[11px] uppercase tracking-[0.13em] text-cyan-100/85"
                >
                  {Icon ? <Icon size={12} /> : null}
                  {item}
                </span>
              );
            })}
          </div>
          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition-colors duration-300 hover:border-cyan-200/50 hover:text-cyan-100"
            >
              <FaGithub size={14} />
              Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <HiOutlineArrowTopRightOnSquare size={14} />
              Live
            </a>
          </div>
        </div>
      </article>
    </Tilt>
  );
};

export default ProjectCard;
