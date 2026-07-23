import Image from "next/image";
import Lanyard from "./components/Lanyard";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";
import BlurText from "./components/BlurText";
import ShapeGrid from "./components/ShapeGrid";
import Navbar from "./components/navbar.jsx";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
export default function Home() {
  return (
    
      <>
      <Navbar />

      <section id="home">

      
    <div className="relative min-h-screen overflow-hidden bg-[#111827]">
    <div className="absolute inset-0 z-0">
      <ShapeGrid 
      speed={0.5}
squareSize={40}
direction='diagonal' // up, down, left, right, diagonal
borderColor="#2F293A"
hoverFillColor='#222'
shape='square' // square, hexagon, circle, triangle
hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
   />
   
   </div>
        <div className="absolute inset-0 z-10">
     <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]}/>
     </div>
      
       <div className="relative z-20">
      <div className="col-span-6 flex flex-col justify-center pl-[100px] mt-72">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-6 flex flex-col justify-center h-full">
            

              <div className="flex items-center gap-3 mb-6" >
              <h1 className="text-3xl text-white font-bold" >I`m Ready For </h1>
      
              <RotatingText 
              
               texts={['Web Dvelopment', 'Web Design', 'AI Developer', 'Web Progamming']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-[#696969] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex"
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
    className="text-6xl font-semibold text-left"
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
    text="Full Stack Developer"
    className="text-6xl font-semibold text-left text-[#696969] mb-6"
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
                text="I'm a Full Stack Developer passionate about creating modern, scalable, and high-performance web applications. I enjoy transforming ideas into responsive and user-friendly digital experiences by combining clean design with efficient code. With a strong interest in both frontend and backend development, I continuously explore new technologies, frameworks, and best practices to build innovative solutions. Beyond web development, I'm also passionate about artificial intelligence and always eager to learn, experiment, and solve real-world problems through technology."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
              />
            </div>
          <div></div>
          <div className="col-span-6"></div>
          </div>
          </div>
          
        </div>
      </div>

    </div>
    </section>
    
     <section
  id="about"
  className="min-h-screen bg-[#0F172A] flex items-center px-24"
>
  <div className="grid grid-cols-12 gap-16 w-full">

    {/* Left */}
    <div className="col-span-5 flex justify-center items-center">
      <div className="w-[420px] h-[520px] rounded-3xl overflow-hidden border border-[#2F293A]">
  <Image
    src="/assets/lanyard/about/daffa.jpeg"
    alt="Daffa Ravi Ferdiansyah"
    width={420}
    height={520}
    className="w-full h-full object-cover"
  />
</div>
    </div>

    {/* Right */}
    <div className="col-span-7 flex flex-col justify-center">

      <p className="text-[#696969] uppercase tracking-[6px] font-semibold">
        About Me
      </p>

      <h2 className="text-6xl font-bold text-white mt-4 leading-tight">
        Passionate About
        <br />
        Building Digital
        <span className="text-[#9CA3AF]"> Experiences.</span>
      </h2>

      <p className="text-gray-400 text-xl leading-9 mt-8">
        Hello! I'm <span className="text-white font-semibold">Daffa Ravi Ferdiansyah</span>,
        a Full Stack Developer who enjoys creating modern websites and web
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

      <div className="flex gap-12 mt-12">

        <div>
          <h3 className="text-5xl font-bold text-white">10+</h3>
          <p className="text-gray-500 mt-2">Projects Built</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-white">5+</h3>
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
  id="skills"
  className="min-h-screen bg-[#111827] px-24 py-24"
>
  <div className="max-w-7xl mx-auto">

    <p className="text-[#696969] uppercase tracking-[6px] font-semibold">
      My Skills
    </p>

    <h2 className="text-6xl font-bold text-white mt-4">
      Technologies I Use
    </h2>

    <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-8">
      I enjoy working with modern technologies to build responsive,
      scalable, and user-friendly applications. I'm continuously
      learning new tools and frameworks to improve my development
      skills.
    </p>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

      {/* Frontend */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition-all duration-300">
        <h3 className="text-3xl font-bold text-white mb-6">
          Frontend
        </h3>

        <div className="flex flex-wrap gap-3">
          <span className="skill">HTML5</span>
          <span className="skill">CSS3</span>
          <span className="skill">JavaScript</span>
          <span className="skill">TypeScript</span>
          <span className="skill">React</span>
          <span className="skill">Next.js</span>
          <span className="skill">Tailwind CSS</span>
        </div>
      </div>

      {/* Backend */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition-all duration-300">
        <h3 className="text-3xl font-bold text-white mb-6">
          Backend
        </h3>

        <div className="flex flex-wrap gap-3">
          <span className="skill">Node.js</span>
          <span className="skill">Express.js</span>
          <span className="skill">REST API</span>
          <span className="skill">PHP</span>
        </div>
      </div>

      {/* Database */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition-all duration-300">
        <h3 className="text-3xl font-bold text-white mb-6">
          Database
        </h3>

        <div className="flex flex-wrap gap-3">
          <span className="skill">MySQL</span>
          <span className="skill">Firebase</span>
          <span className="skill">Supabase</span>
        </div>
      </div>

      {/* Programming */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition-all duration-300">
        <h3 className="text-3xl font-bold text-white mb-6">
          Programming
        </h3>

        <div className="flex flex-wrap gap-3">
          <span className="skill">Python</span>
          <span className="skill">JavaScript</span>
          <span className="skill">Java</span>
        </div>
      </div>

      {/* AI */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition-all duration-300">
        <h3 className="text-3xl font-bold text-white mb-6">
          AI & Computer Vision
        </h3>

        <div className="flex flex-wrap gap-3">
          <span className="skill">OpenCV</span>
          <span className="skill">MediaPipe</span>
          <span className="skill">TensorFlow</span>
        </div>
      </div>

      {/* Tools */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition-all duration-300">
        <h3 className="text-3xl font-bold text-white mb-6">
          Tools
        </h3>

        <div className="flex flex-wrap gap-3">
          <span className="skill">Git</span>
          <span className="skill">GitHub</span>
          <span className="skill">VS Code</span>
          <span className="skill">Figma</span>
          <span className="skill">Postman</span>
        </div>
      </div>

    </div>

  </div>
</section>

      <section
  id="projects"
  className="min-h-screen bg-[#0F172A] px-24 py-24"
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

    <div className="grid lg:grid-cols-2 gap-10 mt-20">

      {/* Project 1 */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-3xl overflow-hidden hover:border-white transition duration-300">

        <div className="h-64 overflow-hidden">
  <img 
    src="assets/lanyard/projects/coffe.png"
    alt="Coffee Shop Website"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <div className="p-8">

          <h3 className="text-3xl font-bold text-white">
            Coffee Shop Website
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
            A modern coffee shop landing page featuring smooth animations,
            responsive layouts, and an elegant UI design.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">JavaScript</span>
          </div>

        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-3xl overflow-hidden hover:border-white transition duration-300">

       <div className="h-64 overflow-hidden">
  <img 
    src="assets/lanyard/projects/hand.png"
    alt="Nama Project"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <div className="p-8">

          <h3 className="text-3xl font-bold text-white">
            AI Hand Tracking
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
            A computer vision project using MediaPipe and OpenCV for
            real-time hand tracking and gesture interaction.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="skill">Python</span>
            <span className="skill">MediaPipe</span>
            <span className="skill">OpenCV</span>
          </div>

        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-3xl overflow-hidden hover:border-white transition duration-300">

       <div className="h-64 overflow-hidden">
  <img 
    src="assets/lanyard/projects/screenshot.png"
    alt="Nama Project"
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
      <div className="bg-[#19222D] border border-[#2F293A] rounded-3xl overflow-hidden hover:border-white transition duration-300">

        <div className="h-64 overflow-hidden">
  <img 
    src="assets/lanyard/projects/ai.png"
    alt="Nama Project"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

        <div className="p-8">

          <h3 className="text-3xl font-bold text-white">
            Jarvis AI Assistant
          </h3>

          <p className="text-gray-400 mt-5 leading-8">
            A voice-controlled assistant capable of recognizing commands,
            responding with speech, and performing simple automation tasks.
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
  className="min-h-screen bg-[#111827] px-24 py-24 flex items-center"
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
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition">
    <div className="flex items-center gap-4">
      <FaEnvelope className="w-7 h-7 text-[#696969]" />
      <div>
        <h3 className="text-2xl font-semibold text-white">Email</h3>
        <p className="text-gray-400">daffaravi4@email.com</p>
      </div>
    </div>
  </div>

      {/* Phone */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition">
    <div className="flex items-center gap-4">
      <FaPhone className="w-7 h-7 text-[#696969]" />
      <div>
        <h3 className="text-2xl font-semibold text-white">Phone</h3>
        <p className="text-gray-400">+62 895 8064 22243</p>
      </div>
    </div>
  </div>

      {/* GitHub */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition">
    <div className="flex items-center gap-4">
      <FaGithub className="w-7 h-7 text-[#696969]" />
      <div>
        <h3 className="text-2xl font-semibold text-white">GitHub</h3>
        <p className="text-gray-400">github.com/daffarvi4</p>
      </div>
    </div>
  </div>
      {/* LinkedIn */}
      <div className="bg-[#19222D] border border-[#2F293A] rounded-2xl p-8 hover:border-white transition">
    <div className="flex items-center gap-4">
     <FaLinkedin className="w-7 h-7 text-[#696969]" />
      <div>
        <h3 className="text-2xl font-semibold text-white">LinkedIn</h3>
        <p className="text-gray-400">linkedin.com/in/daffa-ravi</p>
      </div>
    </div>
  </div>
    </div> {/* grid */}

    <div className="border-t border-[#2F293A] mt-20 pt-8 flex justify-between items-center">
      {/* Footer */}
      <div className="border-t border-[#2F293A] mt-20 pt-8 flex justify-between items-center">
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
  className="min-h-screen bg-[#0F172A] px-24 py-24"
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

    <div className="grid md:grid-cols-3 gap-8 mt-20">

      {/* Certificate 1 */}
      <div className="bg-[#19222D] rounded-3xl border border-[#2F293A] overflow-hidden hover:border-white transition duration-300">
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
      <div className="bg-[#19222D] rounded-3xl border border-[#2F293A] overflow-hidden hover:border-white transition duration-300">
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
      <div className="bg-[#19222D] rounded-3xl border border-[#2F293A] overflow-hidden hover:border-white transition duration-300">
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