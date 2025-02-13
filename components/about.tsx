"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About", 0.85);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science Engineering</span>, I
        decided to pursue my passion for programming. Recently, I worked as a{" "}
        <span className="font-medium">Front-end Developer</span>, spearheading
        the creation of a comprehensive micro frontend application from
        inception to completion using my favourite stack{" "}
        <span className="font-medium">
          React, TypeScript, Material UI, Emotion CSS and React Testing Library
        </span>
        .
      </p>
      <p className="mb-3">
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out the solution to a problem. I am
        currently looking for a{" "}
        <span className="font-medium">React Front-end developer</span> role.
      </p>
      <p className="mb-3">
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and playing musical instruments. I
        also enjoy learning new things.
      </p>
    </motion.section>
  );
}

export default About;
