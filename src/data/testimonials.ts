// File: src/data/testimonials.ts

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    company: "Tech Corp",
    message: "Great to work with, highly skilled developer.",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    company: "Creative Studio",
    message: "Delivered high-quality frontend work on time.",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "CTO",
    company: "Innovate Labs",
    message: "Exceptional problem solver and a team player.",
    avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Senior Developer",
    company: "DevWorks",
    message: "Consistently delivers clean and efficient code.",
    avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Product Owner",
    company: "NextGen Solutions",
    message: "Very reliable and great communication skills.",
    avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];
