import { testimonials } from '../../data/testimonials';
import ExpandableList from '../ExpandableList';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 px-4 bg-gray-800">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                    Testimonials
                </h2>

                <ExpandableList
                    items={testimonials}
                    initialCount={2}
                    renderItem={({ id, name, role, company, message, avatarUrl }) => (
                        <div
                            key={id}
                            className="bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center"
                        >
                            {avatarUrl && (
                                <img
                                    src={avatarUrl}
                                    alt={`${name} avatar`}
                                    className="w-20 h-20 rounded-full mb-4 object-cover"
                                />
                            )}
                            <p className="text-gray-300 italic mb-4">"{message}"</p>
                            <p className="font-semibold text-white">{name}</p>
                            <p className="text-sm text-gray-400">
                                {role} at {company}
                            </p>
                        </div>
                    )}
                />
            </div>
        </section>
    );
};

export default Testimonials;
