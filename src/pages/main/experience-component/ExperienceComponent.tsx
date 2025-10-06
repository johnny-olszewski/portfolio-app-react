import { Constants } from "./constants";
import type { Experience } from "./types";
import { motion } from "framer-motion";
import hornetImage from "../../../assets/hornet-fine-line.webp";

const ExperienceComponent = () => {
  const experiences = Constants.EXPERIENCE_DATA;

  const _renderExperience = (experience: Experience, index: number) => {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: false }}
        className="relative pl-8 pb-8 border-l-2 border-gray-300 last:pb-0 group"
      >
        <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-gray-400 border-4 border-gray-50 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-gray-400/50" />

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">{experience.title}</h3>
          <div className="text-lg text-blue-500 font-medium">
            {experience.organization}
          </div>
          <div className="text-sm text-gray-500">{experience.period}</div>
          <p className="text-gray-500 pt-2">{experience.description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full h-full min-h-screen flex flex-row items-center justify-center">
      <div className="flex">
        <img src={hornetImage} alt="F/A-18 Hornet" className="pr-12 w-[50vh]" />
      </div>
      <div className="flex flex-col">
        <h2 className="shrink-0 text-5xl font-semibold border-lime-600/30 border-b-4 w-fit">
          my journey
        </h2>
        <div className="flex flex-col gap-8 pt-8">
          {experiences.map((exp, index) => _renderExperience(exp, index))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
