import React, { useState, useRef, useEffect } from "react";
import LazyVideo from "../utility/LazyVideo";

const ProjectsRight = ({ project }) => {
	const videoRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

	const handleMouseMove = (event) => {
		const rect = videoRef.current.getBoundingClientRect();
		const newX = event.clientX - rect.left;
		const newY = event.clientY - rect.top;

		// Smoothly update mouse position
		setMousePosition((prevPosition) => ({
			x: prevPosition.x + (newX - prevPosition.x) * 0.08,
			y: prevPosition.y + (newY - prevPosition.y) * 0.08,
		}));
	};

	useEffect(() => {
		const handleResize = () => {
			if (videoRef.current) {
				const { width, height } = videoRef.current.getBoundingClientRect();
				setContainerSize({ width, height });
			}
		};

		// Initial size calculation
		handleResize();

		// Event listener for resizing
		window.addEventListener("resize", handleResize);

		// Cleanup on unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			data-scroll
			data-scroll-speed="0.4"
			className="h-[16rem] md:h-[28rem] w-full mb-14 md:mb-0 md:px-10 flex flex-col justify-center items-center cursor-pointer relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onMouseMove={handleMouseMove}>
			<div
				className="h-full w-full px-6 flex flex-col items-center justify-center"
				style={{
					backgroundImage: `url(${project.background})`,
					backgroundBlendMode: "overlay",
					position: "relative",
					overflow: "hidden",
				}}
				ref={videoRef}>
				<a href={project.link} target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center">
					{project.videoUrl ? (
						<LazyVideo
							className="pointer-events-none"
							autoPlay
							muted
							loop
							playsInline
							src={project.videoUrl}
							type="video/mp4"
							style={{ transform: "scaleY(1.2)" }}
						/>
					) : project.imageUrl ? (
						<img
							src={project.imageUrl}
							alt={project.title || "Project preview"}
							className="pointer-events-none w-full h-full object-contain"
						/>
					) : null}
				</a>

				{isHovered && (
					<div
						className="absolute z-50 flex items-center justify-center bg-black text-softGray rounded-full pointer-events-none transition-opacity duration-300"
						style={{
							width: "100px",
							height: "100px",
							left: `${mousePosition.x - 50}px`,
							top: `${mousePosition.y - 50}px`,
							padding: "8px",
							opacity: 0.8,
						}}>
						<span className="text-sm font-semibold text-center">View Site</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectsRight;