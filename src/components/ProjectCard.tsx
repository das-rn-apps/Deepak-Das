import { FiExternalLink } from 'react-icons/fi';
import { techLinks } from '../data/technologies';

type Props = {
    id: number;
    title: string;
    description: string;
    liveLink: string;
    downloadLink?: string;
    technologies: string[];
    type: 'App' | 'Website';
};

const ProjectCard = ({
    id,
    title,
    description,
    liveLink,
    downloadLink,
    technologies,
    type,
}: Props) => {
    return (
        <div className="bg-gray-900 border border-indigo-600 hover:border-gray-700 duration-300 rounded-xl p-6 flex flex-col justify-between text-left shadow-sm relative backdrop-blur-md transition-transform transform hover:-translate-y-2 hover:shadow-lg group">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0 pointer-events-none" />

            <div>
                <h3 className="text-2xl font-medium text-white mb-2">{title}</h3>

                {description && (
                    <p className="text-gray-400 text-xs mb-3 italic">{description}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, idx) => {
                        const url = techLinks[tech];
                        const key = `${id}-${tech}-${idx}`;
                        return url ? (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-gray-300 px-3 py-1 rounded-full bg-indigo-700/70 hover:bg-indigo-600 transition"
                                title={`Go to ${tech} official website`}
                            >
                                {tech}
                            </a>
                        ) : (
                            <span
                                key={key}
                                className="text-xs text-gray-300 px-3 py-1 rounded-full bg-indigo-700/70"
                                title="No link available"
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>
            </div>

            {(type === 'App' ? downloadLink : liveLink) && (
                <a
                    href={type === 'App' ? downloadLink : liveLink}
                    {...(type !== 'App' && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="mt-4 inline-flex items-center gap-2 self-start text-sm text-gray-300 border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    <FiExternalLink className="text-base" />
                    {type === 'App' ? 'Download App' : 'View Website'}
                </a>
            )}
        </div>
    );
};

export default ProjectCard;
