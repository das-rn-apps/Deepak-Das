export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  avatarUrl?: string;
  github?: string; // GitHub username or profile URL
  linkedin?: string; // LinkedIn username or profile URL
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sourabh Singh",
    role: "SDE1",
    company: "Fenice Energy",
    message: "Great to work with, highly skilled developer.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C5103AQERlKJh_DKRAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1558427646612?e=1753315200&v=beta&t=_Rr4alkg0naA2yXXtS1TFpVedfpSr9o-mlwEAz1YXg8",
    github: "sourabh-fenice",
    linkedin: "sourabh-singh-7a0600187",
  },
  {
    id: 2,
    name: "Sanju Naskar",
    role: "DSA",
    company: "Fenice Energy",
    message: "Delivered high-quality frontend work on time.",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQG3Es41GiOcaw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719247664526?e=1753315200&v=beta&t=xfLS7lcYnDCXiw8lyH-jwzXANRotglQsgqsH90eQ_0A",
    github: "SanjuFenice",
    linkedin: "sanju-naskar",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "CTO",
    company: "Innovate Labs",
    message: "Exceptional problem solver and a team player.",
    avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    github: "alicejohnson",
    linkedin: "alicejohnson",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Senior Developer",
    company: "DevWorks",
    message: "Consistently delivers clean and efficient code.",
    avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    github: "michaelbrown",
    linkedin: "michael-brown-2468",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Product Owner",
    company: "NextGen Solutions",
    message: "Very reliable and great communication skills.",
    avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    github: "emilydavis",
    linkedin: "emily-davis-1357",
  },
];
