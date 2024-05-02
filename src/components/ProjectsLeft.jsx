import { projectsData } from "../../data";

const ProjectsLeft = ({ project }) => {
	return (
		<div className="col-span-1  ml-6 p-10 flex flex-col ">
			<p>{project.title}</p>
			<div className="w-[80%]">{project.description}</div>
		</div>
	);
};
export default ProjectsLeft;
