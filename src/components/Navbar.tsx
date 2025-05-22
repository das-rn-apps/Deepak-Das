import React from 'react';



const Navbar: React.FC = () => {
    const sections = ['hero', 'skills', 'projects', 'experience', 'testimonials', 'contact'];

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full bg-gray-900 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="text-2xl font-bold cursor-pointer" onClick={() => handleScroll('hero')}>
                    Das
                </div>

                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {sections.map((section) => (
                        <li
                            key={section}
                            className="cursor-pointer hover:text-blue-400 capitalize"
                            onClick={() => handleScroll(section)}
                        >
                            {section}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
