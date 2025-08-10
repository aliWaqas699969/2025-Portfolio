import React, { useState, useEffect } from "react";
//eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Hassan_687",
    role: "Product Manager at YBTech",
    quote:
      "An absolute pleasure to work with — delivers on time and beyond expectations.",
    image: "/gig1.png",
  },
  {
    name: "Steve",
    role: "Freelancer at Fiver",
    quote:
      "Clean, efficient code and a strong eye for responsiveness. Highly recommended!",
    image: "/project4.png",
  },
  {
    name: "Samu_hamil",
    role: "Freelance.",
    quote:
      "A rare blend of technical skill and creative vision. Incredible results every time.",
    image: "/project5.png",
  },
];

const githubStats = {
  followers: 4,
  repos: 10,
  contributions: 200,
};

export default function TestimonialsGithub() {
  const [index, setIndex] = useState(0);
  const [counts, setCounts] = useState({
    followers: 0,
    repos: 0,
    contributions: 0,
  });

  // Auto-change testimonial every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate GitHub stats counter
  useEffect(() => {
    const duration = 1000;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCounts({
        followers: Math.floor(progress * githubStats.followers),
        repos: Math.floor(progress * githubStats.repos),
        contributions: Math.floor(progress * githubStats.contributions),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="bg-[#0D1117] text-[#C9D1D9] py-16 px-4 sm:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Testimonials & GitHub Stats
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Testimonials Carousel */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#161B22] p-6 rounded-lg border border-[#58A6FF] neon-glow shadow-lg text-center"
              >
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-[#58A6FF]"
                />
                <p className="italic text-lg">"{testimonials[index].quote}"</p>
                <h4 className="mt-4 font-bold">{testimonials[index].name}</h4>
                <span className="text-sm text-gray-400">
                  {testimonials[index].role}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="bg-[#161B22] p-6 rounded-lg border border-[#58A6FF] neon-glow shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">GitHub Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-3xl font-bold text-[#58A6FF]">
                {counts.followers}
              </p>
              <p className="text-sm">Followers</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-3xl font-bold text-[#FF7B72]">
                {counts.repos}
              </p>
              <p className="text-sm">Repositories</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <p className="text-3xl font-bold text-[#58A6FF]">
                {counts.contributions}
              </p>
              <p className="text-sm">Contributions</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Neon Glow Animation */}
      <style>
        {`
          .neon-glow {
            box-shadow: 0 0 10px #58A6FF, 0 0 20px #58A6FF, 0 0 30px #58A6FF;
          }
        `}
      </style>
    </section>
  );
}
