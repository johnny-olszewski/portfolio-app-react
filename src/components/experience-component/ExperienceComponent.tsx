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
      {/* {experience.image && (
        <div className="absolute right-0 top-0 opacity-20 translate-x-full pointer-events-none">
          <Image
            src={experience.image}
            alt=""
            width={192}
            height={192}
            className="w-32 max-h-full object-contain"
          />
        </div>
      )} */}

      <div className="flex flex-col gap-1 relative z-10 max-w-2xl">
        <h3 className="text-xl font-semibold break-words">
          {experience.title}
        </h3>
        <div className="text-lg text-lime-600 font-medium break-words">
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
}

const ExperienceList = ({ experiences }: ExperienceListProps) => {
  return (
    <div className="flex flex-col gap-8 pt-8">
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} index={index} />
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
        <ExperienceList experiences={education} />
      </div>
    </div>
  );
};

export default ExperienceComponent;
