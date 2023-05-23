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
