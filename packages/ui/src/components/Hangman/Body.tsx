import React from "react";
import { motion, useAnimation } from "framer-motion";

export const HangmanBody = () => {
  const controls = useAnimation();

  const animateLine = async () => {
    await controls.start({ opacity: 1 });

    // Add more animation sequences for the line if needed
  };

  React.useEffect(() => {
    animateLine();
  }, []);

  return (
    <motion.line
      x1="100"
      y1="55.00000000000001"
      x2="100"
      y2="105"
      stroke="black"
      strokeWidth="4"
      initial={{ opacity: 0 }}
      animate={controls}
    />
  );
};
