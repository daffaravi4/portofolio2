"use client";
import { michroma } from "@/app/font";
import { useEffect, useRef, useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

    setScrollProgress(progress);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const menuRef = useRef(null);
const bubbleRef = useRef(null);

const handleMouseEnter = (e) => {
  const bubble = bubbleRef.current;
  const menu = menuRef.current;

  if (!bubble || !menu) return;

  const item = e.currentTarget;

  const itemRect = item.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();

  bubble.style.width = `${itemRect.width}px`;
  bubble.style.height = `${itemRect.height}px`;

  bubble.style.transform = `translate3d(
    ${itemRect.left - menuRect.left}px,
    ${itemRect.top - menuRect.top}px,
    0
  )`;

  bubble.style.opacity = "1";
};

const handleMouseLeave = () => {
  if (bubbleRef.current) {
    bubbleRef.current.style.opacity = "0";
  }
};
 return (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/20">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-5">

      {/* Logo */}
      <div className="flex items-center gap-2">
  <span className="w-2 h-2 rounded-full bg-grey shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

  <h1 className={`${michroma.className} text-xl md:text-2xl text-[#D1D5DB]`}>
    Dev.
  </h1>
</div>

      {/* Desktop & Tablet Menu */}
<div
  ref={menuRef}
  onMouseLeave={handleMouseLeave}
  className="hidden md:flex relative items-center gap-2"
>
  {/* Liquid Glass Bubble */}
  <div
    ref={bubbleRef}
    className="
      absolute
      left-0
      top-0
      pointer-events-none
      rounded-full
      bg-white/[0.08]
      backdrop-blur-xl
      border border-white/[0.20]
      shadow-[0_8px_30px_rgba(255,255,255,0.08)]
      opacity-0
      transition-all
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]
      overflow-hidden
    "
  >
    {/* Glass highlight */}
    <div
      className="
        absolute inset-0
        rounded-full
        bg-gradient-to-b
        from-white/[0.12]
        via-transparent
        to-transparent
      "
    />

    {/* Inner glow */}
    <div
      className="
        absolute
        -top-1/2
        left-1/4
        w-1/2
        h-full
        rounded-full
        bg-white/[0.08]
        blur-xl
      "
    />
  </div>

  {/* Menu */}
  <a
    href="#home"
    onMouseEnter={handleMouseEnter}
    className={`${michroma.className} relative z-10 px-4 py-2 text-white/70 hover:text-white transition-colors duration-300`}
  >
    Home
  </a>

  <a
    href="#about"
    onMouseEnter={handleMouseEnter}
    className={`${michroma.className} relative z-10 px-4 py-2 text-white/70 hover:text-white transition-colors duration-300`}
  >
    About
  </a>

  <a
    href="#skills"
    onMouseEnter={handleMouseEnter}
    className={`${michroma.className} relative z-10 px-4 py-2 text-white/70 hover:text-white transition-colors duration-300`}
  >
    Skills
  </a>

  <a
    href="#projects"
    onMouseEnter={handleMouseEnter}
    className={`${michroma.className} relative z-10 px-4 py-2 text-white/70 hover:text-white transition-colors duration-300`}
  >
    Projects
  </a>

  <a
    href="#contact"
    onMouseEnter={handleMouseEnter}
    className={`${michroma.className} relative z-10 px-4 py-2 text-white/70 hover:text-white transition-colors duration-300`}
  >
    Contact
  </a>

  <a
    href="#certificates"
    onMouseEnter={handleMouseEnter}
    className={`${michroma.className} relative z-10 px-4 py-2 text-white/70 hover:text-white transition-colors duration-300`}
  >
    Certificates
  </a>
</div>
      {/* Hamburger - HP saja */}
      <button
        className="md:hidden text-white text-3xl -translate-x-[50px]"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

    </div>

    {/* Mobile Menu */}
    {open && (
      <div className="md:hidden bg-black/30 backdrop-blur-xl border-b border-white/20 flex flex-col items-center gap-6 py-6 text-white">

        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a href="#certificates" onClick={() => setOpen(false)}>Certificates</a>

      </div>
    )}
    {/* Scroll Progress */}
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.06]">
  <div
    className="h-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-[width] duration-100"
    style={{
      width: `${scrollProgress}%`,
    }}
  />
</div>
  </nav>
);
}