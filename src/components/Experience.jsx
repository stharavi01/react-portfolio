import React from "react";
import About from "./About";
import Timeline from "./Timeline";

const Experience = () => {
	return (
		<section id="experience" className="w-full h-full bg-lightBlack my-[10rem]">
			{/* heading */}
			<div className="py-12">
				<p className="my-heading-white ml-12">My Experiences</p>
				<div className="white-underline"></div>{" "}
			</div>
			<About />
			<Timeline />
		</section>
	);
};

export default Experience;
