//eslint-disable-next-line
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import BackgroundTerminal from "./BackgroundTerminal";

export default function Hero() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lines = [
    "> Initializing MERN Stack Portfolio...",
    "> Connecting to MongoDB...",
    "> Backend server running on port 5000",
    "> Frontend server running on port 5173",
    "> Deploying to production...",
    "> Build completed successfully 🎉",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const termRef = useRef(null);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + lines[lineIndex][charIndex]);
          setCharIndex((c) => c + 1);
        }, 35); // slightly faster typing
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setLineIndex((li) => li + 1);
          setCharIndex(0);
        }, 420);
        return () => clearTimeout(timeout);
      }
    } else {
      // loop after a pause
      const loopTimeout = setTimeout(() => {
        setDisplayedText("");
        setLineIndex(0);
        setCharIndex(0);
      }, 4000);
      return () => clearTimeout(loopTimeout);
    }
  }, [charIndex, lineIndex, lines]);

  // Optional: small parallax on mouse move for glow (nice touch)
  useEffect(() => {
    const el = termRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      // move glow slightly
      const glow = el.querySelector(".terminal-glow");
      if (glow) {
        glow.style.transform = `translateY(${12 + dy * 6}%) scale(${
          1.02 + Math.abs(dx) * 0.06
        })`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-primary  min-h-screen flex flex-col md:flex-row  items-center justify-between px-6 py-24 md:px-20 gap-12 overflow-hidden "
    >
      <BackgroundTerminal />
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col max-w-xl text-center md:text-left z-10 "
      >
        <h1 className="text-4xl text-white md:text-6xl font-heading font-bold leading-tight">
          Hi, I’m {""}
          <span className="bg-gradient-to-r from-blue-500 to-[#FF7B72] bg-clip-text text-transparent">
            Ali Waqas
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-coral font-semibold">
          MERN Stack Developer
        </h2>
        <p className="text-lg text-gray-400 max-w-xl">
          Building modern, responsive, and scalable web applications with
          MongoDB, Express, React, and Node.js.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                       bg-accent text-primary shadow-[0_0_15px_#58A6FF] hover:shadow-[0_0_32px_#58A6FF] hover:scale-105"
          >
            🚀 View My Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300
                       border border-accent text-accent hover:bg-accent hover:text-primary hover:shadow-[0_0_20px_#58A6FF] hover:scale-105"
          >
            📡 Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right: Terminal + glow */}
      <div
        ref={termRef}
        className="relative w-full md:w-[540px] h-[320px] flex items-center justify-center z-10"
      >
        {/* glow element (positioned behind the terminal box) */}
        <span className="terminal-glow" aria-hidden="true"></span>

        {/* the terminal itself */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="terminal-wrap relative bg-black/85 text-green-400 font-mono p-5 rounded-xl shadow-2xl w-[92%] max-w-[540px] h-[86%] overflow-hidden border border-green-600 terminal-box"
        >
          <pre className="whitespace-pre-wrap text-sm md:text-base leading-relaxed select-none">
            {displayedText}
          </pre>
          {/* blinking cursor */}
          <span className="absolute bottom-4 right-6 text-green-300 animate-pulse">
            ▌
          </span>
        </motion.div>
      </div>
    </section>
  );
}
