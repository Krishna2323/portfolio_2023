import React, { useEffect, useState } from "react";
import { projects } from "~/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
    <div className="mt-24 flex w-full flex-col items-center p-8" ref={ref}>
      <h2 className="mb-14 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-center text-4xl text-transparent max-sm:text-3xl">
        Projects
      </h2>
      <motion.div
        variants={variants}
        initial={false}
        animate={startAnimation ? "open" : "closed"}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-evenly gap-5 gap-y-16"
      >
        {projects.map((project) => (
          <ProjectCard
            variants={itemVarient}
            project={project}
            key={project.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
