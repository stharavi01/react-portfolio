import { projectsData } from "../../data";
import ProjectsLeft from "./ProjectsLeft";
import ProjectsRight from "./ProjectsRight";

const About = () => {
	return (
		<section id="projects" className="w-full text-darkGray px-5 mt-16 md:mt-28">
			{/* Heading */}
			<div className=" mb-1rem md:mb-[11rem]">
				<div className="black-underline"></div>
				<p className="my-heading-black md:ml-12">Selected Projects</p>
				<div className="black-underline"></div>
			</div>

			{/* Projects */}
			<div className="sm:px-20 pb-2 ">
				{projectsData.map((project, index) => (
					<>
						{/* for smaller screen */}
						<div key={project.name} className="flex flex-col md:hidden">
							<ProjectsLeft project={project} />
							<ProjectsRight project={project} />
						</div>

						{/* for medium screen and above */}
						<div
							key={project.name}
							className="hidden md:grid md:grid-cols-2 w-full my-28">
							{index % 2 === 0 ? (
								<>
									<ProjectsLeft project={project} />
									<ProjectsRight project={project} />
								</>
							) : (
								<>
									<ProjectsRight project={project} />
									<ProjectsLeft project={project} />
								</>
							)}
						</div>
					</>
				))}
			</div>
		</section>
	);
};

export default About;
