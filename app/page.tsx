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
  className="min-h-screen flex items-center px-6 md:px-24"
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

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
        Passionate About
        <br />
        Building Digital
        <span className="text-[#9CA3AF]"> Experiences.</span>
      </h2>

      <p className="text-gray-400 text-base md:text-xl leading-8 md:leading-9mt-8">
        Hello! I'm <span className="text-white font-semibold">Daffa Ravi Ferdiansyah</span>,
        a Informatics Student who enjoys creating modern websites and web
        applications with clean, responsive, and user-friendly interfaces.
        I love turning ideas into real products through efficient code,
        thoughtful design, and continuous learning.
      </p>

      <p className="text-gray-400 text-xl leading-9 mt-6">
        Besides web development, I'm also passionate about Artificial
        Intelligence, interactive user experiences, and exploring new
        technologies that can solve real-world problems. Every project is an
        opportunity for me to learn, improve, and build something meaningful.
      </p>

      <div className="flex flex-wrap gap-8 mt-12">

        <div>
          <h3 className="text-5xl font-bold text-white">3+</h3>
          <p className="text-gray-500 mt-2">Projects Built</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-white">2+</h3>
          <p className="text-gray-500 mt-2">Certificates</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-white">∞</h3>
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

      <section
      id="projects"
  className="min-h-screen px-6 md:px-24 py-20"
