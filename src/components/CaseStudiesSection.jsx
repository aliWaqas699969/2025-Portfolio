import React, { useState, useEffect } from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Optimizing API Performance",
    problem: "The API response times were too slow, causing poor UX.",
    solution:
      "Implemented caching, reduced DB queries, and optimized payload size.",
    result: "Response time improved by 65%, increasing user satisfaction.",
    images: ["/gig1.png", "/gig2.png", "/gig3.png"],
  },
  {
    title: "Revamping E-commerce UX",
    problem: "Users struggled with navigation, leading to high bounce rates.",
    solution: "Redesigned UI/UX, added predictive search and category filters.",
    result: "Bounce rate dropped by 35% and conversions increased by 20%.",
    images: ["/gig1.png", "/gig3.png"],
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#0D1117] text-[#C9D1D9] py-16 px-4 sm:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">Case Studies</h2>
      <div className="flex flex-col gap-20">
        {caseStudies.map((study, index) => (
          <CaseStudy key={index} study={study} index={index} />
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ study, index }) {
  const [currentImage, setCurrentImage] = useState(0);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % study.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [study.images.length]);

  return (
    <div
      id="case-studies"
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8`}
    >
      {/* Text Content */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-[#58A6FF] text-2xl font-bold mb-4 neon-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {String(index + 1).padStart(2, "0")} — {study.title}
        </motion.h3>
        <p className="mb-2">
          <strong>Problem:</strong> {study.problem}
        </p>
        <p className="mb-2">
          <strong>Solution:</strong> {study.solution}
        </p>
        <p>
          <strong>Result:</strong> {study.result}
        </p>
      </motion.div>

      {/* Image Slideshow */}
      <motion.div
        className="flex-1 relative rounded-lg overflow-hidden border-2 border-transparent hover:border-[#58A6FF] neon-glow aspect-[16/9] w-full"
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {study.images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === i ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
