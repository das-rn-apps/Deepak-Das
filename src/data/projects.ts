// File: src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: "Website" | "App";
  longDescription?: string;
  liveLink: string;
  downloadLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Admin Panel",
    description:
      "Admin panel for CRUD operations for my E-Commerce app and website",
    longDescription: `This chat app allows users to register, log in, and communicate in real-time using WebSockets.\n\nIt includes features like emoji picker, file sharing, and notifications.`,
    liveLink: "https://edart-admin.netlify.app",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Redux",
      "MogoDB",
      "Express.js",
    ],
    type: "Website",
  },
  {
    id: 2,
    title: "Chat App",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Express.js",
    ],
    type: "App",
    description:
      "Real-time chat with emojis, media sharing, and user authentication.",
    longDescription: `This chat app allows users to register, log in, and communicate in real-time using WebSockets.\n\nIt includes features like emoji picker, file sharing, and notifications.`,
    liveLink: "https://chatapp.com",
    downloadLink: "https://chatapp.com/download",
  },
  {
    id: 3,
    title: "Chat App",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Express.js",
    ],
    type: "App",
    description:
      "Real-time chat with emojis, media sharing, and user authentication.",
    longDescription: `This chat app allows users to register, log in, and communicate in real-time using WebSockets.\n\nIt includes features like emoji picker, file sharing, and notifications.`,
    liveLink: "https://chatapp.com",
    downloadLink: "https://chatapp.com/download",
  },
  {
    id: 4,
    title: "Chat App",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Express.js",
    ],
    type: "App",
    description:
      "Real-time chat with emojis, media sharing, and user authentication.",
    longDescription: `This chat app allows users to register, log in, and communicate in real-time using WebSockets.\n\nIt includes features like emoji picker, file sharing, and notifications.`,
    liveLink: "https://chatapp.com",
    downloadLink: "https://chatapp.com/download",
  },
  {
    id: 5,
    title: "Chat App",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Express.js",
    ],
    type: "App",
    description:
      "Real-time chat with emojis, media sharing, and user authentication.",
    longDescription: `This chat app allows users to register, log in, and communicate in real-time using WebSockets.\n\nIt includes features like emoji picker, file sharing, and notifications.`,
    liveLink: "https://chatapp.com",
    downloadLink: "https://chatapp.com/download",
  },
];
