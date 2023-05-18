import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const [animateText, setAnimateText] = useState(false);
  const [ref, inView] = useInView();

  const variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
    closed: { opacity: 1 },
  };

  const itemVarient = {
    open: { x: 0 },
    closed: { x: -20 },
  };

  useEffect(() => {
    if (inView) {
      setAnimateText(true);
    }
  }, [inView]);

  return (
    <div className="relative flex justify-center p-16">
      <AnimatePresence>
        <motion.div
          initial="closed"
          animate={animateText ? "open" : "closed"}
          variants={variants}
          ref={ref}
          transition={{ duration: 0.5 }}
          className="fit relative flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text pt-12 text-center font-normal text-transparent"
        >
          <motion.span variants={itemVarient} className="text-3xl">
            Hello,
          </motion.span>
          <motion.span variants={itemVarient} className="text-4xl">
            I&apos;m Krishna,
          </motion.span>
          <motion.h2 variants={itemVarient} className="text-4xl">
            Full-Stack Developer,
          </motion.h2>
          <motion.h2
            variants={itemVarient}
            className="bg-gradient-to-br from-blue-secondary to-blue-primary bg-clip-text text-5xl text-transparent"
          >
            Expert in Front-End Dev{" "}
          </motion.h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomePage;

{
  /* <div className="grid min-h-[80vh] w-full grid-cols-[1fr_1.5fr_1fr] gap-[1px]">
        <div className="relative h-full bg-black">
          <Image
            src={"/code-editor/code-editor-ss-1.png"}
            width={"800"}
            height={"800"}
            alt="SS of Code Editor by Krishna"
            className="absolute left-0 top-0 w-full"
          />
          <Image
            src={"/code-editor/code-editor-ss-2.png"}
            width={"800"}
            height={"800"}
            alt="SS of Code Editor by Krishna"
            className="absolute left-0 top-0 w-full"
          />
        </div>
        <div className="h-full bg-black"></div>
        <div className="h-full bg-black"></div>
      </div> */
}
