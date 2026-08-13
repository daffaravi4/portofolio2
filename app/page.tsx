"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lanyard from "./components/Lanyard";
import ShapeGrid from "./components/ShapeGrid";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";
import BlurText from "./components/BlurText";
import Navbar from "./components/navbar.jsx";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import ProfileCard from "./components/ProfileCard";
import { michroma, inter } from "@/app/font";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import dynamic from "next/dynamic";
import MagicBento from "./components/MagicBento";
import ScrollVelocity from "./components/ScrollVelocity";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
const FoldText = dynamic(() => import("./components/FoldText"), {
  ssr: false,
});

export default function Home() {
 const [activePanel, setActivePanel] = useState<string | null>(null);
  const renderActivePanel = () => {
  switch (activePanel) {
    case "about":
      return (
        <section
  id="about"
  className="min-h-screen flex items-center px-5 sm:px-8 md:px-16 lg:px-24 py-24 lg:py-0"
>
  <div className="w-full max-w-7xl lg:max-w-[1550px] mx-auto">

    <div className="grid grid-cols-1 lg:grid-cols-[460px_minmax(0,1fr)] gap-10 lg:gap-20 items-center">

      {/* Left - FOTO */}
      <div className="flex justify-center lg:justify-start items-center translate-x-4 lg:translate-x-0">
  <div className="w-[280px] sm:w-[320px] lg:w-[460px] rounded-3xl">

          <ProfileCard
            name=""
            title=""
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/lanyard/about/dappa1.jpeg"
            miniAvatarUrl="/assets/lanyard/dappa.jpeg"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowColor="rgba(125,190,255,0.67)"
            behindGlowSize="50%"
            iconUrl="/assets/lanyard/iconpattern.png"
            behindGlowEnabled={true}
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />

        </div>
      </div>

      {/* Right - ABOUT */}
      <div className="flex flex-col justify-center min-w-0">

        <p className={`${inter.className} text-[#696969] uppercase tracking-[6px] font-semibold`}>
  About Me
</p>

        <h2
          className={`${michroma.className} text-3xl sm:text-4xl md:text-6xl lg:text-[5.2rem] xl:text-[6rem] font-bold text-white mt-4 leading-[1.05]`}
        >
          Passionate About
          <br className="lg:hidden" />
          Building Digital
          <span className="text-[#9CA3AF]"> Experiences.</span>
        </h2>

        <p
  className={`${inter.className} text-gray-400 text-sm sm:text-base md:text-xl lg:text-[1.25rem] xl:text-[1.35rem] leading-7 md:leading-9 lg:leading-10 mt-6 md:mt-8`}
>
  Hello! I'm{" "}
  <span className="text-white font-semibold">
    Daffa Ravi Ferdiansyah
  </span>
  , a Informatics Student who enjoys creating modern websites and web
  applications with clean, responsive, and user-friendly interfaces.
  I love turning ideas into real products through efficient code,
  thoughtful design, and continuous learning.
</p>

<p
  className={`${inter.className} text-gray-400 text-sm sm:text-base md:text-xl lg:text-[1.25rem] xl:text-[1.35rem] leading-7 md:leading-9 lg:leading-10 mt-5 md:mt-6 lg:w-full`}
>
  Besides web development, I'm also passionate about Artificial
  Intelligence, interactive user experiences, and exploring new
  technologies that can solve real-world problems. Every project is
  an opportunity for me to learn, improve, and build something
  meaningful.
</p>

        {/* Stats */}
        <div className="flex flex-wrap gap-7 sm:gap-8 lg:gap-14 mt-8 md:mt-12">

          <div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              3+
            </h3>
            <p className="text-gray-500 mt-2">
              Projects Built
            </p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              2+
            </h3>
            <p className="text-gray-500 mt-2">
              Certificates
            </p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              ∞
            </h3>
            <p className="text-gray-500 mt-2">
              Learning Journey
            </p>
          </div>

        </div>

      </div>

    </div>
 

            <button
              onClick={() => setActivePanel(null)}
              className="mt-10 px-6 py-3 rounded-full border border-white/20 text-white"
            >
              ← Back to Bento
            </button>
          </div>
</section>
      );

          case "skills":
      return (
        <section className="min-h-screen py-24 px-5">
          <div className="max-w-7xl mx-auto">
            
            <Skills />

            <button
              onClick={() => setActivePanel(null)}
              className="mt-10 px-6 py-3 rounded-full border border-white/20 text-white"
            >
              ← Back to Bento
            </button>

          </div>
        </section>
      );

      case "projects":
  return (
    <section className="min-h-screen py-24 px-5">
      <div className="max-w-7xl mx-auto">

        <Projects />

        <button
          onClick={() => setActivePanel(null)}
          className="mt-10 px-6 py-3 rounded-full border border-white/20 text-white"
        >
          ← Back to Bento
        </button>

      </div>
    </section>
  ); 

    case "certificates":
      return (
        <section className="min-h-screen py-24 px-5">
          <div className="max-w-7xl mx-auto">
            <Certificates />

            <button
              onClick={() => setActivePanel(null)}
              className="mt-10 px-6 py-3 rounded-full border border-white/20 text-white"
            >
              ← Back to Bento
            </button>
          </div>
        </section>
      );

    case "contact":
      return (
        <section className="min-h-screen py-24 px-5">
          <div className="max-w-7xl mx-auto">
            <Contact />

            <button
              onClick={() => setActivePanel(null)}
              className="mt-10 px-6 py-3 rounded-full border border-white/20 text-white"
            >
              ← Back to Bento
            </button>
          </div>
        </section>
      );
      case "currently":
  return (
    <section id="currently" className="min-h-screen py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className={`${michroma.className} text-5xl text-white mt-10`}>
          Currently
        </h2>

        <p className={`${inter.className} text-gray-400 text-xl mt-6`}>
          Currently learning and building modern web applications,
          full-stack projects, and AI-based applications.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-white text-lg font-medium">
              Learning
            </h3>
            <p className="text-gray-400 mt-2">
              Full Stack Development
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-white text-lg font-medium">
              Building
            </h3>
            <p className="text-gray-400 mt-2">
              Web & AI Projects
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-white text-lg font-medium">
              Exploring
            </h3>
            <p className="text-gray-400 mt-2">
              AI & Computer Vision
            </p>
          </div>
        </div>

        <button
          onClick={() => setActivePanel(null)}
          className="mt-10 px-6 py-3 rounded-full border border-white/20 text-white"
        >
          ← Back to Bento
        </button>
      </div>
    </section>
  );

    default:
      return null;
  }
};
 
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);

  const [started, setStarted] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [video2Playing, setVideo2Playing] = useState(false);
