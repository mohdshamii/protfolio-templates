import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { testimonials, certifications, achievements } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.2, 0.75)}
    className="bg-[#111726] border border-[#1C2538] hover:border-sky-500/40 transition-all duration-300 w-full md:w-[340px] rounded-2xl p-7 shadow-card flex flex-col justify-between"
  >
    <div>
      <svg className="w-6 h-6 text-sky-400/50 mb-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-[14px] leading-relaxed text-slate-300">{testimonial}</p>
    </div>

    <div className="mt-6 pt-4 border-t border-[#1C2538] flex items-center justify-between gap-3">
      <div className="flex flex-1 flex-col">
        <p className="text-[14px] font-bold text-white">{name}</p>
        <p className="text-slate-400 text-[12px]">
          {designation} • {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="h-10 w-10 rounded-full object-cover border border-[#1C2538]"
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div id="credentials" className="mt-16 mx-auto max-w-7xl px-6 sm:px-16">
      {/* Certifications & Achievements Container */}
      <div className="bg-[#0D1117] border border-[#1C2538] rounded-3xl p-8 sm:p-12 shadow-card">
        <Header useMotion={true} {...config.sections.feedbacks} />

        {/* Certifications Grid */}
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Verified Professional Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="bg-[#111726] border border-[#1C2538] hover:border-sky-500/40 transition-all duration-300 rounded-xl p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400 px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/25">
                      {cert.issuer}
                    </span>
                    <span className="text-[12px] font-mono text-slate-400">{cert.year}</span>
                  </div>
                  <h4 className="text-[15px] font-semibold text-white mt-3.5 leading-snug group-hover:text-sky-300 transition-colors">
                    {cert.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Key Engineering Milestones
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((ach, index) => (
              <motion.div
                key={ach.title}
                variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                className="bg-[#111726] border border-[#1C2538] hover:border-sky-500/40 transition-all duration-300 rounded-xl p-5"
              >
                <div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 mb-3">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-[15px] font-bold text-white">{ach.title}</h4>
                <p className="text-[13px] text-slate-300 mt-1.5 leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Testimonials */}
        <div className="mt-14 pt-10 border-t border-[#1C2538]">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Recommendations & Feedback
            </h3>
          </div>
          <div className="flex flex-wrap gap-6 justify-start">
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
