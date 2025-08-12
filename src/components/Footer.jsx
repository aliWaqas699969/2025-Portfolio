import React from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-[#C9D1D9] py-6 px-4 sm:px-8 border-t border-[#161B22]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
      >
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Ali waqas. All rights reserved.
        </p>

        {/* Right */}
        <nav className="flex space-x-4">
          {["Home", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#FF7B72] transition-colors neon-link"
            >
              {link}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Neon Link Style */}
      <style>
        {`
          .neon-link {
            text-shadow: 0 0 5px #58A6FF, 0 0 10px #58A6FF;
          }
          .neon-link:hover {
            text-shadow: 0 0 5px #FF7B72, 0 0 15px #FF7B72;
          }
        `}
      </style>
    </footer>
  );
}
