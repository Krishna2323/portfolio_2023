import { type Variants } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

const techs = [
  "Data Structures & Algorithms",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "Zustand",
  "TailwindCSS",
  "SCSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Canva",
  "Photoshop",
];

const softSkils = [
  "Creativity",
  "Adaptability",
  "Continuous Learning",
  "Time management",
  "Emotional intelligence",
  "Collaboration",
];

const cardVariantsLeft: Variants = {
  offscreen: {
    x: -100,
    rotate: -10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const cardVariantsRight: Variants = {
  offscreen: {
    x: 100,
    rotate: 10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const Resume = () => {
  return (
    <div className="mt-14 flex w-full flex-col items-center py-8">
      <h2 className="mb-14 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-center text-4xl text-transparent max-sm:text-3xl">
        Responsive Resume
      </h2>
      <div className="w-full overflow-hidden rounded-2xl shadow-primary">
        <div className="relative flex w-full flex-row items-stretch overflow-hidden rounded-2xl  border-b border-blue-secondary max-lg:flex-col">
          <span className="absolute h-1.5 w-full bg-gradient-to-br from-blue-secondary to-blue-primary"></span>
          <div className="w-[25%] flex-wrap overflow-hidden border-r border-blue-secondary max-lg:flex max-lg:w-full max-lg:border-r-0">
            <motion.div
              variants={cardVariantsLeft}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-4 border-b border-blue-secondary px-4 py-5 max-lg:w-[30%] max-lg:border-r max-sm:w-full max-sm:border-r-0"
            >
              <h2 className="bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-3xl font-medium text-transparent">
                Krishna Gupta
              </h2>
              <span className="bg-gradient-to-br from-blue-secondary to-blue-primary bg-clip-text text-2xl text-transparent">
                Full-Stack Developer
              </span>
            </motion.div>
            <motion.div
              variants={cardVariantsLeft}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-1.5 border-b border-blue-secondary px-4 py-5 text-sm max-lg:w-[70%] max-sm:w-full"
            >
              <h3 className="mb-1 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-xl font-medium text-transparent">
                Personal Info
              </h3>
              <div className="flex flex-col gap-1.5 max-lg:flex-row max-lg:flex-wrap max-lg:gap-4">
                <p className="flex w-full flex-col max-lg:w-fit max-lg:flex-row">
                  <strong className="font-semibold">Phone: </strong>{" "}
                  +91-9140938115
                </p>
                <p className="flex w-full flex-col max-lg:w-fit max-lg:flex-row">
                  <strong className="font-semibold">Email: </strong>{" "}
                  belivethatkg@gmail.com
                </p>
                <p className="flex w-full flex-col max-lg:w-fit max-lg:flex-row ">
                  <strong className="font-semibold">LinkedIn: </strong>{" "}
                  https://www.linkedin.com/in/krishnagupta23
                </p>
                <p className="flex w-full flex-col max-lg:w-fit max-lg:flex-row">
                  <strong className="font-semibold">Twitter: </strong>{" "}
                  https://twitter.com/web_devloving
                </p>
                <p className="flex w-full flex-col max-lg:w-fit max-lg:flex-row ">
                  <strong className="font-semibold">Github: </strong>{" "}
                  https://github.com/Krishna2323
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariantsLeft}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-1.5 border-b border-blue-secondary px-4 py-5 text-sm"
            >
              {" "}
              <h3 className="mb-1 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-xl font-medium text-transparent">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {techs.map((techName) => (
                  <p
                    className="rounded-full bg-gradient-to-br from-black-secondary to-black-primary px-2 text-[13px] text-white"
                    key={techName}
                  >
                    {techName}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={cardVariantsLeft}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-1.5 border-b border-blue-secondary px-4 py-5 text-sm max-lg:w-full"
            >
              {" "}
              <h3 className="mb-1 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-xl font-medium text-transparent">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {softSkils.map((skill) => (
                  <p
                    className="rounded-full bg-gradient-to-br from-black-secondary to-black-primary px-2 text-[13px] text-white"
                    key={skill}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={cardVariantsLeft}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-1.5 border-blue-secondary px-4 py-5 text-sm max-lg:w-full  max-lg:border-b"
            >
              {" "}
              <h3 className="mb-1 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-xl font-medium text-transparent">
                Education
              </h3>
              <div className="flex flex-wrap gap-1.5">
                <p className="rounded-full bg-gradient-to-br from-black-secondary to-black-primary px-2 text-[13px] text-white">
                  Udemy
                </p>
                <p className="rounded-full bg-gradient-to-br from-black-secondary to-black-primary px-2 text-[13px] text-white">
                  W3Schools
                </p>
                <p className="rounded-full bg-gradient-to-br from-black-secondary to-black-primary px-2 text-[13px] text-white">
                  MDN Web Docs
                </p>
                <p className="rounded-full bg-gradient-to-br from-black-secondary to-black-primary px-2 text-[13px] text-white">
                  Youtube
                </p>
                <p className="rounded-full bg-gradient-to-br from-black-secondary to-black-primary px-2 text-[13px] text-white">
                  FreeCodeCamp
                </p>
              </div>{" "}
            </motion.div>
          </div>
          <div className="flex w-[80%] grow flex-col max-lg:w-full">
            <motion.div
              variants={cardVariantsRight}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="felx w-full flex-col gap-1.5 border-b border-blue-secondary px-4 py-5"
            >
              <h3 className="mb-2 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-xl font-medium text-transparent">
                Career Objective
              </h3>
              <p className="">
                Results-oriented full stack developer with a demonstrated track
                record of building robust and scalable applications over the
                past 3-4 years. A former commerce student who embarked on a
                self-taught journey into the world of full stack development, I
                bring a unique blend of analytical thinking and creativity to my
                work. With a keen eye for detail and a passion for delivering
                exceptional user experiences, I thrive in collaborative
                environments where I can contribute my problem-solving skills to
                overcome technical challenges.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariantsRight}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              className="flex w-full grow flex-col gap-1.5 px-4 py-5 "
            >
              <h3 className="mb-4 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-xl font-medium text-transparent">
                Experience
              </h3>
              <div className="flex h-full flex-col justify-between gap-5 max-lg:gap-8">
                <motion.p
                  variants={cardVariantsRight}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex w-full flex-col"
                >
                  <strong className="text-base font-semibold">
                    Dimension - Front-End Developer
                  </strong>
                  <strong className="mb-1 text-sm font-semibold">
                    Remote (Contract), Jan 2023 - May 2023
                  </strong>
                  Dimension is a platform where you can manage domains,
                  deployments, projects, and your code from a single, powerful
                  platform built for developer productivity and experience. The
                  code manager is completely build by me where you browse
                  through, and edit your codebase hosted on GitHub faster than
                  ever. It is the most complex project that I had worked on
                  using multiple complex library and Github REST and GraphQL
                  API&apos;s.
                </motion.p>
                <motion.p
                  variants={cardVariantsRight}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex w-full flex-col"
                >
                  <strong className="text-base font-semibold">
                    Meshery - Front-End Developer
                  </strong>
                  <strong className="mb-1 text-sm font-semibold">
                    Open Source Project, September 2022 - February 2023
                  </strong>
                  Started by solving a small but complex animation problem in
                  Cytoscape.js that was there for more than a month within 12
                  hours by reading documentations. After that I completely
                  redesigned the meshery.io website using my advanced CSS skills
                  and was recognised as valuable contributor and later given the
                  role of site maintainer, later I was offered a full-time role
                  but I was not intrested in the project so I started with
                  Dimension.
                </motion.p>
                <motion.p
                  variants={cardVariantsRight}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex w-full flex-col"
                >
                  <strong className="text-base font-semibold">
                    Data Structures & Algorithms
                  </strong>
                  <strong className="mb-1 text-sm font-semibold">
                    February 2022 - August 2022
                  </strong>
                  Spent a good amount of time solving DSA problems on HackerRank
                  after learning full-stack dev as I thought it will help me to
                  improve my problem solving skills in web dev and it has helped
                  me in efficiently store, retrieve, and manipulate data. It
                  also helps in organizing and structuring data in a way that
                  optimizes performance and reduces resource usage.
                </motion.p>
                <motion.p
                  variants={cardVariantsRight}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex w-full flex-col"
                >
                  <strong className="text-base font-semibold">
                    Freelance, Bootcamps, Side Projects
                  </strong>
                  <strong className="mb-1 text-sm font-semibold">
                    July 2019 - August 2022
                  </strong>
                  Started my journey with the complete web dev bootcamp on Udemy
                  in June 2019 and completed over 10+ courses of more than 600+
                  hours of video content till now. Took specific courses for
                  each technology to learn them in depth. While learning I made
                  over 30+ complex websites and web apps with great and
                  responsive design. I also have invested large part of my time
                  in learning Data Structures and Algorithms and practicing it,
                  I solved many problems on Hackerank & got my 5th star.
                </motion.p>
              </div>{" "}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
