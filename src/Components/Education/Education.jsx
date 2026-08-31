import React from "react";
import { education } from "../../constants";
import { FiAward, FiCalendar, FiBookOpen } from "react-icons/fi";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <FiBookOpen />
          <span>Academic & Industry Journey</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Education & <span className="text-gradient">Training</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          A track record of continuous learning, technical diplomas, and hands-on industrial attachments.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Glowing Line for md+ screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 opacity-30" />

        {/* Timeline Items */}
        <div className="space-y-10">
          {education.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Center Node (md+) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0d1226] border-2 border-purple-500 shadow-lg shadow-purple-500/30 items-center justify-center text-purple-400 z-10">
                  <FiAward size={18} />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div
                    className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#111730]/90 to-[#0c1020]/90 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      isEven ? "md:ml-6" : "md:mr-6"
                    }`}
                  >
                    {/* Header: Logo, School & Badge */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.school}
                          className="w-full h-full object-contain rounded-xl"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                            {item.degree}
                          </h3>
                        </div>
                        <p className="text-sm font-medium text-purple-400 mt-0.5">
                          {item.school}
                        </p>
                      </div>
                    </div>

                    {/* Meta Bar: Date & Grade */}
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        <FiCalendar className="text-cyan-400" />
                        {item.date}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold">
                        Grade: {item.grade}
                      </span>
                      {item.badge && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Empty Space for other side on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
