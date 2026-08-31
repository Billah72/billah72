import React, { useState } from "react";
import { SkillsInfo } from "../../constants";
import { FiCpu, FiCheck } from "react-icons/fi";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Flatten or filter skills
  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & DB" },
    { id: "languages", label: "Languages" },
    { id: "tools", label: "Tools & DevOps" },
  ];

  const displayedCategories =
    activeTab === "all"
      ? SkillsInfo
      : SkillsInfo.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <FiCpu />
          <span>Tech Stack & Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          A comprehensive suite of modern frameworks, libraries, tools, and databases I leverage to build robust web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === cat.id
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grouped by Category */}
      <div className="space-y-12">
        {displayedCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 sm:p-8 rounded-3xl bg-[#0e1328]/70 border border-white/10 backdrop-blur-xl shadow-xl"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                {category.title}
              </h3>
              <span className="text-xs font-mono text-purple-300 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                {category.skills.length} Technologies
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/40 text-center"
                >
                  {/* Skill Logo */}
                  <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-xl bg-black/30 p-2 border border-white/5 group-hover:border-purple-500/30 group-hover:scale-110 transition-transform">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="max-h-full max-w-full object-contain filter drop-shadow"
                      loading="lazy"
                    />
                  </div>

                  {/* Skill Name */}
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-white mb-1">
                    {skill.name}
                  </span>

                  {/* Level Tag */}
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      skill.level === "Expert"
                        ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                        : skill.level === "Advanced"
                        ? "text-purple-300 bg-purple-500/10 border border-purple-500/20"
                        : "text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
