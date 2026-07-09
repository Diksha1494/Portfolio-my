import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (event) => {
      const target = event.target;
      setIsActive(Boolean(target instanceof Element && target.closest("a, button, input, textarea")));
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-10 w-10 rounded-full border border-cyan-300/60 bg-cyan-300/10 mix-blend-screen md:block"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isActive ? 1.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 350, mass: 0.35 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(232,121,249,0.8)] md:block"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 45, stiffness: 700, mass: 0.12 }}
      />
    </>
  );
};

export default CustomCursor;
