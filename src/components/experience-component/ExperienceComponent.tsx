import { Constants } from "./constants";
import type { Experience } from "./types";
import Image from "next/image";

const ExperienceItem = ({
  experience,
  index,
  showTimeline = true,
}: {
  experience: Experience;
  index: number;
  showTimeline?: boolean;
}) => {
  return (
    <div
      key={index}
      className={`relative pb-8 ${
        showTimeline ? "border-l-2 border-gray-300 pl-8" : ""
      } last:pb-0 group`}
    >
      {showTimeline && (
        <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-gray-400 border-4 border-gray-50 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-gray-400/50" />
      )}

      {experience.shadowTitle && (
        <div className="absolute bottom-full right-0 mb-0 text-xl text-gray-500/50 font-semibold break-words pointer-events-none">
          <h2>{experience.shadowTitle}</h2>
        </div>
      )}

      <div
        className={`flex flex-col gap-1 relative z-10 max-w-2xl ${
          experience.shadowTitle ? "bg-lime-600/10 p-4 rounded-lg" : ""
        }`}
      >
        <h3 className="text-xl font-semibold break-words">
          {experience.title}
        </h3>
        <div className="text-lg text-lime-800 font-medium break-words">
          {experience.organization}
        </div>
        {experience.description && (
          <p className="text-gray-900 font-medium text-lg leading-relaxed break-words">
            {experience.description}
          </p>
        )}
        {experience.bullets.length > 0 && (
          <ul className="text-gray-500 pt-2 list-disc list-inside space-y-1 break-words">
            {experience.bullets.map((bullet, bulletIndex) => (
              <li key={bulletIndex} className="break-words">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

interface ExperienceListProps {
  experiences: Experience[];
  showTimeline?: boolean;
  horizontal?: boolean;
}

const ExperienceList = ({
  experiences,
  showTimeline = true,
  horizontal = false,
}: ExperienceListProps) => {
  return (
    <div
      className={`flex pt-8 ${
        horizontal ? "flex-row gap-16" : "flex-col gap-4"
      }`}
    >
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          experience={exp}
          index={index}
          showTimeline={showTimeline}
        />
      ))}
    </div>
  );
};

const ExperienceComponent = () => {
  const experiences = Constants.EXPERIENCE_DATA;
  const education = Constants.EDUCATION_DATA;

  return (
    <div className="relative w-full h-full min-h-screen flex flex-row items-center justify-center pt-48">
      {/* Green circle background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-[#dce2d5]/40 rounded-full aspect-square w-[40vh] -translate-x-24 -translate-y-48"></div>
      </div>

      <div className="relative z-10 flex">
        <Image
          src="/images/hornet-fine-line.png"
          alt="F/A-18 Hornet"
          width={500}
          height={500}
          className="pr-12 w-[50vh]"
        />
      </div>
      <div className="relative z-10 flex flex-col">
        <h2 className="shrink-0 text-5xl font-semibold border-lime-600/30 border-b-4 w-fit">
          experience
        </h2>
        <ExperienceList experiences={experiences} />
        <h2 className="shrink-0 text-5xl font-semibold border-lime-600/30 border-b-4 w-fit mt-16">
          education
        </h2>
        <ExperienceList
          experiences={education}
          showTimeline={false}
          horizontal={true}
        />
      </div>
    </div>
  );
};

export default ExperienceComponent;
