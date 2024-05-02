import { GoDownload } from "react-icons/go";
import Resume from "../assets/resume.pdf";

const Navbar = () => {
	return (
		<>
			<header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
				<nav className="flex w-full">
					<p className="font-semibold">Open for offers & internships -</p>

					<div className="flex flex-1 justify-center max-sm:hidden">
						<p className="font-bold uppercase cursor-pointer">Ravi Shrestha</p>
					</div>

					<div className="flex  gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer hover:text-slate-500">
						<a href={Resume} download="downloaded-resume.pdf">
							<button className="px-4 py-2 mt-[-0.4rem] text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 flex items-center gap-1 mr-3">
								Get in touch! <GoDownload />
							</button>
						</a>
					</div>
				</nav>
			</header>
		</>
	);
};
export default Navbar;
