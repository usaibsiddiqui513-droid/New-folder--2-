"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  RotateCcw,
  Info,
} from "lucide-react";
import { storeInfo } from "@/data/products";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wide mb-3">
          <Mail className="w-3.5 h-3.5 text-violet-600" />
          <span>Customer Support &amp; Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Get in Touch With Us
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-2">
          Have a question about orders, shipping, or our catalog? We&apos;re here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
        {/* Left Column: Store Details & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900">
              Contact Channels
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Reach out through our direct service channels or fill out the inquiry form.
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email Support
                  </p>
                  <a
                    href={`mailto:${storeInfo.email}`}
                    className="font-semibold text-slate-900 hover:text-violet-700 transition-colors"
                  >
                    {storeInfo.email}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Replies usually within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Direct Phone Line
                  </p>
                  <p className="font-semibold text-slate-900">
                    {storeInfo.phone}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Toll-free across North America
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    HQ Showroom
                  </p>
                  <p className="font-semibold text-slate-900">
                    {storeInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Business Hours
                  </p>
                  <p className="font-semibold text-slate-900">
                    {storeInfo.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm relative">
            {submitted ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Message Validated Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>! Your demo message regarding &ldquo;{formData.subject}&rdquo; has been locally validated on the client.
                </p>

                {/* Important Requirement Banner */}
                <div className="p-4 rounded-2xl bg-violet-50 border border-violet-200 text-left mb-6 flex items-start gap-3">
                  <Info className="w-5 h-5 text-violet-700 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-violet-900 leading-relaxed">
                    <strong>Demo Notice:</strong> This is a client-side university project form. Real email dispatch requires connecting this submission handler to an email service (such as Resend, EmailJS, Formspree, or a Next.js server route).
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Send a Message
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in the required fields below. We will respond promptly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Jordan Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                        errors.name
                          ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                          : "border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. jordan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                        errors.email
                          ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                          : "border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Question regarding product dimensions"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                      errors.subject
                        ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                        : "border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Type your message or inquiry here..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all resize-y ${
                      errors.message
                        ? "border-rose-400 focus:border-rose-500 ring-1 ring-rose-200"
                        : "border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm shadow-md shadow-violet-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Validating &amp; Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {storeInfo.faq.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <h3 className="font-bold text-slate-900 text-base mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span>{item.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
