import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GmailIcon from "~/icons/GmailIcon";
import LinkedInIcon from "~/icons/LinkedInIcon";
import TwitterIcon from "~/icons/TwitterIcon";

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
      </div>
    </footer>
  );
};

export default Footer;
