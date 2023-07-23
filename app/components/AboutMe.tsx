import Image from 'next/image';

export default function AboutMe() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="flex flex-wrap w-full mb-20">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-300">About me</h1>
						<div className="h-1 w-20 bg-teal-500 rounded mb-5"></div>
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-10">
							<Image
								className="object-cover object-center rounded"
								alt="headshot with cat"
								src="/../public/luna.jpg"
								height={500}
								width={720}
							/>
						</div>
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-20">
						<p className="mb-2 leading-relaxed font-medium text-gray-300">
							Hi again! I&apos;m Cassandra. I&apos;m a Software Engineer based in Florida.
							<br className="hidden lg:inline-block" />
							<br className="hidden lg:inline-block" />
							I&apos;m a recent graduate of Boca Code, where I had the privilege of working at upon graduation as a Software Engineer and Project Manager. I bring with me a firm understanding of the
							Software Development Life-cycle, User Experience and Team Collaboration. I&apos;ve impacted hundreds of lives through 8 years of experience as a Registered Nurse, and I&apos;m thrilled
							to now make a difference through code!
							<br className="hidden lg:inline-block" />
							<br className="hidden lg:inline-block" /> I&apos;m passionate about building accessible, intuitive, and inclusive applications and fostering fun and efficient work environments.
							<br className="hidden lg:inline-block" />
							<br className="hidden lg:inline-block" />
							Aside from coding, I&apos;m a huge Nintendo, Food, and Animal lover. I&apos;m currently looking for my next career opportunity. Please reach out to see how I can help your team!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
