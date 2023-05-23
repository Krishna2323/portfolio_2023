import React from "react";
import { motion } from "framer-motion";
import BootcampCard from "./BootcampCard";
import { bootcamps } from "~/data/bootcamps";

const Bootcamps = () => {
  const itemVarient = {
    offscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    onscreen: {
      y: 200,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <div className="mt-14 flex w-full flex-col items-center py-8">
      <h2 className="mb-14 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-center text-4xl text-transparent max-sm:text-3xl">
        Bootcamps
      </h2>
      <motion.div className="grid w-full grid-cols-[repeat(3,1fr)] justify-items-center gap-20 max-xl:grid-cols-[repeat(2,1fr)] max-xl:gap-14 max-md:gap-8 max-sm:grid-cols-[repeat(1,1fr)]">
        {bootcamps.map((bootcamp) => (
          <BootcampCard
            variants={itemVarient}
            bootcamp={bootcamp}
            key={bootcamp.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Bootcamps;
