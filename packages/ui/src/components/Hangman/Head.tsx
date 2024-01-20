import React from "react";
import { motion, useAnimation } from "framer-motion";

export const Head = () => {
  const controls = useAnimation();

  const animateHead = async () => {
    await controls.start({ opacity: 1 });
    // Add more animation sequences for the head if needed
  };

  const animateSmile = async () => {
    // await controls.start({
    //   d: "M93,42 C95,47 106.9999995,47 108.9999995,42",
    // });

    //sad
    await controls.start({
      d: "M93,42 C95,37 106.9999995,37 108.9999995,42",
    });
  };

  React.useEffect(() => {
    animateHead();
    animateSmile();
  }, []);

  return (
    <motion.g id="head" initial={{ opacity: 0 }} animate={controls}>
      <circle
        cx="100"
        cy="35"
        r="20"
        stroke="black"
        strokeWidth="4"
        fill="white"
      />
      <ellipse
        cx="93"
        cy="31"
        rx="1.5"
        ry="1"
        stroke="black"
        strokeWidth="4"
        fill="black"
      />
      <ellipse
        cx="106.9999995"
        cy="31"
        rx="1.5"
        ry="1"
        stroke="black"
        strokeWidth="4"
        fill="black"
      />

      {/* Smiley path */}
      <motion.path
        d="M93,38 C95,43 106.9999995,43 108.9999995,38"
        stroke="black"
        strokeWidth="3"
        fill="none"
        initial={{ d: "M93,38 C95,38 106.9999995,38 108.9999995,38" }}
        animate={controls}
      />
    </motion.g>
  );
};
