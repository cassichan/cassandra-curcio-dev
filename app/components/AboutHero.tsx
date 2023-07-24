import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<Image
						className="object-cover object-center rounded"
						alt="headshot with cat"
						src="/../public/static/spike_cass1.jpeg"
						height={500}
						width={720}
					/>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-300">Hi again! I&apos;m Cassandra.</h1>
					<h2 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-300">I&apos;m a Software Engineer based in Florida ☀️</h2>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">
						{' '}
						I&apos;m a recent graduate of Boca Code, where I had the privilege of working at upon graduation as a Software Engineer and Project Manager.
					</p>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">
						I&apos;ve impacted hundreds of lives through 8 years of experience as a Registered Nurse, and I&apos;m thrilled to now make a difference through code! 👩‍💻
					</p>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">
						I bring with me a firm understanding of the Software Development Life Cycle, User Experience and Team Collaboration. I&apos;m passionate about building accessible, intuitive, and inclusive
						applications and fostering fun and efficient work environments.
					</p>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">Aside from my love for code, I&apos;m a huge Nintendo, Food, and Animal lover.</p>
					<p className="mb-10 leading-relaxed font-medium text-gray-300">I&apos;m currently looking for my next career opportunity. Please reach out to see how I can help your team!</p>
					<div className="flex justify-center">
						<a
							href="https://docs.google.com/document/d/15GM5uc_WCekFqrclNi2-AW8xl1Y2qdjvGTno2DbRWsw/edit?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Resume</button>
						</a>
						<Link href="/">
							<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Projects</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
