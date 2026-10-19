import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  Star,
  Tag,
  Layers,
  ChevronRight,
  Flame,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, storeInfo } from "@/data/products";

export default function Home() {
  const trendingProducts = products.filter((p) => p.isTrending).slice(0, 4);
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-violet-50/70 via-purple-50/30 to-transparent">
        {/* Ambient blurred glow orbs */}
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-300/25 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -top-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Seasonal Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-800 border border-violet-200 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                <span>New Season Collection 2026</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
                Discover Your{" "}
                <span className="text-gradient-purple">Next Favorite</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed mb-8">
                {storeInfo.subheading}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm text-white bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/categories"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Layers className="w-4 h-4 text-violet-600" />
                  <span>Explore Collections</span>
                </Link>
              </div>

              {/* Quick Customer Trust Metrics */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 w-full sm:w-auto">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-violet-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                      JD
                    </div>
                    <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                      SK
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                      AL
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">
                      50K+ Happy Customers
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block h-7 w-px bg-slate-200" />

                <div className="text-xs text-slate-500">
                  <strong className="text-slate-900 block font-bold">
                    30-Day Guarantee
                  </strong>
                  <span>Hassle-free demo returns</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl bg-white p-4 shadow-2xl border border-slate-200/90 group">
                <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
                    alt="Hero featured product"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="px-2.5 py-1 rounded-full bg-violet-600 text-[10px] font-bold uppercase tracking-wider w-fit mb-2">
                      Featured Tech
                    </span>
                    <h3 className="text-lg font-bold">
                      AuraSound Pro Headphones
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Pure spatial audio with 40-hour playtime
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xl font-extrabold text-white">
                        $199.99
                      </span>
                      <Link
                        href="/shop/aura-sound-pro-headphones"
                        className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white text-white hover:text-slate-900 text-xs font-semibold backdrop-blur-md transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating Highlight Pill 1 */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-sm">
                    ✨
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      Curated Premium
                    </p>
                    <p className="text-[10px] text-slate-500">100% Verified Quality</p>
                  </div>
                </div>

                {/* Floating Highlight Pill 2 */}
                <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                    🚀
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      Express Delivery
                    </p>
                    <p className="text-[10px] text-slate-500">Tracked Courier Shipments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Browse by Category</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Collections
            </h2>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-violet-700 hover:text-violet-800 group"
          >
            <span>View All Categories</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-violet-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-violet-800 shadow-sm">
                  {cat.badge}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-violet-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-violet-700">
                  <span>{cat.itemCount} Products</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Shop Now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. TRENDING PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 mb-2">
              <Flame className="w-3.5 h-3.5 text-rose-500" />
              <span>Trending Now</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Customer Favorites This Week
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-violet-700 hover:text-violet-800 group"
          >
            <span>Explore All Products</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. PROMOTIONAL BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-950 text-white p-8 sm:p-12 shadow-2xl">
          <div
            className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/30 border border-violet-400/30 text-violet-200 text-xs font-bold uppercase tracking-wider mb-4">
              <Tag className="w-3.5 h-3.5" />
              <span>Limited Time Seasonal Offer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
              Save Up to 35% on Premium Selected Essentials
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Upgrade your lifestyle with our curated seasonal selections. Use promotional voucher code at checkout to unlock instant discounts.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 font-mono text-sm font-bold tracking-wider">
                <span className="text-slate-300">Code:</span>
                <span className="text-violet-300">NEXA35</span>
              </div>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <span>Shop Sale Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURATED STAFF PICKS / FEATURED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Essentials
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-violet-700 hover:text-violet-800 group"
          >
            <span>See Everything</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
