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
