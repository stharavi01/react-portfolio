import { projectsData } from "../../data";

const ProjectsRight = ({ project }) => {
	return (
		<div className="md:h-[60vh] col-span-1 rounded-lg cursor-pointer flex flex-col items-center pb-12 md:py-0">
			<div
				className={`w-full h-[100%] md:w-[60%] transform sm:scale-100 md:scale-125 bg-cover bg-center bg-no-repeat flex justify-center items-center px-6`}
				style={{
					backgroundImage: `url(${project.backgroundUrl})`,
				}}>
				{project.imageUrl ? (
					<img
						src={project.imageUrl}
						alt="project image"
						className="rounded-lg"
					/>
				) : (
					<video
						className="pointer-events-none rounded-lg"
						autoPlay
						muted
						playsInline={true}
						key={project.videoUrl}>
						<source src={project.videoUrl} type="video/mp4" />
					</video>
				)}
			</div>
		</div>
	);
};
export default ProjectsRight;
