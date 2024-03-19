"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "./service-card";
import { useRef } from "react";

const SERVICES = [
  {
    image: "/plane.png",
    label: "Flights",
  },
  {
    image: "/hotel.png",
    label: "Hotels",
  },
  {
    image: "/rail.png",
    label: "Rail Drishti",
  },
  {
    image: "/catering.png",
    label: "E-catering",
  },
  {
    image: "/bus.png",
    label: "Bus",
  },
  {
    image: "/holiday.png",
    label: "Holiday packs",
  },
  {
    image: "/train.png",
    label: "Train",
  },
  {
    image: "/hill.png",
    label: "Hill railways",
  },
  {
    image: "/train.png",
    label: "Charter train",
  },
];

function OtherServices() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
      }}
      ref={ref}
      className="flex flex-col items-center pt-[30rem] md:pt-56"
    >
      <h1 className="mb-10 text-xl font-semibold text-white md:text-3xl">
        Our other popular services
      </h1>
      <div className="flex max-w-4xl flex-wrap justify-center gap-5">
        {SERVICES.map(({ image, label }, i) => (
          <ServiceCard image={image} key={i}>
            {label}
          </ServiceCard>
        ))}
      </div>
    </motion.div>
  );
}

export default OtherServices;
