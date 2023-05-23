import Omnifood from "../../public/hero-section/Omnifood.png";
import Forkify from "../../public/hero-section/Forkify.png";
import Bankist from "../../public/hero-section/Bankist.png";
import Trillo from "../../public/hero-section/Trillo.png";
import Natours from "../../public/hero-section/Natours-CSS.png";
import Nexter from "../../public/hero-section/Nexter.png";
import Portfolio from "../../public/hero-section/Portfolio.png";
import { type StaticImageData } from "next/image";

export const projects = [
  {
    title: "Portfolio 2022",
    techStack: ["React, ", "CSS/SCSS, ", "Redux"],
    timeSpent: "2 Week",
    responsive: true,
    link: "https://krishna2323.github.io/",
    image: Portfolio,
    projectDescription:
      "This is my portfolio which I had build in Dec 2022. It also includes all my project and a responsive reusme. It has a feature where you can browse all my projects without changing the browser tab.",
  },
  {
    title: "Omnifood",
    techStack: ["HTML, ", "CSS/SCSS, ", "JavaScript "],
    timeSpent: "1 Week",
    responsive: true,
    link: "https://lively-kleicha-55527e.netlify.app/",
    image: Omnifood,
    projectDescription:
      "This project was focused on learning best practices with HTML, learning CSS from basics to some advanced technique and after that basics of SASS/SCSS. This project also tought me the techniques to build responsive websites using Grid/Flexbox.",
    conceptsCovered: [
      "HTML fundamentals",
      "CSS fundamentals",
      "Floats",
      "Flexbox",
      "Grids",
      "Web Design Rules",
      "Components Pattern",
      "Layout Patern",
      "Responsive Web Design",
      "Effects & Optimizations",
    ],
  },
  {
    title: "Forkify",
    techStack: ["HTML, ", "CSS/SCSS, ", "JavaScript, ", "API's"],
    timeSpent: "4 Week",
    responsive: false,
    link: "https://quiet-travesseiro-698e66.netlify.app/",
    image: Forkify,
    projectDescription:
      "This project was focused on learning JavaScript in-depth. It covered almost every concept of JavaScript. The most important concept for me was the OOP, MVC architecture, Advanced DOM, DOM updating algorithm, and asynchronous JavaScript.",
    conceptsCovered: [
      "JS Engine and Runtime",
      "Execution Contexts",
      "The Call Stack",
      "The this Keyword",
      "Primitives vs. Objects",
      "Data Structures",
      "Modern Operators",
      "call, apply and bind",
      "Numbers & Dates",
      "Array Methods",
    ],
  },
  {
    title: "Bankist",
    techStack: ["HTML, ", "CSS/SCSS, ", "JavaScript "],
    timeSpent: "1 Week",
    responsive: true,
    link: "https://magical-paprenjak-e2a068.netlify.app/",
    image: Bankist,
    projectDescription:
      "This project was focused on learning the DOM and DOM events. This project taught me how the DOM works behind the scenes. It covered important concepts like Event Propagation, Event Delegation, DOM Traversing, and The Intersection Observer API",
    conceptsCovered: [
      "Smooth Scrolling",
      "Types of Events",
      "Event Handlers",
      "Bubbling and Capturing",
      "Event Delegation",
      "Passing Arguments to Handlers",
      "The Scroll Event",
      "Lazy Loading Images",
      "Lifecycle DOM Events",
      "Efficient Script Loading",
    ],
  },
  {
    title: "Trillo",
    techStack: ["HTML, ", "CSS/SCSS, ", "JavaScript "],
    timeSpent: "1 Week",
    responsive: true,
    link: "https://lively-kleicha-55527e.netlify.app/",
    image: Trillo,
    projectDescription:
      "This project was focused on learning best practices with HTML, learning CSS from basics to some advanced technique and after that basics of SASS/SCSS. This project also tought me the techniques to build responsive websites using Grid/Flexbox.",
    conceptsCovered: [
      "HTML fundamentals",
      "CSS fundamentals",
      "Floats",
      "Flexbox",
      "Grids",
      "Web Design Rules",
      "Components Pattern",
      "Layout Patern",
      "Responsive Web Design",
      "Effects & Optimizations",
    ],
  },
  {
    title: "Natours",
    techStack: ["HTML, ", "CSS/SCSS, ", "JavaScript "],
    timeSpent: "1 Week",
    responsive: true,
    link: "https://lively-kleicha-55527e.netlify.app/",
    image: Natours,
    projectDescription:
      "This project was focused on learning best practices with HTML, learning CSS from basics to some advanced technique and after that basics of SASS/SCSS. This project also tought me the techniques to build responsive websites using Grid/Flexbox.",
    conceptsCovered: [
      "HTML fundamentals",
      "CSS fundamentals",
      "Floats",
      "Flexbox",
      "Grids",
      "Web Design Rules",
      "Components Pattern",
      "Layout Patern",
      "Responsive Web Design",
      "Effects & Optimizations",
    ],
  },
  {
    title: "Nexter",
    techStack: ["HTML, ", "CSS/SCSS, ", "JavaScript "],
    timeSpent: "1 Week",
    responsive: true,
    link: "https://lively-kleicha-55527e.netlify.app/",
    image: Nexter,
    projectDescription:
      "This project was focused on learning best practices with HTML, learning CSS from basics to some advanced technique and after that basics of SASS/SCSS. This project also tought me the techniques to build responsive websites using Grid/Flexbox.",
    conceptsCovered: [
      "HTML fundamentals",
      "CSS fundamentals",
      "Floats",
      "Flexbox",
      "Grids",
      "Web Design Rules",
      "Components Pattern",
      "Layout Patern",
      "Responsive Web Design",
      "Effects & Optimizations",
    ],
  },
];

export type IProject = {
  title: string;
  techStack: string[];
  timeSpent: string;
  responsive: boolean;
  link: string;
  image: StaticImageData | string;
  description: string;
  conceptsCovered?: undefined;
};
