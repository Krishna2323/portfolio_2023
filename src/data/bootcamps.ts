export const bootcamps = [
  {
    title: "JavaScript",
    name: "The Complete JavaScript Course: From Zero to Expert!",
    image: "https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg",
    author: "Jonas Schmedtmann",
    courseLength: 69,
    timeSpent: "3 Months",
    link: "https://www.udemy.com/course/the-complete-javascript-course/",
    description: "asa",
  },
  {
    title: "Web Development",
    name: "The Complete Web Development Bootcamp",
    image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg",
    author: "Dr. Angela Yu",
    courseLength: 65,
    timeSpent: "3 Months",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    description: "asa",
  },
  {
    title: "React",
    name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    image: "https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg",
    author: "Maximilian Schwarzmüller",
    courseLength: 48,
    timeSpent: "2 Months",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    description: "asa",
  },
  {
    title: "Next.js",
    name: "Next.js & React - The Complete Guide (incl. Two Paths!)",
    image: "https://img-c.udemycdn.com/course/480x270/3873464_403c.jpg",
    author: "Maximilian Schwarzmüller",
    courseLength: 25,
    timeSpent: "1.5 Months",
    link: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
    description: "asa",
  },
  {
    title: "Typescript",
    name: "Typescript: The Complete Developer's Guide",
    image: "https://img-c.udemycdn.com/course/480x270/2337318_abfd_5.jpg",
    author: "Stephen Grider",
    courseLength: 27,
    timeSpent: "1 Months",
    link: "https://www.udemy.com/course/typescript-the-complete-developers-guide",
    description: "asa",
  },
  {
    title: "Node.js",
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2023",
    image: "https://img-c.udemycdn.com/course/480x270/1672410_9ff1_5.jpg",
    author: "Jonas Schmedtmann",
    courseLength: 42,
    timeSpent: "2 Months",
    link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
    description: "asa",
  },
  {
    title: "HTML & CSS",
    name: "Build Responsive Real-World Websites with HTML and CSS",
    image: "https://img-c.udemycdn.com/course/480x270/437398_46c3_10.jpg",
    author: "Jonas Schmedtmann",
    courseLength: 37.5,
    timeSpent: "2 Months",
    link: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
    description: "asa",
  },
  {
    title: "Advanced CSS",
    name: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    image: "https://img-c.udemycdn.com/course/750x422/1026604_790b_2.jpg",
    author: "Jonas Schmedtmann",
    courseLength: 28.5,
    timeSpent: "1.5 Months",
    link: "https://www.udemy.com/course/advanced-css-and-sass",
    description: "asa",
  },
  {
    title: "DSA",
    name: "JavaScript Algorithms and Data Structures Masterclass",
    image: "https://img-c.udemycdn.com/course/750x422/1406344_1d65_3.jpg",
    author: "Colt Steele",
    courseLength: 22,
    timeSpent: "2 Months",
    link: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass",
    description: "asa",
  },
];

export type IBootcamp = {
  title: string;
  name: string;
  image: string;
  author: string;
  courseLength: number;
  timeSpent: string;
  link: string;
  description: string;
};
