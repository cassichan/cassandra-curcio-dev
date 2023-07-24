import Image from 'next/image';

export default function Socials() {
	return (
		<div className="flex mt-8">
			<a
				href="https://github.com/cassichan"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					className="m-2 hover:scale-105"
					alt="github logo"
					src="/../public/socials/github1.png"
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
					className="mt-3 ml-2 mr-2 hover:scale-105"
					alt="linked-in logo"
					src="/../public/socials/medium1.png"
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
					src="/../public/socials/ln-white-11.png"
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
					src="/../public/socials/email-white1.png"
					height={30}
					width={55}
				/>
			</a>
		</div>
	);
}
