import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invest",
  description: "Investment opportunities in VIBE Token - the economics layer of the Sovereign Stack. Backed by OKB Ventures.",
};

export default function Invest() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-green)]/10 border border-[var(--vibe-green)]/30 rounded-full text-[var(--vibe-green)] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--vibe-green)] animate-pulse" />
            Available Now
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Buy <span className="text-gradient-gold">VIBE</span> Today
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            Get in at the ground floor. $0.001 per token.
            Spend on the PowerClub Global Dashboard immediately.
          </p>
          <div className="bg-[var(--dark-card)] border border-[var(--gold)] rounded-2xl p-8 max-w-md mx-auto glow-gold">
            <div className="text-6xl font-bold text-gradient-gold mb-2">$0.001</div>
            <div className="text-lg text-[var(--text-secondary)] mb-4">per VIBE token</div>
            <div className="text-sm text-[var(--text-muted)]">1,000 VIBE = $1 USD</div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why VIBE?</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                VIBE isn&apos;t a speculative token — it&apos;s the utility token that powers
                real network activity across the Sovereign Stack. Every transaction,
                every compute task, every node reward flows through VIBE.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Real Utility:</strong> Used for
                    network fees, compute payments, and service access
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Deflationary:</strong> Fee burns
                    reduce supply over time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Ecosystem Growth:</strong> Value
                    increases as more devices join the network
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-6">Token Details</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-[var(--text-muted)] mb-1">Status</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--vibe-green)] animate-pulse" />
                    <span className="text-lg text-[var(--vibe-green)]">Available for Purchase</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)] mb-1">Current Price</div>
                  <div className="text-2xl font-bold text-[var(--gold)]">$0.001 / VIBE</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)] mb-1">Spend On</div>
                  <div className="text-lg font-bold text-[var(--text-primary)]">PowerClub Global Dashboard</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--text-muted)] mb-1">Full Stack ETA</div>
                  <div className="text-2xl font-bold text-[var(--text-primary)]">30 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How to Buy VIBE</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Purchase VIBE tokens now and start spending on the PowerClub Global Dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card border-t-4 border-t-[var(--gold)]">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">Direct Purchase</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Buy VIBE tokens at the current price of $0.001 per token.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  Ground floor pricing at $0.001
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  Immediate delivery to your wallet
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  Spend instantly on PCG Dashboard
                </li>
              </ul>
              <a
                href="https://okb-ventures.vercel.app/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center"
              >
                Contact to Purchase
              </a>
            </div>

            <div className="card border-t-4 border-t-[var(--vibe-purple)]">
              <h3 className="text-xl font-semibold text-[var(--vibe-purple)] mb-4">Where to Spend</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Use your VIBE tokens on the PowerClub Global Dashboard for premium services.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  Premium dashboard features
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  Priority support access
                </li>
                <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  Exclusive services & features
                </li>
              </ul>
              <a
                href="https://powerclubglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary block text-center"
              >
                Visit PCG Dashboard
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Sovereign Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Part of the Sovereign Stack</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              VIBE connects all layers, enabling value exchange across the entire ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a
              href="https://alphaprotocol.network"
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:border-[var(--gold)] transition-colors group"
            >
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L1</div>
              <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                Alpha Protocol
              </h4>
              <p className="text-sm text-[var(--text-muted)]">Core cryptographic network</p>
            </a>

            <a
              href="https://omegawireless.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:border-[var(--gold)] transition-colors group"
            >
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L2</div>
              <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                Omega Wireless
              </h4>
              <p className="text-sm text-[var(--text-muted)]">Privacy hardware devices</p>
            </a>

            <div className="card opacity-60">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L3</div>
              <h4 className="font-semibold text-[var(--text-primary)]">PCG Dashboard</h4>
              <p className="text-sm text-[var(--text-muted)]">User interface</p>
            </div>

            <a
              href="https://pythia-ai.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:border-[var(--gold)] transition-colors group"
            >
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L4</div>
              <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                Pythia AI
              </h4>
              <p className="text-sm text-[var(--text-muted)]">Intelligence layer</p>
            </a>

            <div className="card border-[var(--gold)] glow-gold">
              <div className="text-xs font-mono text-[var(--gold)] mb-2">L5</div>
              <h4 className="font-semibold text-[var(--gold)]">VIBE Token</h4>
              <p className="text-sm text-[var(--text-muted)]">You are here</p>
            </div>

            <div className="card opacity-60">
              <div className="text-xs font-mono text-[var(--text-muted)] mb-2">L6</div>
              <h4 className="font-semibold text-[var(--text-primary)]">Spectrum Galactic</h4>
              <p className="text-sm text-[var(--text-muted)]">LEO satellites</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            <div className="card">
              <h4 className="font-semibold text-[var(--gold)] mb-2">Can I buy VIBE now?</h4>
              <p className="text-[var(--text-secondary)]">
                Yes! VIBE tokens are available for purchase now at $0.001 per token.
                Contact us through OKB Ventures to complete your purchase.
              </p>
            </div>

            <div className="card">
              <h4 className="font-semibold text-[var(--gold)] mb-2">Where can I spend my VIBE tokens?</h4>
              <p className="text-[var(--text-secondary)]">
                VIBE tokens can be spent on the PowerClub Global Dashboard for premium services,
                priority support, and exclusive features. More spending options coming with full stack launch.
              </p>
            </div>

            <div className="card">
              <h4 className="font-semibold text-[var(--gold)] mb-2">What is the full stack implementation?</h4>
              <p className="text-[var(--text-secondary)]">
                The full stack implementation (ETA 30 days) will enable VIBE spending across all
                Sovereign Stack services including Omega hardware, Pythia AI compute, and network services.
              </p>
            </div>

            <div className="card">
              <h4 className="font-semibold text-[var(--gold)] mb-2">Why buy at $0.001?</h4>
              <p className="text-[var(--text-secondary)]">
                This is ground floor pricing before the full ecosystem launches. Early buyers get
                the best price and can start using their tokens immediately on the PCG Dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Buy <span className="text-gradient-gold">VIBE</span> Today
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Get in at $0.001 per token. Spend immediately on the PowerClub Global Dashboard.
            Full stack implementation in 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://okb-ventures.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Buy VIBE Now
            </a>
            <a
              href="https://powerclubglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit PCG Dashboard
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
