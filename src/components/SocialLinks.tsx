// File: src/components/SocialLinks.tsx
import { socialLinks } from "../data/socialLinks";

const SocialLinks = () => {
    return (
        <div className="flex space-x-6 justify-center md:justify-start">
            {socialLinks.map(({ platform, url, icon: Icon }) => (
                <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl transition-colors"
                >
                    <Icon />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
