import React from "react";
import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import { type IBootcamp } from "~/data/bootcamps";

type Props = {
  bootcamp: IBootcamp;
  variants: Variants;
};

const BootcampCard: React.FC<Props> = (props) => {
  const { bootcamp, variants } = props;

  return (
    <motion.div
      variants={variants}
      className="project-card perspective-10 min-h-[24rem] w-full max-w-[22rem] bg-transparent max-sm:max-w-[22rem]"
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
          <div className="project-card-front__inner relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-bg-primary">
            <div className="project-card-front__image-div relative">
              <Image
                src={bootcamp.image}
                alt="Project-Screenshot"
                width={200}
                height={200}
                className="block w-full object-fill shadow-sm"
              />
              <span className="absolute right-[5%] top-full -translate-y-[50%] rounded-3xl bg-gradient-to-br from-black-secondary to-black-primary p-[2px_1.2rem] text-lg text-[#fff] ">
                {bootcamp.title}
              </span>
            </div>
            <div className="project-card-front__tech-stack my-auto flex flex-col gap-5 px-5 py-4 ">
              {/* ///////////////////////// */}
              <span className="grid-[2fr_1fr] grid items-start gap-2 text-left text-sm">
                <span className="flex text-sm">Name:</span>
                {bootcamp.name}
              </span>
              <span className="grid-[2fr_1fr] grid items-center gap-2 text-left text-sm">
                <span className="flex text-sm">Course Length:</span>
                {bootcamp.courseLength} Hours
              </span>
              <span className="grid-[2fr_1fr] grid items-center gap-2 text-left text-sm">
                <span className="flex text-sm">Time Spent:</span>
                {bootcamp.timeSpent}
              </span>
              <span className="grid-[2fr_1fr] fdsa  grid items-center gap-2 text-left text-sm">
                <span className="flex w-1/2  text-sm">Author:</span>
                {bootcamp.author}
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
              <p className="detail mt-3 text-sm">{bootcamp.description}</p>
            </div>
            <div className="project-links mt-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="btn-secondary mx-auto my-2 rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary px-4 py-0.5 text-[#fff]"
              >
                <a href={bootcamp.link} target="_blank">
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

export default BootcampCard;
