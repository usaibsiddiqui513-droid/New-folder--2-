"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MapPin,
  Sparkles,
  Info,
  RotateCcw,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { contact, personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const channelIcons = {
    Mail: Mail,
    Github: GithubIcon,
    Linkedin: LinkedinIcon,
    MapPin: MapPin,
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com).";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
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
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate validation and local submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setIsSuccess(false);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-700/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {contact.heading || "Let's Build Something Together"}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Channels & Info */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-[#0e163b]/80 to-[#080d24]/90 border border-slate-800/90 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Reach out directly through any of the channels below or send a message using the form.
              </p>

              <div className="space-y-4">
                {contact.channels.map((channel) => {
                  const Icon = channelIcons[channel.iconName] || Mail;
                  const isEmail = channel.iconName === "Mail";

                  return (
                    <div
                      key={channel.name}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-400">
                            {channel.name}
                          </p>
                          <a
                            href={channel.href}
                            target={channel.href.startsWith("http") ? "_blank" : undefined}
                            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium text-white hover:text-indigo-300 transition-colors break-all"
                          >
                            {channel.value}
                          </a>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {channel.note}
                          </p>
                        </div>
                      </div>

                      {isEmail && (
                        <button
                          onClick={() => handleCopyEmail(channel.value)}
                          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors flex-shrink-0 cursor-pointer"
                          title="Copy email address"
                          aria-label="Copy email address"
                        >
                          {copiedEmail ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Status Notice */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Typical response time: Within 24-48 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form / Success Message */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-b from-[#0e163b]/80 to-[#080d24]/90 border border-slate-800/90 p-8 shadow-xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

              {isSuccess ? (
                /* Success Message State */
                <div className="py-6 flex flex-col items-center text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Form Validated Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>! Your message details have been validated locally on the client.
                  </p>

                  {/* Submission Details Summary */}
                  <div className="w-full text-left bg-slate-900/90 rounded-xl border border-slate-800 p-4 mb-6 space-y-2 text-xs">
                    <p className="text-slate-400">
                      <strong className="text-slate-200">Email:</strong> {formData.email}
                    </p>
                    <p className="text-slate-400">
                      <strong className="text-slate-200">Subject:</strong> {formData.subject}
                    </p>
                    <p className="text-slate-400">
                      <strong className="text-slate-200">Message Preview:</strong> {formData.message}
                    </p>
                  </div>

                  {/* Crucial requirement explanation banner */}
                  <div className="w-full p-4 rounded-xl bg-indigo-950/50 border border-indigo-700/40 text-left flex items-start gap-3 mb-6">
                    <Info className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-indigo-200 leading-relaxed">
                      <strong>Backend Delivery Notice:</strong> In this frontend portfolio demonstration, input data is verified client-side. To transmit real emails to an inbox, connect this form handler to an email API or service such as <em>Resend</em>, <em>Formspree</em>, <em>EmailJS</em>, or a Next.js Server Action / API Route.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Alex Johnson"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.name
                            ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., alex@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.email
                            ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Project Collaboration / Role Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.subject
                          ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-y ${
                        errors.message
                          ? "border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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

                  <p className="text-[11px] text-slate-400 text-center">
                    Client-side validation active. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
