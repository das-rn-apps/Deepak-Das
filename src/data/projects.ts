// File: src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  type: "Website" | "App";
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
      "React-Native",
      "Expo",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Express.js",
    ],
    type: "App",
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
