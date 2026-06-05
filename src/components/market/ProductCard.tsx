import CoinMark from "@/components/brand/CoinMark";
import Ico from "@/components/icons/Ico";
import type { Product } from "@/types";

type IcoName = Parameters<typeof Ico>[0]["name"];

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  return (
    <div className="bg-surface border border-white/[.07] rounded-lg overflow-hidden transition-all duration-200 hover:border-[rgba(168,85,247,0.30)] hover:-translate-y-[2px]">
      <div
        className="h-[110px] relative flex items-center justify-center"
        style={{ background: `radial-gradient(circle at 50% 40%, ${product.tone}22, transparent 70%)` }}
      >
        <span
          className="w-[52px] h-[52px] rounded-xl flex items-center justify-center"
          style={{ background: `${product.tone}18`, border: `1px solid ${product.tone}55` }}
        >
          <Ico name={(product.icon as IcoName) ?? "coin"} size={24} color={product.tone} />
        </span>
      </div>
      <div className="p-3">
        <div className="font-mono text-[10px] tracking-[.12em] text-violet uppercase">
          {product.category}
        </div>
        <div className="font-display font-semibold text-[14px] mt-1 mb-2 leading-tight">
          {product.name}
        </div>
        <button
          type="button"
          onClick={() => onBuy(product)}
          className="flex items-center gap-1.5 w-full justify-center py-2 rounded-md font-mono font-bold text-[13px] text-bg font-tabular transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 hover:brightness-110"
          style={{ background: "linear-gradient(135deg, #FFE29A 0%, #F5C84C 50%, #D9A52C 100%)" }}
        >
          <CoinMark size={13} />
          {product.priceCoins}
        </button>
      </div>
    </div>
  );
}
