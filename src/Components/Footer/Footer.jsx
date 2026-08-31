import React from "react";
import { personalInfo } from "../../constants";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiMail, FiArrowUp, FiHeart } from "react-icons/fi";

const Footer = () => {
  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -90;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#070a16] pt-16 pb-12 px-4 sm:px-8">
      {/* Background Top Ambient Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand Logo */}
        <div className="flex items-center justify-center mb-4">
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Mottasim <span className="text-purple-400">Billah</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-sm max-w-md mb-8">
          Frontend & MERN Stack Developer crafting responsive, performant, and engaging digital web experiences.
        </p>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600/20 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0a66c2]/20 border border-white/10 text-gray-300 hover:text-[#0a66c2] flex items-center justify-center transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={personalInfo.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1877f2]/20 border border-white/10 text-gray-300 hover:text-[#1877f2] flex items-center justify-center transition-all hover:scale-110"
            aria-label="Facebook Profile"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600/20 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="Send Direct Email"
          >
            <FiMail size={18} />
          </a>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex items-center justify-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Mottasim Billah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
