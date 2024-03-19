"use client";

import { useRef } from "react";
import { Button } from "../ui/button";
import Marquee from "./marquee";
import { motion, useScroll, useTransform } from "framer-motion";

const HaveQuestions = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      className="mt-32 bg-cover bg-center"
      style={{
        scale: scaleProgress,
        backgroundImage: "url(./any-questions.png)",
      }}
    >
      <div className="container flex aspect-video flex-col justify-end gap-3 pb-5 text-white md:h-96 md:justify-center md:pb-0">
        <h1 className="max-w-lg text-lg font-semibold md:text-3xl">
          Have a question or need assistance? We&apos;re here to help.
        </h1>
        <Button className="w-fit rounded-lg bg-[#2475EE] text-sm hover:bg-[#2475EE]/70 md:text-base">
          Call 14646
        </Button>
      </div>
      <Marquee />
    </motion.div>
  );
};

export default HaveQuestions;
