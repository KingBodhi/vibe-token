import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Earn & Spend",
  description: "Learn how to earn VIBE tokens by contributing to the Alpha Protocol Network, and how to spend them on network services.",
};

export default function EarnSpend() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Earn</span> & <span className="text-gradient-gold">Spend</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            VIBE creates a circular economy where every participant can earn
            by contributing value and spend to access network services.
          </p>
        </div>
      </section>

      {/* Earn Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-green)]/10 border border-[var(--vibe-green)]/30 rounded-full text-[var(--vibe-green)] text-sm mb-4">
              Contribution Rewards
            </div>
            <h2 className="text-3xl font-bold mb-4">How to Earn VIBE</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Multiple ways to earn based on how you contribute to the network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card border-t-4 border-t-[var(--vibe-green)]">
              <div className="text-3xl mb-4">&#128187;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Run a Node</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Deploy an Omega Router or Relay to become a network node.
                Earn VIBE for routing traffic and providing connectivity.
              </p>
              <div className="bg-[var(--dark-surface)] rounded-lg p-4">
                <div className="text-sm text-[var(--text-muted)] mb-1">Estimated Earnings</div>
                <div className="text-lg text-[var(--vibe-green)]">50-200 VIBE/day</div>
                <div className="text-xs text-[var(--text-muted)]">Varies by traffic and uptime</div>
              </div>
            </div>

            <div className="card border-t-4 border-t-[var(--vibe-blue)]">
              <div className="text-3xl mb-4">&#9889;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Contribute Compute</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Share your device&apos;s idle compute with Pythia AI.
                Earn VIBE when your resources are used for AI tasks.
              </p>
              <div className="bg-[var(--dark-surface)] rounded-lg p-4">
                <div className="text-sm text-[var(--text-muted)] mb-1">Estimated Earnings</div>
                <div className="text-lg text-[var(--vibe-green)]">10-100 VIBE/day</div>
                <div className="text-xs text-[var(--text-muted)]">Based on GPU/CPU capacity</div>
              </div>
            </div>

            <div className="card border-t-4 border-t-[var(--gold)]">
              <div className="text-3xl mb-4">&#128176;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Stake VIBE</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Lock your VIBE to earn staking rewards and unlock
                higher tier benefits and governance power.
              </p>
              <div className="bg-[var(--dark-surface)] rounded-lg p-4">
                <div className="text-sm text-[var(--text-muted)] mb-1">Annual Yield</div>
                <div className="text-lg text-[var(--vibe-green)]">5-18% APY</div>
                <div className="text-xs text-[var(--text-muted)]">Based on staking tier</div>
              </div>
            </div>

            <div className="card border-t-4 border-t-[var(--vibe-purple)]">
              <div className="text-3xl mb-4">&#128640;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Refer Others</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Bring new users and node operators to the network.
                Earn a percentage of their contributions.
              </p>
              <div className="bg-[var(--dark-surface)] rounded-lg p-4">
                <div className="text-sm text-[var(--text-muted)] mb-1">Referral Bonus</div>
                <div className="text-lg text-[var(--vibe-green)]">5% of earnings</div>
                <div className="text-xs text-[var(--text-muted)]">For first year</div>
              </div>
            </div>

            <div className="card border-t-4 border-t-[var(--vibe-orange)]">
              <div className="text-3xl mb-4">&#128295;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Build & Develop</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Contribute to protocol development, build apps, or
                create tools for the ecosystem.
              </p>
              <div className="bg-[var(--dark-surface)] rounded-lg p-4">
                <div className="text-sm text-[var(--text-muted)] mb-1">Developer Grants</div>
                <div className="text-lg text-[var(--vibe-green)]">Up to 100K VIBE</div>
                <div className="text-xs text-[var(--text-muted)]">Per approved project</div>
              </div>
            </div>

            <div className="card border-t-4 border-t-[var(--text-muted)]">
              <div className="text-3xl mb-4">&#128640;</div>
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-2">Bug Bounties</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Find and report security vulnerabilities.
                Earn rewards based on severity.
              </p>
              <div className="bg-[var(--dark-surface)] rounded-lg p-4">
                <div className="text-sm text-[var(--text-muted)] mb-1">Bounty Range</div>
                <div className="text-lg text-[var(--vibe-green)]">100 - 50K VIBE</div>
                <div className="text-xs text-[var(--text-muted)]">Based on severity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spend Section */}
      <section className="py-24 bg-[var(--dark-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--vibe-purple)]/10 border border-[var(--vibe-purple)]/30 rounded-full text-[var(--vibe-purple)] text-sm mb-4">
              Network Services
            </div>
            <h2 className="text-3xl font-bold mb-4">How to Spend VIBE</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Use your VIBE to access premium services and features across the network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">Network Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Priority Routing</div>
                    <div className="text-sm text-[var(--text-muted)]">Faster data transfer and lower latency</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Enhanced Privacy</div>
                    <div className="text-sm text-[var(--text-muted)]">Additional encryption layers and mixnets</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Decentralized Storage</div>
                    <div className="text-sm text-[var(--text-muted)]">Encrypted, redundant data storage</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Satellite Backhaul</div>
                    <div className="text-sm text-[var(--text-muted)]">Global connectivity via Spectrum Galactic</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">AI & Compute</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Pythia AI Tasks</div>
                    <div className="text-sm text-[var(--text-muted)]">Run AI inference and data processing</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Model Training</div>
                    <div className="text-sm text-[var(--text-muted)]">Federated learning compute credits</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">GPU Rendering</div>
                    <div className="text-sm text-[var(--text-muted)]">Distributed graphics processing</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Priority Compute</div>
                    <div className="text-sm text-[var(--text-muted)]">Jump the queue for urgent tasks</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">Governance</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Protocol Voting</div>
                    <div className="text-sm text-[var(--text-muted)]">Vote on upgrades and parameters</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Treasury Proposals</div>
                    <div className="text-sm text-[var(--text-muted)]">Propose and vote on fund allocation</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Grant Applications</div>
                    <div className="text-sm text-[var(--text-muted)]">Apply for development funding</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">Premium Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Custom Domains</div>
                    <div className="text-sm text-[var(--text-muted)]">Register .alpha domains</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">API Access</div>
                    <div className="text-sm text-[var(--text-muted)]">Developer API rate limits</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--gold)]">&#9679;</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">Enterprise SLA</div>
                    <div className="text-sm text-[var(--text-muted)]">Guaranteed uptime and support</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start <span className="text-gradient-gold">Earning</span> Today
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            Get an Omega device and start contributing to the network.
            The more you contribute, the more you earn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://omegawireless.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Omega Hardware
            </a>
            <Link href="/tokenomics" className="btn-secondary">
              View Tokenomics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
