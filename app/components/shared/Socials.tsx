import Image from 'next/image';
import github from '../../../public/github1.png';
import medium from '../../../public/medium1.png';
import linkedin from '../../../public/ln-white-11.png';
import email from '../../../public/email-white1.png';

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
					src={github}
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
					src={medium}
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
					src={linkedin}
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
					src={email}
					height={30}
					width={55}
				/>
			</a>
		</div>
	);
}
