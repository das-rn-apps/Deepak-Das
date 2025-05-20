import { experience } from "../../data/experiences";
import ExpandableList from "../ExpandableList";
import { FaRegCalendarAlt } from "react-icons/fa";

const Experience = () => {
    return (
        <section id="experience" className="py-10 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-wide text-center">
                    Experience
                </h2>

                <ExpandableList
                    items={experience}
                    initialCount={2}
                    orientation="vertical"
                    renderItem={({ id, role, company, companyUrl, from, to, description }) => (
                        <div
                            key={id}
                            className="relative bg-gray-900 border border-indigo-600 hover:border-gray-700 duration-300 rounded-xl p-6 flex flex-col justify-between text-left shadow-sm backdrop-blur-md transition-transform transform hover:-translate-y-2 hover:shadow-lg group border-l-6"
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0 pointer-events-none"></div>

                            {/* Timeline dot */}
                            <span className="absolute -left-3 top-6 w-5 h-5 bg-indigo-600 rounded-full border-2 border-gray-900 z-10"></span>

                            {/* Content wrapper with higher z-index */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-semibold text-indigo-300 mb-2">
                                    {role}{" "}
                                    {companyUrl ? (
                                        <a
                                            href={companyUrl.startsWith('http') ? companyUrl : `https://${companyUrl}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 font-normal hover:underline hover:text-indigo-400 transition"
                                        >
                                            @ {company}
                                        </a>
                                    ) : (
                                        <span className="text-gray-400 font-normal">@ {company}</span>
                                    )}
                                </h3>

                                <p className="flex items-center gap-2 text-indigo-400 font-medium mb-4 text-sm">
                                    <FaRegCalendarAlt />
                                    <span>{from} - {to}</span>
                                </p>

                                <p className="text-gray-300 leading-relaxed max-w-6xl text-sm">
                                    {description}
                                </p>
                            </div>
                        </div>

                    )}
                />
            </div>
        </section>
    );
};

export default Experience;
