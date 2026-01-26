import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "VIBE Token development roadmap - from Aptos testnet to APN Privacy Chain mainnet.",
};

export default function Roadmap() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Roadmap</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            From Aptos testnet to APN Privacy Chain mainnet.
            Building the economic foundation of the Sovereign Stack.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="relative">
              <div className="absolute left-6 top-16 bottom-0 w-px bg-[var(--dark-border)] hidden md:block" />
              <div className="grid md:grid-cols-[120px_1fr] gap-6">
                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-[var(--vibe-green)] text-[var(--dark-bg)] flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="card border-[var(--vibe-green)] glow-gold">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-[var(--text-muted)]">Phase 1</span>
                    <h3 className="text-2xl font-bold text-[var(--gold)]">Testnet Launch</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--vibe-green)]/20 text-[var(--vibe-green)] font-medium">
                      LIVE
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Deploy VIBE token on Aptos testnet for live testing with real transactions
                    and economic simulations.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { text: "Token contract deployed", done: true },
                      { text: "Testnet faucet active", done: true },
                      { text: "Basic transfer functionality", done: true },
                      { text: "Confidential transactions", done: true },
                      { text: "CLI wallet", done: true },
                      { text: "Explorer integration", done: false },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`text-sm flex items-center gap-2 ${
                          item.done ? "text-[var(--vibe-green)]" : "text-[var(--text-muted)]"
                        }`}
                      >
                        <span>{item.done ? "&#10003;" : "&#9675;"}</span>
                        <span className={item.done ? "line-through opacity-70" : ""}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <div className="absolute left-6 top-16 bottom-0 w-px bg-[var(--dark-border)] hidden md:block" />
              <div className="grid md:grid-cols-[120px_1fr] gap-6">
                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--text-muted)] flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="card">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-[var(--text-muted)]">Phase 2</span>
                    <h3 className="text-2xl font-bold text-[var(--gold)]">Network Integration</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--vibe-blue)]/20 text-[var(--vibe-blue)] font-medium">
                      Q1 2026
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Integrate VIBE with Alpha Protocol network services and begin real economic activity.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { text: "Node reward distribution", done: false },
                      { text: "Compute payment system", done: false },
                      { text: "Staking contract", done: false },
                      { text: "Omega Router integration", done: false },
                      { text: "PCG Dashboard wallet", done: false },
                      { text: "Cross-network bridges", done: false },
                    ].map((item, i) => (
                      <div key={i} className="text-sm flex items-center gap-2 text-[var(--text-muted)]">
                        <span>&#9675;</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              <div className="absolute left-6 top-16 bottom-0 w-px bg-[var(--dark-border)] hidden md:block" />
              <div className="grid md:grid-cols-[120px_1fr] gap-6">
                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--text-muted)] flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="card">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-[var(--text-muted)]">Phase 3</span>
                    <h3 className="text-2xl font-bold text-[var(--gold)]">APN Privacy Chain</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--vibe-purple)]/20 text-[var(--vibe-purple)] font-medium">
                      Q2-Q3 2026
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Migrate VIBE to native APN Privacy Chain with enhanced confidentiality features.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { text: "Privacy chain testnet", done: false },
                      { text: "Token migration bridge", done: false },
                      { text: "Zero-knowledge proofs", done: false },
                      { text: "Native DEX", done: false },
                      { text: "Governance contracts", done: false },
                      { text: "Mainnet launch", done: false },
                    ].map((item, i) => (
                      <div key={i} className="text-sm flex items-center gap-2 text-[var(--text-muted)]">
                        <span>&#9675;</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative">
              <div className="grid md:grid-cols-[120px_1fr] gap-6">
                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-[var(--dark-card)] border border-[var(--dark-border)] text-[var(--text-muted)] flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="card">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-[var(--text-muted)]">Phase 4</span>
                    <h3 className="text-2xl font-bold text-[var(--gold)]">Full Ecosystem</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] font-medium">
                      Q4 2026+
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Complete economic integration across all layers of the Sovereign Stack.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { text: "Pythia AI integration", done: false },
                      { text: "Spectrum satellite payments", done: false },
                      { text: "Cross-chain liquidity", done: false },
                      { text: "Institutional on-ramps", done: false },
                      { text: "DAO treasury automation", done: false },
                      { text: "Global adoption", done: false },
                    ].map((item, i) => (
                      <div key={i} className="text-sm flex items-center gap-2 text-[var(--text-muted)]">
                        <span>&#9675;</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chain Migration */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Chain Migration Path</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              VIBE will migrate from Aptos testnet to the native APN Privacy Chain,
              designed specifically for the Sovereign Stack ecosystem.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="card text-center max-w-xs">
              <div className="text-2xl mb-2">&#128279;</div>
              <h4 className="font-semibold text-[var(--vibe-green)] mb-2">Aptos Testnet</h4>
              <p className="text-sm text-[var(--text-muted)]">
                Current testing environment. Live transactions, proving economic model.
              </p>
              <div className="mt-4 text-xs text-[var(--vibe-green)]">ACTIVE NOW</div>
            </div>

            <div className="text-[var(--gold)] text-2xl">&#8594;</div>

            <div className="card text-center max-w-xs border-[var(--gold)]">
              <div className="text-2xl mb-2">&#128737;</div>
              <h4 className="font-semibold text-[var(--gold)] mb-2">APN Privacy Chain</h4>
              <p className="text-sm text-[var(--text-muted)]">
                Native chain with confidential transactions and mesh integration.
              </p>
              <div className="mt-4 text-xs text-[var(--text-muted)]">2026 TARGET</div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-lg">
            <h4 className="font-semibold text-[var(--gold)] mb-4">Migration Benefits</h4>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-[var(--gold)]">&#10003;</span>
                Native privacy features (zero-knowledge proofs)
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-[var(--gold)]">&#10003;</span>
                Offline transaction capability
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-[var(--gold)]">&#10003;</span>
                Direct Omega hardware integration
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-[var(--gold)]">&#10003;</span>
                No external dependencies
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Be part of building the economic infrastructure for digital sovereignty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/invest" className="btn-primary">
              Investment Opportunities
            </Link>
            <a
              href="https://okb-ventures.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              OKB Ventures
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
