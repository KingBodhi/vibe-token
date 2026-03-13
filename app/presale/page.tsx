"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

// TypeScript declarations for VLink embed
declare global {
  interface Window {
    VLink: {
      init: (opts: { merchantId: string; apiKey: string; environment: string }) => void;
      checkout: (opts: {
        amount: number;
        currency?: string;
        description?: string;
        metadata?: Record<string, string>;
        onSuccess?: (data: Record<string, unknown>) => void;
        onClose?: () => void;
        onError?: (err: { code: string; message: string }) => void;
      }) => void;
    };
  }
}

const PRICE_PER_TOKEN = 0.01;
const PRESET_AMOUNTS = [10, 50, 100, 500, 1000];

const ACCEPTED_TOKENS = [
  { id: "usdc", name: "USDC", color: "#2775ca" },
  { id: "usdt", name: "USDT", color: "#26a17b" },
  { id: "dai", name: "DAI", color: "#f5ac37" },
  { id: "frax", name: "FRAX", color: "#000000" },
  { id: "pyusd", name: "PyUSD", color: "#0052ff" },
  { id: "tusd", name: "TUSD", color: "#1a5afe" },
];

const ACCEPTED_CHAINS = [
  { id: "ethereum", name: "Ethereum" },
  { id: "base", name: "Base" },
  { id: "polygon", name: "Polygon" },
  { id: "arbitrum", name: "Arbitrum" },
  { id: "optimism", name: "Optimism" },
  { id: "avalanche", name: "Avalanche" },
  { id: "bnb", name: "BNB Chain" },
  { id: "solana", name: "Solana" },
];

