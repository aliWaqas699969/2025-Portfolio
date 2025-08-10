import React, { useState, useRef } from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS
import toast from "react-hot-toast";

export default function ContactSection() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_jjtzd8q", // <-- replace
        "template_zpuhicv", // <-- replace
        formRef.current,
        "Jl674Sa6A6mLLSW83" // <-- replace
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Email send error:", error.text);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
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
          ref={formRef}
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
              name="name" // ✅ matches template variable
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
              name="email" // ✅ matches template variable
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#0D1117] border border-[#58A6FF] focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea
              name="message" // ✅ matches template variable
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
            disabled={loading}
            className={`w-full py-2 rounded font-bold neon-btn cursor-pointer ${
              loading
                ? "bg-gray-500 cursor-not-allowed text-white"
                : "bg-[#FF7B72] text-[#0D1117]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
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
              href="mailto:youremail@gmail.com"
              className="text-[#58A6FF] text-2xl hover:text-[#FF7B72]"
            >
              <FaEnvelope />
            </a>
          </div>

          <div>
            <p>
              <strong>Email:</strong> aliwaqas55488@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Islamabad, Pakistan
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
