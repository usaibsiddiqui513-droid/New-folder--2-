"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  ArrowUpDown,
  ShoppingBag,
  RotateCcw,
  SlidersHorizontal,
  X,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [sortBy, setSortBy] = useState("featured"); // "featured", "price-low", "price-high", "rating"

  const categoryList = ["All", ...categories.map((c) => c.name)];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch =
          searchTerm.trim() === "" ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        // default "featured"
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [selectedCategory, searchTerm, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchTerm("");
    setSortBy("featured");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Page Header */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Shop Our Catalog
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-2xl">
          Discover {products.length} hand-curated lifestyle essentials across Electronics, Fashion, Accessories, and Home.
        </p>
      </div>

      {/* Controls Bar: Search, Category Pills, and Sort Dropdown */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm mb-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <input
              type="text"
              placeholder="Search products by title or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 p-0.5"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills on Desktop / Dropdown on mobile */}
          <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              {categoryList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-violet-600 text-white shadow-sm shadow-violet-600/30"
                      : "bg-slate-100 hover:bg-slate-200/70 text-slate-600 border border-slate-200/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200 ml-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-1.5 pl-2 pr-6 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-violet-500 cursor-pointer"
                aria-label="Sort products"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters Summary Row */}
        {(selectedCategory !== "All" || searchTerm.trim() !== "" || sortBy !== "featured") && (
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span>Active filters:</span>
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 font-medium">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory("All")} className="hover:text-violet-950">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 font-medium">
                  Search: &ldquo;{searchTerm}&rdquo;
                  <button onClick={() => setSearchTerm("")} className="hover:text-violet-950">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {sortBy !== "featured" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 font-medium">
                  Sort: {sortBy}
                </span>
              )}
            </div>

            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset all filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-medium">
        <span>
          Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {products.length} products
        </span>
      </div>

      {/* Product Grid / Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-12 text-center max-w-lg mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-4">
            <Search className="w-8 h-8 opacity-50" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            No products match your criteria
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 mb-6 leading-relaxed">
            We couldn&apos;t find anything matching &ldquo;{searchTerm || selectedCategory}&rdquo;. Try checking for typos or resetting your filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold shadow-md shadow-violet-600/20 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters &amp; View All</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500">
          Loading shop catalog...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
