import { projectsData } from "../../data";

const ProjectsLeft = ({ project }) => {
	return (
		<div className="col-span-1 md:p-10 flex flex-col justify-center font-MontrealBold leading-normal">
			<p className="text-xl font-MontrealBook font-normal ">
				<span>{`${project.number}.`} </span>
				<span className="text-2xl">Featured Projects </span>
			</p>
			<p className="text-4xl my-6 uppercase font-semibold">{project.title}</p>
			<div className="md:w-[80%]">
				<p className="my-2 mb-8"> {project.description}</p>

				<div className="flex flex-wrap gap-2 sm:gap-1 w-full sm:w-[80%]">
					{project.tags.map((tag, index) => (
						<button
							key={index}
							className="px-3 py-1 sm:px-2 sm:py-1 text-sm sm:text-xs rounded-full border hover:text-slate-50 uppercase">
							{tag}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
export default ProjectsLeft;
