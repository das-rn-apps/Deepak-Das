import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects"
import { techLinks } from "../data/technologies"

const AppDetails: React.FC = () => {
    const { id } = useParams();
    const projectId = parseInt(id || ""); // convert to number if needed

    const project = projects.find((p) => p.id === projectId);
    if (project) {

        return (
            <div className="px-6 py-12 max-w-6xl mx-auto w-full">
                <h1 className="text-4xl font-bold text-center mb-4">{project.title}</h1>
                <p className="text-lg text-center text-gray-400 mb-8">{project.shortDescription}</p>

                {/* Screenshots as Mobile Mockups */}
                <div className="flex flex-wrap justify-center gap-1 mb-10  md:gap-8">
                    {project.screenshots && project.screenshots.map((src, index) => (
                        <div
                            key={index}
                            className="w-[100px] md:w-[250px] aspect-[9/19.5] bg-black rounded-[1rem] shadow-lg border-2 border-fuchsia-900 overflow-hidden flex items-center justify-center relative"
                        >
                            <img
                                src={src}
                                alt={`Screenshot ${index + 1}`}
                                className="w-full h-full object-cover "
                            />
                            {/* Optional camera dot for realism */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full" />
                        </div>
                    ))}
                </div>



                {/* Tech Stack */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                            <a
                                key={index}
                                href={techLinks[tech]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:underline"
                            >
                                {tech}
                            </a>
                        ))}
                    </div>
                </div>


                {/* Long Description */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">About the App</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center">
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow"
                        >
                            View Live
                        </a>
                    )}
                    {project.downloadLink && (
                        <a
                            href={project.downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg shadow"
                        >
                            Download App
                        </a>
                    )}
                </div>
            </div>
        );
    }
};

export default AppDetails;
