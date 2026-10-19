import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { categories, products } from "@/data/products";

export const metadata = {
  title: "Categories — NexaStore",
  description: "Browse our hand-curated product categories across Electronics, Fashion, Accessories, and Home.",
};

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wide mb-3">
          <Layers className="w-3.5 h-3.5 text-violet-600" />
          <span>Product Collections</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Explore Our Categories
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-2">
          Find exactly what you need with our carefully categorized lifestyle selections.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => {
          const categoryProducts = products.filter((p) => p.category === cat.name);
          return (
            <div
              key={cat.id}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-violet-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-violet-800 shadow-sm">
                  {cat.badge}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                  {categoryProducts.length} Items Available
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 group-hover:text-violet-700 transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Sample items preview list */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Popular in this category:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {categoryProducts.map((p) => (
                        <Link
                          key={p.id}
                          href={`/shop/${p.id}`}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-violet-100 text-[11px] text-slate-600 hover:text-violet-800 font-medium transition-colors truncate max-w-[200px]"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Curated essentials
                  </span>
                  <Link
                    href={`/shop?category=${encodeURIComponent(cat.name)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 transition-colors shadow-sm"
                  >
                    <span>View {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
