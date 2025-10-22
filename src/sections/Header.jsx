import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFF8E1]/90 backdrop-blur-md shadow-md border-b border-[#E6A500]/20 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Brand */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F7B733] to-[#E69600] tracking-tight whitespace-nowrap">
          Athulya Anil
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base font-semibold text-gray-900">
          <li><Link to="hero" smooth duration={600} className="hover:text-[#E69600] cursor-pointer">Home</Link></li>
          <li><Link to="projects" smooth duration={600} className="hover:text-[#E69600] cursor-pointer">Projects</Link></li>
          <li><Link to="skills" smooth duration={600} className="hover:text-[#E69600] cursor-pointer">Skills</Link></li>
          <li><Link to="contact" smooth duration={600} className="hover:text-[#E69600] cursor-pointer">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#E69600] text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF8E1] border-t border-[#E6A500]/30 shadow-md">
          <ul className="flex flex-col items-center py-3 space-y-3 font-semibold text-gray-800">
            <li><Link to="hero" smooth duration={600} onClick={() => setIsOpen(false)} className="hover:text-[#E69600] cursor-pointer">Home</Link></li>
            <li><Link to="projects" smooth duration={600} onClick={() => setIsOpen(false)} className="hover:text-[#E69600] cursor-pointer">Projects</Link></li>
            <li><Link to="skills" smooth duration={600} onClick={() => setIsOpen(false)} className="hover:text-[#E69600] cursor-pointer">Skills</Link></li>
            <li><Link to="contact" smooth duration={600} onClick={() => setIsOpen(false)} className="hover:text-[#E69600] cursor-pointer">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
