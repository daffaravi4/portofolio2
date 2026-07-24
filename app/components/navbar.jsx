"use client";

import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
 return (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-5">

      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold text-white">
        My Portfolio
      </h1>

      {/* Desktop & Tablet Menu */}
      <div className="hidden md:flex gap-8 text-white">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#skills" className="hover:text-gray-400">Skills</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
        <a href="#certificates" className="hover:text-gray-400">Certificates</a>
      </div>

      {/* Hamburger - HP saja */}
      <button
        className="md:hidden text-white text-3xl -translate-x-[120px]"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

    </div>

    {/* Mobile Menu */}
    {open && (
      <div className="md:hidden bg-[#111827]/95 backdrop-blur-lg flex flex-col items-center gap-6 py-6 text-white">

        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a href="#certificates" onClick={() => setOpen(false)}>Certificates</a>

      </div>
    )}
  </nav>
);
}