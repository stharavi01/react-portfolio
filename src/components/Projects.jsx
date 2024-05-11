import { projectsData } from "../../data";
import ProjectsLeft from "./ProjectsLeft";
import ProjectsRight from "./ProjectsRight";

const About = () => {
	return (
		<section id="projects" className="w-full text-darkGray px-5 mt-16 md:mt-28">
			<div className="sm:px-28">
				{/* Heading */}
				<div className="mb-1rem md:mb-[4rem]">
					<div className="black-underline"></div>
					<p className="my-heading-black md:ml-12">Selected Projects</p>
					<div className="black-underline"></div>
				</div>

				{/* Projects */}
				{projectsData.map((project, index) => (
					<div key={index}>
						{/* for smaller screen */}
						<div className="flex flex-col md:hidden">
							<ProjectsLeft key={`left-${index}`} project={project} />
							<ProjectsRight key={`right-${index}`} project={project} />
						</div>

						{/* for medium screen and above */}
						<div className="hidden md:grid md:grid-cols-2 w-full gap-10">
							{index % 2 === 0 ? (
								<>
									<ProjectsLeft key={`left-${index}`} project={project} />
									<ProjectsRight key={`right-${index}`} project={project} />
								</>
							) : (
								<>
									<ProjectsRight key={`right-${index}`} project={project} />
									<ProjectsLeft key={`left-${index}`} project={project} />
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
