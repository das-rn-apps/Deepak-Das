import React, { useState } from 'react';



const Navbar: React.FC = () => {
    const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'testimonials', 'contact'];
    const [profileOpen, setProfileOpen] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="text-2xl font-bold cursor-pointer" onClick={() => handleScroll('hero')}>
                    Das
                </div>

                <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300">
                    {sections.map((section) => (
                        <li
                            key={section}
                            className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 capitalize"
                            onClick={() => handleScroll(section)}
                        >
                            {section}
                        </li>
                    ))}
                </ul>

                <div className="relative">
                    <button
                        onClick={() => setProfileOpen((prev) => !prev)}
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                        aria-haspopup="true"
                        aria-expanded={profileOpen}
                    >
                        <img
                            src="https://i.pravatar.cc/32" // placeholder avatar, replace with your image url
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="hidden sm:inline">Profile</span>
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 ${profileOpen ? 'rotate-180' : 'rotate-0'}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    {profileOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                            <ul className="py-1 text-gray-700 dark:text-gray-300">
                                <li>
                                    <button
                                        onClick={() => {
                                            alert('View Profile clicked');
                                            setProfileOpen(false);
                                        }}
                                        className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        View Profile
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            alert('Settings clicked');
                                            setProfileOpen(false);
                                        }}
                                        className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Settings
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            alert('Logout clicked');
                                            setProfileOpen(false);
                                        }}
                                        className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
