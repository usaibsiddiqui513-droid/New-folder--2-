import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Leaf,
  HeartHandshake,
  ArrowRight,
  Award,
  Users,
  Clock,
  Compass,
} from "lucide-react";
import { storeInfo } from "@/data/products";

export const metadata = {
  title: "About Us — NexaStore",
  description: "Learn about the mission, values, and craftsmanship behind NexaStore.",
};

export default function AboutPage() {
  const valueIcons = {
    ShieldCheck: ShieldCheck,
    Leaf: Leaf,
    Sparkles: Sparkles,
    HeartHandshake: HeartHandshake,
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header & Story Intro */}
      <section className="bg-gradient-to-b from-violet-50/70 via-purple-50/30 to-transparent py-14 sm:py-20 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Our Story &amp; Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Crafting Lifestyle Experiences That{" "}
            <span className="text-gradient-purple">Inspire Everyday</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded with a passion for architectural design, durable craftsmanship, and mindful consumerism, NexaStore is a curated e-commerce destination bringing together premium tech, timeless apparel, and contemporary home accents.
          </p>
        </div>
      </section>

      {/* 2. Visual Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=80"
                alt="NexaStore Design Studio"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Overlay Stat Pill */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">University Project</p>
                <p className="text-[10px] text-slate-500">Excellence in UI/UX Engineering</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700">
              <Compass className="w-4 h-4" />
              <span>Why We Started</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Curating Products That Stand The Test of Time
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In a marketplace flooded with throwaway fast-fashion and planned obsolescence, NexaStore curates products that champion longevity, ergonomic functionality, and sustainable materials.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From titanium chronograph timepieces to 450 GSM French terry cotton hoodies, every piece in our inventory is hand-vetted by our product team before being offered to our community.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-violet-600/30 transition-all hover:scale-105"
              >
                <span>Explore the Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clearly Labeled Statistics Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
              Impact &amp; Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Sample Growth Figures
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              (Representative demo performance metrics)
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {storeInfo.stats.map((stat, i) => (
              <div key={i} className="pt-4 sm:pt-0 sm:px-4 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-violet-400">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white mt-2">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-1">
                  {stat.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wide mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-violet-600" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            The foundation behind every product curation, design decision, and customer interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {storeInfo.values.map((val, idx) => {
            const Icon = valueIcons[val.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-violet-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
