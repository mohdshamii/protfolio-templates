import { useState } from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies, skillCategories } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const TECH_GROUPS = [
  {
    id: "ml",
    label: "Machine Learning",
    items: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "Pandas", "NumPy"],
  },
  {
    id: "dl",
    label: "Deep Learning & Vision",
    items: ["Deep Learning", "Computer Vision", "NLP", "Keras", "Flask", "FastAPI"],
  },
  {
    id: "tools",
    label: "Platform & DevOps",
    items: ["Docker", "Git", "SQL (MySQL)", "Linux", "Jupyter", "Three JS"],
  },
];

const Tech = () => {
  const [activeTab, setActiveTab] = useState("ml");

  const currentGroup = TECH_GROUPS.find((g) => g.id === activeTab) || TECH_GROUPS[0];
  const displayedTech = technologies.filter((t) => currentGroup.items.includes(t.name));

  return (
    <>
      <Header useMotion={true} {...config.sections.skills} />

      {/* Domain Category Filter Tabs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        {TECH_GROUPS.map((group) => {
          const isActive = group.id === activeTab;
          return (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-4 py-2 rounded-xl text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                isActive
                  ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                  : "bg-[#0D1117] text-slate-300 border border-[#1C2538] hover:text-white hover:border-slate-600"
              }`}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      <p className="text-center text-[12px] font-mono text-slate-400 mt-3">
        Interactive 3D model decals • Drag to rotate
      </p>

      {/* 3D Interactive Balls */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-6 flex flex-row flex-wrap justify-center gap-6 sm:gap-9"
        >
          {displayedTech.map((technology) => (
            <div className="flex flex-col items-center gap-2" key={technology.name}>
              <div className="h-24 w-24 sm:h-28 sm:w-28">
                <BallCanvas icon={technology.icon} />
              </div>
              <span className="text-[12px] font-medium text-slate-300 tracking-wide text-center">
                {technology.name}
              </span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Categorized Skills Matrix */}
      <div className="mt-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Comprehensive Technical Capabilities
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className="bg-[#0D1117] border border-[#1C2538] hover:border-sky-500/35 transition-all duration-300 rounded-2xl p-6 shadow-card group"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1C2538]">
                <h4 className="text-[16px] font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {cat.category}
                </h4>
                <span className="text-[11px] font-mono text-slate-400">
                  {cat.skills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[12px] font-mono px-2.5 py-1 rounded-md bg-[#111726] border border-[#1C2538] text-slate-300 hover:text-sky-300 hover:border-sky-500/40 hover:bg-sky-500/10 transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
