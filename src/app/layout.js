import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NexaStore — Discover Your Next Favorite | Modern E-Commerce",
  description:
    "Curated lifestyle essentials, precision electronics, and premium apparel designed to elevate your everyday routines. Built with Next.js, React, and Tailwind CSS.",
  keywords: [
    "E-Commerce",
    "NexaStore",
    "Online Shopping",
    "Electronics",
    "Fashion",
    "Accessories",
    "Home & Living",
    "Next.js App Router",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased flex flex-col selection:bg-violet-600/20 selection:text-violet-800">
        <CartProvider>
          <Suspense fallback={<div className="h-20 bg-white/80 border-b border-slate-200" />}>
            <Navbar />
          </Suspense>
          <div className="flex-1">
            <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading page...</div>}>
              {children}
            </Suspense>
          </div>
          <Footer />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
