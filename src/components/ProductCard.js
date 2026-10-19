"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, ShoppingBag, ArrowRight, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-violet-300 transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Container */}
      <div className="relative w-full pt-[85%] bg-slate-100 overflow-hidden">
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-violet-600 text-white shadow-sm">
              {product.badge}
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
              Save ${(product.originalPrice - product.price).toFixed(0)}
            </span>
          )}
        </div>

        {/* Product Image */}
        <Link href={`/shop/${product.id}`} className="block absolute inset-0">
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-violet-50 text-violet-600 p-4 text-center">
              <ShoppingBag className="w-10 h-10 mb-2 opacity-60" />
              <span className="text-xs font-semibold">{product.name}</span>
            </div>
          )}
        </Link>
      </div>

      {/* Product Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-medium tracking-wide uppercase text-violet-700 font-mono text-[11px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-700 text-xs">
                {product.rating}
              </span>
              <span className="text-slate-400 text-[11px]">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Product Title */}
          <Link href={`/shop/${product.id}`}>
            <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-1 group-hover:text-violet-700 transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-slate-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-600 font-medium">
              In Stock
            </span>
          </div>

          {/* Add to Cart Quick Button */}
          <button
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isAdded
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-600/20 hover:scale-[1.03] active:scale-[0.98]"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
