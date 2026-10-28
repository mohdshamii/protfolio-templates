import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const projectMetrics: Record<string, { stat: string; label: string; badge: string }> = {
  "Revive": {
    stat: "0.91 AUC-ROC",
    label: "+13% diagnostic improvement over baseline",
    badge: "Clinical AI Engine",
  },
  "HydroRaksh": {
    stat: "3.85m MAE",
    label: "Reduced from 29.85m across 700+ districts",
    badge: "Pan-India IoT Forecaster",
  },
  "FarmAIQ": {
    stat: "95.2% Yield Acc",
    label: "Dual-model crop & CNN disease detection",
    badge: "Multi-Model AgTech",
  },
};

const Works: React.FC = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-slate-400 mt-3 max-w-3xl text-[15px] sm:text-[16px] leading-relaxed"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Featured Projects Grid - Visual Centerpiece */}
      <div className="mt-12 flex flex-col gap-10">
        {projects.map((project, index) => {
          const keyName = project.name.split(" ")[0];
          const metrics = projectMetrics[keyName] || {
            stat: "Production Ready",
            label: "End-to-end ML Architecture",
            badge: "AI System",
          };

          return (
            <motion.div
              key={project.name}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="group rounded-2xl bg-[#0D1117] border border-[#1C2538] hover:border-sky-500/40 transition-all duration-300 overflow-hidden shadow-card hover:shadow-card-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Project Screenshot Mockup - 6 cols on lg */}
                <div className="lg:col-span-7 relative bg-[#090B10] border-b lg:border-b-0 lg:border-r border-[#1C2538] flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Top Browser/Window Bar */}
                  <div className="px-4 py-2.5 bg-[#0D1117]/90 border-b border-[#1C2538] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      <span className="ml-2 font-mono text-[11px] text-slate-400">
                        shami-ai-systems // {keyName.toLowerCase()}
                      </span>
                    </div>
                    {project.period && (
                      <span className="font-mono text-[11px] text-slate-400 px-2 py-0.5 rounded bg-[#111726] border border-[#1C2538]">
                        {project.period}
                      </span>
                    )}
                  </div>

                  {/* Screenshot with Hover Zoom */}
                  <div className="relative h-[240px] sm:h-[340px] lg:h-[380px] w-full overflow-hidden bg-[#090B10]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-40 pointer-events-none" />
                  </div>

                  {/* Quick Stat Bar */}
                  <div className="px-5 py-3 bg-[#0D1117] border-t border-[#1C2538] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                      <span className="text-[13px] font-mono text-sky-400 font-semibold">
                        {metrics.stat}
                      </span>
                      <span className="text-slate-500 hidden sm:inline">•</span>
                      <span className="text-[12px] text-slate-400 hidden sm:inline">
                        {metrics.label}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/25">
                      {metrics.badge}
                    </span>
                  </div>
                </div>

                {/* Project Details & Architecture - 5 cols on lg */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold">
                        Featured Production System
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {project.name}
                    </h3>

                    <p className="mt-4 text-[14px] text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technical Stack Tags */}
                    <div className="mt-6">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                        Architectural Stack & Techniques
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag.name}
                            className="text-[12px] font-mono px-2.5 py-1 rounded-md bg-[#111726] border border-[#1C2538] text-slate-300 group-hover:border-slate-700 transition-colors"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links & CTA */}
                  <div className="mt-8 pt-5 border-t border-[#1C2538] flex items-center gap-3">
                    <a
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-[13px] transition-all duration-200"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Source Code</span>
                    </a>

                    <a
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#111726] hover:bg-[#141C2B] border border-[#1C2538] hover:border-slate-600 text-slate-300 hover:text-white text-[13px] font-semibold transition-all duration-200"
                    >
                      <span>Repository Details</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
