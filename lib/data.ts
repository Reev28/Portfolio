import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import goancartImg from "@/public/goancart.png";
import secretsImg from "@/public/secrets.png";
import keeperImg from "@/public/keeper.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering - Computer Science",
    location: "Goa, India",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Goa, India",
    description:
      "I'm now a full-stack developer at PPL Goa working on the Goancart project.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Web Developer",
    location: "Goa, India",
    description:
      "I've completed 'The Complete 2024 Web Development Bootcamp' on Udemy. I also upskilled to React and Next.js. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Goancart",
    description:
      "I worked as a full-stack developer on this industry project for 2 years. Users can access a hyperlocal marketplace in Goa.",
    tags: ["PHP", "jQuery", "MySQL", "Bootstrap","CodeIgniter"],
    imageUrl: goancartImg,
  },
  {
    title: "Secrets",
    description:
      "Developed a platform for safeguarding your secrets, featuring secure login/register methods employing encryption and hashing. Also, Integrated a 'Sign In with Google' option.",
    tags: ["javaScript", "EJS", "CSS"],
    imageUrl: secretsImg,
  },
  {
    title: "Keeper",
    description:
      "Digital notepad for quickly jotting down ideas and reminders. It helps you stay organized and remember important information.",
    tags: ["React", "HTML", "CSS"],
    imageUrl: keeperImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "jQuery",
  "EJS",
  "PHP",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;