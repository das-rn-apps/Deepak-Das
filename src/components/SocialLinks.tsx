import { socialLinks } from "../data/socialLinks";

const SocialLinks = () => {
    return (
        <div className="flex justify-center space-x-6">
            {socialLinks.map(({ platform, url, icon: Icon }) => (
                <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className="text-gray-300 hover:text-indigo-400 text-2xl transition-colors"
                >
                    <Icon />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
