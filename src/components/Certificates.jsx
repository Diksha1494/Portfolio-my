import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight, HiOutlineArrowTopRightOnSquare, HiOutlineCheckBadge, HiOutlineShieldCheck, HiXMark } from "react-icons/hi2";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

const badgeThemes = [
  "from-cyan-400/30 via-sky-400/20 to-transparent",
  "from-fuchsia-400/28 via-violet-400/18 to-transparent",
  "from-emerald-400/24 via-cyan-300/20 to-transparent",
];

const CertificateImage = ({ certificate, className, fallback }) => {
  const [hasError, setHasError] = useState(false);

  if (!certificate.image || hasError) {
    return fallback ?? null;
  }

  return (
    <img
      src={certificate.image}
      alt={`${certificate.title} certificate`}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

const Certificates = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const sliderRef = useRef(null);

  const certificates = useMemo(
    () =>
      portfolioData.resume.certificates.map((certificate, index) => {
        const normalizedCertificate =
          typeof certificate === "string"
            ? { title: certificate, image: "" }
            : certificate;

        return {
          ...normalizedCertificate,
          badge: `Verified Learning ${index + 1}`,
          theme: badgeThemes[index % badgeThemes.length],
        };
      }),
    [],
  );

  return (
    <>
      <section id="certificates" className="section-shell">
        <SectionTitle
          eyebrow="Certificates"
          title="Verified learning across modern engineering tracks."
          subtitle="Credentials that reflect hands-on momentum across AI, JavaScript, Spring, and Next.js."
        />
        <div className="mb-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() =>
              sliderRef.current?.scrollBy({
                left: -sliderRef.current.clientWidth * 0.88,
                behavior: "smooth",
              })
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:border-cyan-300/35 hover:text-cyan-100"
            aria-label="Scroll certificates left"
          >
            <HiArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() =>
              sliderRef.current?.scrollBy({
                left: sliderRef.current.clientWidth * 0.88,
                behavior: "smooth",
              })
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:border-cyan-300/35 hover:text-cyan-100"
            aria-label="Scroll certificates right"
          >
            <HiArrowRight size={18} />
          </button>
        </div>
        <div
          ref={sliderRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {certificates.map((certificate, index) => (
            <motion.button
              key={certificate.title}
              type="button"
              className="certificate-card group relative w-[88vw] max-w-[390px] flex-none snap-start overflow-hidden rounded-[32px] border border-white/10 bg-[#09101f]/88 p-6 text-left backdrop-blur-xl sm:w-[420px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              onClick={() => setActiveCertificate(certificate)}
            >
              <span className={`absolute inset-0 bg-gradient-to-br ${certificate.theme} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <span className="absolute -left-1/4 top-0 h-full w-24 -translate-x-full rotate-12 bg-white/10 blur-xl transition-transform duration-700 group-hover:translate-x-[420%]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <CertificateImage
                      certificate={certificate}
                      className="h-full w-full object-cover"
                      fallback={
                        <div className="flex h-full w-full items-center justify-center text-cyan-200">
                          {index % 2 === 0 ? <HiOutlineCheckBadge size={26} /> : <HiOutlineShieldCheck size={26} />}
                        </div>
                      }
                    />
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Preview
                    <HiOutlineArrowTopRightOnSquare size={12} />
                  </span>
                </div>
                <p className="mt-8 text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                  {certificate.badge}
                </p>
                <h3 className="mt-4 font-display text-2xl text-white">{certificate.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Focused learning milestone connected to the engineering stack behind this portfolio.
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            className="fixed inset-0 z-[85] flex items-center justify-center bg-slate-950/82 px-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl overflow-hidden rounded-[34px] border border-white/10 bg-[#07101d] p-8 shadow-[0_35px_120px_rgba(2,6,23,0.75)]"
              initial={{ scale: 0.94, y: 18, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-300/35 hover:text-white"
                onClick={() => setActiveCertificate(null)}
              >
                <HiXMark size={18} />
              </button>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_24%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.36em] text-cyan-200/80">
                  Certificate Preview
                </p>
                <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.035] p-8">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <HiOutlineCheckBadge size={30} />
                    </div>
                    <div className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/8 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-fuchsia-200">
                      Verified
                    </div>
                  </div>
                  <p className="mt-10 text-sm uppercase tracking-[0.28em] text-slate-500">
                    Credential Name
                  </p>
                  <h3 className="mt-4 font-display text-4xl leading-tight text-white">
                    {activeCertificate.title}
                  </h3>
                  {activeCertificate.image ? (
                    <div className="mt-8 overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/45">
                      <CertificateImage
                        certificate={activeCertificate}
                        className="max-h-[52vh] w-full object-contain"
                        fallback={
                          <div className="flex min-h-56 items-center justify-center text-cyan-200">
                            <HiOutlineCheckBadge size={42} />
                          </div>
                        }
                      />
                    </div>
                  ) : null}
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300">
                    A focused credential from Diksha Rai's continued learning path.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Certificates;
