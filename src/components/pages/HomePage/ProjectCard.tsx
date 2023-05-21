import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import Image, { type StaticImageData } from "next/image";
import { type Variants, motion } from "framer-motion";

type Props = {
  project: {
    title: string;
    techStack: string[];
    timeSpent: string;
    responsive: boolean;
    link: string;
    image: StaticImageData;
    projectDescription: string;
    conceptsCovered: string[];
  };
  variants: Variants;
};

const ProjectCard: React.FC<Props> = (props) => {
  const { project, variants } = props;

  return (
    <motion.div
      variants={variants}
      className="project-card perspective-10 min-h-[22rem] w-full max-w-[22rem] bg-transparent max-sm:max-w-[22rem]"
    >
      <div
        className="project-card-inner relative h-full w-full text-center hover:rotate-rotateY"
        style={{
          perspective: "100px",
          transformStyle: "preserve-3d",
          transition: "transform .8s",
        }}
      >
        <div
          className="project-card-front absolute h-full w-full rounded-lg shadow-primary"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="project-card-front__inner flex h-full w-full flex-col overflow-hidden rounded-lg bg-bg-primary">
            <div className="project-card-front__image-div relative">
              <Image
                src={project.image}
                alt="Project-Screenshot"
                width={200}
                height={200}
                className="block w-full object-fill shadow-sm"
              />
              <span className="absolute right-[5%] top-full -translate-y-[50%] rounded-3xl bg-gradient-to-br from-black-secondary to-black-primary p-[2px_1.2rem] text-lg text-[#fff] ">
                {project.title}
              </span>
            </div>
            <div className="project-card-front__tech-stack my-auto flex flex-col gap-5 px-5 py-4 ">
              <span className="flex items-center gap-2 text-left text-sm">
                <span className="flex items-center gap-2 text-left text-sm">
                  {/* <ImStack />: */}
                  Tech Stack:
                </span>
                {project.techStack.map((e) => e)}
              </span>
              {/* ///////////////////////// */}
              <span className="flex items-center gap-2 text-left text-sm">
                <span className="flex items-center gap-2 text-left text-sm">
                  Time Spent:
                </span>
                {project.timeSpent}
              </span>
              <span className="flex items-center gap-2 text-left text-sm">
                <span className="flex items-center gap-2 text-left text-sm">
                  Responsive:
                </span>
                {project.responsive ? (
                  <BsCheck2All size={18} />
                ) : (
                  <IoCloseOutline size={18} />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          className="project-card-back  absolute w-full rounded-lg shadow-primary"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="project-card-back__inner flex h-[21rem]  flex-col p-5 px-7">
            <div className="project-details">
              <span className="bg-gradient-to-br  from-black-secondary to-black-primary bg-clip-text text-xl font-medium text-transparent">
                Project Description:
              </span>
              <p className="detail mt-3 text-sm">
                {project.projectDescription}
              </p>
            </div>
            <div className="project-links mt-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="btn-secondary mx-auto my-2 rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary px-4 py-0.5 text-[#fff]"
              >
                <a href={project.link} target="_blank">
                  View Project
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
