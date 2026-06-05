"use client";

import { motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/brand/Logo";
import CoinMark from "@/components/brand/CoinMark";
import Button from "@/components/ui/Button";

/* ─── Entrance helpers ─── */
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] as const, delay },
});
const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.1, ease: "easeOut", delay },
});

/* ─── Ledger ticker items (duplicated for seamless loop) ─── */
const TICKER: { level: string; color: string; bg: string; msg: string }[] = [
  { level: "SIGN", color: "#C291FF", bg: "rgba(168,85,247,.14)", msg: "tx#A91F · prof.verifica → +120 DUOC · C.Reyes" },
  { level: "ENC",  color: "#F5C84C", bg: "rgba(245,200,76,.13)", msg: "payload AES-256-GCM cifrado ✓" },
  { level: "SYNC", color: "#3FD68B", bg: "rgba(63,214,139,.13)", msg: "wallet replicado · 3 nodos cloud · SCL-1" },
  { level: "AUTH", color: "#3FD68B", bg: "rgba(63,214,139,.13)", msg: "OAuth Duoc UC · scope: student.read" },
  { level: "HASH", color: "#C291FF", bg: "rgba(168,85,247,.14)", msg: "ledger integrity 0x7c3a…ed · prevHash OK" },
  { level: "SIGN", color: "#C291FF", bg: "rgba(168,85,247,.14)", msg: "tx#B03E · iniciativa.clase → +80 DUOC · T.Vega" },
  { level: "ENC",  color: "#F5C84C", bg: "rgba(245,200,76,.13)", msg: "canje.marketplace −150 DUOC · Combo cafetería ✓" },
  { level: "SYNC", color: "#3FD68B", bg: "rgba(63,214,139,.13)", msg: "balance actualizado · 1,250 DUOC disponibles" },
];

/* ─── Floating side card ─── */
interface SideCardProps {
  side: "left" | "right";
  delay: number;
  reduced: boolean | null;
  children: React.ReactNode;
}

