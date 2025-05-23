import { skills } from '../../data/skills';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { techLinks } from '../../data/technologies';

const levelStars: Record<string, number> = {
    beginner: 1,
    intermediate: 3,
    advanced: 4,
    expert: 5,
};

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
                    My Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {skills.map(({ name, level }, idx) => {
                        const stars = levelStars[level.toLowerCase()] ?? 2;
                        const link = techLinks[name] || "#";

                        return (
                            <a
                                key={idx}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative border border-indigo-600 hover:border-gray-700 bg-gray-900 rounded-xl p-5 shadow-md backdrop-blur-md group transform transition hover:-translate-y-2 hover:shadow-lg"
                            >
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
                                <div className="relative z-10 text-center">
                                    <p className="text-sm font-semibold text-indigo-200 mb-2">{name}</p>
                                    <div className="flex justify-center">
                                        {Array.from({ length: 5 }, (_, i) =>
                                            i < stars ? (
                                                <FaStar key={i} className="text-purple-400 text-xs mx-0.5" />
                                            ) : (
                                                <FaRegStar key={i} className="text-purple-600 text-xs mx-0.5" />
                                            )
                                        )}
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
