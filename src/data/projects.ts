// File: src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  type: "Website" | "App";
  shortDescription?: string;
  longDescription?: string;
  screenshots?: string[];
  liveLink?: string;
  downloadLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Admin Panel",
    description:
      "Admin panel for CRUD operations for my E-Commerce app and website",
    link: "https://edart-admin.netlify.app",
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
    description: "A real-time chat app using Socket.IO and Node.js.",
    link: "https://chatapp.com",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Express.js",
    ],
    type: "App",
    shortDescription:
      "Real-time chat with emojis, media sharing, and user authentication.",
    longDescription: `This chat app allows users to register, log in, and communicate in real-time using WebSockets.\n\nIt includes features like emoji picker, file sharing, and notifications.`,
    screenshots: [
      "/src/assets/image.png",
      "/src/assets/image.png",
      "/src/assets/image.png",
    ],
    liveLink: "https://chatapp.com",
    downloadLink: "https://chatapp.com/download",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "An online store with product listings, cart, and payment integration.",
    link: "https://mystore.com",
    technologies: ["React", "Redux", "Stripe API", "Node.js"],
    type: "Website",
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "A productivity app to manage daily tasks with deadlines and reminders.",
    link: "https://taskmanager.com",
    technologies: ["React", "TypeScript", "Firebase"],
    type: "Website",
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A multi-user blogging platform with rich text editor and commenting system.",
    link: "https://myblog.com",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    type: "Website",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "A dashboard showing real-time weather data with graphs.",
    link: "https://weatherapp.com",
    technologies: ["React", "Chart.js", "OpenWeather API"],
    type: "Website",
  },
  {
    id: 7,
    title: "Recipe Finder",
    description:
      "An app that lets users search and save cooking recipes with filters.",
    link: "https://recipefinder.com",
    technologies: ["React", "Redux", "Edamam API"],
    type: "Website",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    description:
      "Track workouts and progress with personalized fitness plans and stats.",
    link: "https://fitnesstracker.com",
    technologies: ["React Native", "Expo", "Firebase"],
    type: "App",
    shortDescription: "Track workouts and goals, visualize progress over time.",
    longDescription: `Users can log workouts, set goals, and track their progress with charts and stats.\n\nThe app supports Firebase Auth, Realtime DB, and offline storage.`,
    screenshots: ["/assets/fitness1.png", "/assets/fitness2.png"],
    liveLink: "https://fitnesstracker.com",
    downloadLink: "https://fitnesstracker.com/download",
  },
  {
    id: 9,
    title: "Event Booking System",
    description:
      "Book tickets for events with calendar integration and user profiles.",
    link: "https://eventbooking.com",
    technologies: ["React", "Node.js", "MongoDB"],
    type: "Website",
  },
  {
    id: 10,
    title: "Online Learning Platform",
    description:
      "An education platform with video courses, quizzes, and progress tracking.",
    link: "https://learnonline.com",
    technologies: ["React", "GraphQL", "Apollo Client", "Node.js"],
    type: "Website",
  },
];
