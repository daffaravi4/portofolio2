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
import LogoLoop from './components/LogoLoop';
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
        <section id="about" className="min-h-screen py-24 px-5">
          <div className="max-w-7xl mx-auto">
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

            <h2 className={`${michroma.className} text-5xl text-white mt-10`}>
              About Me
            </h2>

            <p className={`${inter.className} text-gray-400 text-xl mt-6`}>
              Hello! I'm Daffa Ravi Ferdiansyah, an Informatics Student who
              enjoys creating modern websites and web applications.
            </p>

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

    default:
      return null;
  }
};
  const skillLogos = [
  { node: <FaHtml5 />, title: "HTML5" },
  { node: <FaCss3Alt />, title: "CSS3" },
  { node: <FaJs />, title: "JavaScript" },
  { node: <FaReact />, title: "React" },
  { node: <FaNodeJs />, title: "Node.js" },
  { node: <FaPython />, title: "Python" },
] as const;

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

{/* Logo Loop */}
{activePanel === null && (
  <div className="relative z-30 overflow-hidden py-8 -translate-y-32">
    <LogoLoop
      logos={skillLogos}
      speed={80}
      direction="left"
      logoHeight={50}
      gap={50}
      pauseOnHover
    />
  </div>
)}

{activePanel === null ? (
  <>
    {/* MAGIC BENTO */}

    <section className="min-h-screen px-5 sm:px-8 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <MagicBento
  onCardClick={(card: string) => {
    setActivePanel(card);
  }}
/>
      </div>
    </section>

{/* Scroll Velocity */}
<div className="relative z-30 -translate-y-20 lg:-translate-y-20 translate-y-10 overflow-visible">
  <ScrollVelocity />
</div>

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