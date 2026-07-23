export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-6">

        <h1 className="text-xl md:text-2xl font-bold text-white">
          My Portfolio
        </h1>

        <div className="flex gap-8 text-white">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <a href="#certificates" className="hover:text-gray-400">Certificates</a>
        </div>

      </div>
    </nav>
  );
}