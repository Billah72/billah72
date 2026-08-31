import React from "react";
import { services } from "../../constants";
import { FiCheckCircle, FiLayers } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <FiLayers />
          <span>Services & Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          What I Bring To The <span className="text-gradient">Table</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Transforming complex concepts into high-performing, beautiful digital solutions with modern web technologies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group p-8 rounded-3xl bg-gradient-to-b from-[#10162f]/80 to-[#0c1022]/80 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/40"
          >
            {/* Header Icon & Title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 border border-purple-500/30 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 group-hover:bg-purple-600/40 transition-all">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                  <FiCheckCircle className="text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
