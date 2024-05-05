import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CosymartImage from "./src/assets/cozymart.png";
import JobPortalImage from "./src/assets/JobPortal.png";
import GameImage from "./src/assets/game.png";
import Apple from "./src/assets/apple.mp4";
import Bg1 from "./src/assets/bg-1.jpeg";
import Bg2 from "./src/assets/bg-2.jpeg";
import Bg3 from "./src/assets/bg-3.jpeg";
import Bg4 from "./src/assets/bg-4.jpeg";
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export const links = [
    {
        name: "About",
        number: "01",
        hash: "#about",
    },
    {
        name: "Projects",
        number: "02",
        hash: "#projects",
    },
    {
        name: "Experience",
        number: "03",
        hash: "#experience",
    },
    {
        name: "Contact",
        number: "04",
        hash: "#contact",
    },
];

export const socials = [
    {
        name: "Github",
        icon: React.createElement(FaGithub),
        link: "https://github.com/stharavi01"
    },
    {
        name: "LinkedIn",
        icon: React.createElement(FaLinkedinIn),
        link: "https://www.linkedin.com/in/rabin-shrestha-077000245/"
    },
    {
        name: "Instagram",
        icon: React.createElement(FaInstagram),
        link: "https://www.instagram.com/stha_ravi01/"
    },
    {
        name: "Youtube",
        icon: React.createElement(FaYoutube),
        link: "https://www.youtube.com/channel/UCKdhV0dNYBOPSWn3vAzDeSg"
    },
];

export const experiencesData = [
    {
        title: "Pursuing BSc. CSIT",
        location: "Gongabu, Kathmandu",
        description:
            "Pursuing my bachelors degree in computer science and information technology (BSc. CSIT) at Asian School of Management & Technology.",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2019 - Present",
        type: "study"
    },
    {
        title: "ReactJs Intern ( Corpola Tech )",
        location: "Sankhamul, Kathmandu",
        description:
            "Worked as a ReactJs intern where I worked in the development of a cutting-edge educational platform using diverse arrays of technologies like React, Javascript, CSS, Semantic UI and more.",
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2024 - April 2024",
        type: "work"
    },

];

export const projectsData = [
    {
        title: "CosyMart",
        number: "01",
        description:
            "I developed a sophisticated furniture e-commerce store. This project boasts an aesthetically pleasing UI, reusable components, robust login validation, and a seamless navigation experience across multiple pages.",
        tags: ["React", "Redux", "Tailwind", "DaisyUI",],
        imageUrl: CosymartImage,
        backgroundUrl: Bg1,
    },
    {
        title: "JobPortal Website",
        number: "02",
        description:
            "Developed a job portal website with optimized dashboard for detailed job posting, enhanced filtering options and robust job management features for recruiters.",
        tags: ["React", "DaisyUI", "Tailwind", "Redux"],
        imageUrl: JobPortalImage,
        backgroundUrl: Bg2,
    },
    {
        title: "Apple Website",
        number: "03",
        description:
            "Replicated the iPhone 15 Pro website, gaining expertise in 3D animations and transitions with GSAP and Three.js while enhancing visual design and interactivity",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        videoUrl: Apple,
        backgroundUrl: Bg3,
    },
    {
        title: "Far From Home",
        number: "04",
        description:
            "Far from home is a third person game in which the players guide Alisha, a stranded explorer, through a perilous island after a shipwreck. To survive, she must scavenge resources, evade hostile threats, and uncover the island's ancient mysteries.",
        tags: ["Java", "Aesprite", "Tiled Map"],
        imageUrl: JobPortalImage,
        backgroundUrl: Bg4,
    },
];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Semantic UI",
    "Sass",
    "Prisma",
    "MongoDB",
    "SQL",
    "Redux",
    "Express",
    "GSAP",
];