import React, { useState } from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Currently placeholder)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-[#0D1117] text-[#C9D1D9] py-16 px-4 sm:px-8"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#161B22] p-6 rounded-lg border border-[#58A6FF] neon-glow shadow-lg"
        >
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#0D1117] border border-[#58A6FF] focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#0D1117] border border-[#58A6FF] focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-2 rounded bg-[#0D1117] border border-[#58A6FF] focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FF7B72" }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="w-full py-2 rounded bg-[#FF7B72] text-[#0D1117] font-bold neon-btn"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links & Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#161B22] p-6 rounded-lg border border-[#58A6FF] neon-glow shadow-lg flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-6">
            I'm open to opportunities, collaborations, or just a friendly chat!
          </p>

          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="text-[#58A6FF] text-2xl hover:text-[#FF7B72]"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-[#58A6FF] text-2xl hover:text-[#FF7B72]"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-[#58A6FF] text-2xl hover:text-[#FF7B72]"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-[#58A6FF] text-2xl hover:text-[#FF7B72]"
            >
              <FaEnvelope />
            </a>
          </div>

          <div>
            <p>
              <strong>Email:</strong> youremail@example.com
            </p>
            <p>
              <strong>Location:</strong> Your City, Country
            </p>
          </div>
        </motion.div>
      </div>

      {/* Neon Glow Animation */}
      <style>
        {`
          .neon-glow {
            box-shadow: 0 0 10px #58A6FF, 0 0 20px #58A6FF, 0 0 30px #58A6FF;
          }
          .neon-btn {
            box-shadow: 0 0 10px #FF7B72, 0 0 20px #FF7B72, 0 0 30px #FF7B72;
          }
        `}
      </style>
    </section>
  );
}
