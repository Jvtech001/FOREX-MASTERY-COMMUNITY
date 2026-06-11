/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Star, ArrowUpRight, X, ChevronLeft, ChevronRight, ZoomIn, ShieldCheck, Lock } from "lucide-react";
import SignupModal from "./components/SignupModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  
  // Telegram Channel Link
  const TELEGRAM_LINK = "https://t.me/forex_vip_bot_class";

  // The 4 student result screenshots uploaded locally
  const studentResults = [
    {
      id: "1",
      symbol: "XAUUSD (Gold)",
      profit: "+$600.00",
      type: "SELL",
      date: "2026-06-11 UTC",
      image: "/images/600.png"
    },
    {
      id: "2",
      symbol: "XAUUSD (Gold)",
      profit: "+$3,000.00",
      type: "SELL",
      date: "2026-06-11 UTC",
      image: "/images/3000.png"
    },
    {
      id: "3",
      symbol: "XAUUSD (Gold)",
      profit: "+$2,000.00",
      type: "SELL",
      date: "2026-06-11 UTC",
      image: "/images/2000.png"
    },
    {
      id: "4",
      symbol: "XAUUSD (Gold)",
      profit: "+$500.00",
      type: "SELL",
      date: "2026-06-11 UTC",
      image: "/images/500.png"
    }
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : studentResults.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev !== null && prev < studentResults.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : studentResults.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev !== null && prev < studentResults.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden relative" id="app-root-container">
      
      {/* FULL HERO BACKGROUND WITH ONE POWERFUL SENTENCE */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 md:px-8 py-20" id="hero-primary-section">
        {/* Full-width premium background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/background.png" 
            alt="Forex Trading Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12 w-full px-2">
          
          {/* Headline - Single Minimalist Sentence */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-white leading-tight uppercase"
            id="hero-sentence-headline"
          >
            Real-time trading results and verified execution proofs.
          </motion.h1>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="pt-2 flex flex-col items-center justify-center"
          >
            <motion.a
              id="hero-cta-primary-btn"
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                scale: [1, 1.06, 1],
                backgroundColor: ["#10b981", "#3b82f6", "#ef4444", "#10b981"],
              }}
              transition={{
                scale: {
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                backgroundColor: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-5 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-transform duration-300 shadow-lg hover:shadow-xl cursor-pointer text-center inline-block rounded"
            >
              CLICK HERE TO JOIN US FOR FREE
            </motion.a>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-[11px] font-mono tracking-wider text-gray-500 uppercase">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-150 rounded shadow-sm" id="badge-mt4-verified">
                <Check className="w-3.5 h-3.5 text-emerald-600 font-bold shrink-0" />
                <span>Verified by MT4</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-150 rounded shadow-sm" id="badge-encrypted-sec">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 font-bold shrink-0" />
                <span>Encrypted Security</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* TRADING RESULTS SECTION */}
      <section className="py-6 bg-gray-50 border-t border-gray-100 relative" id="interactive-uploaded-results-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center w-full mb-6 max-w-7xl mx-auto">
            <div className="w-full border-t border-b border-emerald-250 bg-emerald-50 py-3 flex items-center justify-center">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="text-sm sm:text-base md:text-lg font-mono font-bold uppercase tracking-widest text-emerald-700">TRADING RESULTS</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              </div>
            </div>
          </div>

          {/* STUDENT RESULTS GRID (Full width layout since form was removed) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentResults.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-200 rounded-lg p-5 relative group shadow-sm hover:shadow-md hover:border-emerald-350 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card top banner with metrics */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      result.type === "SELL"
                        ? "bg-rose-50 text-rose-700 border-rose-100"
                        : "bg-emerald-50 text-emerald-700 border-emerald-100"
                    }`}>
                      {result.type}
                    </span>
                    
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-gray-550 uppercase">{result.symbol}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-[10px] font-sans text-emerald-600 font-bold">{result.profit}</span>
                    </div>
                  </div>

                  {/* High Quality Student trade screenshot (Full size / Contain) */}
                  <div 
                    onClick={() => setActiveImageIndex(index)}
                    className="bg-gray-50 rounded border border-gray-150 overflow-hidden h-72 relative flex items-center justify-center shadow-inner cursor-zoom-in group/img"
                  >
                    <img
                      src={result.image}
                      alt={`${result.symbol} student trade proof`}
                      className="max-w-[95%] max-h-[92%] object-contain group-hover/img:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Standard safe fallback URL if file load gets delayed locally
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    
                    {/* Hover expand overlay prompt */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <div className="bg-white/95 px-3 py-1.5 rounded shadow-md text-[10px] font-mono font-bold flex items-center gap-1 text-black">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect Trade</span>
                      </div>
                    </div>
                    
                    {/* Floating status flag */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3.5 flex items-end justify-between pointer-events-none">
                      <span className="text-[9px] font-mono text-white/95">MT4 RECORD</span>
                      <span className="text-[9px] font-mono text-emerald-400 font-bold flex items-center gap-1 bg-black/45 px-2 py-0.5 rounded border border-emerald-500/25">
                        <Check className="w-3.5 h-3.5" /> VERIFIED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Additional footer context mapping the student profit details */}
                <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between text-gray-400 font-mono text-[10px]">
                  <span>Date: {result.date}</span>
                  <span className="text-emerald-600 flex items-center gap-0.5">
                    100% Real <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* INNERCIRCLE CTA BANNER BETWEEN RESULTS AND FOOTER */}
      <section className="bg-gray-50 border-t border-b border-gray-150 py-3.5 px-4" id="innercircle-cta-section">
        <motion.a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3.5 text-center group cursor-pointer select-none"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div className="flex items-center gap-2 transition-colors duration-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-700 group-hover:text-emerald-500 transition-colors duration-200">
              INNERCIRCLE TRADING NETWORK:
            </span>
            <span className="text-xs text-gray-600 hidden md:inline group-hover:text-gray-900 transition-colors duration-200">
              Access real-time signals & gold mentorship
            </span>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-500 group-hover:bg-emerald-400 text-black border border-emerald-500 rounded font-mono font-bold text-xs transition-all duration-200 shadow-md shrink-0"
            id="innercircle-telegram-btn"
          >
            <span>JOIN INNERCIRCLE CHANNEL</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </motion.a>
      </section>

      {/* FOOTER SECTION: SIMPLE & MINIMALIST WITH APP STORE & GOOGLE PLAY LINK DESIGNS */}
      <footer className="bg-white border-t border-gray-150 py-6 px-4" id="footer-main-layout">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
          
          {/* APP STORES & TELEGRAM ROUTING BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Apple App Store */}
            <a
              href="https://apps.apple.com/us/app/telegram-messenger/id686449807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black hover:bg-gray-900 text-white rounded-xl px-4 py-2 transition-all duration-300 shadow-sm hover:shadow-md w-48 text-left shrink-0"
              title="Open via App Store container layout"
            >
              <svg viewBox="0 0 384 512" className="w-5 h-5 mr-3 text-white fill-current shrink-0">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.7-77.9-22.1-39.3.6-78 22.9-102.1 64-48.7 83.1-12.4 205.1 34.6 272.1 23 33.1 50 69.4 86.1 68 36.1-1.4 49.7-23.2 92.1-23.2 42.4 0 55 23.2 92.1 22.5 37.1-.6 61.1-32.5 83.9-66.2 26.6-38.9 37.3-76.7 37.9-78.7-1.4-.7-72.3-27.8-72.5-110.1zM249.7 77c21.5-26 35.8-62.1 31.8-98-31.4 1.3-69.3 21-92 47.6-19.1 22.1-35.8 58.9-31.3 94 34.9 2.7 70-17.6 91.5-43.6z" />
              </svg>
              <div>
                <p className="text-[8px] uppercase tracking-wider text-gray-400 font-mono leading-none">Download on the</p>
                <p className="text-xs font-semibold font-sans text-white leading-tight mt-0.5">App Store</p>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black hover:bg-gray-900 text-white rounded-xl px-4 py-2 transition-all duration-300 shadow-sm hover:shadow-md w-48 text-left shrink-0"
              title="Open via Google Play container layout"
            >
              <svg viewBox="0 0 512 512" className="w-5 h-5 mr-3 text-white fill-current shrink-0">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.1-60.1-60.1L434.3 13c19.1 11.1 30.6 28.4 30.6 50.2v325c0 21.8-11.5 39.1-32.7 50.2zM104.6 499l220.7-126.2-60.1-60.1L104.6 499z" />
              </svg>
              <div>
                <p className="text-[8px] uppercase tracking-wider text-gray-400 font-mono leading-none">Get it on</p>
                <p className="text-xs font-semibold font-sans text-white leading-tight mt-0.5">Google Play</p>
              </div>
            </a>

          </div>

          {/* Copyright Info */}
          <div className="w-full border-t border-gray-150 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 font-mono gap-4">
            <span>© 2026 trading results platform. All Rights Reserved.</span>
            <div className="flex items-center gap-4">
              <span className="hover:text-gray-900 transition-colors cursor-pointer text-gray-500" onClick={handleOpenModal}>Access priority spot</span>
              <span>•</span>
              <span>Timezone: UTC</span>
            </div>
          </div>

        </div>
      </footer>

      {/* VIP SIGNUP REGISTRATION TRIGGER */}
      <SignupModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        telegramLink={TELEGRAM_LINK} 
      />

      {/* FULLSCREEN STUDENT RESULT DETAILS MODAL OVERLAY */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-between p-4 md:p-6 backdrop-blur-sm"
            id="fullscreen-image-inspection-overlay"
          >
            {/* Top Toolbar */}
            <div className="w-full max-w-5xl flex items-center justify-between text-white/90 z-10 pt-2 font-mono">
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">STUDENT TRADE RECORD</span>
                <span className="text-sm font-semibold mt-1">
                  {studentResults[activeImageIndex].symbol} &bull; <span className="text-emerald-400 font-bold">{studentResults[activeImageIndex].profit}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  {activeImageIndex + 1} / {studentResults.length}
                </span>
                <button
                  onClick={() => setActiveImageIndex(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 border border-white/10 hover:text-white rounded-full transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Img Container with Navigation Buttons */}
            <div className="relative flex-1 w-full max-w-4xl flex items-center justify-center my-6">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-16 p-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full transition-all cursor-pointer hover:scale-105 z-10 shrink-0"
                title="Previous Trade"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Expanded Image Card */}
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[70vh] max-w-full rounded-lg overflow-hidden border border-white/15 shadow-2xl bg-black flex items-center justify-center"
              >
                <img
                  src={studentResults[activeImageIndex].image}
                  alt={`${studentResults[activeImageIndex].symbol} expanded view`}
                  className="object-contain max-h-[70vh] max-w-full"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-16 p-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full transition-all cursor-pointer hover:scale-105 z-10 shrink-0"
                title="Next Trade"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom trade meta banner */}
            <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between text-xs text-gray-300 font-mono z-10 mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${studentResults[activeImageIndex].type === "SELL" ? "bg-rose-500" : "bg-emerald-500"}`}></span>
                <span>Type: <strong className={studentResults[activeImageIndex].type === "SELL" ? "text-rose-400" : "text-emerald-400"}>{studentResults[activeImageIndex].type}</strong></span>
              </div>
              <div>
                <span>Proof Lock: <strong>{studentResults[activeImageIndex].date}</strong></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
