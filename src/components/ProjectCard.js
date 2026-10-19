"use client";

import { useState } from "react";
import {
  ExternalLink,
  GraduationCap,
  ShoppingBag,
  Utensils,
  CloudSun,
  Layers,
  Info,
  X,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ type: "", url: "" });
  const [copied, setCopied] = useState(false);

  const openPlaceholderModal = (type, url) => {
    setModalData({ type, url });
    setModalOpen(true);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Bespoke styled visual previews for each project type
  const renderVisual = (type) => {
    switch (type) {
      case "school":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#0c1436] to-[#080d24] p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Ambient Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

            {/* Mock Header */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">
                  EduTrack Portal
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                Term Active
              </span>
            </div>

            {/* Dashboard Stats Preview */}
            <div className="grid grid-cols-3 gap-2 z-10 my-2">
              <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                <p className="text-[10px] text-slate-400">Total Students</p>
                <p className="text-sm font-bold text-white">1,420</p>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                <p className="text-[10px] text-slate-400">Attendance</p>
                <p className="text-sm font-bold text-emerald-400">97.8%</p>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                <p className="text-[10px] text-slate-400">Courses</p>
                <p className="text-sm font-bold text-indigo-400">48</p>
              </div>
            </div>

            {/* Mini Progress Bar Visual */}
            <div className="z-10 bg-slate-900/60 p-2 rounded-lg border border-slate-800/80">
              <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                <span>Semester Progress</span>
                <span className="text-blue-300 font-mono">68%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[68%] h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
              </div>
            </div>
          </div>
        );

      case "ecommerce":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#130d2e] to-[#09071b] p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl" />

            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">
                  Nova Market Store
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Cart (3 items)
              </span>
            </div>

            {/* Featured Product Preview */}
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 z-10 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-300 text-lg font-bold">
                🎧
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">
                  Wireless Studio Headphones
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-bold text-purple-300">$189.00</span>
                  <span className="text-[10px] text-emerald-400 font-mono">In Stock</span>
                </div>
              </div>
            </div>

            {/* Checkout Action Button Mockup */}
            <div className="z-10 flex items-center justify-between text-[11px] px-2 py-1 bg-slate-900/40 rounded-lg">
              <span className="text-slate-400">Cart Total: <strong className="text-white">$345.50</strong></span>
              <span className="text-[10px] font-semibold text-purple-300 bg-purple-600/30 px-2 py-0.5 rounded">
                Instant Checkout →
              </span>
            </div>
          </div>
        );

      case "restaurant":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#1a1209] to-[#0c0905] p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Utensils className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">
                  Aura Dining &amp; Lounge
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                ★ 4.9 (420+ Reviews)
              </span>
            </div>

            {/* Culinary Special Mockup */}
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 z-10 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-300 text-lg">
                🍷
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white">
                  Signature Truffle Risotto
                </p>
                <p className="text-[10px] text-slate-400">
                  Wild mushrooms, parmigiano, shaved black truffle
                </p>
              </div>
            </div>

            {/* Reservation Callout */}
            <div className="z-10 flex items-center justify-between text-[10px] px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-200">
              <span>Online Table Booking: Available Tonight</span>
              <span className="font-semibold text-amber-400">Reserve →</span>
            </div>
          </div>
        );

      case "weather":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#08182b] to-[#040d1a] p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl" />

            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <CloudSun className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">
                  AtmoCast Live Weather
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                San Francisco, CA
              </span>
            </div>

            {/* Temp & Conditions Display */}
            <div className="grid grid-cols-2 gap-2 z-10">
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex items-center gap-3">
                <span className="text-3xl font-extrabold text-white">72°</span>
                <div>
                  <p className="text-[11px] font-medium text-cyan-300">Partly Sunny</p>
                  <p className="text-[9px] text-slate-400">H: 75° L: 58°</p>
                </div>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 flex flex-col justify-center">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Humidity</span>
                  <span className="text-white font-mono">54%</span>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Wind Speed</span>
                  <span className="text-white font-mono">8 mph</span>
                </div>
              </div>
            </div>

            {/* 5-day mini forecast row */}
            <div className="z-10 flex items-center justify-between text-[9px] font-mono px-2 py-1 bg-slate-900/50 rounded-lg text-slate-400">
              <span>MON 71°</span>
              <span>TUE 73°</span>
              <span>WED 69°</span>
              <span>THU 74°</span>
              <span className="text-cyan-300 font-bold">FRI 76°</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-48 bg-slate-900 flex items-center justify-center text-slate-500">
            <Layers className="w-8 h-8" />
          </div>
        );
    }
  };

  return (
    <>
      <div className="group relative rounded-2xl bg-gradient-to-b from-[#0c122e]/80 to-[#070b1e]/90 border border-slate-800/90 overflow-hidden hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-950/40 flex flex-col justify-between">
        <div>
          {/* Visual UI Preview Container */}
          {renderVisual(project.type)}

          {/* Card Content */}
          <div className="p-6">
            {/* Category / Status Header */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-medium text-indigo-400">
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-400 border border-slate-700/50">
                {project.status}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed">
              {project.description}
            </p>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-indigo-950/50 text-indigo-300 border border-indigo-800/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer Actions: Live Demo & GitHub */}
        <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center gap-3">
          <button
            onClick={() => openPlaceholderModal("Live Demo", project.demoUrl)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-purple-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </button>

          <button
            onClick={() => openPlaceholderModal("GitHub Repository", project.githubUrl)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </button>
        </div>
      </div>

      {/* Placeholder URL Explanation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl bg-[#0b1028] border border-indigo-500/40 p-6 shadow-2xl text-left">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Sample Project Link
                </h4>
                <p className="text-xs text-slate-400">
                  {modalData.type} for &ldquo;{project.title}&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 mb-4">
              <p className="text-[11px] text-slate-400 font-mono mb-1">Target URL (Placeholder):</p>
              <div className="flex items-center justify-between gap-2">
                <code className="text-xs text-indigo-300 break-all">
                  {modalData.url}
                </code>
                <button
                  onClick={() => handleCopy(modalData.url)}
                  className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white flex-shrink-0"
                  title="Copy URL"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              This link is a sample placeholder URL provided for this project. To connect your actual repository or deployment, simply update the <code className="text-purple-300 font-mono">githubUrl</code> or <code className="text-purple-300 font-mono">demoUrl</code> in <code className="text-purple-300 font-mono">src/data/portfolioData.js</code>.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                Close
              </button>
              <a
                href={modalData.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setModalOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
              >
                <span>Visit URL Anyway</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
