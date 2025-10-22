import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t py-8 bg-background text-center">
      <div className="flex justify-center space-x-6 mb-4 text-xl">
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
      <p className="text-gray-500 text-sm">
        © 2025 Athulya Anil. Built with 💛 and lots of coffee.
      </p>
    </footer>
  );
}

