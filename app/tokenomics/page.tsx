import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tokenomics",
  description: "VIBE Token distribution, supply mechanics, staking tiers, and economic model. Currently live testing on Aptos testnet.",
};

export default function Tokenomics() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-orange)]/10 border border-[var(--vibe-orange)]/30 rounded-full text-[var(--vibe-orange)] text-sm mb-6">
            Proposed - Subject to Change
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Tokenomics</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            A sustainable economic model designed to reward participation
            and align long-term incentives across the network.
          </p>
        </div>
      </section>

      {/* Supply Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Token Supply</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fixed supply with deflationary mechanics through fee burns and buybacks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-4xl font-bold text-gradient-gold mb-2">1,000,000,000</div>
              <div className="text-lg text-[var(--text-primary)] mb-1">Total Supply</div>
              <div className="text-sm text-[var(--text-muted)]">Fixed, never increases</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-gradient-gold mb-2">0%</div>
              <div className="text-lg text-[var(--text-primary)] mb-1">Inflation</div>
              <div className="text-sm text-[var(--text-muted)]">No new tokens minted</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-gradient-gold mb-2">2%</div>
              <div className="text-lg text-[var(--text-primary)] mb-1">Fee Burn</div>
              <div className="text-sm text-[var(--text-muted)]">Of transaction fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Proposed Distribution</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Distribution designed to prioritize community ownership and long-term sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Pie Chart Visual */}
            <div className="relative aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Community 40% */}
                <circle
                  cx="50" cy="50" r="40"
                  fill="transparent"
                  stroke="var(--vibe-green)"
                  strokeWidth="20"
                  strokeDasharray="100.53 150.79"
                  strokeDashoffset="0"
                />
                {/* Development 25% */}
                <circle
                  cx="50" cy="50" r="40"
                  fill="transparent"
                  stroke="var(--vibe-blue)"
                  strokeWidth="20"
                  strokeDasharray="62.83 188.49"
                  strokeDashoffset="-100.53"
                />
                {/* Treasury 20% */}
                <circle
                  cx="50" cy="50" r="40"
                  fill="transparent"
                  stroke="var(--gold)"
                  strokeWidth="20"
                  strokeDasharray="50.26 200.06"
                  strokeDashoffset="-163.36"
                />
                {/* Team 15% */}
                <circle
                  cx="50" cy="50" r="40"
                  fill="transparent"
                  stroke="var(--vibe-purple)"
                  strokeWidth="20"
                  strokeDasharray="37.70 213.62"
                  strokeDashoffset="-213.62"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--gold)]">1B</div>
                  <div className="text-sm text-[var(--text-muted)]">VIBE</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-6">
              <div className="card border-l-4 border-l-[var(--vibe-green)]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-[var(--vibe-green)]">Community & Rewards</h4>
                  <span className="text-2xl font-bold text-[var(--gold)]">40%</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Node operators, compute contributors, staking rewards, and ecosystem incentives.
                </p>
                <div className="text-xs text-[var(--text-muted)] mt-2">400,000,000 VIBE</div>
              </div>

              <div className="card border-l-4 border-l-[var(--vibe-blue)]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-[var(--vibe-blue)]">Development</h4>
                  <span className="text-2xl font-bold text-[var(--gold)]">25%</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Protocol development, security audits, and infrastructure improvements.
                </p>
                <div className="text-xs text-[var(--text-muted)] mt-2">250,000,000 VIBE</div>
              </div>

              <div className="card border-l-4 border-l-[var(--gold)]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-[var(--gold)]">Treasury</h4>
                  <span className="text-2xl font-bold text-[var(--gold)]">20%</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Ecosystem grants, partnerships, liquidity provision, and emergency reserves.
                </p>
                <div className="text-xs text-[var(--text-muted)] mt-2">200,000,000 VIBE</div>
              </div>

              <div className="card border-l-4 border-l-[var(--vibe-purple)]">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-[var(--vibe-purple)]">Team & Advisors</h4>
                  <span className="text-2xl font-bold text-[var(--gold)]">15%</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Core team allocation with 4-year vesting and 1-year cliff.
                </p>
                <div className="text-xs text-[var(--text-muted)] mt-2">150,000,000 VIBE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staking Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Staking Tiers</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Stake VIBE to unlock enhanced features, higher rewards, and governance power.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { name: "Observer", amount: "100", apy: "5%", features: ["Basic network access", "Standard support"] },
              { name: "Contributor", amount: "1,000", apy: "8%", features: ["Priority routing", "Enhanced privacy"] },
              { name: "Validator", amount: "10,000", apy: "12%", features: ["Run validator node", "Governance voting"] },
              { name: "Guardian", amount: "100,000", apy: "15%", features: ["Protocol proposals", "Treasury voting"] },
              { name: "Sovereign", amount: "1,000,000", apy: "18%", features: ["Veto power", "Direct treasury access"], highlight: true },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`card ${tier.highlight ? "border-[var(--gold)] glow-gold" : ""}`}
              >
                <div className={`text-lg font-semibold mb-2 ${tier.highlight ? "text-[var(--gold)]" : "text-[var(--text-primary)]"}`}>
                  {tier.name}
                </div>
                <div className="text-2xl font-bold text-gradient-gold mb-1">{tier.amount}</div>
                <div className="text-xs text-[var(--text-muted)] mb-4">VIBE Required</div>
                <div className="text-lg font-semibold text-[var(--vibe-green)] mb-4">{tier.apy} APY</div>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-2">
                      <span className="text-[var(--gold)]">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vesting Schedule */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Vesting Schedule</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Designed to ensure long-term alignment and prevent market flooding.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Community & Rewards</h4>
                  <div className="text-sm text-[var(--text-muted)]">Distributed over 5 years based on contribution</div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--vibe-green)]">No cliff</div>
                  <div className="text-sm text-[var(--text-muted)]">Linear release</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Development Fund</h4>
                  <div className="text-sm text-[var(--text-muted)]">Milestone-based releases</div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--vibe-blue)]">Governance approved</div>
                  <div className="text-sm text-[var(--text-muted)]">Quarterly unlocks</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Team & Advisors</h4>
                  <div className="text-sm text-[var(--text-muted)]">4-year vesting with cliff</div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--vibe-purple)]">1-year cliff</div>
                  <div className="text-sm text-[var(--text-muted)]">Monthly thereafter</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">Treasury</h4>
                  <div className="text-sm text-[var(--text-muted)]">DAO-controlled release</div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--gold)]">Governance vote</div>
                  <div className="text-sm text-[var(--text-muted)]">As needed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to <span className="text-gradient-gold">Participate</span>?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Learn how to earn VIBE by contributing to the network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/earn-spend" className="btn-primary">
              How to Earn
            </Link>
            <Link href="/invest" className="btn-secondary">
              Investment Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
