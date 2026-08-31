import React, { useState } from "react";
import { projects, personalInfo } from "../../constants";
import { FiExternalLink, FiGithub, FiEye, FiX, FiCheck, FiFolder } from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Full Stack", "Frontend"];

  const filteredProjects =
    filterCategory === "All"
      ? projects
      : projects.filter((p) => p.category === filterCategory);

  const handleOpenModal = (project, e) => {
    e.stopPropagation();
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <FiFolder />
          <span>Recent Creations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          A showcase of real-world web applications, responsive frontend solutions, and full-stack systems built with precision.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              filterCategory === cat
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-gradient-to-b from-[#111730]/90 to-[#0c1020]/90 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/40"
          >
            {/* Project Image Frame */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1020] via-transparent to-transparent opacity-80" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0a0f24]/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Quick View Floating Button */}
              <button
                onClick={(e) => handleOpenModal(project, e)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-purple-600 text-white border border-white/10 backdrop-blur-md transition-all duration-200 opacity-90 group-hover:opacity-100 cursor-pointer"
                title="Quick View Details"
              >
                <FiEye size={16} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-purple-200 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 shadow-md shadow-purple-600/20 transition-all hover:scale-102"
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-102"
                >
                  <FiGithub />
                  <span>Code</span>
                </a>

                <button
                  onClick={(e) => handleOpenModal(project, e)}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                  title="View full specs"
                >
                  <FiEye />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedProject && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-3xl bg-[#0d1226] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors cursor-pointer z-10"
            >
              <FiX size={20} />
            </button>

            {/* Modal Image */}
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 mb-6 border border-white/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Header */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
            </div>

            {/* Long Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            {/* Key Features List */}
            {selectedProject.features && (
              <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Key Highlights & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <FiCheck className="text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-950/40 text-purple-200 border border-purple-700/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 shadow-lg shadow-purple-600/30 transition-all hover:scale-102"
              >
                <FiExternalLink />
                <span>Visit Live Website</span>
              </a>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all hover:scale-102"
              >
                <FiGithub />
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Collaboration CTA Banner */}
      <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-cyan-900/30 border border-purple-500/20 backdrop-blur-xl text-center flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Have an exciting project in mind?
        </h3>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mb-6">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all"
        >
          Let's Build It Together 🚀
        </a>
      </div>
    </section>
  );
};

export default Work;
