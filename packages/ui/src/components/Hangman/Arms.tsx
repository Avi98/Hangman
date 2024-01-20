import React from "react";
import { motion, useAnimation } from "framer-motion";

export const Arms = () => {
  const controls = useAnimation();

  const animateArms = async () => {
    await controls.start({ opacity: 1 });
    // Add more animation sequences for the arms if needed
  };

  React.useEffect(() => {
    animateArms();
  }, []);

  return (
    <motion.g id="arms" initial={{ opacity: 0 }} animate={controls}>
      <line
        x1="100"
        y1="70"
        x2="79.99999994999999"
        y2="105"
        stroke="black"
        strokeWidth="4"
        id="right-arm"
      />
      <line
        x1="100"
        y1="70"
        x2="120"
        y2="105"
        stroke="black"
        strokeWidth="4"
        id="left-arm"
      />
    </motion.g>
  );
};
