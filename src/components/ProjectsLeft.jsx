import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsLeft = ({ project }) => {
	return (
		<div
			className="md:px-10 mb-16 md:mb-0 font-MontrealBold leading-normal flex flex-col justify-center"
			data-scroll
			data-scroll-speed="0.1">
			<p className="text-xl font-normal hidden md:block">
				<span>{`${project.number}.`} </span>
				<span className="text-lg ">Featured Projects </span>
			</p>
			<a href={project.link} target="_blank">
				<p className="text-2xl lg:text-4xl my-6 uppercase font-semibold">
					{project.title}
				</p>
			</a>
			<div className="bg-softGray font-OverusedGrotesk-Light text-lg rounded-lg p-4 leading-normal tracking-wide">
				<p> {project.description}</p>
				<div className="flex gap-4 mt-4 cursor-pointer opacity-75">
					<a href={project.link} target="_blank" className="icons-hover">
						<FaGithub size={25} />
					</a>
					<a href={project.githubLink} target="_blank" className="icons-hover">
						<FaExternalLinkAlt size={25} />
					</a>
				</div>
			</div>
			<div className="mt-6 flex flex-wrap gap-2 w-full ">
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
