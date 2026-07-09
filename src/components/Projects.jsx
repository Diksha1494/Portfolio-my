import { useLayoutEffect, useRef } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { portfolioData } from "../data/portfolioData";
import { gsap } from "../gsapConfig";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);

  cardRefs.current = [];

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(cardRefs.current, {
        y: 56,
        opacity: 0,
        duration: 0.82,
        ease: "power3.out",
        stagger: 0.13,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });
    }, sectionRef);

    return () => animationContext.revert();
  }, []);

  const scrollProjects = (direction) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth * 0.88 * direction,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" ref={sectionRef} className="section-shell">
      <SectionTitle
        eyebrow="Projects"
        title="Selected products and engineering work."
      />
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollProjects(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:border-cyan-300/35 hover:text-cyan-100"
          aria-label="Scroll projects left"
        >
          <HiArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollProjects(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:border-cyan-300/35 hover:text-cyan-100"
          aria-label="Scroll projects right"
        >
          <HiArrowRight size={18} />
        </button>
      </div>
      <div
        ref={sliderRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {portfolioData.projects.map((project) => (
          <div
            key={project.title}
            ref={(element) => {
              if (element) {
                cardRefs.current.push(element);
              }
            }}
            className="w-[88vw] max-w-[390px] flex-none snap-start sm:w-[420px]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
