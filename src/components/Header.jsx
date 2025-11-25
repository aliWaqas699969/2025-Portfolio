import { useState } from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { CommandPalette } from "./CommandPalette";
export default function Header() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0D1117]/80 dark:bg-[#0D1117]/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold  tracking-wider cursor-pointer bg-gradient-to-r from-blue-500 to-[#FF7B72] bg-clip-text text-transparent "
        >
          <a href="/">
            <img
              src="/AW.svg"
              alt="Loogo"
              className="w-12 bg-[#58A6FF] rounded shadow-[0_0_8px_#58A6FF,0_0_15px_#58A6FF,0_0_25px_#58A6FF] animate-neonGlow"
            />
          </a>
        </motion.div>
        <button
          onClick={() => setIsCmdOpen(true)}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 hover:text-white hover:border-zinc-700 transition-all group"
        >
          <span>Search...</span>
          <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-1.5 font-mono text-[10px] font-medium text-zinc-400 group-hover:text-white">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>

        <button
          onClick={() => setIsCmdOpen(true)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
        >
          <Command className="w-5 h-5" />
        </button>
      </div>
      <CommandPalette
        isOpen={isCmdOpen}
        setIsOpen={setIsCmdOpen}
        onNavigate={scrollToSection}
      />
    </header>
  );
}
