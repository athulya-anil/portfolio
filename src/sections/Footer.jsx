import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-secondary/50 text-center shadow-inner">
      <div className="flex justify-center space-x-6 mb-4 text-xl">
        <a href="https://www.linkedin.com/in/athulya-anil/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-[#F7B733] transition" />
        </a>
        <a href="https://github.com/athulya-anil" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-[#F7B733] transition" />
        </a>
        <a href="https://leetcode.com/u/athulyaanil25/" target="_blank" rel="noreferrer">
          <FaCode className="hover:text-[#F7B733] transition" />
        </a>
      </div>
      <p className="text-gray-600 text-sm">
        © 2025 <span className="font-medium text-gray-800">Athulya Anil</span>. Built with 💛 and lots of coffee.
      </p>
    </footer>
  );
}
