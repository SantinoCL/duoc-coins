import Link from "next/link";
import Logo from "@/components/brand/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/[.07] mt-[90px]">
      <div className="mx-auto max-w-container px-8 py-[46px] flex items-center justify-between flex-wrap gap-5">
        <Link href="/" className="flex items-center gap-[11px] font-display font-semibold text-ink">
          <Logo size={28} />
          Duoc <span className="text-gold ml-1">Coins</span>
        </Link>

        <div className="flex gap-6 text-[13px] text-ink-dim">
          <Link href="/wallet" className="hover:text-ink transition-colors">PWA</Link>
          <Link href="#seguridad" className="hover:text-ink transition-colors">Seguridad</Link>
          <Link href="#marketplace" className="hover:text-ink transition-colors">Marketplace</Link>
        </div>

        <div className="font-mono text-[12px] text-ink-faint tracking-[.04em]">
          © 2026 DUOC COINS · HECHO PARA ESTUDIANTES IT
        </div>
      </div>
    </footer>
  );
}