const [closingIntro, setClosingIntro] = useState(false);
const [showFoldText, setShowFoldText] = useState(true);
const foldCompletedRef = useRef(false);

  useEffect(() => {
    if (started && video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.playbackRate = 2;

      video2Ref.current.play().catch((error) => {
        console.error("Video 2 gagal dimainkan:", error);
      });
    }
  }, [started]);

  return (
    <>
      {/* SHAPE GRID - BACKGROUND */}
<div className="fixed inset-0 -z-20">
  <ShapeGrid />
</div>

      
  
{/* FOLD TEXT INTRO */}
{showFoldText && (
  <div
    className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ${
      closingIntro ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}
  >
    <FoldText
      onComplete={() => {
        // Cegah onComplete dipanggil lebih dari sekali
        if (foldCompletedRef.current) return;

        foldCompletedRef.current = true;

        setClosingIntro(true);

        setTimeout(() => {
          setShowFoldText(false);
        }, 700);
      }}
      style={{
        fontFamily: michroma.style.fontFamily,
      }}
    />
  </div>
)}
    
    {/* VIDEO 2 */}
<video
  ref={video2Ref}
  src="/videos/raven-2.mp4"
  muted
  playsInline
  preload="auto"
  onPlaying={() => {
    setVideo2Playing(true);
  }}
  onEnded={() => {
    setShowPortfolio(true);

    if (video3Ref.current) {
      video3Ref.current.currentTime = 0;
      video3Ref.current.play();
    }
  }}
  className={`absolute inset-0 w-full h-full object-cover brightness-[0.5] ${
  started
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none"
}`}
/>

  


      {/* Overlay agar teks tetap terbaca */}
      <div className="fixed inset-0 -z-10 bg-black/30 pointer-events-none" />

      <Navbar />
{activePanel === null && (
  <>
    {/* HOME */}
    

      <section
        id="home"
        className="relative min-h-screen overflow-visible"
      >

     {/* Desktop */}
        <div className="absolute inset-0 z-40 hidden lg:block">
     <Lanyard position={[0, 0, 17]} gravity={[0, -40, 0]}/>
     </div>
  {/* Mobile */}
<div className="relative z-10 block lg:hidden h-[600px] w-full">
  <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
</div>
      
       <div className="relative z-20">
  <div className="grid grid-cols-1 lg:grid-cols-12 h-full">

    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center px-6 lg:pl-[100px] mt-8 lg:mt-[300px] lg:-translate-y-10">
          
            

              <div className="flex items-center gap-3 mb-6" >
              <h1 className="text-2xl text-white font-bold" >I`m Ready For </h1>
      
              <RotatingText 
              
               texts={['Web Development', 'Web Design', 'AI Developer', 'Web Programming']}
  mainClassName={`${michroma.className} px-2 sm:px-2 md:px-3 bg-[#696969] text-white overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-xl sm:text-2xl font-bold inline-flex`}
  staggerFrom="last"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
  splitBy="characters"
  auto
  loop
              />
            </div>

            <div>
              <div className="flex flex-col items-start">
 <SplitText
 key={showPortfolio ? "visible" : "hidden"}
  text="Hello, I'm DAFFA RAVI FERDIANSYAH"
  className={`${michroma.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-left text-[#FFFFFF] leading-[1.15] lg:leading-tight break-words`}
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
/>

  <SplitText
  key={showPortfolio ? "student-visible" : "student-hidden"}
    text="Informatics Student"
    className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-left text-[#D1D5DB] mb-6 leading-tight"
    delay={50}
    duration={1.25}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    textAlign="left"
  />
</div>
            </div>

            <div>
              <BlurText
  key={showPortfolio ? "blur-visible" : "blur-hidden"}
  text="Passionate Informatics Student focused on building responsive, scalable, and user-friendly web applications using React, Next.js, Laravel, and Python. Always eager to learn and create impactful digital solutions."
  delay={50}
  animateBy="words"
  direction="top"
  className={`${inter.className} text-base text-[#A1A1A1] sm:text-lg md:text-xl lg:text-2xl leading-7 md:leading-9 mb-8`}
/>

<div className="flex flex-wrap items-center gap-4">
  <span className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-base lg:text-lg font-medium text-gray-200">
    Tailwind CSS
  </span>

  <span className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-base lg:text-lg font-medium text-gray-200">
    Next.js
  </span>

  <span className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-base lg:text-lg font-medium text-gray-200">
    Three.js
  </span>

</div>
              </div>
              </div> {/* col-span-12 */}
</div> {/* grid */}
</div> {/* relative */}
</section>

{/* Scroll Velocity */}
<div className="relative z-30 -translate-y-20 lg:-translate-y-20 translate-y-10 overflow-visible">
  <ScrollVelocity />
</div>
  </>
)}



{activePanel === null ? (
  <>
    {/* MAGIC BENTO */}

    <section className="min-h-screen px-5 sm:px-8 md:px-12 lg:px-24 py-24">
      <div className="w-full">
        <MagicBento
  onCardClick={(card: string) => {
    setActivePanel(card);
  }}
/>
      </div>
    </section>
    {/* JARAK SEBELUM FOOTER */}
<div className="h-[25vh]" />
 {/* FOOTER */}
<footer
  className={`${michroma.className} border-t border-[#2F2F2F] bg-[#111111] px-5 sm:px-8 md:px-12 lg:px-24 py-10`}
>
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Kiri */}
    <div className="text-center md:text-left">
      <h3 className="text-white text-xl font-semibold">
        DAFFA RAVI
      </h3>

      <p className="text-[#646464] text-sm mt-2">
        Building. Learning. Improving.
      </p>
    </div>

    {/* Tengah */}
    <div className="flex items-center gap-6 text-sm">
      <a
        href="#home"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Home
      </a>

      <a
        href="#about"
        className="text-gray-400 hover:text-white transition-colors"
      >
        About
      </a>

      <a
        href="#projects"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Contact
      </a>
    </div>

    {/* Kanan */}
    <div className="text-center md:text-right">
      <p className="text-[#646464] text-sm">
        © 2026 Daffa Ravi
      </p>

      <p className="text-[#646464] text-xs mt-1">
        Built with Next.js & Tailwind CSS
      </p>
    </div>

  </div>
</footer>

</>
) : (
  <>
    {/* HALAMAN YANG DIPILIH */}
    {renderActivePanel()}
  </>
)}

    
    </>
  );
}