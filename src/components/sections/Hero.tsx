// File: src/components/sections/Hero.tsx


const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-blue-600">Deepak Das</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-6">
                A passionate developer creating beautiful and functional web and mobile experiences.
            </p>
            <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
                View My Work
            </a>
        </section>
    );
};

export default Hero;
