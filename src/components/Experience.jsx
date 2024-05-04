import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../data";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";

const Experience = () => {
	return (
		<section id="experience" className="w-full h-full  bg-lightBlack ">
			{/* Vertical Timeline */}
			<div className="text-lg text-lightWhite leading-none py-16">
				<h2 className="font-MontrealBold text-lightWhite font-light text-[4rem] border-b border-white mx-16 mb-16 pb-12 leading-none tracking-loose uppercase text-center">
					My Experience
				</h2>
				<VerticalTimeline lineColor="#aaa" className=" px-16">
					{experiencesData.map((experience, index) => (
						<VerticalTimelineElement
							key={index}
							date={experience.date}
							iconStyle={{
								background: "#202020",
								color: "#f3f4f6",
							}}
							icon={
								experience.type === "work" ? (
									<FaBriefcase />
								) : (
									<FaGraduationCap />
								)
							}
							contentStyle={{
								background: "#202020",
								color: "#f3f4f6",
							}}
							contentArrowStyle={{
								borderRight: "7px solid #f3f4f6",
							}}>
							<h3 className="font-normal mb-1 ">{experience.title}</h3>
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
		</section>
	);
};

export default Experience;
