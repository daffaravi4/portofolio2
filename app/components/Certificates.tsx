"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { michroma, inter } from "@/app/font";

const certificates = [
  {
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    provider: "AWS Academy",
    category: "Cloud & AI",
    year: "2026",
    image: "/assets/lanyard/certificates/AI.png",
    credential: "",
  },
  {
    title: "Memulai Pemrograman dengan Python",
    provider: "Dicoding",
    category: "Python",
    year: "2026",
    image: "/assets/lanyard/certificates/PYTHON.png",
    credential: "",
  },
  {
    title: "Spec-Driven Development dengan Kiro",
    provider: "AWS Kiro",
    category: "Development",
    year: "2026",
    image: "/assets/lanyard/certificates/KIRO.png",
    credential: "",
  },
  {
    title: "Belajar Mechine Learning",
    provider: "Dicoding",
    category: "Machine Learning",
    year: "2026",
    image: "/assets/lanyard/certificates/Machine_Learning.png",
    credential: "",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState<
    (typeof certificates)[0] | null
  >(null);

  return (
    <>
      <section
        id="certificates"
        className="relative min-h-screen px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-14">
            <p className="mb-3 text-sm tracking-[0.5em] text-gray-400">
              CERTIFICATES
            </p>

            <h2
  className={`${michroma.className} text-4xl font-bold text-white mt-4 md:text-5xl lg:text-[5.2rem] xl:text-[6rem] lg:whitespace-nowrap`}
>
  My Certificates
</h2>

            <p className={`${inter.className} mt-5 max-w-2xl text-gray-400`}>
              These certificates represent my continuous learning journey
              in web development, programming, cloud computing, and
              emerging technologies.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                onClick={() => setSelected(certificate)}
                className="
                  group cursor-pointer overflow-hidden
                  rounded-2xl border border-white/10
                  bg-white/[0.08] backdrop-blur-md
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:bg-white/[0.12]
                "
              >
                {/* Image */}
                <div className="relative aspect-[1.4/1] overflow-hidden bg-black/20">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="
                      object-contain p-5
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Hover overlay */}
                  <div
                    className="
                      absolute inset-0 flex items-center justify-center
                      bg-black/60 opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  >
                    <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
                      View Certificate →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">
                    {certificate.category}
                  </p>

                  <h3
                    className="
                      min-h-[56px]
                      line-clamp-2
                      text-lg font-semibold
                      leading-7 text-white
                    "
                  >
                    {certificate.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      {certificate.provider}
                    </span>

                    <span className="text-gray-500">
                      {certificate.year}
                    </span>
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
          className="
            fixed inset-0 z-[999]
            flex items-center justify-center
            bg-black/80 p-5
            backdrop-blur-md
          "
          onClick={() => setSelected(null)}
        >
          <div
            className="
              relative max-h-[95vh] w-full max-w-5xl
              overflow-y-auto
              rounded-2xl border border-white/10
              bg-[#151515]
              p-5 md:p-7
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="
                absolute right-4 top-4 z-10
                rounded-full bg-black/60 p-2
                text-gray-400
                transition hover:text-white
              "
            >
              <X size={22} />
            </button>

            {/* Certificate image */}
            <div className="relative mx-auto aspect-[1.4/1] w-full max-w-4xl">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Info */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                {selected.category}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {selected.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
                <span>{selected.provider}</span>
                <span>•</span>
                <span>{selected.year}</span>
              </div>

              {/* Credential */}
              {selected.credential && (
                <a
                  href={selected.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6 inline-flex items-center gap-2
                    rounded-full
                    border border-white/20
                    bg-white/10
                    px-5 py-2.5
                    text-sm text-white
                    transition
                    hover:bg-white/20
                  "
                >
                  Verify Credential
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}