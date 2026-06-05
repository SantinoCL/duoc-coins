"use client";

import { useState } from "react";
import CategoryChips from "@/components/market/CategoryChips";
import ProductCard from "@/components/market/ProductCard";
import RedeemSheet from "@/components/market/RedeemSheet";
import CoinMark from "@/components/brand/CoinMark";
import Ico from "@/components/icons/Ico";
import { formatCoins } from "@/lib/format";
import type { Product, ProductCategory } from "@/types";

const BALANCE = 1250;

const products: Product[] = [
  { id: "1", category: "Membresías",  name: "Membresía Lab + Cloud",  priceCoins: 800, icon: "shield", tone: "#A855F7" },
  { id: "2", category: "Cafetería",   name: "Combo cafetería",         priceCoins: 150, icon: "coin",   tone: "#F5C84C" },
  { id: "3", category: "Impresiones", name: "Pack 50 impresiones",     priceCoins: 200, icon: "print",  tone: "#3FD68B" },
  { id: "4", category: "Membresías",  name: "Acceso sala 24/7",        priceCoins: 500, icon: "bolt",   tone: "#A855F7" },
  { id: "5", category: "Cafetería",   name: "Café + snack",            priceCoins: 90,  icon: "coin",   tone: "#F5C84C" },
  { id: "6", category: "Impresiones", name: "Impresión a color",       priceCoins: 120, icon: "print",  tone: "#3FD68B" },
];

const CATEGORIES: ProductCategory[] = ["Todos", "Membresías", "Cafetería", "Impresiones"];

export default function MarketPage() {
  const [cat, setCat] = useState<ProductCategory>("Todos");
  const [confirm, setConfirm] = useState<Product | null>(null);
  const [search, setSearch] = useState("");

  const shown = products.filter(
    (p) =>
      (cat === "Todos" || p.category === cat) &&
      (!search || p.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="px-5 pt-6 pb-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="font-display font-bold text-[26px]">Marketplace</h1>
          <span
            className="flex items-center gap-1 px-3 py-1.5 rounded-full font-mono font-bold text-[13px] text-bg font-tabular"
            style={{ background: "linear-gradient(135deg, #FFE29A 0%, #F5C84C 50%, #D9A52C 100%)" }}
          >
            <CoinMark size={14} />
            {formatCoins(BALANCE)}
          </span>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-md"
          style={{ background: "#12141F", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <Ico name="search" size={17} color="#646B82" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar beneficios…"
            className="flex-1 bg-transparent font-body text-[14px] text-ink placeholder-ink-faint focus:outline-none"
          />
        </div>

        <CategoryChips categories={CATEGORIES} active={cat} onChange={setCat} />
      </div>

      <div className="px-5 pb-24">
        {shown.length === 0 ? (
          <div className="text-center text-ink-dim text-[14px] mt-8">No hay productos en esta categoría.</div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {shown.map((p) => (
              <ProductCard key={p.id} product={p} onBuy={setConfirm} />
            ))}
          </div>
        )}
      </div>

      <RedeemSheet
        product={confirm}
        balance={BALANCE}
        onClose={() => setConfirm(null)}
        onConfirm={() => setConfirm(null)}
      />
    </div>
  );
}
