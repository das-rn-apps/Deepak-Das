import SocialLinks from "../SocialLinks";

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
                <SocialLinks />
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
