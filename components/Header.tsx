"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tokenomics", href: "/tokenomics" },
  { label: "Earn & Spend", href: "/earn-spend" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Invest", href: "/invest" },
];

const ecosystemProjects = [
  {
    id: "alpha",
    name: "Alpha Protocol",
    shortName: "Alpha",
    description: "Protocol Foundation - Enabling P2P Connections",
    url: "https://alphaprotocol.network",
    color: "#1e40af",
    layer: "Layer 0",
  },
  {
    id: "omega",
    name: "Omega Wireless",
    shortName: "Omega",
    description: "Hardware Foundation - Physical Access Points",
    url: "https://omegawireless.xyz",
    color: "#00aaff",
    layer: "Layer 1",
  },
  {
    id: "pcg",
    name: "PCG Dashboard",
    shortName: "PCG",
    description: "Sovereign OS - Your Interface to the Mesh",
    url: "https://pcg-dashboard.vercel.app",
    color: "#10b981",
    layer: "OS Layer",
  },
  {
    id: "pythia",
    name: "Pythia AI",
    shortName: "Pythia",
    description: "Emergent AI - Powered by the Ecosystem",
    url: "https://pythia-ai-web.vercel.app",
    color: "#8b5cf6",
    layer: "Intelligence",
  },
  {
    id: "vibe",
    name: "VIBE Token",
    shortName: "VIBE",
    description: "Ecosystem Rewards - Value for Contributors",
    url: "#",
    color: "#f59e0b",
    layer: "Economics",
  },
  {
    id: "spectrum",
    name: "Spectrum Galactic",
    shortName: "Spectrum",
    description: "Global Reach - Satellite Coverage Extension",
    url: "https://spectrum-galactic.vercel.app",
    color: "#00d4ff",
    layer: "Connectivity",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--dark-bg)]/95 backdrop-blur-sm border-b border-[var(--dark-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Ecosystem Dropdown + Logo */}
          <div className="flex items-center gap-4">
            {/* Ecosystem Dropdown */}
            <div className="relative">
              <button
                onClick={() => setEcosystemOpen(!ecosystemOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)] hover:border-[var(--sovereign-gold)] transition-all"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#f59e0b" }}
                  />
                  <span className="text-sm font-medium text-[var(--text-primary)] hidden sm:inline">
                    VIBE
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 text-[var(--text-muted)] transition-transform ${ecosystemOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {ecosystemOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setEcosystemOpen(false)} />
                  <div className="absolute top-full left-0 mt-2 w-80 bg-[var(--bg-card)] border border-[var(--border-default)] rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="p-3 border-b border-[var(--border-default)]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[var(--sovereign-gold)] to-[var(--sovereign-gold-dark)] flex items-center justify-center">
                          <span className="text-xs font-bold text-[var(--bg-primary)]">SS</span>
                        </div>
                        <span className="text-sm font-semibold text-gradient-sovereign">Sovereign Stack</span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        A symbiotic ecosystem for digital sovereignty
                      </p>
                    </div>

                    <div className="p-2">
                      {ecosystemProjects.map((project) => (
                        <a
                          key={project.id}
                          href={project.url}
                          target={project.id === "vibe" ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          onClick={() => setEcosystemOpen(false)}
                          className={`
                            flex items-start gap-3 p-3 rounded-lg transition-all
                            ${project.id === "vibe" ? "bg-[var(--bg-surface)]" : "hover:bg-[var(--bg-surface)]"}
                          `}
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${project.color}20` }}
                          >
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ background: project.color }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-[var(--text-primary)]">
                                {project.name}
                              </span>
                              {project.id === "vibe" && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] bg-[var(--status-success-bg)] text-[var(--status-success)]">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[var(--text-muted)] mt-0.5 truncate">
                              {project.description}
                            </p>
                            <span
                              className="text-[10px] font-medium mt-1 inline-block"
                              style={{ color: project.color }}
                            >
                              {project.layer}
                            </span>
                          </div>
                          {project.id !== "vibe" && (
                            <svg
                              className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0 mt-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>

                    <div className="p-3 border-t border-[var(--border-default)] bg-[var(--bg-surface)]">
                      <a
                        href="https://okb-ventures.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-xs text-[var(--text-muted)] hover:text-[var(--sovereign-gold)] transition-colors"
                      >
                        <span>Backed by OKB Ventures</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--vibe-light)] to-[var(--vibe-dark)] flex items-center justify-center font-bold text-[var(--dark-bg)]">
                V
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-gradient-vibe">VIBE</span>
                <span className="text-xs block text-[var(--text-muted)]">Ecosystem Rewards</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--text-secondary)] hover:text-[var(--vibe-primary)] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-[var(--vibe-green)] font-medium">
              $0.001/VIBE
            </span>
            <Link href="/invest" className="btn-primary text-sm">
              Buy Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--vibe-primary)]"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--dark-surface)] border-t border-[var(--dark-border)]">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[var(--text-secondary)] hover:text-[var(--vibe-primary)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/invest"
              onClick={() => setMobileMenuOpen(false)}
              className="block btn-primary text-center mt-4"
            >
              Buy Now - $0.001
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
