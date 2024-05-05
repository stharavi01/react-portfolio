import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SideNavbar from "../src/components/SideNavbar";

const App = () => {
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
