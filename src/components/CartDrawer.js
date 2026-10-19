"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    subtotal,
    clearCart,
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 100;
  const progressToFreeShipping = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100
  );
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleCheckoutSimulate = () => {
    setCheckoutModalOpen(true);
  };

  const handleConfirmOrder = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      setCheckoutModalOpen(false);
      setIsCartOpen(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                Shopping Cart ({totalItems})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3 bg-violet-50/60 border-b border-violet-100 text-xs">
            {amountToFreeShipping > 0 ? (
              <p className="text-violet-900 font-medium mb-1.5">
                Add{" "}
                <strong className="text-violet-700">
                  ${amountToFreeShipping.toFixed(2)}
                </strong>{" "}
                more to unlock <strong>FREE Standard Shipping</strong>!
              </p>
            ) : (
              <p className="text-emerald-700 font-semibold mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>You unlocked FREE Standard Delivery!</span>
              </p>
            )}
            <div className="w-full h-1.5 bg-violet-200/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="text-base font-bold text-slate-800">
                  Your cart is empty
                </h3>
                <p className="text-xs text-slate-500 max-w-xs mt-1 mb-6">
                  Looks like you haven&apos;t added any items to your shopping cart yet.
                </p>
                <Link
                  href="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 transition-colors shadow-sm"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-18 rounded-xl object-cover bg-slate-100 border border-slate-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/shop/${item.id}`}
                          onClick={() => setIsCartOpen(false)}
                          className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-violet-700 transition-colors line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-rose-600 p-1 rounded transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {item.category}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <span className="text-sm font-bold text-slate-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium">Subtotal</span>
                <span className="text-base font-extrabold text-slate-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Taxes and demo shipping calculated at checkout.
              </p>

              <button
                onClick={handleCheckoutSimulate}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              >
                View Full Cart &amp; Details
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Demo Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-left relative">
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {checkoutSuccess ? (
              <div className="py-6 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Demo Order Placed!
                </h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mb-4">
                  Thank you! Your simulated test order of ${(subtotal * 1.08).toFixed(2)} has been recorded locally.
                </p>
                <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 border border-slate-200 font-mono">
                  Order ID: NEXA-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Demo Store Checkout
                    </h3>
                    <p className="text-xs text-slate-500">
                      University portfolio project simulation
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 mb-5 text-xs text-amber-900 leading-relaxed">
                  <strong>Notice:</strong> Real payment gateways (such as Stripe or PayPal) are intentionally not configured for this demonstration. Clicking &ldquo;Confirm Demo Order&rdquo; will safely simulate the order completion flow and clear your local demo cart.
                </div>

                <div className="bg-slate-50 rounded-xl p-3.5 mb-5 space-y-1.5 text-xs border border-slate-200">
                  <div className="flex justify-between text-slate-600">
                    <span>Items ({totalItems}):</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Tax (8%):</span>
                    <span>${(subtotal * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping:</span>
                    <span className="text-emerald-700 font-semibold">
                      {subtotal >= 100 ? "FREE" : "$9.99"}
                    </span>
                  </div>
                  <div className="border-t border-slate-200 pt-1.5 flex justify-between font-bold text-slate-900 text-sm">
                    <span>Total:</span>
                    <span>
                      ${(subtotal * 1.08 + (subtotal >= 100 ? 0 : 9.99)).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => setCheckoutModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmOrder}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-600/20 transition-all"
                  >
                    Confirm Demo Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
