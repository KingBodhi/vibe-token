import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 animated-gradient" />

        {/* Floating token decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[var(--gold)]/5 blur-3xl token-float" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[var(--gold)]/5 blur-3xl token-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-green)]/10 border border-[var(--vibe-green)]/30 rounded-full text-[var(--vibe-green)] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--vibe-green)] animate-pulse" />
            Available Now - $0.001 per VIBE
          </div>

          {/* Token visual */}
          <div className="token-coin mx-auto mb-8 token-float">
            VIBE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-gold">The Economics</span>
            <br />
            <span className="text-[var(--text-primary)]">of Sovereignty</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            VIBE is the native token of the Alpha Protocol Network.
            Buy now at $0.001 and spend on the PowerClub Global Dashboard.
            Full stack implementation in 30 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/invest" className="btn-primary">
              Buy VIBE Now
            </Link>
            <a href="https://powerclubglobal.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Spend on PCG Dashboard
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">$0.001</div>
              <div className="text-sm text-[var(--text-muted)]">Current Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">1B</div>
              <div className="text-sm text-[var(--text-muted)]">Total Supply</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">30</div>
              <div className="text-sm text-[var(--text-muted)]">Days to Full Stack</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--vibe-green)] mb-2">BUY NOW</div>
              <div className="text-sm text-[var(--text-muted)]">Available Today</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is VIBE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is <span className="text-gradient-gold">VIBE</span>?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              VIBE powers the economic layer of the Sovereign Stack, aligning incentives
              across node operators, users, and developers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibe-green)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibe-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Earn</h3>
              <p className="text-[var(--text-secondary)]">
                Contribute compute, run nodes, or stake tokens to earn VIBE rewards.
                The more you contribute, the more you earn.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibe-purple)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibe-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Spend</h3>
              <p className="text-[var(--text-secondary)]">
                Use VIBE to access premium network services, priority compute,
                and enhanced privacy features.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--vibe-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--vibe-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Govern</h3>
              <p className="text-[var(--text-secondary)]">
                Stake VIBE to participate in governance decisions that shape
                the future of the Alpha Protocol Network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Real Utility</span>, Not Speculation
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                VIBE isn&apos;t just another token. It&apos;s the fuel that powers a real network
                of devices, compute resources, and services. Every VIBE earned represents
                real value contributed to the ecosystem.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Network Fees:</strong> Pay for
                    compute tasks, data routing, and storage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Staking Rewards:</strong> Earn
                    passive income by securing the network
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)] mt-1">&#10003;</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Governance Power:</strong> Vote
                    on protocol upgrades and treasury allocation
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--dark-card)] border border-[var(--dark-border)] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-6">Token Flow</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--vibe-green)]/10 flex items-center justify-center text-[var(--vibe-green)]">
                    &#8593;
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Earn VIBE</div>
                    <div className="text-sm text-[var(--text-muted)]">Node operation, compute, staking</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-[var(--gold)]/30 ml-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)]">
                    &#8644;
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Hold & Stake</div>
                    <div className="text-sm text-[var(--text-muted)]">Unlock tiers, earn more</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-[var(--gold)]/30 ml-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--vibe-purple)]/10 flex items-center justify-center text-[var(--vibe-purple)]">
                    &#8595;
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">Spend VIBE</div>
                    <div className="text-sm text-[var(--text-muted)]">Services, priority, features</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereign Stack Position */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Layer 5 of the <span className="text-gradient-gold">Sovereign Stack</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              VIBE connects all layers of the Sovereign Stack, enabling value exchange
              from hardware to satellites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { layer: "L6", name: "Spectrum Galactic", desc: "LEO Satellites" },
              { layer: "L5", name: "VIBE Token", desc: "Economics Layer", active: true },
              { layer: "L4", name: "Pythia AI", desc: "Intelligence Layer" },
              { layer: "L3", name: "PCG Dashboard", desc: "User Interface" },
              { layer: "L2", name: "Omega Hardware", desc: "Privacy Devices" },
              { layer: "L1", name: "Alpha Protocol", desc: "Core Network" },
            ].map((item) => (
              <div
                key={item.layer}
                className={`p-4 rounded-lg border ${
                  item.active
                    ? "bg-[var(--gold)]/10 border-[var(--gold)] glow-gold"
                    : "bg-[var(--dark-card)] border-[var(--dark-border)]"
                }`}
              >
                <div className={`text-xs font-mono mb-1 ${item.active ? "text-[var(--gold)]" : "text-[var(--text-muted)]"}`}>
                  {item.layer}
                </div>
                <div className={`font-semibold ${item.active ? "text-[var(--gold)]" : "text-[var(--text-primary)]"}`}>
                  {item.name}
                </div>
                <div className="text-xs text-[var(--text-muted)]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Now CTA */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-green)]/10 border border-[var(--vibe-green)]/30 rounded-full text-[var(--vibe-green)] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--vibe-green)] animate-pulse" />
            Available Now
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Buy VIBE at <span className="text-gradient-gold">$0.001</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Get in early at the ground floor price. Spend your VIBE on the PowerClub Global Dashboard
            for premium services. Full stack implementation launching in 30 days.
          </p>
          <div className="bg-[var(--dark-card)] border border-[var(--gold)] rounded-lg p-6 max-w-lg mx-auto mb-8 glow-gold">
            <div className="text-sm text-[var(--gold)] mb-4 font-semibold">Current Pricing</div>
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <div className="text-3xl font-bold text-[var(--gold)]">$0.001</div>
                <div className="text-sm text-[var(--text-muted)]">Per VIBE Token</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--text-primary)]">1,000</div>
                <div className="text-sm text-[var(--text-muted)]">VIBE per $1</div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--dark-border)]">
              <div className="text-sm text-[var(--text-secondary)]">
                Spend on <a href="https://powerclubglobal.com" target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:underline">PowerClub Global Dashboard</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/invest" className="btn-primary">
              Buy VIBE Now
            </Link>
            <a href="https://powerclubglobal.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Visit PCG Dashboard
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
