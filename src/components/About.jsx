import { projectsData } from "../../data";

const About = () => {
	return (
		<section id="about" className="w-full text-darkGray">
			<div className="my-24">
				<div class="border-b-2 border-black mx-10 border-opacity-70"></div>
				<div className="uppercase py-4 font-BebasNeue font-light text-[8rem]">
					Selected Projects
				</div>
				<div class="border-b-2 border-black mx-10 border-opacity-70"></div>
			</div>

			{/* Projects */}
			<div>
				{projectsData.map((project) => (
					<div class="grid grid-cols-[45%_55%] pl-[2rem] h-screen mb-16">
						{/* Left column */}
						<div class="col-span-1 text-[16rem]">{`${project.number}.`}</div>
						{/* Right column */}
						<div class="col-span-1 h-screen rounded-lg bg-softOrange cursor-pointer shadow-lg mr-12">
							<div
								className={`w-full h-full bg-cover bg-center bg-no-repeat flex justify-center items-center `}
								style={{
									backgroundImage: `url(${project.backgroundUrl})`,
								}}>
								<div className="flex justify-center items-center">
									<img
										src={project.imageUrl}
										alt="project image"
										className=" w-[80%] transform scale-y-150 object-contain rounded-lg"
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default About;
