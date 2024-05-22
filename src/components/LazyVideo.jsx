import { useEffect, useRef, useState, forwardRef } from "react";
import { gsap } from "gsap";

const LazyVideo = forwardRef(({ src, type, ...props }, ref) => {
	const videoRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);

	// Forward the ref to the video element
	useEffect(() => {
		if (ref) {
			ref.current = videoRef.current;
		}
	}, [ref]);

	useEffect(() => {
		if (isVisible) {
			gsap.from(videoRef.current, {
				opacity: 0,
				scale: 0,
				duration: 1.4,
				ease: "power2.inOut",
			});
		}
	}, [isVisible]);

	return (
		<video ref={videoRef} {...props}>
			{isVisible && <source src={src} type={type} />}
		</video>
	);
});

export default LazyVideo;
