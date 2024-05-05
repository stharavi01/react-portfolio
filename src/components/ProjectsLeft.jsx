import { projectsData } from "../../data";

const ProjectsLeft = ({ project }) => {
	return (
		<div className="md:py-10 md:px-16 py-8 font-MontrealBold leading-normal flex flex-col justify-center">
			<p className="text-xl font-MontrealBook font-normal hidden md:block">
				<span>{`${project.number}.`} </span>
				<span className="text-2xl ">Featured Projects </span>
			</p>
			<p className="text-2xl lg:text-4xl my-6 uppercase font-semibold">
				{project.title}
			</p>
			<div className="md:w-[80%]">
				<p className="my-2 mb-8"> {project.description}</p>

				<div className="flex flex-wrap gap-2 sm:gap-1 w-full sm:w-[80%]">
					{project.tags.map((tag, index) => (
						<button
							key={index}
							className="px-10 py-2 sm:px-2 sm:py-1 text-sm sm:text-xs rounded-full border hover:text-slate-50 uppercase hover:bg-darkGray hover:border-white hover:text-white">
							{tag}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
export default ProjectsLeft;
