import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
// images
import CosymartImage from "./src/assets/images/cozymart.png";
import JobPortalImage from "./src/assets/images/JobPortal.png";
import GameImage from "./src/assets/images/game.png";
import AppleImage from "./src/assets/images/appleImage.png";
import PortfolioImage from "./src/assets/images/PortfolioImage.png";
// videos
import Cozymart from "./src/assets/videos/Cozymart.mp4";
import Jobify from "./src/assets/videos/Jobify.mp4";
import Portfolio from './src/assets/videos/Portfolio.mp4';
import GameVideo from './src/assets/videos/GameVideo.mp4';
import Apple from "./src/assets/videos/Apple.mp4";
// background image
import Bg1 from "./src/assets/images/bg-1.jpg";
import Bg2 from './src/assets/images/bg-2.jpg';
import Bg3 from './src/assets/images/bg-3.jpg';
import Bg4 from './src/assets/images/bg-4.jpeg';
import Bg5 from './src/assets/images/bg-5.jpeg';
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
            "Cozymart is an online furniture store that offers customers a seamless shopping experience. The website showcases a wide selection of products with detailed visuals, allowing users to explore different colors and styles. Customers can authenticate their accounts, manage their carts, and easily complete purchases through a smooth checkout process.",
        tags: ["React", "Redux", "Tailwind", "DaisyUI",],
        videoUrl: Cozymart,
        imageUrl: CosymartImage,
        background: Bg1,
        link: "https://react-cozymart.netlify.app",
        githubLink: "https://github.com/stharavi01/cosyMart"
    },
    {
        title: "JobPortal Website",
        number: "02",
        description:
            "Jobster is a platform that helps users manage and track their job applications across different positions. Users can monitor the status of applications (pending, rejected, or interview) and set up profiles with ease. The platform helps users to understand their application history and performance to streamlines the job search process,",
        tags: ["React", "DaisyUI", "Tailwind", "Redux"],
        videoUrl: Jobify,
        imageUrl: JobPortalImage,
        background: Bg2,
        link: "https://jobportalnp.netlify.app",
        githubLink: "https://github.com/stharavi01/job-portal"
    },
    {
        title: "Apple Website",
        number: "03",
        description:
            "The iPhone 15 Pro website clone is a project built to learn advanced web technologies and design principles. It features smooth animations with GSAP, and uses React and Tailwind CSS for modern, visually appealing design.",
        tags: ["React", "Tailwind", "GSAP", "ThreeJS"],
        videoUrl: Apple,
        imageUrl: AppleImage,
        background: Bg3,
        link: "https://applesite-clone.netlify.app/",
        githubLink: "https://github.com/stharavi01/apple_website"
    },
    {
        title: "Portfolio Website",
        number: "04",
        description:
            "I created a stylish portfolio website using React, Tailwind CSS, and GSAP to showcase my projects. With easy navigation, polished design, and smooth animations, visitors can explore my work seamlessly. Every part of the site reflects my dedication to creativity and excellence in web development.",
        tags: ["React", "Tailwind", "GSAP"],
        videoUrl: Portfolio,
        imageUrl: PortfolioImage,
        background: Bg4,
        link: "https://applesite-clone.netlify.app/",
        githubLink: "https://github.com/stharavi01/apple_website"
    },
    {
        title: "Far From Home",
        number: "05",
        description:
            "Far From Home is a 2D platformer game developed using Java as a final year project for the BSc. CSIT curriculum. In this game the players control a character navigating levels filled with enemies and obstacles, aiming to reach the end point to progress to more challenging stages. ",
        tags: ["Java", "Aseprite", "Tiled Map"],
        videoUrl: GameVideo,
        imageUrl: GameImage,
        background: Bg5,
        link: "https://github.com/stharavi01/2D-Platformer-Game",
        githubLink: "https://github.com/stharavi01/2D-Platformer-Game"
    }

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