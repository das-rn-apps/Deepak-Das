// File: src/data/skills.ts

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export const skills: Skill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "GraphQL", level: "Beginner" },
  { name: "Redux", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Docker", level: "Beginner" },
  { name: "Git", level: "Advanced" },
  { name: "HTML5", level: "Advanced" },
  { name: "CSS3", level: "Advanced" },
  { name: "Webpack", level: "Intermediate" },
];
