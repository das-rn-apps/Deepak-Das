// File: src/components/common/Footer.tsx


const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-700 dark:text-gray-300">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
