import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lividImg from "@/public/livid.png";
import goancartImg from "@/public/goancart.png";
import secretsImg from "@/public/secrets.png";
import keeperImg from "@/public/keeper.png";
import weatherly from "@/public/weatherly.png";

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
      "I completed my 4 years graduation course with a 9.03 CGPA (Grade A+). I was also awarded a Gold Medal for my meritorious academic performance",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Goa, India",
    description:
      "I worked as a full-stack developer at PPL Goa. Developing the Goancart project from the ground up.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "React Front-end Developer",
    location: "Dublin, Ireland",
    description:
      "Worked at CBE, leading innovators in retail & hospitality technology in Europe. Providing EPoS solutions in Ireland and the UK. Developed UI components in micro frontends using React.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Weatherly",
    description:
      "With loved ones spread worldwide, I know the challenge of coordinating across time zones. That's why I made Weatherly - to simplify this and keep us all close!",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: weatherly,
    url: "https://weatherlylive.vercel.app/",
  },
  {
    title: "Livid",
    description: "Livid is a video call application with Features like: login/signup using Google, Schedule meetings, Create and join video meetings, Access and review recorded meetings.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Clerk"],
    imageUrl: lividImg,
    url: "https://livid.vercel.app/",
  },
  {
    title: "Goancart",
    description:
      "I worked as a full-stack developer on this industry project. A platform that allows its users to access a hyperlocal marketplace in Goa.",
    tags: ["React", "PHP", "MySQL", "Bootstrap", "AWS"],
    imageUrl: goancartImg,
    url: "https://www.goancart.com",
  },
  {
    title: "Secrets",
    description:
      "Developed a platform for safeguarding your secrets, featuring secure login/register methods employing encryption and hashing. Also, Integrated a 'Sign In with Google' option.",
    tags: ["javaScript", "EJS", "CSS"],
    imageUrl: secretsImg,
    url: "https://github.com/Reev28/Secret-Project",
  },
  {
    title: "Keeper",
    description:
      "Digital notepad for quickly jotting down ideas and reminders. It helps you stay organized and remember important information.",
    tags: ["React", "HTML", "CSS"],
    imageUrl: keeperImg,
    url: "https://github.com/Reev28/Keeper-App",
  },
] as const;

export const skillsData = [
  //HTML CSS
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Framer Motion",

  //JS
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "jQuery",
  "PHP",

  //TEST
  "React Testing Library",
  "Webpack",
  "Micro Frontend",

  //BACKEND
  "Node.js",
  "Express",
  "REST",
  "MySQL",
  "MongoDB",
  "PostgreSQL",

  //DEVOPS
  "Git",
  "AWS",
  "Azure",
  "Agile",
  "Scrum",
  "Vercel",
] as const;
