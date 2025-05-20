import { projects } from '../../data/projects';
import ExpandableList from '../ExpandableList';
import { FiExternalLink, FiDownload } from 'react-icons/fi';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    Featured Projects
                </h2>

                <ExpandableList
                    items={projects}
                    initialCount={3}
                    renderItem={({ id, title, description, link, technologies, type }) => (
                        <div
                            key={id}
                            className="bg-gray-900 border border-indigo-600 hover:border-gray-700 duration-300 rounded-xl p-6 flex flex-col justify-between text-left shadow-sm relative backdrop-blur-md transition-transform transform  hover:-translate-y-2 hover:shadow-lg group"
                        >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0 pointer-events-none"></div>

                            <div>
                                <h3 className="text-2xl font-medium text-white mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs text-gray-300  px-3 py-1 rounded-full bg-indigo-700/70"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {link && (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 self-start text-sm text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                                >
                                    {type === 'App' ? (
                                        <>
                                            <FiDownload className="text-base" />
                                            Download App
                                        </>
                                    ) : (
                                        <>
                                            <FiExternalLink className="text-base" />
                                            View Website
                                        </>
                                    )}
                                </a>
                            )}
                        </div>
                    )}
                />
            </div>
        </section>
    );
};

export default Projects;
