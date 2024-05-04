import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";

const Experience = () => {
	return (
		<section id="experience" className="w-full h-full bg-lightBlack my-[7rem]">
			{/* heading */}
			<div className="py-12">
				<p className="my-heading-white ml-12">My Experiences</p>
				<div className="white-underline"></div>{" "}
			</div>
			<Skills />
			<Timeline />
		</section>
	);
};

export default Experience;
