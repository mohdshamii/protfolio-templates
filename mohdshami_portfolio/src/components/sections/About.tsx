import React from "react";
import { motion } from "framer-motion";

import { education, languages } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const expertisePillars = [
  {
    title: "Supervised & Ensemble ML",
    desc: "XGBoost, Random Forest, Scikit-learn pipelines, SMOTE class balancing, and rigorous Bayesian cross-validation.",
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Deep Learning & Vision",
    desc: "Convolutional Neural Networks (CNNs), Keras, transfer learning, feature extraction, and automated plant disease classification.",
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "NLP & Sentiment Pipelines",
    desc: "TF-IDF vectorisation, text preprocessing, tokenisation, sentiment classification pipelines achieving up to 97.8% benchmark accuracy.",
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "Deployment & Production APIs",
    desc: "Real-time Flask & FastAPI inference microservices, Docker containerisation, SQL data ingestion, and Git reproducible workflows.",
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
];

const About: React.FC = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      {/* Professional Narrative */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-slate-300 mt-4 max-w-4xl text-[15px] sm:text-[16px] leading-relaxed"
      >
        {config.sections.about.content}
      </motion.p>

      {/* Core Engineering Pillars */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {expertisePillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="p-6 rounded-2xl bg-[#0D1117] border border-[#1C2538] hover:border-sky-500/40 transition-all duration-300 shadow-card flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                {pillar.title}
              </h3>
              <p className="text-[13px] text-slate-400 mt-2.5 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#1C2538] flex items-center justify-between text-[11px] font-mono text-sky-400">
              <span>Production Focus</span>
              <span>0{index + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Academic Foundation Strip */}
      <motion.div
        variants={fadeIn("up", "spring", 0.35, 0.75)}
        className="mt-10 bg-[#0D1117] border border-[#1C2538] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-card"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="text-[12px] font-mono text-sky-400 tracking-wider uppercase font-semibold">
              Academic Background
            </span>
          </div>
          <h4 className="text-[20px] font-bold text-white">
            {education.degree}
          </h4>
          <p className="text-[14px] text-slate-300 mt-1">
            {education.institution}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-[13px]">
            <span className="text-emerald-400 font-mono font-medium">CGPA: {education.cgpa}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 font-mono">{education.graduation}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Moradabad, UP, India</span>
          </div>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-[#1C2538] pt-5 md:pt-0 md:pl-8 flex flex-col gap-2 w-full md:w-auto">
          <span className="text-[12px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
            Languages
          </span>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="px-3 py-1.5 rounded-lg bg-[#111726] border border-[#1C2538] text-[13px] text-slate-200"
              >
                {lang.name} <span className="text-sky-400 text-[11px] font-mono">({lang.proficiency})</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
