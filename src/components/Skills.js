"use client";

import { useState } from "react";
import {
  FileCode2,
  Palette,
  Braces,
  Atom,
  Globe,
  Server,
  GitBranch,
  Info,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");

  const iconComponents = {
    FileCode2: FileCode2,
    Palette: Palette,
    Braces: Braces,
    Atom: Atom,
    Globe: Globe,
    Server: Server,
    GitBranch: GitBranch,
    Github: GithubIcon,
  };

  const filteredSkills =
    activeCategory === "All"
      ? skills.items
      : skills.items.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-700/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Core Skills &amp;{" "}
            <span className="text-gradient-purple-blue">Technologies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            A comprehensive overview of frontend libraries, full-stack frameworks, runtime environments, and version control tools.
          </p>
        </div>

        {/* Sample Qualifications Notice / Disclaimer */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-slate-900/70 border border-indigo-900/50 backdrop-blur-md flex items-start gap-3.5 shadow-sm">
          <Info className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300">
            <span className="font-semibold text-indigo-300">Sample Portfolio Data: </span>
            {skills.disclaimer}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {skills.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-indigo-600/25 scale-105"
                  : "bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = iconComponents[skill.iconName] || Braces;
            return (
              <div
                key={skill.name}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0e163b]/70 to-[#080d24]/80 border border-slate-800/90 p-6 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md"
                      style={{ color: skill.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-400">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Focus / Proficiency Level */}
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {skill.level}
                  </p>
                </div>

                {/* Card Footer Indicator */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Applied in Projects</span>
                  </span>
                  <span className="font-mono text-indigo-400 font-semibold">Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
