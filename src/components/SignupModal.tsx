/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle, ShieldAlert, BookOpen, ChevronRight, Cpu } from "lucide-react";
import { SignupSubmission } from "../types";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  telegramLink?: string;
}

export default function SignupModal({ 
  isOpen, 
  onClose, 
  telegramLink = "https://t.me/forex_vip_bot_class" 
}: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    experience: "beginner" as SignupSubmission["experienceLevel"],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.telegram.trim()) {
      setErrorMsg("Please fill in all the required details to secure your spot.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission to server/local storage
    setTimeout(() => {
      try {
        const submission: SignupSubmission = {
          name: formData.name,
          email: formData.email,
          telegramUsername: formData.telegram.startsWith("@") ? formData.telegram : `@${formData.telegram}`,
          experienceLevel: formData.experience,
          submittedAt: new Date().toISOString(),
        };

        // Core Persistence: Save in LocalStorage
        const existingSignupsRaw = localStorage.getItem("forex_class_signups");
        const existingSignups: SignupSubmission[] = existingSignupsRaw ? JSON.parse(existingSignupsRaw) : [];
        existingSignups.push(submission);
        localStorage.setItem("forex_class_signups", JSON.stringify(existingSignups));

        setIsSubmitting(false);
        setIsSuccess(true);
      } catch (err) {
        setIsSubmitting(false);
        setErrorMsg("Something went wrong. Please try again.");
      }
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="relative bg-white border border-gray-200 rounded w-full max-w-lg overflow-hidden shadow-2xl z-10"
        >
          {/* Accent border strip */}
          <div className="h-1 w-full bg-emerald-500"></div>

          {/* Close Button */}
          <button
            id="close-signup-modal-button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-50 border border-gray-200 text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Content */}
          <div className="p-6 md:p-8">
            {!isSuccess ? (
              <>
                <div className="mb-6">
                  <span className="text-[9px] font-mono text-emerald-600 uppercase tracking-[0.2em] bg-emerald-50 px-2.5 py-1 rounded border border-emerald-250">
                    VIP Priority Access
                  </span>
                  <h3 className="text-xl md:text-2xl font-sans font-light uppercase text-gray-900 mt-4">
                    Unlock Training Access
                  </h3>
                  <p className="text-gray-500 text-xs mt-2 font-light leading-relaxed">
                    Enter your details below. You will be registered for the interactive video orientation class and immediately routed to claim custom files on Telegram.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-4 p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0 text-rose-500" />
                    <span className="font-light">{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="signup-input-name"
                      type="text"
                      required
                      placeholder="e.g. Liam Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-black rounded px-4 py-3 text-sm text-gray-950 focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="signup-input-email"
                      type="email"
                      required
                      placeholder="e.g. liam@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-black rounded px-4 py-3 text-sm text-gray-950 focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans"
                    />
                  </div>

                  {/* Telegram username */}
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                      Telegram @Username *
                    </label>
                    <input
                      id="signup-input-telegram"
                      type="text"
                      required
                      placeholder="e.g. @liamtrader"
                      value={formData.telegram}
                      onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-black rounded px-4 py-3 text-sm text-gray-950 focus:outline-none focus:ring-1 focus:ring-black transition-all font-mono"
                    />
                  </div>

                  {/* Experience Select */}
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                      Your Trading Experience
                    </label>
                    <select
                      id="signup-select-experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value as SignupSubmission["experienceLevel"] })}
                      className="w-full bg-gray-50 border border-gray-200 focus:border-black rounded px-4 py-3 text-sm text-gray-950 focus:outline-none focus:ring-1 focus:ring-black transition-all font-sans cursor-pointer"
                    >
                      <option value="beginner">Beginner (Under 6 months)</option>
                      <option value="intermediate">Intermediate (6 months to 2 years)</option>
                      <option value="advanced">Advanced Trader (2+ years)</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-signup-form"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white font-bold py-4 rounded hover:bg-gray-900 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer mt-6 uppercase tracking-widest text-xs shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Spot...</span>
                      </>
                    ) : (
                      <>
                        <span>Reserve Spot & Access Channel</span>
                        <ChevronRight className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              // Success Slate
              <div className="text-center space-y-6 py-4">
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-sans font-light uppercase text-gray-900">Spot Reserved, {formData.name}!</h3>
                  <p className="text-gray-500 text-xs font-light">
                    Your exclusive Forex training registration is completed successfully under ID <span className="font-mono text-emerald-600">#RES-{(Math.floor(Math.random() * 90000) + 10000)}</span>.
                  </p>
                </div>

                {/* Integration checklist */}
                <div className="bg-gray-50 rounded p-5 text-left space-y-3.5 border border-gray-200 font-sans">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400 block">Your Onboarding Steps</span>
                  <div className="flex gap-2.5 items-start text-xs text-gray-700">
                    <BookOpen className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-light">Claim Bot installation files & preset calibration matrices.</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-xs text-gray-700">
                    <Cpu className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-light">Sync live Gold buy/sell signals on MT4 Mobile app.</span>
                  </div>
                </div>

                {/* Direct Telegram click redirect layout */}
                <div className="pt-2">
                  <a
                    id="success-redirect-telegram-link"
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-bold py-4 rounded text-xs uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <span>Connect Live Channel Now</span>
                    <Send className="w-4 h-4" />
                  </a>
                  <p className="text-[10px] text-gray-400 mt-2.5 font-light">
                    Clicking opens the Telegram Application link layout directly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
