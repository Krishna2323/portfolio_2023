import React from "react";
import { motion } from "framer-motion";
import GmailIcon from "~/icons/GmailIcon";
import LinkedInIcon from "~/icons/LinkedInIcon";
import TwitterIcon from "~/icons/TwitterIcon";
import Image from "next/image";
import Modal from "./Modal";

const links = [
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/krishnagupta23/",
  },
  {
    icon: <TwitterIcon />,
    link: "https://twitter.com/web_devloving",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex w-full items-center justify-between bg-bg-primary px-[min(4vh,4vh)] py-3 shadow-primary max-sm:px-[min(2vh,2vh)] max-[350px]:flex-col max-[350px]:items-center max-[350px]:justify-center">
      <div className="mt-auto flex gap-2.5 text-sm ">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="btn-secondary flex h-10 w-10 items-center justify-center rounded-full p-2 text-[#fff]  shadow-primary"
        >
          <a href={"mailto: belivethatkg@gmail.com"} target="_blank">
            <GmailIcon />
          </a>
        </motion.button>
        {links.map((link) => (
          <motion.button
            key={link.link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="btn-secondary flex h-10 w-10 items-center justify-center rounded-full p-2 text-[#fff]  shadow-primary"
          >
            <a href={link.link} target="_blank">
              {link.icon}
            </a>
          </motion.button>
        ))}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="btn-secondary flex h-10 w-10 items-center justify-center rounded-full p-2 text-[#fff]  shadow-primary"
        >
          <a href={"mailto: belivethatkg@gmail.com"} target="_blank">
            <Image
              src="https://img.icons8.com/3d-fluency/94/null/github.png"
              alt="Github logo"
              style={{ transform: "scale(1.4)" }}
              width={32}
              height={32}
            ></Image>
          </a>
        </motion.button>
      </div>
      <span className="linear-wipe text-xl font-medium">3+ years</span>
    </nav>
  );
};

export default Navbar;
