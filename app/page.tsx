import Image from "next/image";
import Lanyard from "./components/Lanyard";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";
import BlurText from "./components/BlurText";
import Silk from "./components/Silk";
import Navbar from "./components/navbar.jsx";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import ProfileCard from "./components/ProfileCard";
import { michroma } from "@/app/font";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
export default function Home() {
  return (
     <>
     <div className="fixed inset-0 -z-10">
    
    <Silk
  speed={5}
  scale={1}
  color="#424242"
  noiseIntensity={1.5}
  rotation={0}
/>
</div>
      
      <Navbar />

      <section id="home"
         className="relative min-h-screen overflow-hidden"
>

     {/* Desktop */}
        <div className="absolute inset-0 z-10 hidden lg:block">
     <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]}/>
     </div>
  {/* Mobile */}
<div className="relative z-10 block lg:hidden h-[600px] w-full">
  <Lanyard position={[3, 0, 12]} gravity={[0, -40, 0]} />
</div>
      
       <div className="relative z-20">
  <div className="grid grid-cols-1 lg:grid-cols-12 h-full">

    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center px-6 lg:pl-[100px] mt-8 lg:mt-72">
          
            

              <div className="flex items-center gap-3 mb-6" >
              <h1 className="text-3xl text-white font-bold" >I`m Ready For </h1>
      
              <RotatingText 
              
               texts={['Web Development', 'Web Design', 'AI Developer', 'Web Programming']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-[#696969] text-white overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex"
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
  text="Hello, I'm DAFFA RAVI FERDIANSYAH"
  className={`${michroma.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-left text-[#FFFFFF] leading-tight`}
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
                text="Passionate Informatics Student focused on building responsive, scalable, and user-friendly web applications using React, Next.js, Laravel, and python.Always eager to learn and create impactful digital solutions."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-base text-[#A1A1AA] sm:text-lg md:text-xl lg:text-2xl leading-7 md:leading-9 mb-8"
              />
              </div>
              </div> {/* col-span-12 */}
</div> {/* grid */}
</div> {/* relative */}
</section>
            
     <section
  id="about"
  className="
    min-h-screen
    flex flex-col lg:grid lg:grid-cols-12
    items-center
    gap-12 lg:gap-16
    px-5 sm:px-8 md:px-16 lg:px-24
    py-24 lg:py-0
  "
>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 w-full">

    {/* Left */}
    <div className="lg:col-span-5 flex justify-center items-center">
      <div className="w-full max-w-[420px] rounded-3xl">
<ProfileCard
  name="Daffa Ravi"
  title=" Informatics Student"
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
  behindGlowEnabled
  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
/>
</div>
    </div>

    {/* Right */}
    <div className="lg:col-span-7 flex flex-col justify-center">

      <p className="text-[#696969] uppercase tracking-[6px] font-semibold">
        About Me
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
        Passionate About
        <br />
        Building Digital
        <span className="text-[#9CA3AF]"> Experiences.</span>
      </h2>

      <p className="text-gray-400 text-sm sm:text-base md:text-xl leading-7 md:leading-9 mt-6 md:mt-8">
        Hello! I'm <span className="text-white font-semibold">Daffa Ravi Ferdiansyah</span>,
        a Informatics Student who enjoys creating modern websites and web
        applications with clean, responsive, and user-friendly interfaces.
        I love turning ideas into real products through efficient code,
        thoughtful design, and continuous learning.
      </p>

      <p className="text-gray-400 text-sm sm:text-base md:text-xl leading-7 md:leading-9 mt-5 md:mt-6">
        Besides web development, I'm also passionate about Artificial
        Intelligence, interactive user experiences, and exploring new
        technologies that can solve real-world problems. Every project is an
        opportunity for me to learn, improve, and build something meaningful.
      </p>

      <div className="flex flex-wrap gap-7 sm:gap-8 mt-8 md:mt-12">

        <div>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">3+</h3>
          <p className="text-gray-500 mt-2">Projects Built</p>
        </div>

        <div>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">2+</h3>
          <p className="text-gray-500 mt-2">Certificates</p>
        </div>

        <div>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">∞</h3>
          <p className="text-gray-500 mt-2">Learning Journey</p>
        </div>

      </div>

    </div>

  </div>
</section>
      <section
>
  <div className="max-w-7xl mx-auto">

    <Skills />

  </div>
</section>

      <Projects />

      <Contact />

     <Certificates />
    </>
  );
}