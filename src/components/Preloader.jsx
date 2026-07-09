import { AnimatePresence, motion } from "framer-motion";

const Preloader = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-28 w-28">
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-300/35"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-3 rounded-full border border-fuchsia-300/45"
                animate={{ rotate: -360 }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(96,165,250,0.95),rgba(14,165,233,0.18)_55%,transparent_78%)] shadow-[0_0_45px_rgba(34,211,238,0.55)]"
                animate={{ scale: [0.9, 1.08, 0.92], opacity: [0.75, 1, 0.82] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="text-center">
              <p className="font-display text-xs uppercase tracking-[0.55em] text-cyan-200/85">
                Loading Portfolio
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Preparing immersive visuals and motion.
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;
