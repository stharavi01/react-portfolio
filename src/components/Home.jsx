import { BsArrowDown } from "react-icons/bs";
import Navbar from "./Navbar";
import LocalTime from "../utility/LocalTime";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const animateElement = (elementId, delay, yValue) => {
	gsap.from(`#${elementId}`, {
		opacity: 0,
		y: yValue,
		delay,
		ease: "power1.inOut",
	});
};

const Home = () => {
	useGSAP(() => {
		animateElement("text1", 0.8, 100);
		animateElement("text2", 0.8, 100);
		animateElement("text3", 1, 200);
		animateElement("aboutText", 1.3, 200);
	}, []);

	return (
		<>
			<Navbar />
			<section
				id="headings"
				className="h-[95vh] md:h-screen w-full relative px-5 md:px-10 bg-black text-darkWhite"
				data-scroll-section>
				<div className="heading-container">
					<div className="text-[6rem] py-5 lg:text-[18.5rem] font-BebasNeue lg:tracking-[-0.4rem] sm:tracking-normal leading-none flex flex-col">
						<div>
							<div
								id="text1"
								className="inline-block"
								data-scroll
								data-scroll-speed="0.1">
								<span className="text-hover">F</span>
								<span className="text-hover">R</span>
								<span className="text-hover">O</span>
								<span className="text-hover">N</span>
								<span className="text-hover">T</span>
							</div>
							<div
								id="text2"
								className="block lg:inline-block"
								data-scroll
								data-scroll-speed="0.13">
								<span className="text-hover">-</span>
								<span className="text-hover">E</span>
								<span className="text-hover">N</span>
								<span className="text-hover">D</span>
							</div>
						</div>
						<div
							id="text3"
							className="flex flex-row flex-wrap md:flex-row sm:flex-col md:mt-[-2rem]"
							data-scroll
							data-scroll-speed="-0.13">
							<span className="text-hover">D</span>
							<span className="text-hover">E</span>
							<span className="text-hover">V</span>
							<span className="text-hover">E</span>
							<span className="text-hover">L</span>
							<span className="text-hover">O</span>
							<span className="text-hover">P</span>
							<span className="text-hover">E</span>
							<span className="text-hover">R</span>
						</div>
					</div>

					{/* About section */}
					<div
						id="aboutText"
						className="w-[90%] md:w-[50%] lg:w-[18rem] flex-end lg:absolute right-12 bottom-[6rem] md:tracking-[-1.3px]">
						{/* About content */}
						<div data-scroll data-scroll-speed="-0.1">
							<span className="uppercase font-light items-baseline mr-2">
								About
							</span>
							<span className="text-lg font-semibold text-lightWhite leading-none">
								I am a developer based in Kathmandu, Nepal passionate about
								crafting ideas, visuals, and typography into unforgettable
								digital experiences. With over a year of experience, I bring a
								unique blend of design and development skills to every project.
								My main focus is ReactJs and NextJs but I'm open to learning new
								things.
							</span>
							{/* Local time */}
							<a href="#experience">
								<div className="mt-10 md:mt-4 flex items-center justify-between">
									<LocalTime />
									<BsArrowDown size={20} className="text-hover mt-4" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
