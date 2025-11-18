import { Constants } from "./constants";
import type { Experience } from "./types";
import Image from "next/image";

const ExperienceItem = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  return (
    <div
      key={index}
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

      <div className="flex flex-col gap-1 relative z-10 max-w-2xl">
        <h3 className="text-xl font-semibold break-words">
          {experience.title}
        </h3>
        <div className="text-lg text-blue-500 font-medium break-words">
          {experience.organization}
        </div>
        <div className="text-sm text-gray-500 break-words">
          {experience.period}
        </div>
        <ul className="text-gray-500 pt-2 list-disc list-inside space-y-1 break-words">
          {experience.bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="break-words">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceComponent = () => {
  const experiences = Constants.EXPERIENCE_DATA;

  return (
    <div className="w-full h-full min-h-screen flex flex-row items-center justify-center pt-48">
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
        <div className="flex flex-col gap-8 pt-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
