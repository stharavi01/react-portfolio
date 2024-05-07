import React, { useRef, useState } from "react";
import { links, socials } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SideNavbar = () => {
	// Create an array of references for the list items
	const navRefs = links.map(() => useRef(null));
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Event handler for mouse enter
	const handleMouseEnter = (ref) => {
		gsap.to(ref.current, {
			x: 25,
			duration: 0.2,
			ease: "power1.inOut",
		});
	};

	// Event handler for mouse leave
	const handleMouseLeave = (ref) => {
		gsap.to(ref.current, {
			x: 0,
			duration: 0.5,
			ease: "power1.inOut",
		});
	};

	return (
		<div className="relative h-full">
			{/* Circle background for the hamburger button */}
			<div className="bg-gray w-[3.5rem] h-[3.5rem] fixed top-3 lg:top-4 left-4 z-50 rounded-full flex items-center justify-center">
				{/* Hamburger menu button */}
				<button
					className="focus:outline-none w-full h-full flex items-center justify-center"
					onClick={toggleMenu}>
					{/* Hamburger menu icon div */}
					<div class="w-6 h-6 relative top-1">
						{/* Span elements for the hamburger and cross icons */}
						<span
							className={`block w-full h-0.5 bg-black transition-transform transform ${
								isOpen ? "rotate-45 translate-y-1.5" : ""
							}`}></span>
						<span
							className={`block w-full h-0.5 bg-black transition-opacity my-1 ${
								isOpen ? "opacity-0" : ""
							}`}></span>
						<span
							className={`block w-full h-0.5 bg-black transition-transform transform ${
								isOpen ? "-rotate-45 -translate-y-1.5" : ""
							}`}></span>
					</div>
				</button>
			</div>

			{/* Side navigation menu */}
			<div
				className={`fixed top-0 left-0 h-full flex justify-center items-center w-64 md:w-96 text-2xl lg:text-4xl font-OpenSauce-Bold tracking-wide bg-lightBlack shadow-lg z-40 transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}>
				{/* Navigation menu */}
				<ul>
					{links.map((link, index) => (
						<li
							key={link.name}
							ref={navRefs[index]}
							className="p-4 space-y-6"
							onMouseEnter={() => handleMouseEnter(navRefs[index])}
							onMouseLeave={() => handleMouseLeave(navRefs[index])}>
							<a
								href={link.hash}
								className="block p-3 rounded text-lightWhite hover:text-white">
								{link.name}
							</a>
						</li>
					))}
					<div className="flex mt-12 gap-6 ">
						{socials.map((social) => (
							<a
								key={social.name}
								href={social.link}
								target="_blank"
								rel="noopener noreferrer"
								className="transform hover:scale-125 transition">
								<span className="">{social.icon}</span>
							</a>
						))}
					</div>
				</ul>
			</div>
		</div>
	);
};

export default SideNavbar;
