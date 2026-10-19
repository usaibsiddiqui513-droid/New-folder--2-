"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Share2,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

export default function ProductDetailClient({ product, related }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
        <Link href="/" className="hover:text-slate-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/shop" className="hover:text-slate-900 transition-colors">
          Shop
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link
          href={`/shop?category=${encodeURIComponent(product.category)}`}
          className="hover:text-slate-900 transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-bold truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm mb-16">
        {/* Left Column: Product Image Container */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full pt-[90%] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-violet-600 text-white shadow-md">
                {product.badge}
              </span>
            )}

            {!imageError ? (
              <img
                src={product.image}
                alt={product.name}
                onError={() => setImageError(true)}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-violet-50 text-violet-700 p-8 text-center">
                <ShoppingBag className="w-16 h-16 mb-3 opacity-60" />
                <span className="text-base font-bold">{product.name}</span>
                <span className="text-xs text-slate-400 mt-1">High-resolution catalog preview</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Information, Pricing, Actions */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-bold tracking-wider uppercase text-violet-700 font-mono">
                {product.category}
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-slate-500 hover:text-violet-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                title="Share link"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-[11px] font-semibold">
                  {copiedLink ? "Link Copied!" : "Share"}
                </span>
              </button>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating Stars & Reviews */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">
                {product.rating}
              </span>
              <span className="text-xs text-slate-400">
                ({product.reviewCount} customer reviews)
              </span>
            </div>

            {/* Pricing Display */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-black text-slate-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="ml-3 text-base text-slate-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  In Stock ({product.stockCount} available)
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Product Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Technical Highlights */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Features
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quantity Selector & Add to Cart */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Quantity Controls */}
              <div className="flex items-center justify-between sm:justify-start border border-slate-300 rounded-2xl overflow-hidden bg-white px-2 py-1.5">
                <span className="text-xs text-slate-500 font-medium px-2 sm:hidden">
                  Quantity:
                </span>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-slate-100 text-slate-600 disabled:opacity-40 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-slate-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(product.stockCount || 50, q + 1))}
                    className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-slate-100 text-slate-600 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm text-white transition-all duration-200 cursor-pointer shadow-lg ${
                  isAdded
                    ? "bg-emerald-600 shadow-emerald-600/20"
                    : "bg-violet-600 hover:bg-violet-700 shadow-violet-600/30 hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added {quantity} to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add {quantity} to Cart — ${(product.price * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>

            {/* Value Guarantees Row */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] text-slate-500">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                <Truck className="w-4 h-4 mx-auto mb-1 text-violet-600" />
                <span>Fast Dispatch</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                <RotateCcw className="w-4 h-4 mx-auto mb-1 text-violet-600" />
                <span>30-Day Returns</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-violet-600" />
                <span>Certified Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {related && related.length > 0 && (
        <section className="pt-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-700 font-mono">
                Similar Picks
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Related Products in {product.category}
              </h2>
            </div>
            <Link
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="text-xs sm:text-sm font-bold text-violet-700 hover:text-violet-800"
            >
              View More in Category →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
