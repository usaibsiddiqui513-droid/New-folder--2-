import { Sparkles, FolderGit2 } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-700/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-purple-blue">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Explore curated web applications built with Next.js, React, Tailwind CSS, and modern API architectures. Each card contains sample descriptions and configurable repository links.
          </p>
        </div>

        {/* Projects Grid: 2 columns on desktop for rich visual cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
