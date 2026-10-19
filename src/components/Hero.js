"use client";

import { ArrowRight, Mail, Sparkles, Terminal } from "lucide-react";
import CodeVisual from "./CodeVisual";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Bio, CTAs & Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 backdrop-blur-md shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-purple-200">
                {personal.statusBadge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Building Digital{" "}
              <span className="text-gradient-purple-blue">
                Experiences
              </span>{" "}
              That Matter
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-white">
                {personal.name}
              </span>
              . {personal.shortBio}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/70 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full sm:w-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all shadow-sm hover:scale-105"
                  aria-label="GitHub Profile"
                  title="View GitHub (sample URL)"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all shadow-sm hover:scale-105"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn (sample URL)"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <span className="text-[11px] text-slate-500 italic pl-1 hidden sm:inline">
                  (Sample links — edit in portfolioData.js)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Visualizer */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <CodeVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
