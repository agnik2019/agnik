import React from "react";
import { motion } from "framer-motion";
import { reveal } from "../animation";
import { useReveal } from "./useScroll";

export default function Reveal({ children, className }) {
  const [ref, controls] = useReveal();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={reveal}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
