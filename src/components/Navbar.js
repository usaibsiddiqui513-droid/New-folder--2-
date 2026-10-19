"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, setIsCartOpen, isLoaded } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    setIsSearchExpanded(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-nav transition-all">
      {/* Top micro announcement banner */}
      <div className="bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-700 text-white text-[11px] font-medium py-1.5 px-4 text-center tracking-wide">
        <span>✨ Welcome to NexaStore — Enjoy <strong>FREE Standard Shipping</strong> on all orders over $100</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-xl"
            aria-label="NexaStore Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-600/30 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1">
                Nexa<span className="text-violet-600">Store</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono -mt-1 font-semibold">
                Curated Lifestyle
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-violet-700 bg-violet-50 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons: Search & Cart & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative hidden sm:flex items-center"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-44 lg:w-60 pl-9 pr-3.5 py-2 rounded-full bg-slate-100 border border-slate-200/80 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:w-72 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-200 transition-all duration-300"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            </form>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl text-slate-700 hover:text-violet-700 hover:bg-violet-50 border border-slate-200/80 transition-all cursor-pointer"
              aria-label={`Shopping cart containing ${isLoaded ? totalItems : 0} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {isLoaded && totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-violet-600 text-white text-[11px] font-bold flex items-center justify-center shadow-md animate-in zoom-in-50 duration-200">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Row (Small screens) */}
        <div className="sm:hidden pb-3">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-violet-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          </form>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-violet-700 bg-violet-50 font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
