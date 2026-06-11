/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { tradingResults } from "../data/results";
import { BotPerformance, TradeOrder } from "../types";
import { 
  TrendingUp, 
  Coins, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  LineChart, 
  ChevronRight, 
  Layers, 
  Wallet,
  CheckCircle2,
  Cpu
} from "lucide-react";

interface InteractiveResultsProps {
  onSignUpClick: () => void;
}

export default function InteractiveResults({ onSignUpClick }: InteractiveResultsProps) {
  const [selectedBotIndex, setSelectedBotIndex] = useState<number>(0);
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const activeBot: BotPerformance = tradingResults[selectedBotIndex];

  const handleToggleExpand = (orderId: string) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null);
    } else {
      setExpandedOrderId(orderId);
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(val);
  };

  return (
    <div className="w-full" id="interactive-results-section">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-brand-green font-mono text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded bg-brand-green/5 border border-brand-green/20">
            Performance Statistics
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-light bg-clip-text text-white mt-4 tracking-tight uppercase">
            Verified Trading Results
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm md:text-base font-light">
            These results are replicated directly from our actual MetaTrader histories running the bots on Gold (XAUUSD). Select a bot profile to view active trade parameters.
          </p>
        </div>

        {/* Bot Profile Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          {tradingResults.map((bot, idx) => (
            <button
              id={`bot-pill-${idx}`}
              key={bot.name}
              onClick={() => {
                setSelectedBotIndex(idx);
                setExpandedOrderId(null);
              }}
              className={`relative px-5 py-3 rounded font-medium text-xs tracking-wider transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                selectedBotIndex === idx
                  ? "bg-brand-green/10 text-brand-green border-brand-green/30 shadow-[0_0_15px_rgba(0,255,148,0.1)]"
                  : "bg-[#0E0E10] text-[#888] border-dark-border hover:text-white hover:border-neutral-700"
              }`}
            >
              <Cpu className={`w-4 h-4 ${selectedBotIndex === idx ? "text-brand-green animate-pulse" : "text-gray-500"}`} />
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 leading-none">
                  {bot.version}
                </p>
                <p className="text-xs font-semibold mt-0.5">{bot.name}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Info & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Summary Metrics & Explanations */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <div className="bg-[#0E0E10] rounded p-6 border border-dark-border space-y-6">
              <div className="flex items-center justify-between border-b border-dark-border pb-4">
                <span className="text-white font-sans font-semibold uppercase text-xs tracking-widest flex items-center gap-2">
                  <TrendingUp className="text-brand-green w-4 h-4" /> Account Summary
                </span>
                <span className="text-[10px] font-mono bg-[#1A1A1C] text-gray-400 px-2.5 py-1 rounded border border-dark-border">
                  REAL ACCOUNT
                </span>
              </div>

              {/* Core numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#141416]/50 p-4 rounded border border-dark-border">
                  <span className="text-xs text-gray-500 block mb-1">Total Profits</span>
                  <span className="text-xl md:text-2xl font-mono text-brand-green font-semibold block">
                    {formatCurrency(activeBot.profit)}
                  </span>
                </div>
                <div className="bg-[#141416]/50 p-4 rounded border border-dark-border">
                  <span className="text-xs text-gray-500 block mb-1">Starting Deposit</span>
                  <span className="text-xl md:text-2xl font-mono text-white/90 font-medium block">
                    {formatCurrency(activeBot.deposit)}
                  </span>
                </div>
                {activeBot.withdrawal !== undefined && (
                  <div className="bg-[#141416]/50 p-4 rounded border border-dark-border col-span-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Withdrawals Cleared</span>
                      <span className="text-sm font-mono text-rose-500 font-medium">
                        {formatCurrency(activeBot.withdrawal)}
                      </span>
                    </div>
                  </div>
                )}
                <div className="bg-[#141416]/50 p-4 rounded border border-dark-border col-span-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Current Balance</span>
                    <span className="text-lg font-mono text-brand-green font-bold">
                      {formatCurrency(activeBot.balance)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bot stats */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between text-sm py-2 border-b border-dark-border">
                  <span className="text-gray-400">Trading Instrument</span>
                  <span className="text-white font-mono text-xs">XAUUSD (Gold Spot)</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-dark-border">
                  <span className="text-gray-400">Win Rate Percentage</span>
                  <span className="text-brand-green font-semibold">
                    {activeBot.winRate}% Verified
                  </span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b border-dark-border">
                  <span className="text-gray-400">Total Simulated Trades</span>
                  <span className="text-white font-mono text-xs">{activeBot.totalTrades} positions</span>
                </div>
                <div className="flex justify-between text-sm py-2">
                  <span className="text-gray-400">Tracking Period</span>
                  <span className="text-white text-xs flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-green" /> {activeBot.durationString}
                  </span>
                </div>
              </div>
            </div>

            {/* Credibility bullet points */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-brand-green/5 border border-brand-green/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Full S/L & T/P Protection</h4>
                  <p className="text-xs text-gray-400 mt-1 font-light">
                    Every trade placed is guaranteed with high-precision micro-managed Stop Losses and Take Profits, as visible in the MetaTrader logs.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-brand-green/5 border border-brand-green/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Execution Speed</h4>
                  <p className="text-xs text-gray-400 mt-1 font-light">
                    Operates flawlessly. Connects via MT4 on standard platforms on both Play Store and App Store mobile environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic CTA */}
            <div className="bg-brand-green/5 border border-brand-green/10 rounded p-5 text-center">
              <p className="text-xs text-brand-green font-mono mb-2 uppercase tracking-wider font-bold">Want to replicate these results?</p>
              <h5 className="text-xs text-gray-305 mb-4 leading-relaxed font-light">
                Join our premium Telegram group for daily automated signals & bot parameters.
              </h5>
              <button
                id="bot-performance-cta-button"
                onClick={onSignUpClick}
                className="w-full bg-brand-green hover:bg-[#00E082] text-dark-bg font-bold py-3 px-4 rounded text-xs uppercase tracking-wider transition-colors duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,255,148,0.1)]"
              >
                Sign Up & Claim Bot Access Now
              </button>
            </div>
          </div>

          {/* Right Column: Replicated MetaTrader 5 High-Fidelity UI Terminal */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-[#0E0E10] border border-dark-border rounded overflow-hidden shadow-2xl relative">
              {/* Virtual iPhone Notch / Header */}
              <div className="bg-[#121214] px-6 py-4 flex items-center justify-between border-b border-dark-border select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                  <span className="text-[10px] text-[#888] font-mono tracking-widest uppercase">LIVE_MT4_TERMINAL v4.0</span>
                </div>
                <div className="flex gap-1.5 text-gray-500 font-mono text-[9px]">
                  <span>2:44 PM</span>
                  <span>•</span>
                  <span>99% Battery</span>
                </div>
              </div>

              {/* MetaTrader Header Bar matching the uploaded screenshots exactly */}
              <div className="bg-[#151518] border-b border-dark-border p-4 select-none">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#1C1C1F] border border-dark-border rounded flex items-center justify-center text-xs text-brand-green font-bold">
                      MT
                    </div>
                    <div>
                      <h3 className="text-xs font-mono text-gray-500 font-semibold leading-none">History</h3>
                      <h2 className="text-xs font-bold text-white uppercase tracking-wider mt-1 leading-none">All symbols</h2>
                    </div>
                  </div>
                  {/* MetaTrader Standard Icons (reimagined as clean SVGs) */}
                  <div className="flex items-center gap-3 text-gray-400">
                    <Coins className="w-4 h-4 cursor-pointer hover:text-white" />
                    <LineChart className="w-4 h-4 cursor-pointer hover:text-white" />
                    <Calendar className="w-4 h-4 cursor-pointer hover:text-white" />
                  </div>
                </div>

                {/* Account Balances from Screenshot */}
                <div className="space-y-1 font-mono text-xs text-gray-400">
                  <div className="flex justify-between items-center py-1 border-b border-dark-border/40">
                    <span>Profit:</span>
                    <span className="text-brand-green font-bold">{formatCurrency(activeBot.profit)}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-dark-border/40">
                    <span>Deposit:</span>
                    <span className="text-gray-300 font-medium">{formatCurrency(activeBot.deposit)}</span>
                  </div>
                  {activeBot.withdrawal !== undefined && (
                    <div className="flex justify-between items-center py-1 border-b border-dark-border/40">
                      <span>Withdrawal:</span>
                      <span className="text-rose-500">{formatCurrency(activeBot.withdrawal)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-1 pt-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-white">Balance:</span>
                    <span className="text-sm font-bold text-brand-green">{formatCurrency(activeBot.balance)}</span>
                  </div>
                </div>
              </div>

              {/* Sub-header text */}
              <div className="bg-[#121214] px-4 py-2 flex justify-between items-center border-b border-dark-border select-none">
                <span className="text-[10px] text-gray-500 font-mono">Balance</span>
                <span className="text-[10px] text-gray-400 font-mono">2026.06.11 07:11:02</span>
              </div>

              {/* Trade Logs List */}
              <div className="divide-y divide-dark-border max-h-[380px] overflow-y-auto bg-[#0E0E10]">
                <AnimatePresence mode="popLayout">
                  {activeBot.orders.map((order, orderIdx) => {
                    const isExpanded = expandedOrderId === order.id;
                    return (
                      <div
                        key={order.id}
                        className={`transition-colors duration-200 ${
                          isExpanded ? "bg-[#141416]" : "hover:bg-white/5"
                        }`}
                      >
                        {/* Summary Row */}
                        <div
                          id={`order-row-${order.id}`}
                          onClick={() => handleToggleExpand(order.id)}
                          className="p-4 flex items-center justify-between cursor-pointer"
                        >
                          <div className="space-y-1">
                            {/* Symbol & Position */}
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-sm font-semibold text-white tracking-tight">
                                {order.symbol}
                              </span>
                              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-rose-950/20 text-rose-400 border border-rose-900/10 font-medium">
                                {order.type} {order.lotSize}
                              </span>
                            </div>
                            
                            {/* Price flow */}
                            <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
                              <span>{order.openPrice.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                              <ChevronRight className="w-3 h-3 text-gray-650" />
                              <span className="text-gray-400">
                                {order.closePrice.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                              </span>
                            </div>

                            {/* Timestamp */}
                            <p className="text-[10px] text-gray-500 font-mono">
                              2026.06.11 07:57:32, {order.botName}
                            </p>
                          </div>

                          {/* Profit */}
                          <div className="text-right flex flex-col items-end">
                            <span className="text-sm font-mono text-brand-green font-bold">
                              {order.profit.toFixed(2)}
                            </span>
                            <span className="text-[9px] text-[#555] font-mono mt-1">
                              {isExpanded ? "Hide specs" : "Show specs"}
                            </span>
                          </div>
                        </div>

                        {/* Expanded details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-[#121214] border-t border-dark-border text-[11px] font-mono text-gray-400"
                            >
                              <div className="p-4 grid grid-cols-2 gap-y-2 gap-x-6">
                                <div className="flex justify-between border-b border-dark-border pb-1">
                                  <span className="text-gray-500">Stop Loss / S/L:</span>
                                  <span className="text-gray-300 font-medium">{order.sl.toFixed(3)}</span>
                                </div>
                                <div className="flex justify-between border-b border-dark-border pb-1">
                                  <span className="text-gray-500">Take Profit / T/P:</span>
                                  <span className="text-gray-300 font-medium">{order.tp.toFixed(3)}</span>
                                </div>
                                <div className="flex justify-between border-b border-dark-border pb-1">
                                  <span className="text-gray-500">Swap Charge:</span>
                                  <span className="text-gray-300">{order.swap.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-b border-dark-border pb-1">
                                  <span className="text-gray-500">Brokers Taxes:</span>
                                  <span className="text-gray-300">{order.taxes.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-b border-dark-border pb-1 col-span-2">
                                  <span className="text-gray-500">Trade Commission Fee:</span>
                                  <span className="text-rose-400 font-medium">{order.commission.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-b border-[#1A1A1E] pb-1 col-span-2">
                                  <span className="text-gray-500">MetaTrader Order ID:</span>
                                  <span className="text-gray-300">{order.id}</span>
                                </div>
                                <div className="flex justify-between pt-1 col-span-2">
                                  <span className="text-gray-500">Platform System:</span>
                                  <span className="text-brand-green font-semibold flex items-center gap-1 uppercase tracking-wider text-[9px]">
                                    <CheckCircle2 className="w-3 h-3 text-brand-green" /> AUTOMATED SIGNALS ACTIVE
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* MT4 Bottom Navigation Bar reconstructed */}
              <div className="bg-[#121214] border-t border-dark-border p-3 flex justify-around items-center select-none text-[#555]">
                {/* MetaTrader Icons */}
                <span className="flex flex-col items-center gap-0.5 text-brand-green cursor-pointer">
                  <LineChart className="w-4 h-4" />
                  <span className="text-[8px] font-medium font-sans uppercase tracking-wider">Quotes</span>
                </span>
                <span className="flex flex-col items-center gap-0.5 cursor-pointer">
                  <Layers className="w-4 h-4 text-neutral-600" />
                  <span className="text-[8px] font-sans text-neutral-600 uppercase tracking-wider">Charts</span>
                </span>
                <span className="flex flex-col items-center gap-0.5 cursor-pointer">
                  <TrendingUp className="w-4 h-4 text-neutral-600" />
                  <span className="text-[8px] font-sans text-neutral-600 uppercase tracking-wider">Trade</span>
                </span>
                <span className="flex flex-col items-center gap-0.5 cursor-pointer">
                  <Wallet className="w-4 h-4 text-neutral-600" />
                  <span className="text-[8px] font-sans text-neutral-600 uppercase tracking-wider">History</span>
                </span>
              </div>
            </div>
            
            {/* Visual Helper text */}
            <p className="text-center font-mono text-[10px] text-gray-500 mt-3 select-none">
              ℹ️ Click any MT4 line entry above to view stop-loss, take-profit and commission fee schedules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
