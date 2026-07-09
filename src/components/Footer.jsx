import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 text-sm text-slate-400 md:flex-row md:items-center">
        <p>&copy; {currentYear} {portfolioData.profile.name}. All rights reserved.</p>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Crafted with React, Three.js, Framer Motion, and GSAP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
