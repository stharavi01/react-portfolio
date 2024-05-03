import { GoDownload } from "react-icons/go";
import Resume from "../assets/resume.pdf";
import { TbEqual } from "react-icons/tb";

const Navbar = () => {
	return (
		<>
			<header className="w-full py-5 sm:px-10 px-14 flex justify-between items-center bg-black text-darkWhite font-semibold text-sm leading-tight">
				{/* navigation icon */}
				<div className="bg-gray rounded-full w-[4.3rem] h-[4.3rem] absolute top-8 z-10 flex justify-center items-center">
					<TbEqual size={50} className="text-lightBlack" />
				</div>

				{/* Navbar */}
				<div>
					<p className="uppercase cursor-pointer text-darkWhite text-hover">
						<span>Ravi</span> <span className="block"> Shrestha</span>
					</p>
				</div>
				<div>
					<p className=" uppercase w-[12rem] sm:flex text-hover">
						Front end developer folio / 2023 - 2024
					</p>
				</div>
				<div className="flex justify-between items-center ">
					<div className="px-12 w-[16rem]">
						<p className=" items-center text-hover">
							Open for offers & internships -
						</p>
					</div>

					<div className="flex gap-7 cursor-pointer text-hover">
						<a href={Resume} download="downloaded-resume.pdf">
							<button className="px-4 py-2 mt-[-0.4rem] text-sm rounded-full border hover:text-slate-50  flex items-center gap-1 mr-3">
								Resume <GoDownload />
							</button>
						</a>
					</div>
				</div>
			</header>
		</>
	);
};
export default Navbar;
