import { useState } from "react";
//eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { X, CircleX } from "lucide-react";
import toast from "react-hot-toast";

const projects = [
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
];

export default function ProjectPlayground() {
  const [selected, setSelected] = useState(null);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  const handleCodeClick = () => {
    if (selected.code === "#") {
      // toast.error("Code not available for this project. It is private");
      toast("Sorry Code is Private!", {
        icon: <CircleX />,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      window.open(selected.code, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#0D1117] text-[#C9D1D9]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Project Playground
        </h2>

        <Masonry breakpointCols={breakpoints} className="flex gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-[#161B22] rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-[0_0_15px_#58A6FF] transition-shadow duration-300 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.25,
                duration: 0.5,
                ease: "easeOut",
              }}
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </Masonry>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#161B22] p-6 rounded-xl max-w-lg w-full relative shadow-lg overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                  onClick={() => setSelected(null)}
                >
                  <X size={24} />
                </button>

                {/* Background image with cinematic blur-in */}
                <motion.img
                  src={selected.image}
                  alt={selected.title}
                  className="rounded-lg mb-4 w-full object-cover"
                  initial={{ filter: "blur(20px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Content slides up after image loads */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                  <p className="mb-4">{selected.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-[#0D1117] border border-[#58A6FF] text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-[#58A6FF] text-[#0D1117] font-semibold hover:shadow-[0_0_10px_#58A6FF] transition"
                    >
                      Live Demo
                    </a>
                    <button
                      onClick={handleCodeClick}
                      className="cursor-pointer px-4 py-2 rounded-lg bg-[#FF7B72] text-[#0D1117] font-semibold hover:shadow-[0_0_10px_#FF7B72] transition"
                    >
                      Code
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
