import monsteraTopRight from "../../../assets/monstera-top-right.png";
import monsteraLeftEdge from "../../../assets/monstera-left-edge.png";
import type { ReactNode } from "react";

interface BackgroundComponentProps {
  children: ReactNode;
}

const BackgroundComponent = ({ children }: BackgroundComponentProps) => {
  return (
    <div className="relative flex flex-col bg-gray-50 min-h-[90vh]">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src={monsteraTopRight}
          alt="Monstera"
          className="absolute top-0 right-0 w-[40vh] opacity-50"
        />
        <img
          src={monsteraLeftEdge}
          alt="Monstera"
          className="absolute bottom-0 left-0 h-[80vh] opacity-40"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundComponent;
