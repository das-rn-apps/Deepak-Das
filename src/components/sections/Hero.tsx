const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 to-gray-800 px-4"
        >
            {/* Profile Image */}
            <img
                src="/src/assets/image_wbg.png"
                alt="Deepak Das"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-1 border-blue-500 shadow-lg object-cover"
            />

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                Hi, I'm <span className="text-blue-500">Deepak Das</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
                A passionate developer creating beautiful and functional web and mobile experiences.
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
