import React from "react";
import { motion } from "framer-motion";

const links = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/krishnagupta23/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/web_devloving",
  },
  {
    name: "GitHub",
    link: "https://github.com/Krishna2323",
  },
];

const Footer = () => {
  return (
    <footer className="mt-14 w-full px-[min(10vh,10vh)] max-lg:px-[min(6vh,6vh)] max-sm:px-[min(2vh,2vh)]">
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl rounded-b-none py-10 shadow-primary">
        <h2 className="bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-center text-4xl text-transparent max-sm:text-3xl">
          Thanks for you precious time!
        </h2>
        <h2 className="bg-gradient-to-br from-black-secondary to-black-primary bg-clip-text text-center text-xl text-transparent max-sm:text-xl">
          Connect with me here:{" "}
        </h2>
        <div className="flex w-fit gap-2.5 text-sm ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="btn-secondary mx-auto my-2 rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary px-2  text-[#fff]"
          >
            <a href={"mailto: belivethatkg@gmail.com"} target="_blank">
              E-mail
            </a>
          </motion.button>
          {links.map((link) => (
            <motion.button
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="btn-secondary mx-auto my-2 rounded-2xl bg-gradient-to-br from-blue-secondary to-blue-primary px-2 text-[#fff]"
            >
              <a href={link.link} target="_blank">
                {link.name}
              </a>
            </motion.button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
