import { skills } from '../../data/skills';
import { FaStar, FaRegStar } from 'react-icons/fa';

const getStarCount = (level: string): number => {
    switch (level.toLowerCase()) {
        case 'beginner': return 1;
        case 'intermediate': return 3;
        case 'advanced': return 4;
        case 'expert': return 5;
        default: return 2;
    }
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
                        const filledStars = getStarCount(level);
                        const totalStars = 5;

                        return (
                            <div
                                key={idx}
                                className="relative bg-gray-800/60 backdrop-blur-md rounded-xl p-5 flex flex-col items-center shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg border border-gray-700 group"
                            >
                                {/* Glowing border effect */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>

                                <div className="relative z-10 text-center">
                                    <p className="text-xl font-semibold text-indigo-200 mb-2">
                                        {name}
                                    </p>
                                    <div className="flex justify-center mb-1">
                                        {[...Array(totalStars)].map((_, i) =>
                                            i < filledStars ? (
                                                <FaStar key={i} className="text-purple-400 mx-0.5 text-sm" />
                                            ) : (
                                                <FaRegStar key={i} className="text-purple-600 mx-0.5 text-sm" />
                                            )
                                        )}
                                    </div>
                                    {/* <p className="text-xs text-gray-400 italic">{level}</p> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
