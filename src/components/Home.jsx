import { BsArrowDown } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import Navbar from "./Navbar";
const Home = () => {
	return (
		<>
			<Navbar />
			<section
				id="about"
				className="h-screen w-full relative pt-7 px-10 bg-black text-darkWhite">
				<div className="heading-container ">
					<div className="text-[18.5rem] font-BebasNeue tracking-[-0.4rem]  leading-none flex flex-col">
						<div>
							<span className="text-hover">F</span>
							<span className="text-hover">R</span>
							<span className="text-hover">O</span>
							<span className="text-hover">N</span>
							<span className="text-hover">T</span>
							<span className="text-hover">-</span>
							<span className="text-hover">E</span>
							<span className="text-hover">N</span>
							<span className="text-hover">D</span>
						</div>
						<div className="mt-[-2rem]">
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

					<div className="w-[18rem] flex-end absolute right-6 bottom-[6rem] tracking-[-1.3px]">
						<div>
							<span className="uppercase font-light items-baseline mr-2">
								About
							</span>
							<span className="text-lg font-semibold text-lightWhite leading-none">
								I am a developer based in Kathmandu, Nepal passionate about
								crafting ideas, visuals, and typography into unforgettable
								digital experiences. With over a year of experience I bring a
								unique blend of design and development skills to every project.
								My main focus is React.js and Next.js
							</span>
						</div>
						<a href="#experience">
							<div className="mt-8 flex items-center justify-between text-hover">
								<p className="font-bold text-lg"> Scroll Down</p>
								<GoDownload size={20} className="text-hover" />
							</div>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};
export default Home;