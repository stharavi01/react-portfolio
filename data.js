import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
// images
import CosymartImage from "./src/assets/images/cozymart.png";
import JobPortalImage from "./src/assets/images/JobPortal.png";
import GameImage from "./src/assets/images/game.png";
import AppleImage from "./src/assets/images/appleImage.png";
import PortfolioImage from "./src/assets/images/PortfolioImage.png";
import GitfolioImage from "./src/assets/images/PortfolioImage.png";

// videos
import Cozymart from "./src/assets/videos/Cozymart.mp4";
import Jobify from "./src/assets/videos/Jobify.mp4";
import Portfolio from './src/assets/videos/Portfolio.mp4';
import GameVideo from './src/assets/videos/GameVideo.mp4';
import Apple from "./src/assets/videos/Apple.mp4";
import GitfolioVideo from "./src/assets/videos/Apple.mp4";

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
        title: "Mid-Level Frontend Developer (Medex)",
        location: "Bangkok, Thailand",
        description:
            "Developed core modules for medex.co (Teleconsultation, Lab Tests, Wellness, Promotions) using React, Next.js, and TypeScript. Led the Provider Panel and internal Clinic Management System for multi-branch operations including scheduling, patient reports, WhatsApp automation, and administrative workflows. Integrated NestJS APIs, payment gateways, analytics dashboards (Recharts), and delivered responsive, pixel-perfect UIs with Tailwind, Sass, and MUI.",
        icon: React.createElement(CgWorkAlt),
        date: "June 2024 - Present",
        type: "work"
    },
    {
        title: "ReactJs Intern (Corpola Tech)",
        location: "Sankhamul, Kathmandu",
        description:
            "Worked as a ReactJs intern developing key modules of an educational platform using React, JavaScript, CSS, Semantic UI, and other technologies.",
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2024 - April 2024",
        type: "work"
    },
    {
        title: "Pursuing BSc. CSIT",
        location: "Gongabu, Kathmandu",
        description:
            "Pursuing my bachelor's degree in Computer Science and Information Technology (BSc. CSIT) at Asian School of Management & Technology.",
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2019 - Present",
        type: "study"
    }
];


export const projectsData = [
{
    title: "Gitfolio",
    number: "01",
    description:
    "Gitfolio is a full-stack project that helps developers generate professional portfolio websites from GitHub profiles. It includes GitHub/Google OAuth, AI-powered content enhancement (projects, experience, skills, bio), and a drag-and-drop portfolio builder. Users can sync repositories, customize project descriptions, visualize GitHub analytics, and deploy static portfolio pages—removing the need to manually create portfolio content.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Zustand", "React Query", "NestJS", "Prisma", "PostgreSQL", "Groq AI", "Redis"],
    videoUrl: GitfolioVideo,
    imageUrl: GitfolioImage,
    background: Bg2,
    link: "https://gitfolio-frontend.vercel.app/",
    githubLink: "https://gitfolio-api-1-o43w.onrender.com/api/docs",
    frontendGithub: "https://github.com/stharavi01/gitfolio-frontend",
    backendGithub: "https://github.com/stharavi01/gitfolio-api"
},
    {
        title: "CosyMart",
        number: "02",
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
        number: "03",
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
        number: "04",
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
        number: "05",
        description:
            "I created a stylish portfolio website using React, Tailwind CSS, and GSAP to showcase my projects. With easy navigation, polished design, and smooth animations, visitors can explore my work seamlessly. Every part of the site reflects my dedication to creativity and excellence in web development.",
        tags: ["React", "Tailwind", "GSAP"],
        videoUrl: Portfolio,
        imageUrl: PortfolioImage,
        background: Bg4,
        link: "https://stharavi.netlify.app/",
        githubLink: "rabinShrestha_resume"
    },
    {
        title: "Far From Home",
        number: "06",
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
    "HTML5",
    "CSS3",
    "Sass",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Zustand",
    "React Query",
    "Node.js",
    "Express.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "Bootstrap",
    "Semantic UI",
    "ShadCn UI",
    "GSAP",
    "Framer Motion",
    "Git",
    "GitHub",
    "GitLab",
    "Webpack",
    "Babel",
    "Postman",
];
