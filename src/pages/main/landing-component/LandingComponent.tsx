import {
  TbMapPin,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
} from "react-icons/tb";
import johnnyImage from "../../../assets/johnny-fine-line.webp";

const LandingComponent = () => {
  const _renderHeading = () => {
    return (
      <div className="flex flex-col items-start justify-center gap-4">
        <p className="text-2xl">Hi there, I'm</p>
        <h1 className="text-7xl font-bold" font-roboto>
          Johnny Olszewski
        </h1>
        <div className="flex flex-row text-2xl gap-2">
          <h2 className="">iOS Engineer</h2>
          <h2 className="">Full Stack Developer</h2>
          <h2 className="">Marine Corps Veteran</h2>
        </div>
      </div>
    );
  };

  const _renderDetails = () => {
    return (
      <div className="flex flex-col items-start justify-center gap-6">
        <p className="text-2xl text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-row items-center gap-1">
          <TbMapPin className="text-gray-400" />
          <p>San Diego, CA</p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="p-2 rounded-full border border-gray-400 hover:border-gray-600 transition-colors cursor-pointer">
            <TbBrandGithub className="text-gray-600 text-xl" />
          </div>
          <div className="p-2 rounded-full border border-gray-400 hover:border-gray-600 transition-colors cursor-pointer">
            <TbBrandLinkedin className="text-gray-600 text-xl" />
          </div>
          <div className="p-2 rounded-full border border-gray-400 hover:border-gray-600 transition-colors cursor-pointer">
            <TbMail className="text-gray-600 text-xl" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full min-h-[90vh] flex flex-row items-center justify-center">
      <div className="max-w-2xl flex flex-col items-start justify-center gap-4">
        {_renderHeading()}
        {_renderDetails()}
      </div>
      <div className="flex">
        <img src={johnnyImage} alt="Johnny Olszewski" className="w-[50vh]" />
      </div>
    </div>
  );
};

export default LandingComponent;
