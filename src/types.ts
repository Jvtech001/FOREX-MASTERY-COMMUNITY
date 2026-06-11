/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TradeOrder {
  id: string;
  symbol: string;
  type: "buy" | "sell";
  lotSize: number;
  openPrice: number;
  closePrice: number;
  openTime: string;
  closeTime: string;
  sl: number;
  tp: number;
  swap: number;
  taxes: number;
  commission: number;
  profit: number;
  botName: string;
}

export interface BotPerformance {
  name: string;
  version: string;
  profit: number;
  deposit: number;
  withdrawal?: number;
  balance: number;
  winRate: number;
  totalTrades: number;
  durationString: string;
  primaryPairs: string[];
  orders: TradeOrder[];
}

export interface SignupSubmission {
  name: string;
  telegramUsername: string;
  email: string;
  experienceLevel: "beginner" | "intermediate" | "advanced";
  submittedAt: string;
}
