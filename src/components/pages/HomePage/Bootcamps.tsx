import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BootcampCard from "./BootcampCard";
import { bootcamps } from "~/data/bootcamps";

const Bootcamps = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVarient = {
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 200,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
  };
  return (
    <div className="mt-14 flex w-full flex-col items-center p-8" ref={ref}>
      <h2 className="mb-14 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-center text-4xl text-transparent max-sm:text-3xl">
        Bootcamps
      </h2>
      <motion.div
        variants={variants}
        initial={false}
        animate={startAnimation ? "open" : "closed"}
        transition={{ duration: 0.5 }}
        className="grid w-full grid-cols-[repeat(3,1fr)] justify-items-center gap-20 max-xl:grid-cols-[repeat(2,1fr)] max-xl:gap-14 max-sm:grid-cols-[repeat(1,1fr)]"
      >
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
