import React, { useState } from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const experiences = [
  {
    year: "2025",
    title: "Lead Developer at TechCorp",
    description:
      "Led a team of 8 engineers to deliver high-scale web platforms.",
    extraDetails: "Worked on React, Next.js, Node.js, and cloud architecture.",
    icon: <Briefcase className="text-[#58A6FF]" />,
    image: "/gig1.png",
  },
  {
    year: "2023",
    title: "Graduated with CS Degree",
    description: "Completed B.Sc. in Computer Science with honors.",
    extraDetails: "Specialized in software architecture and AI.",
    icon: <GraduationCap className="text-[#FF7B72]" />,
    image: "/gig2.png",
  },
  {
    year: "2021",
    title: "First Major Project Launch",
    description: "Developed and deployed a SaaS platform used by 5k+ users.",
    extraDetails: "Built with MERN stack and integrated payment systems.",
    icon: <Rocket className="text-[#58A6FF]" />,
    image: "/gig3.png",
  },
];

export default function ExperienceTimeline() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section
      id="timeline"
      className="bg-[#0D1117] text-[#C9D1D9] py-16 px-4 sm:px-8"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Experience Timeline
      </h2>
      <div className="relative max-w-4xl mx-auto flex">
        {/* Timeline Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-5 top-0 w-px bg-[#58A6FF] origin-top neon-glow"
          style={{ height: "100%" }}
        ></motion.div>

        <div className="flex flex-col w-full">
          {experiences.map((exp, index) => {
            const isHovered = hoverIndex === index;
            return (
              <motion.div
                key={index}
                className="flex items-start mb-12 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Left: Icon */}
                <div className="flex flex-col items-center z-10">
                  <div
                    className={`bg-[#161B22] rounded-full p-2 border-2 border-[#58A6FF] neon-glow ${
                      isHovered ? "animate-pulse-glow" : ""
                    }`}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Right: Content */}
                <div
                  className={`ml-6 p-4 rounded-lg transition-all duration-300 ${
                    isHovered ? "bg-[#161B22]" : ""
                  }`}
                >
                  <span className="text-sm text-[#58A6FF]">{exp.year}</span>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-sm">{exp.description}</p>

                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3"
                    >
                      <p className="text-sm text-gray-400">
                        {exp.extraDetails}
                      </p>
                      {exp.image && (
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="mt-3 rounded-lg border border-[#58A6FF] neon-glow w-full object-cover max-h-48"
                        />
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pulse Glow Animation */}
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 10px #58A6FF, 0 0 20px #58A6FF, 0 0 30px #58A6FF;
            }
            50% {
              box-shadow: 0 0 15px #58A6FF, 0 0 30px #58A6FF, 0 0 45px #58A6FF;
            }
          }
          .animate-pulse-glow {
            animation: pulseGlow 1.5s infinite;
          }
        `}
      </style>
    </section>
  );
}
