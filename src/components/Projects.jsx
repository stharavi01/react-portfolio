import { projectsData } from "../../data";
import ProjectsLeft from "./ProjectsLeft";
import ProjectsRight from "./ProjectsRight";

const About = () => {
	return (
		<section id="projects" className="w-full text-darkGray my-20">
			{/* Selected Projects */}
			<div className="my-24">
				<div className="border-b-2 border-black mx-10 border-opacity-70"></div>
				<div className="uppercase py-4 font-BebasNeue font-light text-[8rem]">
					Selected-Projects
				</div>
				<div className="border-b-2 border-black mx-10 border-opacity-70"></div>
			</div>

			{/* Projects */}
			<div className="px-20 py-24">
				{projectsData.map((project, index) => (
					<div
						key={project.title}
						className={`grid grid-cols-2 mb-16 ${
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
