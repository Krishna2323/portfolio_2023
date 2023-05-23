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

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex w-full items-center justify-between bg-bg-primary px-[min(4vh,4vh)] py-3 shadow-primary max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:px-[min(2vh,2vh)]">
      <div className="mt-auto flex gap-2.5 text-sm ">
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
      <span className="linear-wipe text-lg font-medium">3+ years</span>
    </nav>
  );
};

export default Navbar;
