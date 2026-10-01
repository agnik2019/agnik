import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function motionOff() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Page({ children }) {
  if (motionOff()) {
    return <main className="page">{children}</main>;
  }

  return (
    <motion.main
      className="page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {children}
    </motion.main>
  );
}