export default function PresalePage() {
  const [amount, setAmount] = useState<number>(100);
  const [vlinkReady, setVlinkReady] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [purchasedQuantity, setPurchasedQuantity] = useState(0);
  const [error, setError] = useState("");

  const vibeQuantity = Math.floor(amount / PRICE_PER_TOKEN);

  // Load VLink script dynamically
  useEffect(() => {
    const vlinkUrl = process.env.NEXT_PUBLIC_VLINK_URL || "https://vlink-sepia.vercel.app";

    // Check if already loaded
    if (window.VLink) {
      initVLink();
      return;
    }

    const script = document.createElement("script");
    script.src = `${vlinkUrl}/embed/vlink.js?v=${Date.now()}`;
    script.async = true;
    script.onload = () => {
      initVLink();
    };
    script.onerror = () => {
      console.error("Failed to load VLink script");
    };
    document.head.appendChild(script);

    function initVLink() {
      const merchantId = process.env.NEXT_PUBLIC_VLINK_MERCHANT_ID;
      const apiKey = process.env.NEXT_PUBLIC_VLINK_API_KEY;

      if (!merchantId || !apiKey) {
        console.warn("VLink merchant credentials not configured");
        return;
      }

      window.VLink.init({
        merchantId,
        apiKey,
        environment: process.env.NODE_ENV === "production" ? "production" : "development",
      });
      setVlinkReady(true);
    }

    return () => {
      // Cleanup: don't remove script as it may be needed
    };
  }, []);

  const handleCheckout = useCallback(() => {
    if (!vlinkReady || !window.VLink) {
      setError("Payment system is loading. Please try again.");
      return;
    }

    if (amount < 1) {
      setError("Minimum purchase is $1");
      return;
    }

    setError("");

    const tokenQuantity = Math.floor(amount / PRICE_PER_TOKEN);

    window.VLink.checkout({
      amount: amount * 100, // Convert to cents
      currency: "USD",
      description: `VIBE Token Presale - ${tokenQuantity.toLocaleString()} VIBE`,
      metadata: {
        presale: JSON.stringify({
          tokenName: "VIBE",
          pricePerToken: PRICE_PER_TOKEN.toString(),
          tokenQuantity: tokenQuantity.toString(),
        }),
      },
      onSuccess: () => {
        setPurchasedQuantity(tokenQuantity);
        setPurchaseSuccess(true);
      },
      onClose: () => {
        // User closed popup without completing
      },
      onError: (err) => {
        if (err.code === "POPUP_BLOCKED") {
          setError("Please allow popups for this site to complete your purchase.");
        } else {
          setError(err.message || "Payment failed. Please try again.");
        }
      },
    });
  }, [vlinkReady, amount]);

  // Success overlay
  if (purchaseSuccess) {
    return (
      <div className="pt-16">
        <section className="min-h-[90vh] flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-[var(--vibe-green)]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[var(--vibe-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-gradient-gold">Purchase Complete!</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-2">
              You purchased
            </p>
            <div className="text-5xl font-bold text-gradient-gold mb-2">
              {purchasedQuantity.toLocaleString()}
            </div>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              VIBE Tokens
            </p>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-6 mb-8">
              <p className="text-sm text-[var(--text-muted)] mb-2">
                Your tokens will be delivered to your wallet. You can start spending on the Vibertas Dashboard immediately.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => { setPurchaseSuccess(false); setPurchasedQuantity(0); }}
                className="btn-primary"
              >
                Buy More VIBE
              </button>
              <a
                href="https://vibertas-os.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Go to Vibertas
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-12 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-green)]/10 border border-[var(--vibe-green)]/30 rounded-full text-[var(--vibe-green)] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--vibe-green)] animate-pulse" />
            Presale Live
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Buy <span className="text-gradient-gold">VIBE</span> Tokens
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Pay with any stablecoin on any chain. Instant checkout powered by VLink.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Purchase Card */}
            <div>
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Purchase VIBE</h2>

                {/* Amount Input */}
                <div className="mb-6">
                  <label className="block text-sm text-[var(--text-muted)] mb-2">
                    Amount (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-[var(--text-muted)]">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setAmount(val);
                        setError("");
                      }}
                      min={1}
                      step={1}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--dark-border)] rounded-xl py-4 pl-12 pr-4 text-2xl font-bold text-[var(--text-primary)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                    />
                  </div>
                </div>

                {/* Preset Tiers */}
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {PRESET_AMOUNTS.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => { setAmount(preset); setError(""); }}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                        amount === preset
                          ? "bg-[var(--gold)]/20 border border-[var(--gold)] text-[var(--gold)]"
                          : "bg-[var(--bg-surface)] border border-[var(--dark-border)] text-[var(--text-secondary)] hover:border-[var(--gold)]/50"
                      }`}
                    >
                      ${preset >= 1000 ? `${preset / 1000}k` : preset}
                    </button>
                  ))}
                </div>

                {/* VIBE Quantity Display */}
                <div className="bg-[var(--bg-surface)] border border-[var(--dark-border)] rounded-xl p-6 mb-6 text-center">
                  <div className="text-sm text-[var(--text-muted)] mb-1">You receive</div>
                  <div className="text-4xl font-bold text-gradient-gold mb-1">
                    {vibeQuantity.toLocaleString()}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">VIBE Tokens</div>
                  <div className="text-xs text-[var(--text-muted)] mt-2">
                    @ ${PRICE_PER_TOKEN} per token
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4 text-sm text-red-400">
                    {error}
                  </div>
                )}

                {/* Pay Button */}
                <button
                  onClick={handleCheckout}
                  disabled={!vlinkReady || amount < 1}
                  className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {vlinkReady ? "Pay with Stablecoins" : "Loading Payment..."}
                </button>

                {/* Powered by VLink */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="text-xs text-[var(--text-muted)]">Powered by</span>
                  <a
                    href="https://vlink-sepia.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    VLink
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Token Info */}
            <div className="space-y-8">
              {/* Price & Details */}
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[var(--gold)] mb-6">Token Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[var(--dark-border)]">
                    <span className="text-[var(--text-muted)]">Token</span>
                    <span className="font-semibold text-[var(--text-primary)]">VIBE</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[var(--dark-border)]">
                    <span className="text-[var(--text-muted)]">Price</span>
                    <span className="font-semibold text-[var(--gold)]">$0.01</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[var(--dark-border)]">
                    <span className="text-[var(--text-muted)]">Total Supply</span>
                    <span className="font-semibold text-[var(--text-primary)]">1,000,000,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[var(--dark-border)]">
                    <span className="text-[var(--text-muted)]">Network</span>
                    <span className="font-semibold text-[var(--text-primary)]">Multi-chain</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[var(--text-muted)]">Spend On</span>
                    <a
                      href="https://vibertas-os.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[var(--vibe-green)] hover:underline"
                    >
                      Vibertas Dashboard
                    </a>
                  </div>
                </div>
              </div>

              {/* Accepted Stablecoins */}
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Accepted Stablecoins</h3>
                <div className="flex flex-wrap gap-3">
                  {ACCEPTED_TOKENS.map((token) => (
                    <div
                      key={token.id}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-surface)] border border-[var(--dark-border)] rounded-lg"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: token.color }}
                      />
                      <span className="text-sm font-medium text-[var(--text-primary)]">{token.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accepted Chains */}
              <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Supported Chains</h3>
                <div className="grid grid-cols-2 gap-2">
                  {ACCEPTED_CHAINS.map((chain) => (
                    <div
                      key={chain.id}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-surface)] border border-[var(--dark-border)] rounded-lg"
                    >
                      <span className="w-2 h-2 rounded-full bg-[var(--vibe-green)]" />
                      <span className="text-sm text-[var(--text-primary)]">{chain.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get in at <span className="text-gradient-gold">$0.01</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Spend your VIBE on the Vibertas Dashboard for premium services.
            Full stack implementation launching in 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tokenomics" className="btn-secondary">
              View Tokenomics
            </Link>
            <a
              href="https://vibertas-os.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit Vibertas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
