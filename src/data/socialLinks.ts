// File: src/data/socialLinks.ts
import type { IconType } from "react-icons"; // This is the type for icon components
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Deepak-Das-7",
    icon: FaGithub,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/deepak-das-1b5921216",
    icon: FaLinkedin,
  },
  {
    platform: "Twitter",
    url: "https://github.com/das-rn-apps",
    icon: FaTwitter,
  },
];
