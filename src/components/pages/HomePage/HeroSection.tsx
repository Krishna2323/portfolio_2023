import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { techIconsLeft, techIconsRight } from "./TechIcons";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [animateText, setAnimateText] = useState(false);

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setAnimateText(true);
    }
  }, [inView]);

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
  return (
    <motion.div
      initial={false}
      animate={animateText ? "open" : "closed"}
      variants={variants}
      ref={ref}
      transition={{ duration: 0.5 }}
      className="relative mb-52 flex w-1/2 flex-col items-center justify-center gap-5 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text pt-12 text-center font-normal text-transparent max-lg:mt-6 max-lg:w-full max-lg:pt-56 max-md:gap-3 max-sm:mb-[25vw]"
    >
      <motion.span
        variants={itemVarient}
        className="bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-3xl text-transparent max-sm:text-2xl"
      >
        Hello
      </motion.span>
      <motion.span
        variants={itemVarient}
        className="bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-4xl text-transparent max-sm:text-3xl"
      >
        I&apos;m Krishna
      </motion.span>{" "}
      <motion.h2
        variants={itemVarient}
        className="bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-4xl text-transparent max-sm:text-3xl"
      >
        Full-Stack Developer
      </motion.h2>
      <motion.h2
        variants={itemVarient}
        className="bg-gradient-to-br from-blue-secondary to-blue-primary bg-clip-text text-5xl text-transparent max-sm:text-4xl"
      >
        Front-End Dev Expert
      </motion.h2>{" "}
      <motion.p
        variants={itemVarient}
        className="text-md my-6 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-transparent"
      >
        Results-oriented full stack developer with a demonstrated track record
        of building robust and scalable applications over the past 3-4 years. A
        former commerce student who embarked on a self-taught journey into the
        world of full stack development, I bring a unique blend of analytical
        thinking and creativity to my work. With a keen eye for detail and a
        passion for delivering exceptional user experiences, I thrive in
        collaborative environments where I can contribute my problem-solving
        skills to overcome technical challenges.{" "}
      </motion.p>{" "}
      {/* TECH ICONS  */}
      <motion.div
        variants={iconsVarientLeft}
        className="absolute -left-full top-28 flex w-full justify-end gap-12 pr-16 max-lg:-left-0 max-lg:-top-0 max-lg:-translate-y-full max-lg:gap-8 max-lg:pr-0"
      >
        {techIconsLeft.map((icons, i) => (
          <div
            className="flex flex-col justify-evenly gap-20  max-lg:gap-8"
            key={i}
          >
            {icons.map((icon) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                key={icon.color}
                className="flex h-fit  items-center justify-center rounded-full bg-bg-primary  p-[3px] shadow-primary"
              >
                <div className="p-1">
                  <icon.icon
                    fill={icon.color}
                    className="h-8 w-8 max-sm:h-6 max-sm:w-6"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
      <motion.div
        variants={iconsVarientRight}
        className="absolute -right-full top-28 flex w-full justify-start gap-12 pl-16 max-lg:-top-0 max-lg:right-0 max-lg:-translate-y-full max-lg:gap-8 max-lg:pl-0"
      >
        {techIconsRight.map((icons, i) => (
          <div
            key={i}
            className="flex flex-col justify-evenly gap-20 max-lg:gap-8"
          >
            {icons.map((icon) => (
              <motion.div
                key={icon.color}
                whileHover={{ scale: 1.2 }}
                className="flex h-fit  items-center justify-center rounded-full bg-bg-primary  p-[3px] shadow-primary"
              >
                <div className="p-1">
                  <icon.icon
                    fill={icon.color}
                    className="h-8 w-8 max-sm:h-6 max-sm:w-6"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
      {/* PROJECT IMAGES */}
      <motion.div
        variants={itemVarient2}
        transition={{ duration: 0.5 }}
        className="bg-red relative mt-8 h-[max(20vh,11vw)] w-[max(38vh,20vw)] max-md:mb-52 max-sm:h-[min(25vh,30vw)] max-sm:w-[70%]"
      >
        <Image
          src={"/hero-section/Trillo.png"}
          width={200}
          height={400}
          alt="project screenshot"
          className="absolute -left-[52%] top-0 h-full w-full rounded-lg shadow-xl transition-all hover:z-20 hover:scale-110 max-md:-left-[25%]"
        />
        <Image
          src={"/hero-section/Bankist.png"}
          width={200}
          height={400}
          alt="project screenshot"
          className="absolute left-[50%] top-[40%] z-10 h-full w-full translate-x-[-50%] rounded-lg shadow-xl transition-all hover:z-10 hover:scale-110 max-md:top-[80%]"
        />
        <Image
          src={"/hero-section/Forkify.png"}
          width={200}
          height={400}
          alt="project screenshot"
          className="absolute -right-[52%] top-0 h-full w-full rounded-lg shadow-xl transition-all hover:z-20 hover:scale-110 max-md:-right-[25%] max-md:top-[160%]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
