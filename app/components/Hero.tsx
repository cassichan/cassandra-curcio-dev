import Image from 'next/image';

export default function Hero() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<Image
						className="object-cover object-center rounded"
						alt="hero"
						src="/../public/headshot_cropped.jpeg"
						height={500}
						width={720}
					/>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-300">
						I&apos;m Cassandra.
						<br className="hidden lg:inline-block" />
						Nice to meet you! ✨
					</h1>
					<p className="mb-2 leading-relaxed font-medium text-gray-300">I&apos;m a Florida-based Software Engineer with a background in Healthcare and Project Management 👩‍💻 </p>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">I am looking for my next career opportunity. Please reach out to see how I can help your team!</p>
					<div className="flex justify-center">
						<a
							href="https://docs.google.com/document/d/15GM5uc_WCekFqrclNi2-AW8xl1Y2qdjvGTno2DbRWsw/edit?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Resume</button>
						</a>
						<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">About me</button>
					</div>
					<br className="hidden lg:inline-block" />
					<div className="flex mt-8">
						<a
							href="https://github.com/cassichan"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								className="m-2 hover:scale-105"
								alt="github logo"
								src="/../public/socials/github-mark-white.png"
								height={30}
								width={55}
							/>
						</a>
						<a
							href="https://medium.com/@cassandra.curcio"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								className="mt-5 ml-2 mr-2 hover:scale-105"
								alt="linked-in logo"
								src="/../public/socials/medium.png"
								height={30}
								width={55}
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/cassandra-l-curcio/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								className="mt-5 ml-2 mr-2 hover:scale-105"
								alt="linked-in logo"
								src="/../public/socials/ln-white-1.png"
								height={30}
								width={55}
							/>
						</a>
						<a
							href="mailto:cassandra.curcio@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								className="ml-2 mr-2 mt-3 hover:scale-105"
								alt="email icon"
								src="/../public/socials/email.png"
								height={30}
								width={55}
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
