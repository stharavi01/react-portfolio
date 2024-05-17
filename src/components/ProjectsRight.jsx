import { useState, useRef } from "react";
import { FaCirclePause } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";

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
			data-scroll
			data-scroll-speed="0.4"
			className="w-full h-full md:px-10 flex flex-col justify-center items-center  cursor-pointer"
			onMouseEnter={handleVideoHover}
			onMouseLeave={handleVideoLeave}>
			<div
				className="h-full px-6 flex flex-col items-center justify-center"
				style={{
					backgroundImage: `url(${project.background}) `,
					backgroundBlendMode: "overlay",
				}}>
				<a href={project.link} target="_blank" className="mt-20">
					<video
						className="pointer-events-none"
						ref={videoRef}
						autoPlay
						muted
						loop
						playsInline
						key={project.videoUrl}
						style={{ transform: "scaleY(1.2)" }}>
						<source src={project.videoUrl} type="video/mp4" />
					</video>
				</a>
				<div
					className="mt-5 md:mt-8 pb-1 flex justify-center"
					style={iconButtonStyle}>
					{isPlaying ? (
						<button className="mr-4 icons-hover" onClick={handlePause}>
							<FaCirclePause size={30} />
						</button>
					) : (
						<button className="mr-4 icons-hover" onClick={handlePause}>
							<FaCirclePlay size={30} />
						</button>
					)}
					<button onClick={handleRestart} className="icons-hover">
						<VscDebugRestart size={30} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectsRight;