function SideCard({ side, delay, reduced, children }: SideCardProps) {
  return (
    <motion.div
      className="absolute top-[28%] hidden xl:block w-[220px]"
      style={{
        [side]: "max(16px, calc(50% - 580px))",
        zIndex: 5,
      }}
      initial={reduced ? false : { opacity: 0, x: side === "left" ? -32 : 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.0, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div
        className="rounded-lg p-4 backdrop-blur-md"
        style={{
          background: "rgba(18,20,31,0.80)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 20px 60px -16px rgba(0,0,0,0.6)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const allTicker = [...TICKER, ...TICKER];

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-20 pb-12"
      style={{ minHeight: "88vh" }}
    >
      {/* ── Floating left card: Balance ── */}
      <SideCard side="left" delay={1.1} reduced={reduced}>
        <div className="font-mono text-[9.5px] tracking-[.16em] text-ink-faint uppercase mb-3">
          Balance disponible
        </div>
        <div className="flex items-center gap-2 mb-1">
          <CoinMark size={22} />
          <span className="font-display font-bold text-[28px] text-gold" style={{ fontVariantNumeric: "tabular-nums" }}>
            1,250
          </span>
        </div>
        <div className="font-mono text-[10px] text-ink-faint mb-3">DUOC · •••• 7C3A</div>
        <div className="h-px bg-white/[.07] mb-3" />
        <div className="font-body text-[12px] text-signal-green flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
          +320 esta semana
        </div>
      </SideCard>

      {/* ── Floating right card: Last tx ── */}
      <SideCard side="right" delay={1.3} reduced={reduced}>
        <div className="font-mono text-[9.5px] tracking-[.16em] text-ink-faint uppercase mb-3">
          Última transacción
        </div>
        <div className="flex items-center gap-1.5 mb-2">
          <span
            className="px-1.5 py-0.5 rounded text-[9px] font-mono tracking-[.08em]"
            style={{ background: "rgba(168,85,247,.16)", color: "#C291FF" }}
          >
            SIGN
          </span>
          <span className="font-mono text-[11px] text-ink-dim">tx#A91F</span>
        </div>
        <div className="font-display font-semibold text-[20px] text-ink">+120 <span className="text-[13px] text-gold font-mono">DUOC</span></div>
        <div className="font-body text-[12px] text-ink-dim mb-3">Ayuda en el muro · Cálculo</div>
        <div className="h-px bg-white/[.07] mb-3" />
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-signal-green">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          firmada · AES-256 · verificada
        </div>
      </SideCard>

      {/* ── Center column ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[700px] mx-auto">

        {/* Badge */}
        <motion.div {...(reduced ? {} : fade(0))} className="mb-8">
          <span className="inline-flex items-center gap-[9px] px-[14px] py-[7px] border border-[rgba(168,85,247,0.30)] rounded-full font-mono text-[11px] tracking-[.16em] text-violet-hi bg-violet/[.05]">
            <span className="w-[6px] h-[6px] rounded-full bg-signal-green shadow-[0_0_8px_#3FD68B]" />
            PWA SEGURA · CLOUD-NATIVE · DUOC UC
          </span>
        </motion.div>

        {/* ── Logo — gran protagonista ── */}
        <motion.div
          className="mb-8"
          {...(reduced ? {} : rise(0.08))}
        >
          <motion.div
            animate={
              reduced
                ? {}
                : {
                    filter: [
                      "drop-shadow(0 0 24px rgba(168,85,247,.46))",
                      "drop-shadow(0 0 56px rgba(168,85,247,.88))",
                      "drop-shadow(0 0 24px rgba(168,85,247,.46))",
                    ],
                  }
            }
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Logo size={160} />
          </motion.div>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          className="font-display font-bold tracking-[-0.03em] leading-[0.96] mb-7"
          style={{ fontSize: "clamp(48px, 7.5vw, 86px)" }}
          {...(reduced ? {} : rise(0.18))}
        >
          Reconoce las<br />
          <span
            className="bg-grad-violet bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text" }}
          >
            buenas acciones
          </span>
          <br />
          con{" "}
          <span className="text-gold">tokens reales</span>.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-body text-ink-dim text-[18px] max-w-[500px] leading-relaxed mb-10"
          {...(reduced ? {} : rise(0.28))}
        >
          Cada gesto de liderazgo, colaboración e iniciativa convierte tu esfuerzo en DUOC — valor tangible que acumulas y canjeas en campus.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 items-center flex-wrap justify-center mb-8"
          {...(reduced ? {} : rise(0.38))}
        >
          <Button href="/wallet">Crear mi wallet →</Button>
          <Button variant="ghost" href="#como">Ver cómo funciona</Button>
        </motion.div>

        {/* Footnote */}
        <motion.p
          className="font-mono text-[11px] text-ink-faint tracking-[0.06em]"
          {...(reduced ? {} : fade(0.72))}
        >
          SIN COMISIONES · AES-256 · OAUTH DUOC UC · 100% GRATIS
        </motion.p>
      </div>

      {/* ── Live ledger ticker ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{
          background: "rgba(8,9,15,0.82)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          height: 44,
        }}
        {...(reduced ? {} : fade(0.9))}
      >
        <div
          className={`flex items-center gap-10 h-full px-6 ${reduced ? "flex-wrap" : "ticker-scroll"}`}
          style={{ width: reduced ? "100%" : "max-content" }}
        >
          {allTicker.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 font-mono text-[11px] whitespace-nowrap flex-shrink-0"
            >
              <span
                className="px-[6px] py-[2px] rounded text-[9px] tracking-[.08em] font-semibold"
                style={{ background: item.bg, color: item.color }}
              >
                {item.level}
              </span>
              <span className="text-ink-dim">{item.msg}</span>
              <span className="text-white/[.12] select-none">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
