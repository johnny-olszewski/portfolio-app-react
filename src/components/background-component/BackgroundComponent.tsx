"use client";

import Image from "next/image";
import type { ReactNode } from "react";

export interface BackgroundImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: string; // e.g., "w-[40vh]", "h-[80vh]"
  opacity?: number; // 0-100
  className?: string;
}

interface BackgroundComponentProps {
  children: ReactNode;
  images?: BackgroundImageConfig[];
  backgroundColor?: string;
  minHeight?: string;
}

const getPositionClasses = (position: BackgroundImageConfig["position"]) => {
  switch (position) {
    case "top-left":
      return "top-0 left-0";
    case "top-right":
      return "top-0 right-0";
    case "bottom-left":
      return "bottom-0 left-0";
    case "bottom-right":
      return "bottom-0 right-0";
  }
};

const BackgroundComponent = ({
  children,
  images,
  backgroundColor = "bg-white",
  minHeight = "min-h-[90vh]",
}: BackgroundComponentProps) => {
  // Default images for backward compatibility (used by LandingComponent)
  const defaultImages: BackgroundImageConfig[] = [
    {
      src: "/images/monstera-top-right.png",
      alt: "Monstera",
      width: 400,
      height: 400,
      position: "top-right",
      size: "w-[40vh]",
      opacity: 50,
    },
    {
      src: "/images/corner-leaves.png",
      alt: "Corner Leaves",
      width: 1024,
      height: 1024,
      position: "bottom-left",
      size: "h-[80vh] w-auto",
      opacity: 20,
    },
  ];

  const imagesToRender = images || defaultImages;

  // Convert backgroundColor class to actual color value
  const getBackgroundColor = () => {
    if (backgroundColor === "bg-white" || !backgroundColor) return "#ffffff";
    if (backgroundColor === "bg-gray-50") return "#f9fafb";
    // For other Tailwind classes, you'd need to map them
    return "#ffffff"; // default to white
  };

  return (
    <div
      className={`relative flex flex-col ${minHeight}`}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {imagesToRender.map((image, index) => {
          const positionClasses = getPositionClasses(image.position);
          const sizeClass = image.size || "";
          const customClass = image.className || "";
          const opacity =
            image.opacity !== undefined ? image.opacity / 100 : 0.5;

          return (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width || 400}
              height={image.height || 400}
              className={`absolute ${positionClasses} ${sizeClass} ${customClass}`}
              style={{ opacity }}
            />
          );
        })}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundComponent;
