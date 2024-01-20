"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const Head = () => {
  const controls = useAnimation();

  const animateHead = async () => {
    await controls.start({ opacity: 1 });
    // Add more animation sequences for the head if needed
  };

  React.useEffect(() => {
    animateHead();
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
        ry="0"
        stroke="black"
        strokeWidth="4"
        fill="black"
      />
      <ellipse
        cx="106.9999995"
        cy="31"
        rx="1.5"
        ry="0"
        stroke="black"
        strokeWidth="4"
        fill="black"
      />
    </motion.g>
  );
};

const Arms = () => {
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

const Legs = () => {
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

const HungmanBody = () => {
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

const Hang = () => {
  const controls = useAnimation();

  const animateHang = async () => {
    await controls.start({ opacity: 1 });
    // Add more animation sequences for the lines or other elements if needed
  };

  React.useEffect(() => {
    animateHang();
  }, []);

  return (
    <motion.g id="hang" initial={{ opacity: 1 }} animate={controls}>
      <motion.line
        x1="25"
        y1="0"
        x2="100"
        y2="0"
        stroke="black"
        strokeWidth="4"
      />
      <motion.line
        x1="100"
        y1="0"
        x2="100"
        y2="15"
        stroke="black"
        strokeWidth="4"
      />
      <motion.line
        x1="25"
        y1="0"
        x2="25"
        y2="150"
        stroke="black"
        strokeWidth="4"
      />
      <motion.line
        x1="0"
        y1="150"
        x2="70.4"
        y2="150"
        stroke="black"
        strokeWidth="4"
      />
      <motion.line
        id="door-right"
        x1="70.4"
        y1="150"
        x2="87"
        y2="150"
        stroke="black"
        strokeWidth="4"
      />
      <motion.line
        id="door-left"
        x1="131.8"
        y1="150"
        x2="87"
        y2="150"
        stroke="black"
        strokeWidth="4"
      />
      <motion.line
        x1="131.8"
        y1="150"
        x2="150"
        y2="150"
        stroke="black"
        strokeWidth="4"
      />
    </motion.g>
  );
};

const Hangman = () => {
  // Add motion components for other SVG elements

  return (
    <motion.svg
      id="hangman-svg"
      viewBox="0 0 150 200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head />
      <HungmanBody />
      <Arms />
      <Legs />
      <Hang />
      {/* <HangFrame /> */}
    </motion.svg>
  );
};

export { Hangman };
