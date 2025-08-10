// BackgroundTerminal.jsx
import { useEffect, useState } from "react";

export default function BackgroundTerminal() {
  const lines = [
    "C:\\> CONNECTING TO SERVER...",
    "C:\\> ACCESS GRANTED",
    "RUNNING NMAP SCAN...",
    "ERROR: NO RESPONSE FROM SERVER",
    "SCANNING PORTS 22, 80, 443...",
    "PORTS OPEN: 80, 443",
    "DOWNLOADING DATABASE...",
    "TRANSFER COMPLETE ✔",
    "INITIALIZING PAYLOAD...",
    "PAYLOAD DEPLOYED SUCCESSFULLY",
  ];

  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => [...prev, lines[i]]);
      i = (i + 1) % lines.length;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute right-0 w-[65%]  overflow-hidden  border-r border-green-500 font-mono text-green-400 text-sm leading-snug opacity-40 z-0">
      <div className="animate-pulse">
        {displayed.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
    </div>
  );
}
