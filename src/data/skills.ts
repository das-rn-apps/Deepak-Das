// File: src/data/skills.ts

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export const skills: Skill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "React Native", level: "Advanced" },
  { name: "Expo", level: "Intermediate" },
  { name: "Node.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "MongoDB", level: "Advanced" },
  { name: "Express.js", level: "Intermediate" },
  { name: "Redux", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "Vite", level: "Intermediate" },
];
