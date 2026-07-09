import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from "react-icons/hi2";
import { portfolioData } from "../data/portfolioData";
import { gsap } from "../gsapConfig";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef([]);

  contentRef.current = [];

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 36,
        opacity: 0,
        duration: 0.78,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => animationContext.revert();
  }, []);

  const collectRef = (element) => {
    if (element) {
      contentRef.current.push(element);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <section id="contact" ref={sectionRef} className="section-shell">
      <SectionTitle
        eyebrow="Contact"
        title="Let's connect for internships, collaborations, and opportunities."
      />
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0f131b]/85 p-6 shadow-[0_30px_100px_rgba(2,6,23,0.45)] backdrop-blur-xl md:p-10">
        <div className="blob-one pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="blob-two pointer-events-none absolute -bottom-16 right-6 h-56 w-56 rounded-full bg-emerald-300/15 blur-3xl" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <div ref={collectRef} className="space-y-4">
            <p className="text-base leading-relaxed text-slate-300">
              Open to internships, collaborations, and developer opportunities where I can contribute, learn fast, and keep building meaningful products.
            </p>
            <div className="grid gap-3 pt-2">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200 transition-colors hover:border-cyan-300/35"
              >
                <HiOutlineEnvelope className="text-cyan-200" size={20} />
                {portfolioData.contact.email}
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200">
                {portfolioData.contact.phone}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200">
                {portfolioData.contact.location}
              </div>
            </div>
            <div className="flex gap-3 pt-3">
              <motion.a
                whileHover={{ y: -4 }}
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] text-slate-200 transition-colors hover:border-cyan-200/50 hover:text-cyan-100"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] text-slate-200 transition-colors hover:border-cyan-200/50 hover:text-cyan-100"
              >
                <FaLinkedinIn size={18} />
              </motion.a>
            </div>
          </div>

          <form ref={collectRef} onSubmit={handleSubmit} className="space-y-5 rounded-[30px] border border-white/10 bg-black/15 p-5 md:p-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.17em] text-slate-400">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-200/60 focus:bg-cyan-300/[0.03]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.17em] text-slate-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-200/60 focus:bg-cyan-300/[0.03]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.17em] text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-200/60 focus:bg-cyan-300/[0.03]"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <HiOutlinePaperAirplane size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
