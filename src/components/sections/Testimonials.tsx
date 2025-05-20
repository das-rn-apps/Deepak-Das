import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';
import ExpandableList from '../ExpandableList';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-white mb-12 tracking-wide">
                    Testimonials
                </h2>

                <ExpandableList
                    items={testimonials}
                    initialCount={3}
                    renderItem={({ id, name, role, company, message, avatarUrl, github, linkedin }) => (
                        <div
                            key={id}
                            className="bg-gray-900 w-full relative rounded-2xl border hover:border-gray-700 shadow-lg max-w-6xl mx-auto flex flex-col border-b-4 border-indigo-600 backdrop-blur-md transition-transform transform hover:-translate-y-2 hover:shadow-lg group"
                        >
                            {/* Decorative Overlay — Now ignores pointer events */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0 pointer-events-none"></div>

                            {/* Content wrapper — Elevated above overlay */}
                            <div className="relative z-10">
                                {/* Main testimonial message */}
                                <p className="text-cyan-200 italic text-base leading-relaxed mb-4 p-8 h-25">
                                    “{message}”
                                </p>

                                <div className="border-t border-gray-700 mx-4" />

                                <div className="flex items-center border-gray-700 pt-2 px-8 pb-6">
                                    {avatarUrl ? (
                                        <img
                                            src={avatarUrl}
                                            alt={`${name} avatar`}
                                            className="w-10 h-10 rounded-full object-cover flex-shrink-0 shadow"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0" />
                                    )}

                                    <div className="flex flex-col truncate ml-4">
                                        <p className="text-fuchsia-400 font-semibold text-sm truncate text-left">{name}</p>
                                        <p className="text-gray-400 text-xs truncate text-left">
                                            {role} at {company}
                                        </p>
                                    </div>


                                    {github && (
                                        <a
                                            href={`https://github.com/${github}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-auto text-gray-400 hover:text-white transition-colors duration-200"
                                            title={`GitHub profile of ${name}`}
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                    )}

                                    {linkedin && (
                                        <a
                                            href={`https://linkedin.com/in/${linkedin}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-4 text-gray-400 hover:text-white transition-colors duration-200"
                                            title={`LinkedIn profile of ${name}`}
                                        >
                                            <FaLinkedin size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>


                    )}
                />
            </div>
        </section>
    );
};

export default Testimonials;
