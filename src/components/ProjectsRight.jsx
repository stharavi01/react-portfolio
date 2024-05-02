import { projectsData } from "../../data";

const ProjectsRight = ({ project }) => {
	return (
		<div className="col-span-1 rounded-lg bg-softOrange cursor-pointer flex flex-col items-center ">
			<div
				className={`w-[60%] h-[100%] transform scale-125 bg-cover bg-center bg-no-repeat flex justify-center items-center`}
				style={{
					backgroundImage: `url(${project.backgroundUrl})`,
				}}>
				<div className="flex justify-center items-center px-8">
					<img
						src={project.imageUrl}
						alt="project image"
						className="transform scale-y-110 rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
};
export default ProjectsRight;
