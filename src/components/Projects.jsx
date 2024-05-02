<section>
	{" "}
	<div className="py-10 px-20">
		<div class=" border-b border-black mb-6 pb-4  flex justify-between">
			<p className="text-6xl uppercase">Portfolio </p>
			<p className="flex items-center">
				Resume <GoDownload />
			</p>
		</div>
		<div class="grid grid-cols-[45%_55%] gap-12">
			{/* Left Column */}
			<div class="col-span-1 flex">
				<div>
					<div className="mb-8">
						<p className="text-5xl font-light">Rabin Shrestha</p>
						<p className="text-5xl font-light my-7">Front-end Developer</p>
						<p className="w-3/4 my-4">
							I build pixel-perfect, engaging, and accessible digital
							experiences.
						</p>
					</div>

					<div className="flex gap-4 mt-8 ">
						{socials.map((social) => (
							<div class="w-10 h-10 border border-black rounded-full flex items-center justify-center my-2 cursor-pointer hover:bg-gray-300">
								<a href={social.link} target="_blank">
									<span class="text-xl opacity-70">{social.icon}</span>
								</a>
							</div>
						))}
					</div>

					<a href="#projects">
						<p
							className="uppercase absolute bottom-16 left-6 flex flex-row items-center"
							style={{ writingMode: "vertical-rl" }}>
							Scroll For More
							<BsArrowDown className="mt-1" />
						</p>
					</a>
				</div>
			</div>

			{/* Right column */}
			<div class="col-span-1">
				<ul>
					{links.map((link) => (
						<li
							key={link.hash}
							class="text-4xl font-light mb-6 cursor-pointer text-slate-800">
							<span class="w-full pb-6 flex justify-between items-center ">
								<span class="flex items-center">
									<span class="text-3xl mr-4">{`${link.number}. `}</span>
									{link.name}
								</span>
								<BsArrowUpRight className="mr-16  text-2xl" />
							</span>
							<span class="block w-11/12 border-b border-black mr-12"></span>
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
	<div className="border-b border-black w-full mt-[5rem]"></div>
</section>;
