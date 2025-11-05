"use client";

import Image from "next/image";
import type { ReactNode } from "react";

interface BackgroundComponentProps {
  children: ReactNode;
}

const BackgroundComponent = ({ children }: BackgroundComponentProps) => {
  return (
    <div className="relative flex flex-col bg-gray-50 min-h-[90vh]">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/monstera-top-right.png"
          alt="Monstera"
          width={400}
          height={400}
          className="absolute top-0 right-0 w-[40vh] opacity-50"
        />
        <Image
          src="/images/corner-leaves.png"
          alt="Corner Leaves"
          width={1024}
          height={1024}
          className="absolute bottom-0 left-0 h-[80vh] w-auto opacity-20"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundComponent;
