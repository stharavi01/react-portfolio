import { useState, useRef } from "react";
import { FaCirclePause } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import gsap from "gsap";

const ProjectsRight = ({ project }) => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

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

	const handleVideoHover = () => {
		setIsHovered(true);
	};

	const handleVideoLeave = () => {
		setIsHovered(false);
	};

	const iconButtonStyle = {
		opacity: isHovered ? 0.7 : 0,
		transition: "opacity 0.3s ease",
	};

	return (
		<div
			className="w-full h-full md:px-10 flex flex-col justify-center items-center rounded-lg cursor-pointer"
			onMouseEnter={handleVideoHover}
			onMouseLeave={handleVideoLeave}>
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
			<div className="mt-4" style={iconButtonStyle}>
				{isPlaying ? (
					<button className="mr-4 icons-hover" onClick={handlePause}>
						<FaCirclePause size={35} />
					</button>
				) : (
					<button className="mr-4 icons-hover" onClick={handlePause}>
						<FaCirclePlay size={35} />
					</button>
				)}
				<button onClick={handleRestart} className="icons-hover">
					<VscDebugRestart size={35} />
				</button>
			</div>
		</div>
	);
};

export default ProjectsRight;
