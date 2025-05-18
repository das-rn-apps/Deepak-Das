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
                    renderItem={({ id, role, company, from, to, description }) => (
                        <div
                            key={id}
                            className="relative border-l-4 border-indigo-600 pl-8 mb-5 last:mb-0 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-6"
                        >
                            {/* Timeline dot */}
                            <span className="absolute -left-3 top-6 w-5 h-5 bg-indigo-600 rounded-full border-2 border-gray-900"></span>

                            <h3 className="text-2xl font-semibold text-indigo-300 mb-2">
                                {role}{" "}
                                <span className="text-gray-400 font-normal">
                                    @ {company}
                                </span>
                            </h3>

                            <p className="flex items-center gap-2 text-indigo-400 font-medium mb-4 text-sm">
                                <FaRegCalendarAlt />
                                <span>{from} - {to}</span>
                            </p>

                            <p className="text-gray-300 leading-relaxed max-w-xl">
                                {description}
                            </p>
                        </div>
                    )}
                />
            </div>
        </section>
    );
};

export default Experience;
