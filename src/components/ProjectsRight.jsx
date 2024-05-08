const ProjectsRight = ({ project }) => {
	return (
		<div className="w-full h-full md:px-10 flex justify-center items-center rounded-lg cursor-pointer ">
			<a href={project.link} target="_blank">
				{project.videoUrl ? (
					<video
						className="pointer-events-none rounded-lg"
						autoPlay
						muted
						playsInline
						key={project.videoUrl}>
						<source src={project.videoUrl} type="video/mp4" />
					</video>
				) : (
					<img
						src={project.imageUrl}
						alt="Project image"
						className="rounded-lg"
					/>
				)}
			</a>
		</div>
	);
};

export default ProjectsRight;
