import { projectsData } from "../../data";
import ProjectsLeft from "./ProjectsLeft";
import ProjectsRight from "./ProjectsRight";

const About = () => {
	return (
		<section id="projects" className="w-full text-darkGray my-[10rem]">
			{/* Heading */}
			<div className="mb-[12rem]">
				<div className="black-underline"></div>
				<p className="my-heading-black ml-12">Selected Projects</p>
				<div className="black-underline"></div>
			</div>

			{/* Projects */}
			<div className="px-20 pb-2">
				{projectsData.map((project, index) => (
					<div
						key={project.title}
						className={`grid grid-cols-2 my-24 ${
							index % 2 === 0 ? "pl-[4rem]" : "pr-[4rem]"
						}`}>
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
				))}
			</div>
		</section>
	);
};

export default About;
