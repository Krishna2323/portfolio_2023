import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import * as HiIcons from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  closed: {
    y: 400,
    scale: 0.8,
    opacity: 0.8,
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
    <div className="flex w-full flex-col items-center">
      <div ref={ref} className="w-full rounded-2xl py-8">
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
            >
              Description
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="mx-auto mt-6 rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary px-4 py-0.5 text-[#fff]"
            >
              Video Demo
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
