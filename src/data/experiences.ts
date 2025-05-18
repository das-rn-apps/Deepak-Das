// File: src/data/experience.ts

export interface Experience {
  id: number;
  role: string;
  company: string;
  from: string;
  to: string | "Present";
  description: string;
}

export const experience: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Tech Corp",
    from: "Jan 2022",
    to: "Present",
    description:
      "Developed and maintained full-stack applications using React and Node.js.",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Web Solutions",
    from: "Jun 2020",
    to: "Dec 2021",
    description:
      "Worked on responsive UI and improved UX with React and Tailwind CSS.",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "Innovate Labs",
    from: "Jan 2019",
    to: "May 2020",
    description:
      "Assisted in building frontend components and fixed bugs in legacy projects.",
  },
  {
    id: 4,
    role: "Intern Developer",
    company: "Startup Hub",
    from: "Jun 2018",
    to: "Dec 2018",
    description:
      "Collaborated on small projects, learning software development lifecycle and best practices.",
  },
  {
    id: 5,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    from: "Jan 2017",
    to: "May 2018",
    description:
      "Created websites for small businesses using HTML, CSS, and JavaScript.",
  },
];
