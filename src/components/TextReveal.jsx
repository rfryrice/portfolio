import React from "react";
import { motion } from "motion/react";

export default function TextReveal({
  text = "Hello from Motion + React",
  as: Tag = "h1",
}) {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // time between letters
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease: [0.21, 0.61, 0.35, 1], // nice "easeOut"
      },
    },
  };

  return (
    <motion.div
      className="text-reveal"
      initial="hidden"
      animate="show"
      variants={container}
      style={{ display: "inline-block" }}
      whileHover={{ rotate: -1 }}
    >
      <Tag style={{ margin: 0, fontWeight: 700, letterSpacing: "0.02em" }}>
        {Array.from(text).map((ch, i) => (
          <motion.span
            key={`${ch}-${i}`}
            variants={letter}
            style={{
              display: "inline-block",
              whiteSpace: ch === " " ? "pre" : "normal",
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}