import React from "react";
import johnnyPortrait from "../../../assets/johnny.png";

const AboutMeComponent = () => {
  return (
    <div className="flex flex-row h-[30vh] bg-lime-600/20">
      <img src={johnnyPortrait} alt="Johnny Olszewski" className="flex p-8" />
    </div>
  );
};

export default AboutMeComponent;
