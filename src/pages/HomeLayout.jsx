import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SideNavbar from "../components/SideNavbar";

const HomeLayout = () => {
	// useEffect(() => {
	// 	const scroll = new locomotiveScroll({
	// 		el: document.querySelector("#main-scroll"),
	// 		smooth: true,
	// 	});

	// 	// Clean up function
	// 	return () => {
	// 		scroll.destroy();
	// 	};
	// }, []);

	return (
		<>
			<SideNavbar />
			<div id="main-scroll">
				<Home />
				<Projects />
				<Experience />
				<Contact />
			</div>
		</>
	);
};

export default HomeLayout;
