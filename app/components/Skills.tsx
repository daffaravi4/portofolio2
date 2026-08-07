"use client";

import React from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiPython,
  SiTensorflow,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
} from "react-icons/si";

import { FaJava, FaServer } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "REST API", icon: FaServer, color: "#38BDF8" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#EA2D2E" },
    ],
  },
  {
    title: "AI & Computer Vision",
    skills: [
      { name: "MediaPipe", icon: FaServer, color: "#00C853" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

type SkillBadgeProps = {
  icon: React.ElementType;
  name: string;
  color: string;
};

function SkillBadge({ icon: Icon, name, color }: SkillBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-white group">

      <Icon
        size={45}
        style={{ color }}
        className="transition-transform duration-300 group-hover:scale-125"
      />

      <span className="text-sm text-gray-300 text-center">
        {name}
      </span>

    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-24 py-20"
    >

      <p className="text-[#696969] uppercase tracking-[6px] font-semibold">
        My Skills
      </p>

      <h2 className="text-6xl font-bold text-white mt-4">
        Technologies I Use
      </h2>


      <div className="mt-20 border border-[#2F293A] rounded-3xl p-10">

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-10">

          {skillCategories.flatMap((category) =>
            category.skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                color={skill.color}
              />
            ))
          )}

        </div>

      </div>


    </section>
  );
}