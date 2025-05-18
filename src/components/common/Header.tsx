// File: src/components/common/Header.tsx

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow-md dark:bg-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    MyPortfolio
                </Link>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#projects" className="hover:text-blue-600">Projects</a>
                    <a href="#skills" className="hover:text-blue-600">Skills</a>
                    <a href="#experience" className="hover:text-blue-600">Experience</a>
                    <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