>
  <div className="max-w-7xl mx-auto">

    <p className="text-[#696969] uppercase tracking-[6px] font-semibold">
      My Projects
    </p>

    <h2 className="text-6xl font-bold text-white mt-4">
      Featured Projects
    </h2>

    <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-8">
      Here are some of the projects I've built to improve my skills in
      web development, artificial intelligence, and interactive user
      experiences.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

      {/* Project 1 */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">

        <div className="h-64 overflow-hidden">
  <img 
    /* taruh foto project dibawah ini*/
    src="assets/lanyard/projects/"
    alt="belum ada project"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <div className="p-8">

          <h3 className="text-3xl font-bold text-white">
            belum ada project wkwk
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
            kosong
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">JavaScript</span>
          </div>

        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">

       <div className="h-64 overflow-hidden">
  <img 
  /* taruh foto project dibawah ini*/
    src="assets/lanyard/projects/"
    alt="Nama Project"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <div className="p-8">

          <h3 className="text-3xl font-bold text-white">
            belum ada project
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
            kosong
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="skill">Python</span>
            <span className="skill">MediaPipe</span>
            <span className="skill">OpenCV</span>
          </div>

        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">

       <div className="h-64 overflow-hidden">
  <img 
   /* taruh foto project dibawah ini*/
    src="assets/lanyard/projects/dave.png" 
    alt="Dave"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <div className="p-8">

          <h3 className="text-3xl font-bold text-white">
            Personal Portfolio
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
            My personal portfolio built with Next.js and Tailwind CSS,
            featuring interactive animations and a modern interface.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="skill">Next.js</span>
            <span className="skill">Tailwind</span>
            <span className="skill">React</span>
          </div>

        </div>
      </div>

      {/* Project 4 */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">

        <div className="h-64 overflow-hidden">
  <img 
    /* taruh foto project dibawah ini*/
    src="assets/lanyard/projects/"
    alt="Nama Project"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <div className="p-8">

          <h3 className="text-3xl font-bold text-white">
            belum ada project
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
           kosong
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="skill">Python</span>
            <span className="skill">SpeechRecognition</span>
            <span className="skill">Pyttsx3</span>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

      <section
  id="contact"
  className="min-h-screen px-6 md:px-24 py-20 flex items-center"
>
  <div className="max-w-7xl mx-auto w-full">

    <p className="text-[#696969] uppercase tracking-[6px] font-semibold">
      Contact
    </p>

    <h2 className="text-6xl font-bold text-white mt-4">
      Let's Work Together
    </h2>

    <p className="text-gray-400 text-xl leading-9 mt-8 max-w-3xl">
      I'm always open to discussing new opportunities, collaborating on
      exciting projects, or simply connecting with fellow developers.
      Feel free to reach out through any of the platforms below.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

      {/* Email */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">
    <div className="flex items-center gap-4">
      <FaEnvelope className="w-7 h-7 text-[#696969]" />
      <div>
        <h3 className="text-2xl font-semibold text-white">Email</h3>
        <p className="text-gray-400">daffaravi4@email.com</p>
      </div>
    </div>
  </div>

      {/* Phone */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">
    <div className="flex items-center gap-4">
      <FaPhone className="w-7 h-7 text-[#696969]" />
      <div>
        <h3 className="text-2xl font-semibold text-white">Phone</h3>
        <p className="text-gray-400">+62 895 8064 22243</p>
      </div>
    </div>
  </div>

      {/* GitHub */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">
    <div className="flex items-center gap-4">
      <FaGithub className="w-7 h-7 text-[#696969]" />
      <div>
        <h3 className="text-2xl font-semibold text-white">GitHub</h3>
        <p className="text-gray-400">github.com/daffarvi4</p>
      </div>
    </div>
  </div>
      {/* LinkedIn */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">
    <div className="flex items-center gap-4">
     <FaLinkedin className="w-7 h-7 text-[#696969]" />
      <div>
        <h3 className="text-2xl font-semibold text-white">LinkedIn</h3>
        <p className="text-gray-400">linkedin.com/in/daffa-ravi</p>
      </div>
    </div>
  </div>
    </div> {/* grid */}

    <div className="">
      {/* Footer */}
      <div className="rounded-2xl p-8">
        <p className="text-gray-500">
          © 2026 Daffa Ravi Ferdiansyah. All Rights Reserved.
        </p>

        <p className="text-gray-500">
          Built with using Next.js & Tailwind CSS
        </p>
      </div>
    </div>

  </div> {/* max-w */}
</section>

     <section
  id="certificates"
  className="min-h-screen px-6 md:px-24 py-20"
>
  <div className="max-w-7xl mx-auto">

    <p className="text-[#696969] uppercase tracking-[6px] font-semibold">
      Certificates
    </p>

    <h2 className="text-6xl font-bold text-white mt-4">
      My Certificates
    </h2>

    <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-8">
      These certificates represent my continuous learning journey in web
      development, programming, and emerging technologies.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

      {/* Certificate 1 */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">
        <Image
  src="/assets/lanyard/certificates/BELAJAR DASAR CLOUD dan GEN AI di AWS.png"
  alt="Certificate"
  width={500}
  height={300}
  className="w-full h-64 object-cover"
/>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">
            BELAJAR DASAR CLOUD dan GEN AI di AWS
          </h3>

          <p className="text-gray-400 mt-2">
            AWS ACADEMY • 2026
          </p>
        </div>
      </div>

      {/* Certificate 2 */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">
        <Image
  src="/assets/lanyard/certificates/MEMULAIPEMROGRAMANDENGANPYTHON.png"
  alt="Certificate"
  width={500}
  height={300}
  className="w-full h-64 object-cover"
/>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">
            MEMULAI PEMROGRAMAN DENGAN PYTHON
          </h3>

          <p className="text-gray-400 mt-2">
            PYTHON • 2026
          </p>
        </div>
      </div>

      {/* Certificate 3 */}
      <div className="bg-[#424242]
border border-[#2F293A]
rounded-3xl
p-8
overflow-hidden
transition-all
duration-300
ease-out
hover:scale-[1.02]
hover:border-white
hover:shadow-xl
cursor-pointer">
        <Image
  src="/assets/lanyard/certificates/SPEC-DRIVENDEVELOPMENTDENGANKIRO.png"
  alt="Certificate"
  width={500}
  height={300}
  className="w-full h-64 object-cover"
/>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white">
            SPEC-DRIVEN DEVELOPMENTDENGANKIRO
          </h3>

          <p className="text-gray-400 mt-2">
            AWS KIRO • 2026
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
    </>
  );
}