import React, { useState, useEffect, useRef } from "react";
import { FiDownload, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import profileImage from "../../assets/profile2.png";
import { personalInfo } from "../../constants";

// Zero-dependency Native Typewriter for React 19
const Typewriter = ({
  words = [
    "Frontend Developer",
    "MERN Stack Specialist",
    "React & Next.js Engineer",
    "UI/UX Enthusiast",
  ],
  delay = 80,
  deleteSpeed = 40,
  pause = 1800,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex] || "";
    let timer;

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, delay);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, delay, deleteSpeed, pause]);

  return (
    <span className="text-cyan-400 font-bold ml-1 inline-flex items-center">
      {currentText}
      <span className="w-[3px] h-6 bg-cyan-400 ml-1 inline-block animate-pulse"></span>
    </span>
  );
};

// Smooth Native 3D Tilt Card
const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: transform ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

const About = () => {
  const handleScrollToProjects = () => {
    const section = document.getElementById("work");
    if (section) {
      const yOffset = -90;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative pt-36 sm:pt-44 lg:pt-48 pb-28 sm:pb-36 lg:pb-40 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 w-full max-w-full">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/15 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Full-time Roles & Freelance</span>
          </div>

          {/* Heading */}
          <div className="space-y-2 mb-4">
            <p className="text-gray-400 font-mono text-base sm:text-lg tracking-wide">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Mottasim <span className="text-gradient">Billah</span>
            </h1>
          </div>

          {/* Typing Effect Subtitle */}
          <div className="flex items-center justify-center lg:justify-start gap-1 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200 h-10 mb-6 font-mono">
            <span className="text-purple-400">&gt;</span>
            <Typewriter />
          </div>

          {/* Bio Description */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
            {personalInfo.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <FiDownload className="text-lg" />
              <span>Download Resume / CV</span>
            </a>

            <button
              onClick={handleScrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Projects</span>
              <FiArrowRight className="text-lg text-purple-400" />
            </button>
          </div>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-gray-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
              <FiCheckCircle className="text-emerald-400" /> Clean Architecture
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
              <FiCheckCircle className="text-emerald-400" /> Pixel-Perfect UI
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
              <FiCheckCircle className="text-emerald-400" /> Blazing Fast Speed
            </span>
          </div>
        </div>

        {/* Right 3D Avatar Card */}
        <div className="w-full lg:w-2/5 flex justify-center px-4 sm:px-0">
          <TiltCard className="relative w-64 sm:w-80 md:w-96 max-w-full">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse-glow"></div>

            {/* Main Card Container */}
            <div className="relative rounded-3xl bg-[#0d1226]/90 border border-white/15 p-3.5 sm:p-4 backdrop-blur-2xl shadow-2xl overflow-visible">
              {/* Image Frame */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/30 to-indigo-950/50 border border-white/10 flex items-center justify-center">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1226] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Badge Top-Right: React */}
              <div className="absolute -top-2 right-0 sm:-top-3 sm:-right-3 bg-[#0a0f24]/90 border border-cyan-500/40 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-1.5 sm:gap-2">
                <FaReact className="text-cyan-400 text-base sm:text-xl animate-spin [animation-duration:10s]" />
                <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">React JS</span>
              </div>

              {/* Floating Badge Bottom-Left: MERN Stack */}
              <div className="absolute -bottom-3 left-0 sm:-bottom-4 sm:-left-3 bg-[#0a0f24]/90 border border-purple-500/40 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-1.5 sm:gap-2">
                <FaNodeJs className="text-emerald-400 text-sm sm:text-lg" />
                <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">MERN Stack</span>
              </div>

              {/* Floating Badge Middle-Right: Tailwind */}
              <div className="absolute bottom-12 right-0 sm:bottom-16 sm:-right-4 bg-[#0a0f24]/90 border border-indigo-500/40 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1 sm:gap-1.5">
                <SiTailwindcss className="text-cyan-400 text-xs sm:text-base" />
                <span className="text-[10px] sm:text-[11px] font-semibold text-gray-200">Tailwind</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Stats Counter Row */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {personalInfo.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md text-center hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300 group"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1 group-hover:scale-105 transition-transform">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
