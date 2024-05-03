import { projectsData } from "../../data";

const ProjectsLeft = ({ project }) => {
	return (
		<div className="col-span-1 p-10 flex flex-col justify-center font-MontrealBold leading-normal">
			<p className="text-xl font-MontrealBook font-normal ">
				<span>{`${project.number}.`} </span>
				<span className="text-2xl">Featured Projects </span>
			</p>
			<p className="text-4xl my-6 uppercase font-semibold">{project.title}</p>
			<div className="w-[80%]">
				<p className="my-2 mb-8"> {project.description}</p>

				<div className="flex gap-2 flex-wrap: wrap w-[80%]">
					{project.tags.map((tag) => (
						<button className="px-3 py-[2px] mt-[-0.4rem] text-sm rounded-full border hover:text-slate-50 uppercase ">
							{tag}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
export default ProjectsLeft;
