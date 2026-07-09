import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolioData";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [visibleNavigation, setVisibleNavigation] = useState(portfolioData.navigation);

  useEffect(() => {
    const sections = portfolioData.navigation
      .map((item) => ({ ...item, element: document.getElementById(item.id) }))
      .filter((item) => item.element);

    setVisibleNavigation(sections.map(({ element, ...item }) => item));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01,
      },
    );

    sections.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);

    if (!element) return;

    if (window.lenis) {
      window.lenis.scrollTo(element, { offset: -78, duration: 1.1 });
      return;
    }

    const top = element.getBoundingClientRect().top + window.pageYOffset - 78;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 shadow-[0_18px_70px_rgba(2,6,23,0.35)] backdrop-blur-2xl md:px-6">
        <a
          href="#hero"
          onClick={(event) => scrollToSection(event, "hero")}
          className="font-display text-sm tracking-[0.24em] text-white md:text-base"
        >
          DIKSHA RAI
        </a>
        <nav className="overflow-x-auto scrollbar-hide">
          <ul className="flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] px-1.5 py-1">
            {visibleNavigation.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(event) => scrollToSection(event, item.id)}
                    className={`relative block rounded-full px-3 py-2 text-xs transition-colors duration-300 md:px-4 md:text-sm ${
                      isActive
                        ? "text-cyan-100"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.14)]"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    ) : null}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
