import { skills } from '../../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-10 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                    Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {skills.map(({ name, level }, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center"
                        >
                            <p className="text-lg font-semibold text-white mb-2">
                                {name}
                            </p>
                            <p className="text-sm text-gray-300">{level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
