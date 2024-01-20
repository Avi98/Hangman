import React from "react";
import { motion } from "framer-motion";

export const Legs = () => {
  return (
    <motion.g id="legs">
      <line x1="100" y1="105" x2="75" y2="135" stroke="black" strokeWidth="4" />
      <line
        x1="100"
        y1="105"
        x2="125"
        y2="135"
        stroke="black"
        strokeWidth="4"
      />
    </motion.g>
  );
};
