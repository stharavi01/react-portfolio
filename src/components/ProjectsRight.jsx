const ProjectsRight = ({ project }) => {
	return (
		<div className="w-full h-full flex rounded-lg cursor-pointer ">
			<a href={project.link} target="_blank">
				<div className="p-0 md:p-10">
					{project.imageUrl ? (
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
				</div>
			</a>
		</div>
	);
};

export default ProjectsRight;
