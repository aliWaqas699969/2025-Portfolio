import { useState, useEffect } from "react";
//eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Case Studies", id: "case-studies" },
    { name: "Timeline", id: "timeline" },
    { name: "Contact", id: "contact" },
  ];

  // Detect active section using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navLinks]);

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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors relative ${
                activeSection === link.id
                  ? "text-[#58A6FF] font-semibold"
                  : "text-[#C9D1D9] hover:text-[#58A6FF]"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#58A6FF] rounded shadow-[0_0_8px_#58A6FF,0_0_15px_#58A6FF,0_0_25px_#58A6FF] animate-neonGlow"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-[#161B22] hover:bg-[#1F2937] transition-colors"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0D1117] dark:bg-[#0D1117] px-6 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block transition-colors ${
                  activeSection === link.id
                    ? "text-[#58A6FF] font-semibold"
                    : "text-[#C9D1D9] hover:text-[#58A6FF]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
