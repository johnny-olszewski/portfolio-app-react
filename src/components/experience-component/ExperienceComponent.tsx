"use client";

import { Constants } from "./constants";
import type { Experience } from "./types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ExperienceItem = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale from 0.8 to 1.05 and back to 0.8 as it moves through viewport
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.85]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div
      key={index}
      ref={ref}
      style={{ scale, opacity }}
      className="relative pl-8 pb-8 border-l-2 border-gray-300 last:pb-0 group"
    >
      <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-gray-400 border-4 border-gray-50 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-gray-400/50" />

      {/* Background image at the trailing end */}
      {experience.image && (
        <div className="absolute right-0 opacity-50 translate-x-1/2 pointer-events-none">
          <Image
            src={experience.image}
            alt=""
            width={192}
            height={192}
            className="w-48 object-contain"
          />
        </div>
      )}

      <div className="flex flex-col gap-1 relative z-10">
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

const ExperienceComponent = () => {
  const experiences = Constants.EXPERIENCE_DATA;

  return (
    <div className="w-full h-full min-h-screen flex flex-row items-center justify-center">
      <div className="flex">
        <Image
          src="/images/hornet-fine-line.png"
          alt="F/A-18 Hornet"
          width={500}
          height={500}
          className="pr-12 w-[50vh]"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="shrink-0 text-5xl font-semibold border-lime-600/30 border-b-4 w-fit">
          my journey
        </h2>
        <div className="flex flex-col gap-32 pt-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
