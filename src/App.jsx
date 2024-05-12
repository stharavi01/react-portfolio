import React from "react";
import SideNavbar from "./components/SideNavbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
	return (
		<>
			<SideNavbar />
			<Home data-scroll-section />
			<Projects data-scroll-section />
			<Experience data-scroll-section />
			<Contact data-scroll-section />
		</>
	);
};

export default App;
