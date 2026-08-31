import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiSend,
  FiFileText,
  FiUser,
  FiLayers,
  FiCpu,
  FiFolder,
  FiBookOpen,
  FiMail,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { personalInfo } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "services", "skills", "work", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  const menuItems = [
    { id: "about", label: "About", icon: <FiUser /> },
    { id: "services", label: "Services", icon: <FiLayers /> },
    { id: "skills", label: "Skills", icon: <FiCpu /> },
    { id: "work", label: "Projects", icon: <FiFolder /> },
    { id: "education", label: "Education", icon: <FiBookOpen /> },
    { id: "contact", label: "Contact", icon: <FiMail /> },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-40 flex justify-center px-3 sm:px-6 md:px-8 pt-3 sm:pt-4 transition-all duration-300">
        <nav
          className={`w-full max-w-7xl mx-auto rounded-2xl md:rounded-full transition-all duration-300 px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between ${
            isScrolled
              ? "bg-[#090d1a]/95 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] shadow-purple-950/30"
              : "bg-[#090d1a]/80 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleMenuItemClick("about")}
            className="flex items-center text-left cursor-pointer select-none shrink-0"
          >
            <span className="font-bold text-white tracking-tight text-base sm:text-lg md:text-xl flex items-center whitespace-nowrap">
              Mottasim<span className="text-purple-400 font-semibold">.dev</span>
            </span>
          </button>

          {/* Desktop Menu (Large screens) */}
          <ul className="hidden lg:flex items-center space-x-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right CTA & Socials (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-2 pr-2 border-r border-white/10 text-gray-400">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-[#0a66c2] hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-[#1877f2] hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Facebook Profile"
              >
                <FaFacebook size={18} />
              </a>
            </div>

            {/* Connect Button */}
            <button
              type="button"
              onClick={() => handleMenuItemClick("contact")}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Let's Talk</span>
              <FiSend size={14} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white border border-white/10 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu & Backdrop (Rendered at top level with high z-index) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-start justify-center pt-20 px-4">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
            aria-hidden="true"
          />

          {/* Floating Drawer Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[#0c1022] border border-white/15 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-3 duration-200"
          >
            {/* Nav List */}
            <ul className="flex flex-col space-y-1.5">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-semibold transition-all cursor-pointer ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-300 border border-purple-500/30 shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-purple-400 text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Actions: Resume & Let's Talk */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleMenuItemClick("contact")}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 shadow-lg shadow-purple-600/25 active:scale-95 transition-all cursor-pointer"
                >
                  <FiSend size={15} />
                  <span>Let's Talk</span>
                </button>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95 transition-all cursor-pointer"
                >
                  <FiFileText size={15} />
                  <span>Resume</span>
                </a>
              </div>

              {/* Social Links inside Mobile Drawer */}
              <div className="flex items-center justify-center gap-4 pt-2 text-gray-400">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 text-white hover:bg-purple-600/20 transition-colors cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 text-white hover:bg-purple-600/20 transition-colors cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={personalInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 text-white hover:bg-purple-600/20 transition-colors cursor-pointer"
                  aria-label="Facebook Profile"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
