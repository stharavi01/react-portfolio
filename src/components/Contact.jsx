import { links, socials } from "../../data";
import LocalTime from "../utility/LocalTime";
import { IoIosArrowRoundUp } from "react-icons/io";

const Contact = () => {
	return (
		<section
			id="contact"
			className="w-full min-h-[100vh] relative pb-6 text-darkGray mt-12 md:mt-24 flex flex-col justify-center"
			data-scroll-section>
			<div className="w-full max-w-[1440px] mx-auto px-5 md:px-10">
				<div className="heading-container">
					{/* mail */}
					<div className="mb-8">
						<p
							className="text-center text-sm my-2 font-OpenSauce-Light tracking-tighter font-bold text-darkGray"
							data-scroll
							data-scroll-speed="0.08">
							Have an offer? Drop me an email:
						</p>
						<a
							href="mailto:shrestharavi06@gmail.com"
							className="cursor-pointer hover:text-red-400 transition-colors relative z-30 text-center block">
							<p
								className="text-center text-xl md:text-2xl font-OverusedGrotesk-Bold font-bold text-darkGray"
								data-scroll
								data-scroll-speed="0.1">
								shrestharavi06@gmail.com
							</p>
						</a>
					</div>

					{/* contact */}
					<div
						className="text-[3rem] md:text-[7rem] lg:text-[12.5rem] font-OverusedGrotesk-Bold text-lightBlack opacity-85 lg:tracking-[-0.4rem] leading-none flex flex-col text-center uppercase black-underline mb-12"
						data-scroll
						data-scroll-speed="0.2">
						<p className="py-4">Get in touch</p>
					</div>
				</div>

				{/* Grid container */}
				<div
					className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_30%_30%] gap-8 md:gap-12 py-6"
					data-scroll
					data-scroll-speed="0.1">
					{/* Left grid - Navigation */}
					<div>
						<p className="border-b border-black uppercase text-bold text-base md:text-lg font-OpenSauce-Bold tracking-tight pb-2">
							Navigation
						</p>
						<div className="flex flex-col mt-4 font-bold font-MontrealMedium text-darkWhite space-y-2">
							{links.map((link) => (
								<a 
									key={link.hash} 
									href={link.hash} 
									className="hover:text-red-400 transition-colors hover:translate-x-1 transform duration-200">
									{link.name}
								</a>
							))}
						</div>
					</div>

					{/* Center Grid - Socials */}
					<div>
						<p className="border-b border-black uppercase text-bold text-base md:text-lg font-OpenSauce-Bold tracking-tight pb-2">
							Socials
						</p>
						<div className="flex flex-col mt-4 font-bold font-MontrealMedium text-darkWhite space-y-2">
							{socials.map((social) => (
								<a
									key={social.link}
									href={social.link}
									className="hover:text-red-400 transition-colors hover:translate-x-1 transform duration-200"
									target="_blank"
									rel="noopener noreferrer">
									{social.name}
								</a>
							))}
						</div>
					</div>

					{/* Right column - Resources */}
					<div>
						<p className="border-b border-black uppercase text-bold text-base md:text-lg tracking-tight font-OpenSauce-Bold pb-2">
							Resources
						</p>
						<div className="flex flex-col mt-4 font-bold font-MontrealMedium text-darkWhite space-y-2">
							<a
								href="https://stharaviportfolio.netlify.app"
								className="hover:text-red-400 transition-colors hover:translate-x-1 transform duration-200"
								target="_blank"
								rel="noopener noreferrer">
								Portfolio V1.6
							</a>
						</div>
					</div>
				</div>

				{/* Footer section */}
				<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-300 items-center">
					{/* Bottom Left - Copyright */}
					<div className="text-sm md:text-base font-OverusedGrotesk-Bold text-darkGray opacity-80 leading-tight">
						<p>&copy; {new Date().getFullYear()}</p>
						<p>Ravi Shrestha</p>
					</div>

					{/* Bottom Center - Local Time */}
					<div className="text-sm md:text-base font-bold text-lightBlack opacity-85">
						<LocalTime />
					</div>

					{/* Bottom right - Back to top button */}
					<div className="flex justify-end items-center col-span-2 md:col-span-1">
						<a 
							href="#about" 
							className="bg-gray rounded-full w-14 h-14 md:w-16 md:h-16 flex justify-center items-center hover:bg-lightWhite transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg">
							<IoIosArrowRoundUp size={40} className="text-black" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;