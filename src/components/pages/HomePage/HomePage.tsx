import React from "react";
import HeroSection from "./HeroSection";
import CodeEditor from "./CodeEditor";
import Projects from "./Projects";
import Experience from "./Experience";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center px-[min(4vh,4vh)] pb-8 pt-3 max-lg:px-[min(6vh,6vh)] max-sm:px-[min(2vh,2vh)]">
      <HeroSection />
      <CodeEditor />
      <Projects />
      <Experience />
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
