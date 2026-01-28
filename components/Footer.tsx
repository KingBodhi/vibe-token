import Link from "next/link";

const ecosystemProjects = [
  {
    id: "alpha",
    name: "Alpha Protocol",
    url: "https://alpha-protocol-web.vercel.app",
    color: "#dc2626",
  },
  {
    id: "omega",
    name: "Omega Wireless",
    url: "https://omega-wireless.vercel.app",
    color: "#f97316",
  },
  {
    id: "vibertas",
    name: "Vibertas",
    url: "https://vibertas-os.vercel.app",
    color: "#eab308",
  },
  {
    id: "vibe",
    name: "VIBE Token",
    url: "#",
    color: "#22c55e",
    current: true,
  },
  {
    id: "pythia",
    name: "Pythia AI",
    url: "https://pythia-ai-web.vercel.app",
    color: "#3b82f6",
  },
  {
    id: "spectrum",
    name: "Spectrum Galactic",
    url: "https://spectrum-galactic.vercel.app",
    color: "#8b5cf6",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-surface)] border-t border-[var(--dark-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--vibe-light)] to-[var(--vibe-dark)] flex items-center justify-center font-bold text-[var(--dark-bg)]">
                V
              </div>
              <div>
                <span className="text-xl font-bold text-gradient-vibe">VIBE</span>
                <span className="text-xs block text-[var(--text-muted)]">Ecosystem Rewards</span>
              </div>
            </div>
            <p className="text-[var(--text-secondary)] text-sm mb-4">
              The reward token powering incentives and value exchange across the Sovereign Stack ecosystem.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--vibe-green)] animate-pulse" />
              <span className="text-[var(--text-muted)]">Live on Aptos Testnet</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[var(--vibe-primary)] font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tokenomics" className="text-sm text-[var(--text-muted)] hover:text-[var(--vibe-primary)] transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="/earn-spend" className="text-sm text-[var(--text-muted)] hover:text-[var(--vibe-primary)] transition-colors">
                  Earn & Spend
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-sm text-[var(--text-muted)] hover:text-[var(--vibe-primary)] transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/invest" className="text-sm text-[var(--text-muted)] hover:text-[var(--vibe-primary)] transition-colors">
                  Buy VIBE
                </Link>
              </li>
            </ul>
          </div>

          {/* Sovereign Stack Ecosystem */}
          <div>
            <h3 className="text-[var(--sovereign-gold)] font-semibold mb-4">Sovereign Stack</h3>
            <ul className="space-y-2">
              {ecosystemProjects.map((project) => (
                <li key={project.id}>
                  {project.current ? (
                    <span className="text-sm flex items-center gap-2" style={{ color: project.color }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                      {project.name} (You are here)
                    </span>
                  ) : (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--sovereign-gold)] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                      {project.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold mb-4">Backed By</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://powerclubglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--vibe-primary)] transition-colors"
                >
                  PowerClub Global
                </a>
              </li>
              <li>
                <a
                  href="https://okb-ventures.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--sovereign-gold)] transition-colors"
                >
                  OKB Ventures
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ecosystem Visual */}
        <div className="mt-8 pt-8 border-t border-[var(--dark-border)]">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {ecosystemProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target={project.current ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all
                  ${project.current
                    ? "bg-[var(--vibe-primary)]/10 text-[var(--vibe-primary)] border border-[var(--vibe-primary)]/30"
                    : "bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-default)] hover:border-[var(--sovereign-gold)] hover:text-[var(--sovereign-gold)]"
                  }
                `}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: project.color }} />
                {project.name}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--dark-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            &copy; {new Date().getFullYear()} VIBE Token. Part of the <span className="text-[var(--sovereign-gold)]">Sovereign Stack</span>.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Backed by <a href="https://okb-ventures.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--sovereign-gold)] hover:underline">OKB Ventures</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
