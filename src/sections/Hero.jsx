import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import headshot from "../assets/headshot.jpg";
import leetcodeLogo from "../assets/LeetCode.png";


export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 md:px-12 py-16 bg-gradient-to-br from-background to-secondary"    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-left space-y-6 md:w-1/2"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          <span className="flex items-center gap-3">
            <span>Hey there</span>
            <motion.span
              className="inline-block origin-bottom"
              animate={{
                rotate: [0, 20, -10, 20, -10, 0], // three wave motions
              }}
              transition={{ repeat: 2, duration: 2 }}
            >
              👋
            </motion.span>
          </span>
          <div>
            I’m <span className="text-accent">Athulya Anil</span>
          </div>
        </h1>


        <h2 className="text-xl font-semibold text-gray-800">
          AI & Data Engineer | Software Developer
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Computer Science graduate from UMass Amherst with a deep passion for AI and data-driven
          systems. I’m driven by the potential to build intelligent software that can reason,
          reflect, and improve itself.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="bg-[#F7B733] text-white font-semibold tracking-wide uppercase px-8 py-3 rounded-full shadow-lg hover:bg-[#E69600] hover:shadow-[0_0_20px_#F7B733]/60 transition-all duration-300"

          >
            View Projects
          </a>
        </div>
        <div className="flex space-x-8 text-4xl pt-6 text-accent">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/athulya-anil/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-130 hover:drop-shadow-[0_0_8px_#F7B733] transition-all duration-300 ease-out"
          >
            <FaLinkedin className="w-10 h-10" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/athulya-anil"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-130 hover:drop-shadow-[0_0_8px_#F7B733] transition-all duration-300 ease-out"
          >
            <FaGithub className="w-10 h-10" />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/athulyaanil25/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-130 hover:drop-shadow-[0_0_8px_#F7B733] transition-all duration-300 ease-out"
          >
            <img
              src={leetcodeLogo}
              alt="LeetCode"
              className="w-10 h-10 object-contain align-middle translate-y-[4px] hover:scale-125 hover:drop-shadow-[0_0_8px_#F7B733] transition-all duration-300 ease-out"
            />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
      >
        <img
          src={headshot}
          alt="Athulya Anil"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-accent/40"
        />
      </motion.div>
    </section>
  );
}
