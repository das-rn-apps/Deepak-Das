// File: src/pages/NotFound.tsx

import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900">
            <h1 className="text-8xl font-extrabold text-indigo-400 drop-shadow-md mb-4 select-none">
                404
            </h1>
            <p className="text-2xl text-gray-300 mb-6 max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>

            {/* SVG illustration */}
            <svg
                className="w-64 h-48 mb-10 opacity-40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 300"
                fill="none"
            >
                <circle cx="200" cy="150" r="140" stroke="#6366F1" strokeWidth="8" />
                <path
                    d="M120 150h160M200 90v120"
                    stroke="#6366F1"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
            </svg>

            <Link
                to="/"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400"
                aria-label="Go to Home page"
            >
                <FiHome size={20} />
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
