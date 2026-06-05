import CoinMark from "@/components/brand/CoinMark";
import Ico from "@/components/icons/Ico";
import { formatCoins } from "@/lib/format";

interface BalanceCardProps {
  balance: number;
  weekDelta: number;
  cardSuffix?: string;
}

export default function BalanceCard({ balance, weekDelta, cardSuffix = "7C3A" }: BalanceCardProps) {
  return (
    <div
      className="relative rounded-lg p-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0e2e 0%, #0e1020 100%)",
        border: "1px solid rgba(168,85,247,0.35)",
        boxShadow: "0 0 0 1px rgba(168,85,247,0.12), 0 24px 60px -16px rgba(168,85,247,0.35)",
      }}
    >
      {/* Glow corner */}
      <div
        className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)" }}
      />

      <div className="relative flex items-center justify-between mb-5">
        <span className="font-mono text-[10.5px] tracking-[.22em] text-ink-faint uppercase">
          Balance Disponible
        </span>
        <Ico name="shield" size={18} color="#C291FF" />
      </div>

      <div className="relative flex items-center gap-3 mb-5">
        <CoinMark size={30} />
        <span className="font-display font-bold text-gold font-tabular" style={{ fontSize: 44, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
          {formatCoins(balance)}
        </span>
        <em className="font-mono text-[14px] text-ink-dim not-italic self-end mb-1">DUOC</em>
      </div>

      <div className="relative flex items-center justify-between">
        <span className="font-body text-[13px] text-signal-green font-medium">
          ▲ +{formatCoins(weekDelta)} esta semana
        </span>
        <span className="font-mono text-[11px] text-ink-faint">
          •••• {cardSuffix} · cifrado
        </span>
      </div>
    </div>
  );
}
