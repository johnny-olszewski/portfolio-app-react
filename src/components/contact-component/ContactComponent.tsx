"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <div
      className="relative flex flex-col w-full min-h-[20vh] overflow-hidden bg-lime-600/20"
      ref={ref}
    >
      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.1 : 0.03 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/images/filipino-tattoo.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 flex flex-col w-full min-h-[20vh] items-center justify-center"
      >
        <div className="flex flex-col w-1/2 gap-4 m-10">
          <h2 className="flex text-5xl font-semibold border-gray-50 border-b-4 pb-1 w-fit">
            reach out
          </h2>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-row w-full gap-4">
              <input
                className="flex-1 bg-gray-50 rounded-md p-2"
                type="text"
                placeholder="Name"
              />
              <input
                className="flex-1 bg-gray-50 rounded-md p-2"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-row w-full">
              <textarea
                className="flex-1 resize-none bg-gray-50 rounded-md p-2"
                placeholder="Message"
                rows={4}
              />
            </div>
            <button className="bg-lime-600 text-white self-end rounded-md py-2 px-4 w-fit">
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactComponent;
