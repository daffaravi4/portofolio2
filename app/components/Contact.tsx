"use client";
import { michroma, inter } from "@/app/font";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    name: "Email",
    value: "daffaravi4@email.com",
    icon: FaEnvelope,
    href: "mailto:daffaravi4@email.com",
  },
  {
    name: "GitHub",
    value: "github.com/daffaravi4",
    icon: FaGithub,
    href: "https://github.com/daffaravi4",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/daffa-ravi",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/daffa-ravi",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.5em] text-[#696969]">
            Contact
          </p>

          <h2
  className={`${michroma.className} text-4xl font-bold text-white mt-4 md:text-5xl lg:text-[5.2rem] xl:text-[6rem] lg:whitespace-nowrap`}
>
  Let's Work Together
</h2>

          <p className={`${inter.className} mt-6 max-w-3xl text-lg leading-8 text-gray-400`}>
            I'm always open to discussing new opportunities,
            collaborating on exciting projects, or simply
            connecting with fellow developers.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-5">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.name}
                href={contact.href}
                target={
                  contact.href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  contact.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="
                  group flex items-center justify-between
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.07]
                  px-6 py-5
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/25
                  hover:bg-white/[0.11]
                "
              >
                <div className="flex items-center gap-5">

                  {/* Icon */}
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-xl
                      bg-white/[0.08]
                      text-gray-400
                      transition-all duration-300
                      group-hover:bg-white/[0.15]
                      group-hover:text-white
                    "
                  >
                    <Icon size={20} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {contact.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      {contact.value}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <FaArrowRight
                  className="
                    text-gray-500
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="
            mt-16 rounded-3xl
            border border-white/10
            bg-white/[0.05]
            p-8 text-center
            backdrop-blur-md
            md:p-12
          "
        >
          <h3
  className={`${michroma.className} text-2xl font-bold text-white md:text-3xl`}
>
  Have a project in mind?
</h3>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Let's turn your idea into something useful,
            beautiful, and impactful.
          </p>

          <a
            href="mailto:daffaravi4@email.com"
            className="
              mt-7 inline-flex items-center gap-3
              rounded-full
              bg-white
              px-7 py-3
              font-semibold
              text-black
              transition-all duration-300
              hover:scale-105
              hover:bg-gray-200
            "
          >
            Let's Talk
            <FaArrowRight size={14} />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Daffa Ravi Ferdiansyah. All Rights Reserved.
          </p>

          <p className="mt-2 text-xs text-gray-600">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </section>
  );
}