import React from "react";
import { motion } from "framer-motion";
import { config } from "../../constants/config";
import { NeuralCanvas } from "../canvas";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] w-full pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1117] border border-[#1C2538] mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
              </span>
              <span className="text-[12px] font-semibold text-slate-300 tracking-wide uppercase">
                AI/ML Engineer • Available for Roles
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I'm <span className="text-white">Mohd Shami</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500">
                AI/ML Engineer
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-3 text-[16px] sm:text-[18px] font-medium text-slate-300 max-w-2xl leading-snug">
              Deep Learning <span className="text-sky-400">•</span> NLP <span className="text-sky-400">•</span> Computer Vision <span className="text-sky-400">•</span> Scikit-learn <span className="text-sky-400">•</span> Production Deployment
            </p>

            {/* Concise Introduction */}
            <p className="mt-4 text-[14px] sm:text-[15px] text-slate-400 leading-relaxed max-w-xl">
              Building robust end-to-end AI and machine learning systems spanning supervised learning, CNNs, NLP feature pipelines, and real-time inference APIs (Flask & Docker). Delivered clinical diagnostic engines boosting AUC-ROC to 0.91 (+13 percentage points) and automated water intelligence platforms.
            </p>

            {/* Key Metrics Strip */}
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl">
              <div className="p-3 rounded-xl bg-[#0D1117] border border-[#1C2538]">
                <div className="text-xl font-bold text-white font-mono">1+ Year</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Applied ML Exp</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1117] border border-[#1C2538]">
                <div className="text-xl font-bold text-sky-400 font-mono">0.91</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Clinical AUC-ROC</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1117] border border-[#1C2538]">
                <div className="text-xl font-bold text-white font-mono">97.8%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">NLP Accuracy</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0D1117] border border-[#1C2538]">
                <div className="text-xl font-bold text-emerald-400 font-mono">850+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">DSA Problems</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-[14px] transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30"
              >
                <span>View Featured Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D1117] hover:bg-[#141C2B] border border-[#1C2538] hover:border-slate-600 text-slate-200 font-semibold text-[14px] transition-all duration-200"
              >
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Me</span>
              </a>

              <a
                href={config.html.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0D1117] hover:bg-[#141C2B] border border-[#1C2538] hover:border-slate-600 text-slate-300 hover:text-white text-[14px] font-semibold transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={config.html.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0D1117] hover:bg-[#141C2B] border border-[#1C2538] hover:border-slate-600 text-slate-300 hover:text-white text-[14px] font-semibold transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Location & Academic Base */}
            <div className="mt-6 flex items-center gap-2 text-[13px] text-slate-400 font-medium">
              <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Moradabad, UP, India</span>
              <span className="text-slate-600">•</span>
              <span>B.Tech in Computer Science & Engineering (2023–2027)</span>
            </div>
          </motion.div>

          {/* Right Column: Elegant AI/ML Neural Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="w-full max-w-[580px] lg:max-w-none">
              <NeuralCanvas />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
