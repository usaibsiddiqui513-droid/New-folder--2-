"use client";

import { useCart } from "@/context/CartContext";
import { CheckCircle2, ShoppingBag, X } from "lucide-react";

export default function Toast() {
  const { toastMessage, setToastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto">
      <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-violet-600/30 text-violet-400 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5 text-violet-400" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-100 leading-snug">
            {toastMessage}
          </p>
        </div>
        <button
          onClick={() => setToastMessage(null)}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
