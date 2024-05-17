import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";

const tl = gsap.timeline();

tl.from(".line span", 1.8, {
	y: 100,
	ease: "power4.out",
	delay: 1,
	skewY: 7,
	stagger: {
		amount: 0.3,
	},
});

const Experience = () => {
	return (
		<section
			id="experience"
			className="w-full h-full bg-lightBlack my-[5rem] md:my-[4rem] px-5"
			data-scroll-section>
			{/* heading */}
			<div className="py-12 text-center" data-scroll data-scroll-speed="0.2">
				<p className="my-heading-white md:ml-12">My Experiences</p>
				<div className="white-underline"></div>{" "}
			</div>
			<Skills />
			<Timeline />
		</section>
	);
};

export default Experience;
