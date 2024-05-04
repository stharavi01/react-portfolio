import { GoDownload } from "react-icons/go";
import Resume from "../assets/resume.pdf";
import { TbEqual } from "react-icons/tb";

const Navbar = () => {
	return (
		<>
			<header className="font-semibold md:text-sm leading-tight text-darkWhite bg-black w-full grid grid-cols-[20%_1fr] lg:grid-cols-2 gap-20 md:gap-50 px-10 lg:px-14 py-5 sm:px-10">
				{/* navigation icon */}
				<div className="bg-gray rounded-full w-[4.3rem] h-[4.3rem] absolute top-8 z-10 flex justify-center items-center opacity-0">
					<TbEqual size={50} className="text-lightBlack" />
				</div>

				{/* Left column */}

				<div>
					<p className="uppercase cursor-pointer text-darkWhite text-hover ">
						<span>Ravi</span> <span className="block"> Shrestha</span>
					</p>
				</div>

				{/* Right column */}
				<div className="flex flex-col md:flex-row gap-y-4 justify-between">
					<p className=" uppercase sm:flex text-hover md:w-[30%]">
						Front end developer folio / 2023 - 2024
					</p>

					<p className=" items-center text-hover text-wrap md:w-1/4">
						Open for offers & internships -
					</p>

					<a href={Resume} download="downloaded-resume.pdf">
						<button className="px-4 py-2 lg:mt-[-0.4rem] text-sm rounded-full border hover:text-slate-50 flex items-center gap-1 cursor-pointer text-hover">
							Resume <GoDownload />
						</button>
					</a>
				</div>
			</header>
		</>
	);
};
export default Navbar;
