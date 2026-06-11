/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, ArrowRight, Smartphone, ShieldCheck, Zap } from "lucide-react";

interface TelegramCTAProps {
  telegramLink?: string;
  onSignUpClick: () => void;
}

export default function TelegramCTA({ 
  telegramLink = "https://t.me/forex_vip_bot_class",
  onSignUpClick 
}: TelegramCTAProps) {
  return (
    <div className="w-full bg-dark-bg border-t border-dark-border py-24 px-4 relative overflow-hidden" id="telegram-cta-footer-section">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/5 border border-brand-green/20 rounded">
          <Send className="w-3.5 h-3.5 text-brand-green" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green">Class Distribution Channel</span>
        </div>

        {/* Header Text */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-sans font-light text-white tracking-tight uppercase">
            Download our Bots & Start Training
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
            Our high-performing <span className="text-white font-normal">MONEY BANGER BOT</span> and <span className="text-white font-normal">VIP AI TRADER BOT</span> installation packages, expert preset profiles, and daily step-by-step video lessons are distributed exclusively within our Telegram community.
          </p>
        </div>

        {/* Feature Grid inside CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4 text-left">
          <div className="bg-[#0E0E10] p-5 rounded border border-dark-border flex gap-3">
            <Zap className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">Daily Signals</p>
              <p className="text-[11px] text-[#888] mt-1 font-light">Real-time buy/sell Gold notifications.</p>
            </div>
          </div>
          <div className="bg-[#0E0E10] p-5 rounded border border-dark-border flex gap-3">
            <Smartphone className="w-5 h-5 text-[#888] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">Mobile Guides</p>
              <p className="text-[11px] text-[#888] mt-1 font-light">Full integration for MT4 mobile.</p>
            </div>
          </div>
          <div className="bg-[#0E0E10] p-5 rounded border border-dark-border flex gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white">Verified Setup</p>
              <p className="text-[11px] text-[#888] mt-1 font-light">Custom presets optimized for accounts.</p>
            </div>
          </div>
        </div>

        {/* Playstore and Appstore links linking directly to Telegram */}
        <div className="space-y-4 pt-4">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.25em] leading-none">
            Click Badges Below to Join & Download
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            
            {/* App Store Custom Badge */}
            <a
              id="download-app-store-button"
              href="https://apps.apple.com/us/app/telegram-messenger/id686449807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0E0E10] hover:bg-neutral-900 border border-dark-border rounded px-5 py-2.5 text-left transition-all duration-300 md:w-52 cursor-pointer shadow-md"
            >
              <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
              </svg>
              <div>
                <p className="text-[9px] text-gray-500 font-sans tracking-widest leading-none uppercase">Download on the</p>
                <p className="text-xs font-bold text-white font-sans mt-1.5 leading-none uppercase">App Store</p>
              </div>
            </a>

            {/* Play Store Custom Badge */}
            <a
              id="download-google-play-button"
              href="https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0E0E10] hover:bg-neutral-900 border border-dark-border rounded px-5 py-2.5 text-left transition-all duration-300 md:w-52 cursor-pointer shadow-md"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,5.27V18.73L16.55,12L3,5.27M17.87,11.33L19.5,12.15L17.87,12.97L16.55,12L17.87,11.33M3.5,4L16.27,11.08L3.5,18.15V4M5.22,3.1L16.89,10.73L19.22,4.6L5.22,3.1Z" className="text-brand-green" />
                <path d="M19.5,12.15L3,18.73V19.73L19.5,13.15V12.15Z" className="text-white/40" />
              </svg>
              <div>
                <p className="text-[9px] text-gray-500 font-sans tracking-widest leading-none uppercase">Get it on</p>
                <p className="text-xs font-bold text-white font-sans mt-1.5 leading-none uppercase">Google Play</p>
              </div>
            </a>

          </div>
        </div>

        {/* Primary Signup / Redirect Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="telegram-cta-signup-btn"
            onClick={onSignUpClick}
            className="w-full sm:w-auto bg-brand-green hover:bg-[#00E082] text-dark-bg font-bold px-8 py-4 rounded text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(0,255,148,0.15)] cursor-pointer"
          >
            Sign Up for Interactive Live Class
          </button>
          
          <a
            id="telegram-cta-direct-link"
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0E0E10] border border-dark-border hover:border-neutral-700 px-8 py-4 rounded text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 cursor-pointer"
          >
            Direct Join Telegram <Send className="w-4 h-4 text-brand-green animate-pulse" />
          </a>
        </div>

        {/* Security disclaimer */}
        <p className="text-[10px] text-gray-655 max-w-lg mx-auto leading-normal font-light">
          Disclaimer: Forex and CFD trading involve significant risk of loss. Our automated bots are training educational programs distributed exclusively for utility simulation. Results shown reflect exact historic parameters but do not guarantee future performance.
        </p>

      </div>
    </div>
  );
}
