"use client";

import { useState } from "react";
import { Terminal, Code2, Cpu, CheckCircle2, Copy, Check } from "lucide-react";

export default function CodeVisual() {
  const [activeTab, setActiveTab] = useState("component");
  const [copied, setCopied] = useState(false);

  const snippets = {
    component: `// DevConnect.jsx
import { Hero, Projects, Skills } from "@/components";

export default function DeveloperPortfolio() {
  const developer = {
    name: "Alex Rivera",
    role: "Full-Stack Web Developer",
    status: "Available for Hire 🚀",
    stack: ["Next.js", "React", "Node.js", "Tailwind"],
  };

  return (
    <main className="min-h-screen bg-navy-950">
      <Hero dev={developer} />
      <Projects filter="featured" />
      <Skills showProficiency={true} />
    </main>
  );
}`,
    config: `// portfolio.config.js
module.exports = {
  theme: "cosmic-navy",
  appRouter: true,
  turbopack: true,
  optimizations: {
    images: "next/image",
    accessibility: "WCAG-AA",
    seo: {
      canonical: "https://devconnect.example.com",
      openGraph: true,
    },
  },
};`,
    terminal: `$ npm run build
▲ Next.js (Turbopack)
✓ Compiled successfully in 1.4s
✓ Running TypeScript check ... Passed (0 errors)
✓ Generating static routes ... (4/4 pages)
✓ Production bundle ready at http://localhost:3000
Status: Ready for deployment ✨`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Decorative Outer Glow Ring */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-30 blur-xl group-hover:opacity-50 transition duration-1000" />

      {/* Main Terminal Card */}
      <div className="relative rounded-2xl bg-[#090e24] border border-slate-700/60 shadow-2xl shadow-indigo-950/50 overflow-hidden font-mono text-xs">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0c1230] border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Interactive Code Tabs */}
          <div className="flex items-center gap-1 bg-[#070b1e] p-1 rounded-lg border border-slate-800/80">
            <button
              onClick={() => setActiveTab("component")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "component"
                  ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Code2 className="w-3 h-3 text-indigo-400" />
              <span>DevConnect.jsx</span>
            </button>
            <button
              onClick={() => setActiveTab("config")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "config"
                  ? "bg-purple-600/30 text-purple-300 border border-purple-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Cpu className="w-3 h-3 text-purple-400" />
              <span>config.js</span>
            </button>
            <button
              onClick={() => setActiveTab("terminal")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === "terminal"
                  ? "bg-blue-600/30 text-blue-300 border border-blue-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Terminal className="w-3 h-3 text-blue-400" />
              <span>terminal</span>
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Copy snippet"
            aria-label="Copy snippet"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Code Body */}
        <div className="p-5 overflow-x-auto min-h-[290px] bg-[#070b1e]/90 text-slate-300 font-mono text-[13px] leading-relaxed">
          <pre tabIndex={0} className="focus:outline-none">
            {snippets[activeTab].split("\n").map((line, idx) => {
              // Custom lightweight syntax color highlights
              let coloredLine = line;
              const lineNum = (
                <span className="text-slate-600 select-none inline-block w-6 text-right mr-4 font-mono">
                  {idx + 1}
                </span>
              );

              if (line.startsWith("//") || line.startsWith("#")) {
                return (
                  <div key={idx} className="text-slate-500 italic">
                    {lineNum}
                    {line}
                  </div>
                );
              }

              if (activeTab === "terminal") {
                const isSuccess = line.includes("✓") || line.includes("Passed");
                const isCommand = line.startsWith("$");
                return (
                  <div
                    key={idx}
                    className={
                      isSuccess
                        ? "text-emerald-400 font-medium"
                        : isCommand
                        ? "text-indigo-400 font-bold"
                        : "text-slate-300"
                    }
                  >
                    {lineNum}
                    {line}
                  </div>
                );
              }

              return (
                <div key={idx} className="hover:bg-white/[0.02] rounded px-1 -mx-1">
                  {lineNum}
                  <span>
                    {line
                      .split(" ")
                      .map((word, wIdx) => {
                        if (
                          [
                            "import",
                            "from",
                            "export",
                            "default",
                            "function",
                            "const",
                            "return",
                            "module.exports",
                          ].includes(word)
                        ) {
                          return (
                            <span key={wIdx} className="text-purple-400 font-semibold">
                              {word}{" "}
                            </span>
                          );
                        }
                        if (word.startsWith('"') || word.startsWith("'") || word.endsWith('",') || word.endsWith("',")) {
                          return (
                            <span key={wIdx} className="text-emerald-300">
                              {word}{" "}
                            </span>
                          );
                        }
                        if (["Hero", "Projects", "Skills", "DeveloperPortfolio"].includes(word.replace(/[<>,]/g, ""))) {
                          return (
                            <span key={wIdx} className="text-blue-400">
                              {word}{" "}
                            </span>
                          );
                        }
                        if (["true", "false"].includes(word.replace(/[,;]/g, ""))) {
                          return (
                            <span key={wIdx} className="text-amber-400 font-semibold">
                              {word}{" "}
                            </span>
                          );
                        }
                        return <span key={wIdx}>{word} </span>;
                      })}
                  </span>
                </div>
              );
            })}
          </pre>
        </div>

        {/* Floating Mini Badges over Visual */}
        <div className="px-4 py-2.5 bg-[#090e24] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-medium">Build: 0 Errors</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Next.js App Router</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium text-indigo-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Demo</span>
          </div>
        </div>
      </div>

      {/* Floating Accent Pills */}
      <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-purple-500/30 backdrop-blur-md shadow-xl flex items-center gap-2.5 animate-float">
        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">
          JS
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">Modern JavaScript</p>
          <p className="text-[9px] text-slate-400">Clean & Reusable Code</p>
        </div>
      </div>

      <div
        className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 p-2 sm:p-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl flex items-center gap-2.5 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
          ⚛️
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">React 19 & Next.js</p>
          <p className="text-[9px] text-slate-400">High-Performance Web</p>
        </div>
      </div>
    </div>
  );
}
