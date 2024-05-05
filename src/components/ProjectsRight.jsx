import { projectsData } from "../../data";

const ProjectsRight = ({ project }) => {
	return (
		<div className="col-span-1 rounded-lg bg-softOrange cursor-pointer flex flex-col items-center ">
			<div
				className={`w-full h-[100%] md:w-[60%] transform sm:scale-100 md:scale-125 bg-cover bg-center bg-no-repeat flex justify-center items-center`}
				style={{
					backgroundImage: `url(${project.backgroundUrl})`,
				}}>
				<div className="flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
					<img
						src={project.imageUrl}
						alt="project image"
						className="rounded-lg transform sm:scale-y-100 md:scale-y-110"
					/>
				</div>
			</div>
		</div>
	);
};
export default ProjectsRight;
