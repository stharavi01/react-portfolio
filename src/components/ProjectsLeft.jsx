const ProjectsLeft = ({ project }) => {
	return (
		<div className="md:py-10 md:px-10 py-8 font-MontrealBold leading-normal flex flex-col justify-center ">
			<p className="text-xl font-MontrealBook font-normal hidden md:block">
				<span>{`${project.number}.`} </span>
				<span className="text-lg ">Featured Projects </span>
			</p>
			<a href={project.link} target="_blank">
				<p className="text-2xl lg:text-4xl my-6 uppercase font-semibold">
					{project.title}
				</p>
			</a>
			<div className="bg-softGray rounded-lg p-6">
				<p className="my-2"> {project.description}</p>
			</div>
			<div className="mt-4 flex flex-wrap gap-2 w-full ">
				{project.tags.map((tag, index) => (
					<button
						key={index}
						className="px-3 py-1 sm:px-[12px] sm:py-[5px] text-sm sm:text-xs rounded-full border hover:text-slate-50 uppercase hover:bg-darkGray hover:border-white hover:text-white">
						{tag}
					</button>
				))}
			</div>
		</div>
	);
};
export default ProjectsLeft;
