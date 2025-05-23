import profileImage from '../../assets/image.png';

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 to-gray-800 px-4"
        >
            {/* Profile Image */}
            <img
                src={profileImage}
                alt="Deepak Das"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border border-blue-500 shadow-lg object-cover"
            />

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                Hi, I'm <span className="text-blue-500">Deepak Das</span>
            </h1>
            <p className="text-lg md:text-sm text-gray-300 max-w-6xl mb-6">
                I'm a dedicated developer focused on building elegant, high-performance web and mobile applications that deliver great user experiences.
            </p>

            <a
                href="#projects"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
            >
                View My Work
            </a>
        </section>
    );
};

export default Hero;
