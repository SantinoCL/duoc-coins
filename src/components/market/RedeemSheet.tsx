"use client";

import Sheet from "@/components/ui/Sheet";
import CoinMark from "@/components/brand/CoinMark";
import Ico from "@/components/icons/Ico";
import { formatCoins } from "@/lib/format";
import type { Product } from "@/types";

interface RedeemSheetProps {
  product: Product | null;
  balance: number;
  onClose: () => void;
  onConfirm: (product: Product) => void;
}

export default function RedeemSheet({ product, balance, onClose, onConfirm }: RedeemSheetProps) {
  if (!product) return null;
  const afterBalance = balance - product.priceCoins;

  return (
    <Sheet open={!!product} onClose={onClose}>
      <div className="flex flex-col items-center gap-4 text-center">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(245,200,76,0.12)", border: "1px solid rgba(245,200,76,0.35)" }}
        >
          <CoinMark size={34} />
        </div>

        <div>
          <h2 className="font-display font-bold text-[20px]">Confirmar canje</h2>
          <p className="font-body text-[14px] text-ink-dim mt-1">{product.name}</p>
        </div>

        <div className="flex items-center gap-2 font-mono font-bold text-gold text-[28px] font-tabular">
          <CoinMark size={22} />
          −{product.priceCoins} <em className="font-mono text-[16px] text-ink-dim not-italic">DUOC</em>
        </div>

        <div className="w-full bg-surface rounded-lg px-4 py-3 text-[13px] text-ink-dim font-body">
          Balance tras canje:{" "}
          <b className="text-ink font-mono font-bold font-tabular">
            {formatCoins(afterBalance)}
          </b>{" "}
          DUOC
        </div>

        <button
          type="button"
          onClick={() => onConfirm(product)}
          className="flex items-center gap-2 w-full justify-center py-3.5 px-6 rounded-full font-display font-semibold text-[15px] text-white shadow-glow-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60"
          style={{ background: "linear-gradient(135deg, #C291FF 0%, #A855F7 45%, #7C3AED 100%)" }}
        >
          <Ico name="check" size={18} color="#fff" />
          Confirmar y canjear
        </button>

        <button
          type="button"
          onClick={onClose}
          className="font-body text-[14px] text-ink-dim hover:text-ink transition-colors focus-visible:outline-none"
        >
          Cancelar
        </button>
      </div>
    </Sheet>
  );
}
