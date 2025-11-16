import { links, socials } from "../../data";
import LocalTime from "../utility/LocalTime";
import { IoIosArrowRoundUp } from "react-icons/io";

const Contact = () => {
	return (
		<section
			id="contact"
			className="w-full min-h-[100vh] relative pb-6 px-5 lg:px-16 text-darkGray mt-12 md:mt-24 flex flex-col justify-center">
			<div className="heading-container">
				{/* mail */}
				<div>
					<p
						className="text-center text-sm my-[8px] font-OpenSauce-Light tracking-tighter font-bold text-darkGray"
						data-scroll
						data-scroll-speed="0.08">
						Have an offer? Drop me an email :
					</p>
					<a
						href="mailto:shrestharavi06@gmail.com"
						className="cursor-pointer hover:text-red-400 relative z-30 text-center block">
						<p
							className="text-center text-2xl mb-[-8px] font-OverusedGrotesk-Bold font-bold text-darkGray"
							data-scroll
							data-scroll-speed="0.1">
							shrestharavi06@gmail.com
						</p>
					</a>
				</div>

				{/* contact */}
				<div
					className="text-[3rem] md:text-[7rem] lg:text-[12.5rem] font-OverusedGrotesk-Bold text-lightBlack opacity-85 lg:tracking-[-0.4rem] leading-none flex flex-col text-center uppercase black-underline"
					data-scroll
					data-scroll-speed="0.2">
					<p className="py-4">Get in touch</p>
				</div>
			</div>

			{/* Grid container */}
			<div
				className="grid-container grid grid-cols-[1fr_1fr] lg:grid-cols-[50%_25%_1fr] gap-6 md:gap-12 md:py-6 mt-6 max-w-7xl mx-auto w-full"
				data-scroll
				data-scroll-speed="0.1">
				{/* Left grid */}
				<div className="hidden md:block">
					<p className="border-b border-black uppercase text-bold text-lg font-OpenSauce-Bold tracking-tight">
						Navigation
					</p>
					<div className="flex flex-col mt-2 font-bold font-MontrealMedium text-darkWhite">
						{links.map((link) => (
							<a key={link.hash} href={link.hash} className="my-[4px] hover:text-red-400 transition-colors">
								{link.name}
							</a>
						))}
					</div>
				</div>

				{/* Center Grid */}
				<div>
					<p className="border-b border-black uppercase text-bold text-lg font-OpenSauce-Bold tracking-tight">
						Socials
					</p>
					<div className="flex flex-col mt-2 font-bold font-MontrealMedium text-darkWhite">
						{socials.map((social) => (
							<a
								key={social.link}
								href={social.link}
								className="my-[4px] hover:text-red-400 transition-colors"
								target="_blank"
								rel="noopener noreferrer">
								{social.name}
							</a>
						))}
					</div>
				</div>

				{/* Right column */}
				<div className="hidden md:block">
					<p className="border-b border-black uppercase text-bold text-lg tracking-tight font-OpenSauce-Bold">
						Resources
					</p>
					<div className="flex flex-col mt-2 font-bold font-MontrealMedium text-darkWhite">
						<a
							href="https://stharaviportfolio.netlify.app"
							className="my-[4px] hover:text-red-400 transition-colors"
							target="_blank"
							rel="noopener noreferrer">
							Portfolio V1.6
						</a>
					</div>
				</div>

				{/* Bottom Left grid*/}
				<div className="text-base md:text-[1.5rem] font-OverusedGrotesk-Bold text-darkGray opacity-80 leading-tight flex flex-col text-left uppercase">
					<p>&copy; {new Date().getFullYear()}</p>
					<p>Ravi Shrestha</p>
				</div>

				{/* Bottom Center grid*/}
				<div className="text-base font-bold text-lightBlack opacity-85 text-left uppercase grid grid-cols-2">
					<LocalTime />
				</div>

				{/* Bottom right grid */}
				<div className="flex justify-center md:justify-end items-center">
					<div className="bg-gray rounded-full w-[4.5rem] h-[4.5rem] hidden md:flex justify-center items-center hover:bg-lightWhite transform hover:scale-105 transition-all cursor-pointer">
						<a href="#about" className="flex items-center justify-center">
							<IoIosArrowRoundUp size={50} className="text-black" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contact;