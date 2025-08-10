import { useState } from "react";
//eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cpu, Database, Globe } from "lucide-react";

const skillsData = [
  {
    name: "Mongo DB",
    icon: <Database size={28} />,
    description: "Building modern, NoSQL Database.",
    proficiency: 70,
    examples: ["Management Database", "E-commerce Store", "Chat App"],
  },
  {
    name: "Express JS",
    icon: <Globe size={28} />,
    description: "REST APIs, authentication, and databases.",
    proficiency: 70,
    examples: ["Blog API", "Auth System", "Inventory Manager"],
  },
  {
    name: "React JS / Next JS",
    icon: <Code size={28} />,
    description: "Make beautifull modern,responsive Frontend.",
    proficiency: 85,
    examples: ["Portfolio", "Landing Pages", "Dashboards"],
  },
  {
    name: "Node JS",
    icon: <Cpu size={28} />,
    description: "Server-side development, APIs, and databases.",
    proficiency: 90,
    examples: ["Web Servers", "Microservices", "Single-Page Applications"],
  },
];

export default function SkillsDashboard() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-[#0D1117] transition-colors"
    >
      <div className="max-w-7xl mx-auto mb-20 mt-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#0D1117] dark:text-[#C9D1D9]">
          Skills Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, idx) => {
            const radius = 40;
            const circumference = 2 * Math.PI * radius;
            const offset =
              circumference - (skill.proficiency / 100) * circumference;

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6, boxShadow: "0 0 15px #58A6FF" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#f8f9fa] dark:bg-[#161B22] rounded-lg p-6 cursor-pointer hover:border-[#58A6FF] border border-transparent"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                <div className="flex items-center space-x-3 text-[#58A6FF]">
                  {skill.icon}
                  <h3 className="text-lg font-semibold text-[#0D1117] dark:text-[#C9D1D9]">
                    {skill.name}
                  </h3>
                </div>

                <div className="relative flex justify-center items-center my-4">
                  {/* Glow layer */}
                  <motion.div
                    className="absolute w-[100px] h-[100px] rounded-full bg-[#58A6FF] blur-xl opacity-0"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                      opacity: [0.2, 0.7, 0.2],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3, // starts just after stroke animation begins
                    }}
                  />

                  {/* Base SVG ring */}
                  <svg
                    width="100"
                    height="100"
                    className="-rotate-90 relative z-10"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="#30363d"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="#58A6FF"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      animate={{ strokeDashoffset: offset }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_8px_#58A6FF]"
                    />
                  </svg>

                  {/* Percentage text */}
                  <motion.span
                    className="absolute z-20 text-lg font-bold text-[#0D1117] dark:text-[#C9D1D9]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    {skill.proficiency}%
                  </motion.span>
                </div>

                <p className="text-sm text-[#57606a] dark:text-[#8b949e]">
                  {skill.description}
                </p>

                <AnimatePresence>
                  {expanded === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-3"
                    >
                      <div>
                        <h4 className="font-medium text-[#58A6FF]">
                          Examples:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-[#0D1117] dark:text-[#C9D1D9]">
                          {skill.examples.map((ex, i) => (
                            <li key={i}>{ex}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
