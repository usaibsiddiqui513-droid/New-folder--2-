"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Tag,
  RotateCcw,
  AlertCircle,
  X,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    isLoaded,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [customerName, setCustomerName] = useState("");

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError("");
    setPromoSuccess("");

    const code = promoCode.trim().toUpperCase();
    if (code === "NEXA35" || code === "NEXA40") {
      setDiscountPercent(35);
      setPromoSuccess("Voucher code applied! 35% discount calculated.");
    } else if (code === "WELCOME10") {
      setDiscountPercent(10);
      setPromoSuccess("Welcome voucher applied! 10% discount calculated.");
    } else {
      setPromoError("Invalid code. Try using 'NEXA35' for 35% off!");
    }
  };

  const discountAmount = (subtotal * discountPercent) / 100;
  const discountedSubtotal = subtotal - discountAmount;
  const shippingFee = subtotal >= 100 || subtotal === 0 ? 0 : 9.99;
  const estimatedTax = discountedSubtotal * 0.08;
  const orderTotal = discountedSubtotal + shippingFee + estimatedTax;

  const handleConfirmOrder = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      setCheckoutModalOpen(false);
    }, 2500);
  };

  if (!isLoaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500">
        Loading your cart...
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-3xl border border-slate-200 p-12 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-10 h-10 opacity-70" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Your Shopping Cart is Empty
          </h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
            You don&apos;t have any products in your cart yet. Explore our curated collections to find your next favorite item!
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm shadow-md shadow-violet-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Start Shopping Now</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Shopping Cart
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            You have <strong className="text-slate-800">{totalItems} items</strong> in your bag.
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs font-semibold text-rose-600 hover:text-rose-700 p-2 rounded-xl hover:bg-rose-50 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear All</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm divide-y divide-slate-100 overflow-hidden">
          {cart.map((item) => (
            <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link href={`/shop/${item.id}`} className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-2xl object-cover bg-slate-100 border border-slate-200"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-violet-700 font-bold">
                      {item.category}
                    </span>
                    <Link
                      href={`/shop/${item.id}`}
                      className="text-base font-bold text-slate-900 hover:text-violet-700 transition-colors block line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <span className="text-xs text-slate-400">
                      Unit price: ${Number(item.price).toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors"
                    title="Remove item"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-slate-200 text-slate-600 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-slate-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-slate-200 text-slate-600 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <span className="text-base font-extrabold text-slate-900">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Order Summary & Checkout Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
              Order Summary
            </h2>

            {/* Voucher Code Form */}
            <form onSubmit={handleApplyPromo} className="mb-5">
              <label htmlFor="promo" className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Have a discount code?
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="promo"
                  placeholder="e.g. NEXA35"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono uppercase text-slate-900 placeholder-slate-400 focus:outline-none focus:border-violet-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoSuccess && (
                <p className="text-xs text-emerald-600 font-medium mt-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{promoSuccess}</span>
                </p>
              )}
              {promoError && (
                <p className="text-xs text-rose-500 font-medium mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{promoError}</span>
                </p>
              )}
            </form>

            {/* Calculation Lines */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-100">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-semibold text-slate-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Coupon Discount ({discountPercent}%):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Shipping:</span>
                <span className={shippingFee === 0 ? "text-emerald-600 font-bold" : "font-semibold text-slate-900"}>
                  {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Sales Tax (8%):</span>
                <span className="font-semibold text-slate-900">
                  ${estimatedTax.toFixed(2)}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline text-base sm:text-lg font-black text-slate-900">
                <span>Total:</span>
                <span className="text-violet-700 text-xl font-black">
                  ${orderTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={() => setCheckoutModalOpen(true)}
              className="w-full mt-6 py-4 px-6 rounded-2xl font-bold text-sm text-white bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Demo Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Return to Shop */}
            <Link
              href="/shop"
              className="w-full mt-3 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          {/* Safe demo disclaimer card */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong className="block mb-1 font-bold">Academic Project Notice:</strong>
            All cart items are stored securely in your browser&apos;s localStorage for demo persistence. Real payments are not processed.
          </div>
        </div>
      </div>

      {/* Demo Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-left relative">
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {checkoutSuccess ? (
              <div className="py-8 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  Demo Order Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-4">
                  Thank you, <strong className="text-slate-900">{customerName || "Valued Customer"}</strong>! Your simulated order of <strong>${orderTotal.toFixed(2)}</strong> has been processed successfully in local storage.
                </p>
                <div className="p-3 bg-slate-50 rounded-xl text-xs font-mono text-slate-600 border border-slate-200 mb-4 inline-block">
                  Order ID: NEXA-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <p className="text-[11px] text-slate-400">
                  Cart has been cleared. Returning to store...
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Simulated Checkout
                    </h3>
                    <p className="text-xs text-slate-500">
                      NexaStore University E-Commerce Demo
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-5 text-xs text-amber-900 leading-relaxed">
                  <strong>Notice for Evaluators:</strong> Real financial transactions are not configured for this academic project. No credit card details are collected or transmitted.
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Your Name (Demo)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jordan Smith"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-violet-500"
                    />
                  </div>

                  {/* Summary recap */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Total Items:</span>
                      <span className="font-semibold">{totalItems}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Order Subtotal:</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>Discount ({discountPercent}%):</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-600">
                      <span>Shipping &amp; Tax:</span>
                      <span className="font-semibold">
                        ${(shippingFee + estimatedTax).toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t border-slate-200 pt-2 flex justify-between font-black text-slate-900 text-sm">
                      <span>Grand Total:</span>
                      <span className="text-violet-700 font-black">
                        ${orderTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => setCheckoutModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmOrder}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-600/30 transition-all cursor-pointer"
                  >
                    Confirm Demo Order (${orderTotal.toFixed(2)})
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
