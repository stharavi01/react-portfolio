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
		<div className="px-16 pb-16">
			{/* Vertical Timeline */}
			<VerticalTimeline lineColor="#aaa">
				{experiencesData.map((experience, index) => (
					<VerticalTimelineElement
						key={index}
						date={experience.date}
						iconStyle={{
							background: "#202020",
							color: "#f3f4f6",
						}}
						icon={
							experience.type === "work" ? <FaBriefcase /> : <FaGraduationCap />
						}
						contentStyle={{
							background: "#202020",
							color: "#f3f4f6",
						}}
						contentArrowStyle={{
							borderLeft: "7px solid #202020", // Adjust the border to point left
						}}
						position="right" // Aligns all elements to the right
					>
						<h3 className="font-normal mb-1">{experience.title}</h3>
						<p className="font-normal text-base text-lightWhite">
							{experience.location}
						</p>
						<p className="font-normal text-sm text-lightWhite">
							{experience.description}
						</p>
					</VerticalTimelineElement>
				))}
				<VerticalTimelineElement
					iconStyle={{ background: "#202020", color: "#f3f4f6" }}
					icon={<RiReactjsLine />}
				/>
			</VerticalTimeline>
		</div>
	);
};
export default Timeline;
