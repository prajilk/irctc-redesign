"use client";

import { useRef } from "react";
import HolidayCard from "./holiday-card";
import { motion, useScroll, useTransform } from "framer-motion";

const HolidayPlan = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
      }}
      ref={ref}
      className="container mt-10 flex flex-col items-center justify-center md:mt-32"
    >
      <h1 className="mb-10 text-xl font-semibold text-white md:text-3xl">
        Plan your next holiday
      </h1>
      <div className="grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-3">
        <HolidayCard />
        <HolidayCard />
        <HolidayCard />
      </div>
      <div className="mt-10 flex gap-2">
        <div className="box-content size-1.5 rounded-full border-2 border-white bg-[#2475EE]"></div>
        <div className="box-content size-1.5 rounded-full border-2 border-transparent bg-white"></div>
        <div className="box-content size-1.5 rounded-full border-2 border-transparent bg-white"></div>
      </div>
    </motion.div>
  );
};

export default HolidayPlan;
