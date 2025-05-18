import { projects } from '../../data/projects';
import ExpandableList from '../ExpandableList';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
                    Projects
                </h2>

                <ExpandableList
                    items={projects}
                    initialCount={3}
                    orientation='horizontal'
                    renderItem={({ id, title, description, link, technologies }) => (
                        <div
                            key={id}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-sm bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 rounded-full px-3 py-1"
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
                                    className="mt-6 inline-block text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
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
