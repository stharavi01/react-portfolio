import { useState, useRef } from "react";
import { FaCirclePause } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";

const ProjectsRight = ({ project }) => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);

	const handlePause = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleRestart = () => {
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.play();
			setIsPlaying(true);
		}
	};

	return (
		<div className="w-full h-full md:px-10 flex flex-col justify-center items-center rounded-lg cursor-pointer ">
			<a href={project.link} target="_blank" className="mt-8">
				{project.videoUrl ? (
					<video
						className="pointer-events-none rounded-lg"
						ref={videoRef}
						autoPlay
						muted
						loop
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
			<div className="mt-4 opacity-80">
				{isPlaying ? (
					<button className="mr-4" onClick={handlePause}>
						<FaCirclePause size={35} />
					</button>
				) : (
					<button className="mr-4" onClick={handlePause}>
						<FaCirclePlay size={35} />
					</button>
				)}
				<button onClick={handleRestart}>
					<VscDebugRestart size={35} />
				</button>
			</div>
		</div>
	);
};

export default ProjectsRight;
