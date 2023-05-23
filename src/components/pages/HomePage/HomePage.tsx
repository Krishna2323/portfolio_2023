import React from "react";
import HeroSection from "./HeroSection";
import CodeEditor from "./CodeEditor";
import Projects from "./Projects";
import { Resume } from "./Resume";
import Specs99 from "./Specs99";
import Bootcamps from "./Bootcamps";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center px-[min(8vh,8vh)] pb-8 pt-3 max-xl:px-[min(4vh,4vh)] max-sm:px-[min(2vh,2vh)]">
      <HeroSection />
      <CodeEditor />
      <Specs99 />
      <Projects />
      <Bootcamps />
      <Resume />
    </div>
  );
};

export default HomePage;
