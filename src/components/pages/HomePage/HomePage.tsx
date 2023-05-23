import React from "react";
import HeroSection from "./HeroSection";
import CodeEditor from "./CodeEditor";
import Projects from "./Projects";
import { Resume } from "./Resume";
import Specs99 from "./Specs99";
import Bootcamps from "./Bootcamps";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center px-[min(10vh,10vh)] pb-8 pt-3 max-lg:px-[min(6vh,6vh)] max-sm:px-[min(2vh,2vh)]">
      <HeroSection />
      <CodeEditor />
      <Specs99 />
      <Projects />
      <Resume />
      <Bootcamps />
      {/* <Experience /> */}
    </div>
  );
};

export default HomePage;
