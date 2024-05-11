import Experience from "../components/Experience";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SideNavbar from "../components/SideNavbar";
import { useEffect } from "react";

const scrollRef = React.createRef();

useEffect(() => {
	const scroll = new locomotiveScroll({
		el: scrollRef.current,
		smooth: true,
	});
});
const HomeLayout = () => {
	return (
		<>
			<SideNavbar />
			<Home />
			<Projects />
			<Experience />
			<Contact />
		</>
	);
};
export default HomeLayout;
