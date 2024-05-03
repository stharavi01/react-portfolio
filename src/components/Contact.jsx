import { links, socials } from "../../data";
import LocalTime from "../utility/LocalTime";
import { IoIosArrowRoundUp } from "react-icons/io";

const Contact = () => {
	return (
		<section
			id="contact"
			className="h-screen w-full relative pt-7 px-16 text-darkGray mt-24">
			{/* Heading */}
			<div className="heading-container ">
				<p className="text-center text-lg font-bold text-darkGray leading-none">
					Got work or an offer?
				</p>
				<div className="text-[13rem] font-OverusedGrotesk-Bold text-lightBlack opacity-85 tracking-[-0.4rem] leading-none flex flex-col text-center uppercase ">
					<div>
						<span>Get</span>
						<span className="mx-10">In</span>
						<span>Touch</span>
					</div>
				</div>
				<div className="border-b-8 border-black mx-6 border-opacity-70"></div>
			</div>

			{/* Grid container */}
			<div className="grid-container grid grid-cols-[40%_60%] gap-12 pt-16 mt-6  ">
				{/* Left grid */}
				<div className="">
					<p className="border-b border-black uppercase text-bold text-lg font-OpenSauce-Bold tracking-tight">
						Navigation
					</p>
					<div className="flex flex-col mt-2 font-bold font-MontrealMedium text-darkWhite">
						{links.map((link) => (
							<a href={link.hash} className="my-[4px]">
								{link.name}
							</a>
						))}
					</div>
				</div>

				{/* Right Grid */}
				<div className="grid grid-cols-2 gap-12">
					<div>
						<p className="border-b border-black uppercase text-bold text-lg font-OpenSauce-Bold tracking-tight">
							Socials
						</p>
						<div className="flex flex-col mt-2 font-bold font-MontrealMedium text-darkWhite">
							{socials.map((social) => (
								<a href={social.link} className="my-[4px]" target="_blank">
									{social.name}
								</a>
							))}
						</div>
					</div>
					<div>
						<p className="border-b border-black uppercase text-bold text-lg tracking-tight font-OpenSauce-Bold">
							Resources
						</p>
						<div className="flex flex-col mt-2 font-bold font-MontrealMedium text-darkWhite">
							<a
								href="https://github.com/stharavi01/react-portfolio.git"
								target="_blank">
								Portfolio V2 Source Code
							</a>
							<a
								href="https://stharaviportfolio.netlify.app"
								className="my-[4px]"
								target="_blank">
								Portfolio V1.6
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Left grid*/}
				<div className="text-[4.2rem] font-OverusedGrotesk-Bold text-lightBlack opacity-80 leading-none tracking-tight flex flex-col text-left uppercase ">
					<p> &copy; {new Date().getFullYear()}</p>
					<p>Ravi Shrestha</p>
				</div>

				{/* Bottom Right grid*/}
				<div className="text-base font-bold text-lightBlack opacity-85 leading-none tracking-normal  text-left uppercase grid grid-cols-2">
					<div className="flex flex-col">
						<p className="mb-2">Local Time</p>
						<LocalTime />
					</div>
					<div className="mx-auto flex relative">
						<div className="bg-lightWhite rounded-full w-[5.5rem] h-[5.5rem] absolute flex justify-center items-center hover:bg-darkWhite transform hover:scale-105 transition-all">
							<a href="#about">
								<IoIosArrowRoundUp size={50} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contact;
