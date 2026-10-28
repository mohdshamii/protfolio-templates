import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0D1117",
        color: "#F1F5F9",
        border: "1px solid #1C2538",
        borderRadius: "16px",
        boxShadow: "0 10px 30px -10px rgba(2, 6, 23, 0.7)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1C2538" }}
      date={experience.date}
      iconStyle={{
        background: "#111726",
        border: "2px solid #38BDF860",
        boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)",
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center p-2">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[75%] w-[75%] object-contain filter invert-0"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[20px] font-bold text-white tracking-tight">
          {experience.title}
        </h3>
        <p
          className="text-sky-400 text-[14px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-4 mt-5 list-disc space-y-2.5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-slate-300 pl-1 text-[13.5px] leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-12 flex flex-col">
        <VerticalTimeline lineColor="#1C2538">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
