import { projectsData } from "../../data";
import ProjectsLeft from "./ProjectsLeft";
import ProjectsRight from "./ProjectsRight";

const About = () => {
	return (
		<section id="projects" className="w-full text-darkGray px-5">
			{/* Heading */}
			<div className=" mb-1rem md:mb-[11rem]">
				<div className="black-underline"></div>
				<p className="my-heading-black md:ml-12">Selected Projects</p>
				<div className="black-underline"></div>
			</div>

			{/* Projects */}
			<div className="sm:px-20 pb-2">
				{projectsData.map((project, index) => (
					<div
						key={project.title}
						className={`grid grid-cols-1 md:grid-cols-2 sm:my-24 ${
							index % 2 === 0 ? "md:pl-[4rem]" : "md:pr-[4rem]"
						}`}>
						{/* Conditional rendering based on the index */}
						{index % 2 === 0 ? (
							<>
								{/* For even index */}
								<ProjectsLeft project={project} />
								<ProjectsRight project={project} />
							</>
						) : (
							<>
								{/* For odd index */}
								<ProjectsRight project={project} />
								<ProjectsLeft project={project} />
							</>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
