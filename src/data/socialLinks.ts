// File: src/data/socialLinks.ts
import type { IconType } from "react-icons"; // This is the type for icon components
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType; // component type, not JSX.Element
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: FaGithub, // just the component, no JSX <>
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: FaTwitter,
  },
];
