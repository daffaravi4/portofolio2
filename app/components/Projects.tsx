"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, ArrowUpRight, Plus } from "lucide-react";
import { michroma, inter } from "@/app/font";
const projects = [
  {
    title: "Car Store — Automotive E-Commerce UI/UX",
    description:
      "A modern car store website concept designed in Figma, featuring a premium automotive interface for browsing vehicles, viewing detailed car information, and completing a structured checkout and payment process. The design focuses on clean layouts, intuitive navigation, responsive interfaces, and a seamless user experience from product selection to payment.",
    category: "UI/UX DESIGN",
    year: "2026",
    image: "/assets/lanyard/projects/car-store.png",
    tech: [],
    demo: "https://www.figma.com/design/o9NIAvFYMGHta8JD9wfTaY/Untitled?node-id=0-1&m=dev&t=Sy01OyfbdQ9eqZu7-1",
    github: "",
  },
  {
    title: "Coming Soon",
    description:
      "A new project is currently being developed and will be showcased here.",
    category: "PROJECT",
    year: "2026",
    image: "",
    tech: [],
    demo: "",
    github: "",
  },
  {
    title: "Coming Soon",
    description:
      "A new project is currently being developed and will be showcased here.",
    category: "PROJECT",
    year: "2026",
    image: "",
    tech: [],
    demo: "",
    github: "",
  },
  {
    title: "Coming Soon",
    description:
      "A new project is currently being developed and will be showcased here.",
    category: "PROJECT",
    year: "2026",
    image: "",
    tech: [],
    demo: "",
    github: "",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<
  (typeof projects)[0] | null
>(null);

const [isClosing, setIsClosing] = useState(false);

const closeModal = () => {
  setIsClosing(true);

  setTimeout(() => {
    setSelected(null);
    setIsClosing(false);
  }, 350);
};
  return (
    <>
      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-screen px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">

          {/* Heading */}
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.5em] text-gray-500">
              My Projects
            </p>

            <h2
  className={`${michroma.className} text-4xl font-bold text-white md:text-5xl lg:text-[5.2rem] xl:text-[6rem] leading-[1.05] lg:whitespace-nowrap`}
>
  Featured Projects
</h2>

            <p className={`${inter.className} mt-5 max-w-3xl leading-7 text-gray-400`}>
              A collection of projects I've built while exploring
              web development, programming, and emerging technologies.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelected(project)}
                className="
                  group cursor-pointer overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.07]
                  backdrop-blur-md
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-white/25
                  hover:bg-white/[0.11]
                "
              >
                {/* Image / Empty State */}
                <div
                  className="
                    relative aspect-[16/9]
                    overflow-hidden
                    bg-black/30
                  "
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="
                          object-cover
                          transition-transform duration-500
                          group-hover:scale-105
                        "
                      />

                      {/* Hover */}
                      <div
                        className="
                          absolute inset-0
                          flex items-center justify-center
                          bg-black/60
                          opacity-0
                          transition-opacity duration-300
                          group-hover:opacity-100
                        "
                      >
                        <span
                          className="
                            flex items-center gap-2
                            rounded-full
                            border border-white/30
                            bg-white/10
                            px-5 py-2.5
                            text-sm text-white
                            backdrop-blur-md
                          "
                        >
                          View Project
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Empty Project */}
                      <div
                        className="
                          absolute inset-0
                          flex flex-col items-center justify-center
                          text-gray-500
                        "
                      >
                        <div
                          className="
                            mb-4 flex h-14 w-14
                            items-center justify-center
                            rounded-full
                            border border-white/10
                            bg-white/[0.05]
                          "
                        >
                          <Plus size={22} />
                        </div>

                        <p className="text-sm tracking-widest uppercase">
                          Coming Soon
                        </p>
                      </div>

                      {/* Hover */}
                      <div
                        className="
                          absolute inset-0
                          flex items-center justify-center
                          bg-black/40
                          opacity-0
                          transition-opacity duration-300
                          group-hover:opacity-100
                        "
                      >
                        <span
                          className="
                            rounded-full
                            border border-white/20
                            bg-white/10
                            px-5 py-2.5
                            text-sm text-white
                            backdrop-blur-md
                          "
                        >
                          View Project
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Category */}
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      {project.category}
                    </p>

                    <span className="text-xs text-gray-600">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-5 flex min-h-[24px] flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/[0.05]
                          px-3 py-1
                          text-xs text-gray-400
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
  <div
    className={`
      fixed inset-0 z-[999]
      flex items-center justify-center
      bg-black/80 p-5
      backdrop-blur-md
      transition-all duration-350 ease-out
      ${isClosing ? "opacity-0" : "opacity-100"}
    `}
    onClick={closeModal}
  >
          <div
  className={`
    relative max-h-[95vh] w-full max-w-5xl
    overflow-y-auto
    rounded-2xl
    border border-white/10
    bg-[#151515]
    p-5 md:p-7
    transition-all duration-350 ease-out
    ${
      isClosing
        ? "opacity-0 scale-95 translate-y-4"
        : "opacity-100 scale-100 translate-y-0"
    }
  `}
  onClick={(e) => e.stopPropagation()}
>

            {/* Close */}
           <button
  onClick={closeModal}
              className="
                absolute right-4 top-4 z-20
                rounded-full
                bg-black/60
                p-2
                text-gray-400
                transition
                hover:text-white
              "
            >
              <X size={22} />
            </button>

            {/* Project Image */}
            <div
              className="
                relative
                aspect-[16/9]
                w-full
                overflow-hidden
                rounded-xl
                bg-black/40
              "
            >
              {selected.image ? (
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <div
                  className="
                    absolute inset-0
                    flex flex-col
                    items-center justify-center
                    text-gray-500
                  "
                >
                  <Plus size={32} />

                  <p className="mt-4 text-sm uppercase tracking-[0.3em]">
                    Project Preview
                  </p>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="mt-7 border-t border-white/10 pt-6">

              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  {selected.category}
                </p>

                <span className="text-sm text-gray-600">
                  {selected.year}
                </span>
              </div>

              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {selected.title}
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-gray-400">
                {selected.description}
              </p>

              {/* Technologies */}
              {selected.tech.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/[0.05]
                        px-3 py-1
                        text-xs text-gray-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Buttons */}
              {(selected.demo || selected.github) && (
                <div className="mt-7 flex flex-wrap gap-3">

                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        bg-white
                        px-5 py-2.5
                        text-sm font-semibold
                        text-black
                        transition
                        hover:bg-gray-200
                      "
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-white/20
                        bg-white/10
                        px-5 py-2.5
                        text-sm text-white
                        transition
                        hover:bg-white/20
                      "
                    >
                      GitHub
                      
                    </a>
                  )}

                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}