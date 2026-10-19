import { BookOpen, Code2, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personal, about } = portfolioData;

  const iconMap = {
    BookOpen: BookOpen,
    Code2: Code2,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="about" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-700/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Passionate About Crafting{" "}
            <span className="text-gradient-purple-blue">Modern Web Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {about.intro || personal.fullBio}
          </p>
        </div>

        {/* 3 Information Cards: Learning, Building, Improving */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {about.cards.map((card) => {
            const IconComponent = iconMap[card.iconName] || Code2;
            return (
              <div
                key={card.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0e1638]/80 to-[#090e24]/90 border border-slate-800/90 p-8 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-950/50 flex flex-col justify-between"
              >
                {/* Background accent glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 border border-slate-800 text-slate-300">
                      {card.badge}
                    </span>
                  </div>

                  {/* Card Title & Subtitle */}
                  <div className="mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {card.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-indigo-200 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom decorative subtle indicator */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Core Pillar of Development</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights & Key Principles Ribbon */}
        <div className="rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
            {about.highlights.map((item, index) => (
              <div key={index} className="pt-4 sm:pt-0 sm:px-4 flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
