import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<boolean>;
};

const variants = {
  open: { opacity: 1, scale: 1, pointerEvent: "all" },
  closed: { opacity: 0, scale: 0, pointerEvent: "none" },
};

const Modal: React.FC<Props> = (props) => {
  const { open, setOpen } = props;
  return (
    <>
      <motion.div
        animate={open ? "open" : "closed"}
        transition={{
          duration: 0.2,
        }}
        variants={variants}
        onClick={() => setOpen(false)}
        className="fixed left-0 top-0 z-[100] h-screen w-screen bg-white/30 backdrop-blur-[3px]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-t-[4px] border-blue-secondary bg-bg-primary shadow-2xl"
        >
          {props.children}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
