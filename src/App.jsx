import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SideNavbar from "../src/components/SideNavbar";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		// Scroll to the top of the page when the component mounts
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<SideNavbar />
			<Home />
			<Projects />
			<Experience />
			<Contact />
		</div>
	);
};
export default App;
