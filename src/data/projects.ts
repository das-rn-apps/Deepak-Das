// File: src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React, Vite, and Tailwind CSS.",
    link: "https://yourportfolio.com",
    technologies: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Chat App",
    description: "A real-time chat app using Socket.IO and Node.js.",
    link: "https://chatapp.com",
    technologies: ["React", "Node.js", "Socket.IO"],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "An online store with product listings, cart, and payment integration.",
    link: "https://mystore.com",
    technologies: ["React", "Redux", "Stripe API", "Node.js"],
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "A productivity app to manage daily tasks with deadlines and reminders.",
    link: "https://taskmanager.com",
    technologies: ["React", "TypeScript", "Firebase"],
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A multi-user blogging platform with rich text editor and commenting system.",
    link: "https://myblog.com",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "A dashboard showing real-time weather data with graphs.",
    link: "https://weatherapp.com",
    technologies: ["React", "Chart.js", "OpenWeather API"],
  },
  {
    id: 7,
    title: "Recipe Finder",
    description:
      "An app that lets users search and save cooking recipes with filters.",
    link: "https://recipefinder.com",
    technologies: ["React", "Redux", "Edamam API"],
  },
  {
    id: 8,
    title: "Fitness Tracker",
    description:
      "Track workouts and progress with personalized fitness plans and stats.",
    link: "https://fitnesstracker.com",
    technologies: ["React Native", "Expo", "Firebase"],
  },
  {
    id: 9,
    title: "Event Booking System",
    description:
      "Book tickets for events with calendar integration and user profiles.",
    link: "https://eventbooking.com",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 10,
    title: "Online Learning Platform",
    description:
      "An education platform with video courses, quizzes, and progress tracking.",
    link: "https://learnonline.com",
    technologies: ["React", "GraphQL", "Apollo Client", "Node.js"],
  },
];
