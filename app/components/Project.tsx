import Image from 'next/image';
import { ProjectModel } from '../models/projectModel';

export interface ProjectProps {
	key: number;
	project: ProjectModel;
}

export default function Project({ project }: ProjectProps) {
	return (
		<div className="xl:w-1/4 md:w-1/2 p-4">
			<div className="bg-gray-100 p-6 rounded-lg min-h-full hover:scale-105">
				<Image
					className="h-120 rounded w-full object-cover object-center mb-6"
					src={project.image_url ? project.image_url : '/../public/coming_soon1.jpeg'}
					alt="project screenshot"
					height={500}
					width={720}
				/>
				<h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">{project.title}</h3>
				<h2 className="text-lg text-gray-900 font-medium title-font mb-4">{project.subtitle}</h2>
				<p className="leading-relaxed text-base">{project.description}</p>
				<br />
				<p className="leading-relaxed text-base">{project.tech}</p>
				<div className="flex">
					{project.github_url ? (
						<a
							href={project.github_url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="leading-relaxed text-gray-500 underline mt-5 mr-3 hover:cursor-pointer hover:text-teal-400">REPO</p>
						</a>
					) : (
						<></>
					)}
					<a
						href={project.live_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="leading-relaxed text-gray-500 underline mt-5 hover:cursor-pointer hover:text-teal-400">LIVE</p>
					</a>
				</div>
			</div>
		</div>
	);
}
