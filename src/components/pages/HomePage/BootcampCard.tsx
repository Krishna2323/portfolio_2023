import React from "react";
import Image from "next/image";
import { type Variants, motion } from "framer-motion";
import { type IBootcamp } from "~/data/bootcamps";

type Props = {
  bootcamp: IBootcamp;
  variants: Variants;
};

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    rotate: -10,
    opacity: 0.4,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const BootcampCard: React.FC<Props> = (props) => {
  const { bootcamp } = props;

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="perspective-10 min-h-[32rem] w-full max-w-[22rem] bg-transparent max-sm:max-w-[22rem]"
    >
      <div className="relative h-full w-full text-center">
        <div
          className="absolute h-full w-full rounded-lg shadow-primary transition-all hover:scale-[1.05]"
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
            <div className="project-card-front__tech-stack my-auto grid grid-cols-[max-content_1fr] flex-col gap-x-8 gap-y-5 px-5 py-4 text-left text-sm max-md:px-2 ">
              {/* ///////////////////////// */}
              {/* <span className="grid items-start gap-2 text-left text-sm"> */}
              <span className="flex text-sm">Name:</span>
              {bootcamp.name}
              {/* </span> */}
              {/* <span className="grid items-center gap-2 text-left text-sm"> */}
              <span className="flex text-sm">Course Length:</span>
              {bootcamp.courseLength} Hours
              {/* </span> */}
              {/* <span className="grid items-center gap-2 text-left text-sm"> */}
              <span className="flex text-sm">Time Spent:</span>
              {bootcamp.timeSpent}
              {/* </span> */}
              {/* <span className="grid items-center gap-2 text-left text-sm"> */}
              <span className="flex  text-sm">Author:</span>
              <span>{bootcamp.author}</span>
              {/* </span> */}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="btn-secondary mx-auto my-1 mb-4  w-fit rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary px-4 py-0.5 text-[#fff]"
            >
              <a href={bootcamp.link} target="_blank">
                View Project
              </a>
            </motion.button>
          </div>
        </div>
        <div
          className="project-card-back absolute  h-full w-full rounded-lg shadow-primary"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="project-card-back__inner flex h-[21rem]  flex-col p-5 px-7">
            <div className="project-details">
              <span className="bg-gradient-to-br  from-black-secondary to-black-primary bg-clip-text text-xl font-medium text-transparent">
                Project Description:
              </span>
              <p className="detail mt-3 text-sm">{bootcamp.description}</p>
            </div>
            <div className="project-links mt-auto"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BootcampCard;
