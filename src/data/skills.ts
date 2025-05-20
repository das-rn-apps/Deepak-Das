// File: src/data/skills.ts

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export const skills: Skill[] = [
  { name: "JavaScript", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "Express.js", level: "Advanced" },
  { name: "MongoDB", level: "Expert" },
  { name: "Git", level: "Expert" },
  { name: "Expo", level: "Advanced" },
  { name: "React Native", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Redux", level: "Intermediate" },
  { name: "Vite", level: "Advanced" },
];
