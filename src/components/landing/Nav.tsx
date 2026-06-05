"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,9,15,0.82)" : "rgba(8,9,15,0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.07)" : "none",
        paddingTop: scrolled ? "11px" : "16px",
        paddingBottom: scrolled ? "11px" : "16px",
      }}
    >
      <div className="mx-auto max-w-container px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-[11px] font-display font-semibold text-lg text-ink">
          <Logo size={30} />
          <span>
            Duoc <span className="text-gold">Coins</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-ink-dim">
          <Link href="#como" className="hover:text-ink transition-colors">Cómo funciona</Link>
          <Link href="#seguridad" className="hover:text-ink transition-colors">Cloud &amp; Security</Link>
          <Link href="#marketplace" className="hover:text-ink transition-colors">Marketplace</Link>
        </nav>

        <Button href="/wallet">Abrir Wallet →</Button>
      </div>
    </header>
  );
}
