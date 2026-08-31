import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contract/Contract";
import Footer from "./Components/Footer/Footer";
import { FiArrowUp } from "react-icons/fi";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#070913] text-[#f1f5f9] font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Background Decorative Mesh & Radial Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden w-full max-w-full">
        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-70" />

        {/* Ambient Top Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-[500px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-cyan-500/15 rounded-full blur-[120px]" />

        {/* Ambient Bottom Glow */}
        <div className="absolute -bottom-40 right-0 w-[500px] max-w-full h-[500px] bg-purple-900/15 rounded-full blur-[140px]" />
      </div>

      {/* Main Navigation */}
      <Navbar />

      {/* Content Sections */}
      <main className="relative z-10 space-y-8">
        <About />
        <Services />
        <Skills />
        <Work />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-900/50 hover:shadow-purple-600/60 hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default App;