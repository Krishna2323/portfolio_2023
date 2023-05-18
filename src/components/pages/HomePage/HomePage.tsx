import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techIconsLeft, techIconsRight } from "./TechIcons";

const HomePage = () => {
  const [animateText, setAnimateText] = useState(false);
  const [ref, inView] = useInView();

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.1,
      },
      opacity: 1,
    },
    closed: {
      opacity: 0,
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
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  const itemVarient2 = {
    open: {
      scale: 1,
      opacity: 1,
    },
    closed: {
      scale: 0,
      opacity: 0,
    },
  };

  const iconsVarientLeft = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: -500,
      opacity: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  const iconsVarientRight = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: 500,
      opacity: 0,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  useEffect(() => {
    if (inView) {
      setAnimateText(true);
    }
  }, [inView]);

  return (
    <div className="relative flex justify-center p-16 pb-24">
      <motion.div
        initial={false}
        animate={animateText ? "open" : "closed"}
        variants={variants}
        ref={ref}
        transition={{ duration: 0.5 }}
        onAnimationEnd={() => {
          console.log("EDN");
        }}
        className="relative flex w-1/2 flex-col items-center justify-center gap-5 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text pt-12 text-center font-normal text-transparent"
      >
        <motion.span
          variants={itemVarient}
          className="bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-3xl text-transparent"
        >
          Hello
        </motion.span>
        <motion.span
          variants={itemVarient}
          className="bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-4xl text-transparent"
        >
          I&apos;m Krishna
        </motion.span>{" "}
        <motion.h2
          variants={itemVarient}
          className="bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-4xl text-transparent"
        >
          Full-Stack Developer
        </motion.h2>
        <motion.h2
          variants={itemVarient}
          className="bg-gradient-to-br from-blue-secondary to-blue-primary bg-clip-text text-5xl text-transparent"
        >
          Expert in Front-End Dev{" "}
        </motion.h2>{" "}
        <motion.p
          variants={itemVarient}
          className="text-md bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-transparent"
        >
          Results-oriented full stack developer with a demonstrated track record
          of building robust and scalable applications over the past 3-4 years.
          A former commerce student who embarked on a self-taught journey into
          the world of full stack development, I bring a unique blend of
          analytical thinking and creativity to my work. With a keen eye for
          detail and a passion for delivering exceptional user experiences, I
          thrive in collaborative environments where I can contribute my
          problem-solving skills to overcome technical challenges.{" "}
        </motion.p>{" "}
        {/* TECH ICONS  */}
        <motion.div
          variants={iconsVarientLeft}
          className="absolute -left-full top-28 flex  w-full justify-end gap-12 pr-16"
        >
          {techIconsLeft.map((icons, i) => (
            <div className="flex flex-col justify-evenly  gap-20" key={i}>
              {icons.map((icon) => (
                <div
                  key={icon.color}
                  className="flex h-fit  items-center justify-center rounded-full bg-bg-primary  p-[3px] shadow-primary"
                >
                  <div className="p-1">
                    <icon.icon fill={icon.color} size={36} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={iconsVarientRight}
          className="absolute -right-full top-28 flex  w-full justify-start gap-12 pl-16"
        >
          {techIconsRight.map((icons, i) => (
            <div key={i} className="flex flex-col justify-evenly gap-20">
              {icons.map((icon) => (
                <div
                  key={icon.color}
                  className="flex h-fit  items-center justify-center rounded-full bg-bg-primary  p-[3px] shadow-primary"
                >
                  <div className="p-1">
                    <icon.icon fill={icon.color} size={36} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        {/* PROJECT IMAGES */}
        <motion.div
          variants={itemVarient2}
          className="bg-red relative mt-8 h-[min(30vh,13vw)] w-[min(60vh,25vw)]"
        >
          <Image
            src={"/hero-section/Trillo.png"}
            width={200}
            height={400}
            alt="project screenshot"
            className="absolute -left-[55%] top-0 h-full w-full rounded-lg shadow-xl"
          />
          <Image
            src={"/hero-section/Forkify.png"}
            width={200}
            height={400}
            alt="project screenshot"
            className="absolute -right-[55%] top-0 h-full w-full rounded-lg shadow-xl"
          />
          <Image
            src={"/hero-section/Bankist.png"}
            width={200}
            height={400}
            alt="project screenshot"
            className="absolute left-[50%] top-[30%] h-full w-full translate-x-[-50%] rounded-lg shadow-xl"
          />
        </motion.div>
      </motion.div>
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
