import React, { useEffect, useState } from "react";
import {
  Search,
  Command,
  User,
  Code,
  Mail,
  Github,
  ExternalLink,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CommandPalette = ({ isOpen, setIsOpen, onNavigate }) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, setIsOpen]);

  const actions = [
    {
      id: "home",
      name: "Home / AI Chat",
      icon: <User className="w-4 h-4" />,
      shortcut: "H",
      action: () => onNavigate("home"),
    },
    {
      id: "projects",
      name: "Projects",
      icon: <Code className="w-4 h-4" />,
      shortcut: "P",
      action: () => onNavigate("projects"),
    },
    {
      id: "stats",
      name: "GitHub Stats",
      icon: <Github className="w-4 h-4" />,
      shortcut: "S",
      action: () => onNavigate("stats"),
    },
    {
      id: "contact",
      name: "Contact",
      icon: <Mail className="w-4 h-4" />,
      shortcut: "C",
      action: () => onNavigate("contact"),
    },
    {
      id: "github-link",
      name: "Visit GitHub Profile",
      icon: <ExternalLink className="w-4 h-4" />,
      shortcut: "G",
      action: () => window.open("https://github.com", "_blank"),
    },
  ];

  const filtered = actions.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowDown") {
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        setSelectedIndex(
          (prev) => (prev - 1 + filtered.length) % filtered.length
        );
      } else if (e.key === "Enter") {
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
          setIsOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-zinc-800">
              <Search className="w-5 h-5 text-zinc-500 mr-3" />
              <input
                autoFocus
                type="text"
                placeholder="Where to?"
                className="w-full bg-transparent text-white placeholder-zinc-500 focus:outline-none text-lg"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-zinc-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <div className="px-4 py-8 text-center text-zinc-500">
                  No results found.
                </div>
              ) : (
                filtered.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-center justify-between px-4 py-3 mx-2 rounded-lg cursor-pointer transition-colors ${
                      index === selectedIndex
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:bg-zinc-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    {item.shortcut && (
                      <span className="text-xs text-zinc-600 bg-zinc-900 border border-zinc-700 px-1.5 py-0.5 rounded">
                        {item.shortcut}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="px-4 py-2 bg-zinc-950/50 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-600">
              <span>Pro tip: Use arrows to navigate</span>
              <div className="flex items-center gap-1">
                <Command className="w-3 h-3" />
                <span>K</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
