// File: src/data/experience.ts

export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl: string;
  from: string;
  to: string | "Present";
  description: string;
}

export const experience: Experience[] = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Fenice Energy",
    companyUrl: "https://feniceenergy.com/",
    from: "June 2024",
    to: "Present",
    description:
      "Built and maintained RESTful APIs using Node.js, Express, and MongoDB. Utilized TypeScript and JavaScript to write scalable backend services. Collaborated with frontend teams developing apps in React, React Native, and Expo. Used Postman for testing, Git/GitHub for version control, and followed Agile development practices. Contributed to mobile and web integration and deployment pipelines using GitHub Actions.",
  },
  {
    id: 2,
    role: "Database Manager",
    company: "Fenice Energy",
    companyUrl: "https://feniceenergy.com/",
    from: "December 2023",
    to: "June 2024",
    description:
      "Designed, optimized, and managed MongoDB databases for high-performance applications. Integrated backend services with React, React Native, and Vite-based projects. Supported the migration of legacy codebases to TypeScript. Worked closely with developers to resolve data issues and enhance the performance of MERN stack applications using Git and GitHub for collaborative development.",
  },
  {
    id: 3,
    role: "Support DevOps",
    company: "Fenice Energy",
    companyUrl: "https://feniceenergy.com/",
    from: "August 2023",
    to: "December 2023",
    description:
      "Supported CI/CD implementation and automated deployments for React and React Native apps using GitHub Actions. Assisted in Docker container setup and Git branching strategies. Gained experience in managing build pipelines for web projects using Vite, and collaborated in Agile sprints to improve the delivery workflow.",
  },
  {
    id: 4,
    role: "Tester",
    company: "Fenice Energy",
    companyUrl: "https://feniceenergy.com/",
    from: "June 2023",
    to: "August 2023",
    description:
      "Tested cross-platform applications built with React, React Native, and Expo. Used Postman for API testing for UI validation. Documented bugs, coordinated closely with developers, and contributed to quality assurance across web (Vite + Tailwind CSS) and mobile environments.",
  },
];
