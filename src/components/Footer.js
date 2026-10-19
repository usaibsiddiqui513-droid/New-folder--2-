"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Mail,
  Send,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { storeInfo, categories } from "@/data/products";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setNewsletterSuccess(false);
    }, 4000);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Propositions Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-slate-800 text-slate-300">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-violet-600/20 text-violet-400 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Free Shipping
              </p>
              <p className="text-[11px] text-slate-400">On all orders over $100</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-violet-600/20 text-violet-400 flex items-center justify-center flex-shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                30-Day Returns
              </p>
              <p className="text-[11px] text-slate-400">Hassle-free money back</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-violet-600/20 text-violet-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Secure Checkout
              </p>
              <p className="text-[11px] text-slate-400">Demo certified security</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-violet-600/20 text-violet-400 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                24/7 Support
              </p>
              <p className="text-[11px] text-slate-400">Dedicated assistance</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-600/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Nexa<span className="text-violet-400">Store</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              {storeInfo.subheading}
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p>📍 {storeInfo.address}</p>
              <p>✉️ {storeInfo.email}</p>
              <p>📞 {storeInfo.phone}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/shop?category=${encodeURIComponent(cat.name)}`}
                    className="hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Stay in the Loop
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Subscribe to receive updates on limited seasonal collections and exclusive promotions.
            </p>

            {newsletterSuccess ? (
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Thank you! You are subscribed to demo updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold transition-colors shadow-md shadow-violet-600/30 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <p className="text-[10px] text-slate-500 mt-2.5">
              Zero spam. Unsubscribe at any time with 1-click.
            </p>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} <strong className="text-slate-300">NexaStore</strong>. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-400 text-center sm:text-right">
            🎓 University E-Commerce Project Portfolio Demonstration.
          </p>
        </div>
      </div>
    </footer>
  );
}
