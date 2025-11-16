import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../data";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";

const Timeline = () => {
	return (
		<div className="md:px-16 pb-16" data-scroll data-scroll-speed="0.2">
			{/* Vertical Timeline */}
			<VerticalTimeline lineColor="#aaa">
				{experiencesData.map((experience, index) => (
					<VerticalTimelineElement
						key={index}
						date={experience.date}
						iconStyle={{
							background: "#202020",
							color: "#f3f4f6",
							boxShadow: "0 0 0 4px #aaa, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
						}}
						icon={
							experience.type === "work" ? <FaBriefcase /> : <FaGraduationCap />
						}
						contentStyle={{
							background: "#202020",
							color: "#f3f4f6",
							boxShadow: "0 3px 0 #aaa",
							borderTop: "3px solid #aaa",
						}}
						contentArrowStyle={{
							borderRight: index % 2 === 0 ? "7px solid #202020" : "none",
							borderLeft: index % 2 !== 0 ? "7px solid #202020" : "none",
						}}
						position={index % 2 === 0 ? "left" : "right"} // Alternates between left and right
					>
						<h3 className="font-semibold text-xl mb-2">{experience.title}</h3>
						<p className="font-normal text-base text-gray-400 mb-2">
							{experience.location}
						</p>
						<p className="font-normal text-sm text-gray-300 leading-relaxed">
							{experience.description}
						</p>
					</VerticalTimelineElement>
				))}
				<VerticalTimelineElement
					iconStyle={{ 
						background: "#202020", 
						color: "#f3f4f6",
						boxShadow: "0 0 0 4px #aaa, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
					}}
					icon={<RiReactjsLine />}
				/>
			</VerticalTimeline>
		</div>
	);
};
export default Timeline;