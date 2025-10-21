import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-background px-8 md:px-20 py-20">
      {/* Left side */}
      <div className="text-left space-y-6 md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hey there 👋 <br />
          I’m <span className="text-primary">Athulya Anil</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-accent">
          AI & Data Engineer | Software Developer
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-xl">
          Computer Science graduate from UMass Amherst with a deep passion for AI and
          data-driven systems. I’m driven by the potential to build intelligent software
          that can reason, reflect, and improve itself.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="mailto:athulya.p.anil@gmail.com"
            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-accent transition"
          >
            Contact Me
          </a>
          <a
            href="/Athulya_Anil_Resume.pdf"
            className="border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition"
          >
            Get Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-2xl pt-6">
          <a href="https://www.linkedin.com/in/athulya-anil/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-primary transition" />
          </a>
          <a href="https://github.com/athulya-anil" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-primary transition" />
          </a>
          <a href="https://leetcode.com/u/athulyaanil25/" target="_blank" rel="noreferrer">
            <FaCode className="hover:text-primary transition" />
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src="/headshot.jpg"
            alt="Athulya Anil"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-secondary"
          />
          <div className="absolute inset-0 rounded-full border-4 border-accent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

