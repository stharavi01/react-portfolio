import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CosymartImage from "./src/assets/cozymart.png";
import JobPortalImage from "./src/assets/JobPortal.png";
import GameImage from "./src/assets/game.png";
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";



export const links = [
    {
        name: "About",
        number: "01",
        hash: "#about",
    },
    {
        name: "Experience",
        number: "02",
        hash: "#experience",
    },
    {
        name: "Skills",
        number: "03",
        hash: "#skills",
    },
    {
        name: "Projects",
        number: "04",
        hash: "#projects",
    },
    {
        name: "Contact",
        number: "05",
        hash: "#contact",
    },
];

export const socials = [
    {
        name: "github",
        icon: React.createElement(FaGithub),
        link: "https://github.com/stharavi01"
    },
    {
        name: "linkedIn",
        icon: React.createElement(FaLinkedinIn),
        link: "https://www.linkedin.com/in/rabin-shrestha-077000245/"
    },
    {
        name: "instagram",
        icon: React.createElement(FaInstagram),
        link: "https://www.instagram.com/stha_ravi01/"
    },
    {
        name: "youtube",
        icon: React.createElement(FaYoutube),
        link: "https://www.youtube.com/channel/UCKdhV0dNYBOPSWn3vAzDeSg"
    },
];

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        // icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        // icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        // icon: React.createElement(FaReact),
        date: "2021 - present",
    },
];

export const projectsData = [
    {
        title: "CosyMart",
        description:
            "I developed a sophisticated furniture e-commerce store. This project boasts an aesthetically pleasing UI, reusable components, robust login validation, and a seamless navigation experience across multiple pages.",
        tags: ["React", "React Router", "Redux Toolkit", "Tailwind CSS", "React Query"],
        imageUrl: CosymartImage,
    },
    {
        title: "JobPortalImage",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: JobPortalImage,
    },
    {
        title: "Apple Website",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: GameImage,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: GameImage,
    },
];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
];