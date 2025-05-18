import { projects } from '../../data/projects';
import ExpandableList from '../ExpandableList';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-900">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                    Projects
                </h2>

                <ExpandableList
                    items={projects}
                    initialCount={3}
                    renderItem={({ id, title, description, link, technologies }) => (
                        <div
                            key={id}
                            className="bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {title}
                                </h3>
                                <p className="text-gray-300 mb-4">{description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-sm bg-indigo-800 text-indigo-100 rounded-full px-3 py-1"
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
                                    className="mt-6 inline-block text-indigo-400 hover:underline font-semibold"
                                >
                                    View Project &rarr;
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
