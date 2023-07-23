import { projects } from "../data/projects.js";
import { ProjectModel } from "../models/projectModel";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-200">
              Projects Showcase
            </h1>
            <div className="h-1 w-20 bg-teal-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-300">
            I&apos;m in love with code, specifically using it to solve meaningful problems and improve the lives of others. Front-end is my jam, though I love working on both the front and back end of an application. I am looking for my next career opportunity so please reach out to see how I can help your team!
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((oneProject: ProjectModel) => (
            <Project key={oneProject.id} project={oneProject} />
          ))}
        </div>
      </div>
    </section>
  );
}
