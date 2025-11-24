import { Briefcase, GraduationCap, Rocket } from "lucide-react";

export const RESUME = {
  name: "Ali Waqas",
  title: "Full Stack Engineer & AI Specialist",
  about:
    "I build digital experiences that live at the intersection of modern web engineering and artificial intelligence. I focus on scalable React architectures, Next.js server-side performance, and integrating LLMs into practical user workflows.",
  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js (Basic)",
    "Python (Basic)",
    "Express.js",
    "Google Gemini API",
    "Tailwind CSS",
    "Bootstrap",
    "Framer Motion (Basic)",
    "MongoDB (Basic)",
  ],
  experiences: [
    {
      year: "2024-2025",
      title: "MERN Stack Developer at YBTech",
      description:
        "Worked on complex projects using React, Next.js, Node.js, and MongoDB.",
      achievements: [
        "Built and deployed 5+ client applications using the MERN stack.",
        "Optimized database Schemas reducing server load by 25%.",
        "Mentored junior developers in Javascript best practices.",
      ],
      icon: <Briefcase className="text-[#58A6FF]" />,
      image: "/gig1.png",
    },
    {
      year: "2023-2024",
      title: "Junior Frontend Developer at PK2100 Business Solutions",
      description: "Worked on complex projects using React, Next.js.",
      extraDetails: "Specialized in Frontend Development and UI/UX.",
      icon: <Rocket className="text-[#FF7B72]" />,
      image: "/project4.png",
    },
    {
      year: "2022",
      title: "Graduated with Software Engineer Degree",
      description: "Completed B.Sc. in Software engineering with honors.",
      extraDetails: "Little Bit experience of web development.",
      icon: <GraduationCap className="text-[#58A6FF]" />,
      image: "/Degree.jpg",
    },
  ],
  projects: [
    {
      title: "3D-Portfolio Website",
      description:
        "A modern responsive 3D-portfolio built with React,TailwindCSS and Three.js.",
      image: "/portfoliowebsite.png",
      live: "https://3d-portfolio-gamma-snowy.vercel.app/",
      code: "https://github.com/aliWaqas699969/3d-Portfolio",
      tech: ["React", "TailwindCSS", "Three.js"],
    },
    {
      title: "Learning Platform",
      description:
        "A modern responsive Full-stack learning platform of Robotics and Drones.",
      image: "/project2.png",
      live: "https://robo-drone.onrender.com/",
      code: "https://github.com/aliWaqas699969/Bot-Drone",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    },
    {
      title: "E-commerce Website",
      description:
        " A modern responsive E-commerce restaurant website built with React, Node.js, MongoDB, Express.js.",
      image: "/project5.png",
      live: "https://owner.tapandeat.co/",
      code: "#",
      tech: ["React.js", "MaterialUI", "MongoDB", "Express.js"],
    },
    {
      title: "Electronic Repair Website",
      description:
        " A modern responsive Electronic Repair website in which user can book services.",
      image: "/project4.png",
      live: "https://www.mragain.nl/",
      code: "#",
      tech: ["React.js", "Ants Design", "Express.js"],
    },
    {
      title: "Notes App",
      description:
        " A modern responsive Real-time Notes application built with React, Node.js, MongoDB, Express.js.",
      image: "/project3.png",
      live: "https://thinkboard-mern-8xlc.onrender.com/",
      code: "https://github.com/aliWaqas699969/ThinkBoard-Mern",
      tech: ["React.js", "Node.js", "MongoDB", "DaisyUI"],
    },
    {
      title: "Database Schema Converter",
      description:
        " A modern responsive application where you convert between different database schema like MySQL to MongoDB.",
      image: "/landing.png",
      live: "https://db-eight-ebon.vercel.app/",
      code: "https://github.com/aliWaqas699969/DBSchema",
      tech: ["React.js", "Node.js", "MongoDB", "fontawesome", "Gemini AI"],
    },
  ],

  socials: {
    github: "https://github.com/aliwaqas699969",
    linkedin: "https://linkedin.com/in/aliwaqas",
    email: "aliwaqas55488@gmail.com",
  },
};

export default RESUME;
