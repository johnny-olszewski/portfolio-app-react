"use client";

import {
  TbMapPin,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
} from "react-icons/tb";
import Image from "next/image";
import { Constants } from "./constants";

const LandingComponent = () => {
  const _renderHeading = () => {
    return (
      <div className="relative flex flex-col items-start justify-center gap-4">
        <p className="text-2xl">Hi there, I&apos;m</p>
        <h1 className="text-7xl font-bold text-lime-800">Johnny Olszewski</h1>
        <div className="flex flex-row text-2xl gap-2">
          <h2 className="">Software Engineer.</h2>
          <h2 className="">Builder.</h2>
        </div>
      </div>
    );
  };

  const _renderDetails = () => {
    return (
      <div className="flex flex-col items-start justify-center gap-6 w-full">
        <p className="text-2xl text-gray-500">{Constants.DESCRIPTION}</p>
        <div className="flex flex-row items-center gap-2 w-full justify-between">
          <div className="flex flex-row items-center gap-2 bg-lime-100 rounded-full py-2 px-4 text-lime-800">
            <TbMapPin className="w-[24px] h-[24px]" />
            <p>{Constants.LOCATION}</p>
          </div>
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/johnny-olszewski"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Johnny Olszewski's GitHub profile"
              className="p-2 rounded-full border border-gray-400 hover:border-gray-600 transition-colors cursor-pointer"
            >
              <TbBrandGithub className="text-gray-600 text-xl " />
            </a>
            <a
              href="https://www.linkedin.com/in/johnny-olszewski-m/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Johnny Olszewski's LinkedIn profile"
              className="p-2 rounded-full border border-gray-400 hover:border-gray-600 transition-colors cursor-pointer"
            >
              <TbBrandLinkedin className="text-gray-600 text-xl" />
            </a>
            <a
              href="mailto:johnny@johnnyo.dev"
              aria-label="Send email to Johnny Olszewski"
              className="p-2 rounded-full border border-gray-400 hover:border-gray-600 transition-colors cursor-pointer"
            >
              <TbMail className="text-gray-600 text-xl" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full min-h-[100vh] flex flex-row items-center justify-center px-8 gap-12">
      <div className="relative max-w-2xl">
        <div className="absolute inset-0 -translate-x-20 -translate-y-24 bg-[#dce2d5]/40 rounded-full aspect-square h-[90%]"></div>
        <div className="relative flex flex-col items-start justify-center gap-2 p-8">
          {_renderHeading()}
          {_renderDetails()}
        </div>
      </div>
      <div className="flex flex-shrink-0">
        <div className="relative">
          <Image
            src="/images/johnny-fine-line.png"
            alt="Johnny Olszewski"
            width={500}
            height={500}
            className="w-[50vh] h-auto z-[10]"
            priority
          />

          <Image
            src="/images/signature.svg"
            alt="Johnny Olszewski"
            width={600}
            height={200}
            className="absolute bottom-0 translate-y-1/3 right-0 w-[400px] z-[100] h-auto pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
