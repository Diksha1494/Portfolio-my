import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AmbientBackground from "./components/AmbientBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import useLenisScroll from "./useLenisScroll";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useLenisScroll();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-x-clip bg-base font-body text-slate-100">
      <Preloader isVisible={isLoading} />
      <AmbientBackground />
      <div className="noise-overlay pointer-events-none fixed inset-0 -z-10 opacity-30" />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
