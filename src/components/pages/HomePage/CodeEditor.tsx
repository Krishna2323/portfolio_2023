import Image from "next/image";
import React, { useEffect, useMemo, useState, Fragment } from "react";
import * as HiIcons from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Modal from "~/components/shared/Modal";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  closed: {
    y: 0,
    scale: 0.8,
    opacity: 0,
  },
};

const CodeEditor = () => {
  const [animateEditor, setAnimateEditor] = useState(false);

  const [ref, inView] = useInView({ threshold: 0.45 });
  const imagesUrl = useMemo(
    () => [
      "/code-editor/code-editor-ss-1.png",
      "/code-editor/code-editor-ss-2.png",
      "/code-editor/code-editor-ss-3.png",
      "/code-editor/code-editor-ss-4.png",
    ],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCarouselBtnPrev = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imagesUrl.length - 1);
    } else setCurrentImageIndex((prev) => prev - 1);
  };

  const handleCarouselBtnNext = () => {
    if (currentImageIndex === imagesUrl.length - 1) {
      setCurrentImageIndex(0);
    } else setCurrentImageIndex((prev) => prev + 1);
  };

  const [descriptionModal, setDescriptionModal] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimateEditor(true);
    }
  }, [inView]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (currentImageIndex === imagesUrl.length - 1) {
        setCurrentImageIndex(0);
      } else setCurrentImageIndex((prev) => prev + 1);
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [currentImageIndex, imagesUrl]);

  return (
    <>
      <div className="flex w-full flex-col items-center">
        <div ref={ref} className="w-full rounded-2xl py-8 pt-2">
          <h2 className="mb-14 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-center text-4xl text-transparent max-sm:text-3xl">
            The Code Editor That Defines My Skills
          </h2>
          <motion.div
            className="glow-on-hover relative mx-auto h-[max(45vh,45vw)] w-[max(80vh,80vw)] skew-x-3 skew-y-3 rounded-xl max-xl:w-full max-md:h-[max(30vh,30vw)]"
            initial={false}
            animate={animateEditor ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 1 }}
          >
            {imagesUrl.map((imageURL, i) => (
              <div
                key={imageURL}
                className={`absolute top-0 h-full w-full rounded-xl ${
                  currentImageIndex === i
                    ? "scale-100  opacity-100"
                    : "scale-90 opacity-0"
                }`}
                style={{
                  transition: "all .65s",
                }}
              >
                <Image
                  src={imageURL}
                  width={1200}
                  height={1000}
                  alt="Code editor by Krishna"
                  className="mx-auto h-full w-full rounded-xl"
                />
              </div>
            ))}
          </motion.div>
          <div className="my-8 flex items-center justify-center gap-2">
            <HiIcons.HiArrowSmLeft
              size={22}
              fill="#fff"
              className="mr-4 cursor-pointer rounded-full bg-gradient-to-br from-blue-secondary to-blue-primary"
              onClick={handleCarouselBtnPrev}
            />
            {imagesUrl.map((imageURL, i) => (
              <span
                key={i}
                className={`block h-2.5 w-2.5 cursor-pointer rounded-full bg-blue-secondary ${
                  currentImageIndex === i
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-70"
                }`}
                onClick={() => {
                  setCurrentImageIndex(i);
                }}
              ></span>
            ))}
            <HiIcons.HiArrowSmRight
              size={22}
              fill="#fff"
              onClick={handleCarouselBtnNext}
              className="ml-4 cursor-pointer rounded-full bg-gradient-to-br from-blue-secondary to-blue-primary"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="text-xl">Tech Stack</h3>
              <p className="text-base">
                Next.js, TypeScript, TailwindCSS, Zustand, GitHub API&apos;s
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="mx-auto mt-6 rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary px-4 py-0.5 text-[#fff]"
                onClick={() => setDescriptionModal((prev) => !prev)}
              >
                Description
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="mx-auto mt-6"
              >
                <Link
                  href={
                    "https://www.loom.com/share/6c306af48bbb4ce4bd91dd43f896f7e5"
                  }
                  target="_blank"
                  className="rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary px-4 py-[4.5px] text-[#fff]"
                >
                  Video Demo
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
        <Modal open={descriptionModal} setOpen={setDescriptionModal}>
          <h2 className="mb-8 bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-2xl font-medium text-transparent">
            Dimension Code Editor
          </h2>
          <div className="flex flex-col gap-8">
            <p>
              The Dimension Code Editor is a powerful web application built
              using Next.js, TypeScript, Tailwind CSS, Zustand, and GitHub REST
              and GraphQL APIs. It is an integral part of the Dimension project,
              which aims to provide developers with a single platform for
              managing domains, deployments, projects, and code, enhancing
              productivity and user experience with numerous integrations.
            </p>
            <p>
              The Dimension Code Editor allows users to import their GitHub
              repositories, providing a seamless integration with their existing
              codebase. Once imported, users can perform various operations on
              their code directly from the app. Key features include:
            </p>
            <ol className="flex flex-col gap-6">
              <li>
                <strong>File Management:</strong> Users can edit, view, and
                delete files within their GitHub repositories, all from the
                Dimension Code Editor. Additionally, they can create new files,
                enabling a comprehensive code editing experience.
              </li>
              <li>
                <strong>Commit and Version Control:</strong> The app allows
                users to commit changes made to files directly from the editor,
                streamlining the development workflow. Users can view the commit
                history for individual files, enabling them to track changes
                made over time. The commit history can be filtered by author,
                status checks, and dates. Furthermore, users can also access the
                commit history for the entire repository, providing a holistic
                overview of project evolution.
              </li>
              <li>
                <strong>Commit Diff and Comparison:</strong> Similar to GitHub,
                the Dimension Code Editor enables users to view the difference
                between different versions of a file. This allows for easy
                identification of changes made and aids in code review. Users
                can compare versions, view line-by-line differences, and
                understand the evolution of their code.
              </li>
              <li>
                <strong>Support for Various File Types:</strong> The code editor
                supports a wide range of file types, including images and PDFs,
                providing versatility for managing different file formats within
                the GitHub repositories.
              </li>
              <li>
                <strong>Pull Request Filtering:</strong> Users can filter pull
                requests within the Dimension Code Editor based on criteria such
                as author, assignee, and status. This functionality enables
                efficient tracking of pull requests and facilitates
                collaboration among team members.
              </li>
            </ol>
            <p>
              The Dimension Code Editor offers a comprehensive suite of
              features, allowing developers to seamlessly work with their GitHub
              repositories, manage code versions, and streamline collaboration.
              By combining the power of Next.js, TypeScript, Tailwind CSS,
              Zustand, and GitHub APIs, it provides an intuitive and efficient
              development environment within the broader Dimension platform.
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CodeEditor;
