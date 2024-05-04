import { skillsData } from "../../data";

const About = () => {
	return (
		<section id="About" className="w-full h-screen px-16 py-[10rem]">
			<div className="grid grid-cols-[30%_70%] ">
				<div>
					<p className="uppercase font-MontrealMedium font-medium text-lightBlack text-[4rem]">
						Skills
					</p>
				</div>
				<div>
					<p>
						I'm a multi-disciplinary designer and Webflow developer, passionate
						about crafting ideas, visuals, and typography into unforgettable
						digital experiences. With a genuine belief in the transformative
						power of design, I am constantly exploring the vast creative world,
						from architecture, art, graphic design, illustration, motion design,
						and UX design. My journey began in architecture, however, my passion
						for limitless creativity led me to explore the endless possibilities
						that creative development has to offer.
					</p>
					<p>
						With over 2 years of hands-on experience in Webflow, I bring a
						unique blend of design and development skills to every project. My
						goal is to deliver digital experiences that not only engage and
						inspire but also achieve tangible results for my clients. When
						working on websites, I place a strong emphasis on crafting unique
						layouts, captivating interactions, and good use of typography, blend
						together these elements to create a seamless user experience that
						leaves a lasting impression.
					</p>
					<p>Here are a few technologies I've been working with recently:</p>
					<div className="grid grid-cols-2">
						<div>{skillsData.map((skills) => {})}</div>
						<div></div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;
