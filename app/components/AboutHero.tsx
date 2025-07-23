import Image from 'next/image';
import Link from 'next/link';
import headshot2 from '../../public/spike_cass1.jpeg';

export default function AboutHero() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<Image
						className="object-cover object-center rounded"
						alt="headshot with cat"
						src={headshot2}
						height={500}
						width={720}
						priority={true}
						placeholder="blur"
					/>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-300">Hi again! I&apos;m Cassandra.</h1>
					<h2 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-300">I&apos;m a nerdy, cat-loving small business owner based in Florida ☀️</h2>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">
						After years studying and working in healthcare, I took a leap and completed a software development boot camp in 2022. Following the boot camp, I spent some time working at the company- where I managed a small team developing client software, managed an internship program, assisted with operations and curriculum, and more. I carried that experience forward to collaborate on my own company with my husband, developing custom, software solutions for businesses.👩‍💻
					</p>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">
            While I loved coding, I knew I wanted to do more than that. I wanted to create something personal where I could use my skills in leadership, organization, project management, communication, and creativity to share something special with the world. 🌎
					</p>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">
            I wanted to build a space for those who love all things nerdy - from reading and crafts, to anime, technology, and video games. And it HAD to include cats. 🐱
					</p>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">
          Aligning this vision with that of my husband- who is just as nerdy (if not nerdier!) than me- Two Nerdy Cats LLC was born! 🤓
					</p>
					{/* <p className="mb-8 leading-relaxed font-medium text-gray-300">
						{' '}
						My tech background - Software development in Angular, NEST.js, PostgreSQL, MongoDB, NEXTjs, React and more!
					</p>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">
						{' '}
						My education - Bachelor&apos;s Degree in Nursing, Master&apos;s Degree in Nutrition from Nova Southeastern University 🍏, and Software Development Certification from Boca Code 💻
					</p>
					<p className="mb-8 leading-relaxed font-medium text-gray-300">
						I&apos;ve impacted hundreds of lives through 8 years of experience as a Registered Nurse 💊. I experienced the whole spectrum: caring for patients in the hospital, long term care settings, and residential areas.

					</p> */}
					<p className="mb-8 leading-relaxed font-medium text-gray-300"> Check us out at the link below! 👇 </p>
					<div className="flex justify-center">
						<a
							href="https://twonerdycats.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Two Nerdy Cats</button>
						</a>
						<Link href="/">
							<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Connect with me</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
