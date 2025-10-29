"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMeComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <div
      className="relative flex flex-row h-[30vh] overflow-hidden bg-lime-600/20"
      ref={ref}
    >
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.1 : 0.03 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/images/flash.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 h-full w-full flex items-center justify-center"
      >
        <div className="text-white text-center px-8 bg-black/40 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeComponent;
