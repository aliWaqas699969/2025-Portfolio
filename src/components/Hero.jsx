//eslint-disable-next-line
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ChatInterface from "./ChatInterface";
import { CommandPalette } from "./CommandPalette";

export default function Hero() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="relative bg-primary min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center px-6 py-24 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          Available for work
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
          Don't read my resume. <br />
          <span className="text-white">Chat with it.</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-lg">
          I'm Ali, a Full Stack Engineer building scalable applications with
          React.js, Next.js and AI. This is my digital twin ask it anything.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                       bg-accent text-primary shadow-[0_0_15px_#58A6FF] hover:shadow-[0_0_32px_#58A6FF] hover:scale-105"
          >
            🚀 View My Work
          </a>
          <button
            onClick={() => setIsCmdOpen(true)}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300
                       border border-accent text-accent hover:bg-accent hover:text-primary hover:shadow-[0_0_20px_#58A6FF] hover:scale-105 cursor-pointer"
          >
            📡 Press Cmd+K
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative"
      >
        <div className="absolute" />
        <ChatInterface />
      </motion.div>
      <CommandPalette
        isOpen={isCmdOpen}
        setIsOpen={setIsCmdOpen}
        onNavigate={scrollToSection}
      />
    </section>
  );
}
