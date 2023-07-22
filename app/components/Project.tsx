import Image from "next/image";
// import { ProjectProps} from "./Projects";
import { ProjectModel } from "../models/projectModel";

export interface ProjectProps {
    key: number;
    project: ProjectModel;
  }
  

export default function Project({ project }: ProjectProps) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <Image
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={project.image_url ? project.image_url : "/../public/Yaizu.jpeg"}
          alt="content"
          height={500}
          width={720}
        />
        <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">
          {project.title}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {project.subtitle}
        </h2>
        <p className="leading-relaxed text-base">{project.description}</p>
      </div>
    </div>
  );
}
