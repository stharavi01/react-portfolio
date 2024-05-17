import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import SideNavbar from "./components/SideNavbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./index.css";

const App = () => {
	const scrollRef = useRef(null);

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: true,
		});

		return () => {
			scroll.destroy();
		};
	}, []);

	return (
		<div data-scroll-container ref={scrollRef}>
			<SideNavbar />
			<Home data-scroll-section />
			<Projects data-scroll-section />
			<Experience data-scroll-section />
			<Contact data-scroll-section />
		</div>
	);
};

export default App;
