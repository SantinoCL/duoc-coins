"use client";

import { useState } from "react";
import Sheet from "@/components/ui/Sheet";
import Ico from "@/components/icons/Ico";
import CoinMark from "@/components/brand/CoinMark";

const REASONS = [
  { id: "liderazgo",  label: "Liderazgo",   icon: "star" as const },
  { id: "iniciativa", label: "Iniciativa",   icon: "bolt" as const },
  { id: "ayuda",      label: "Ayuda",        icon: "hand" as const },
  { id: "muro",       label: "Muro",         icon: "nodes" as const },
];

interface RecognitionSheetProps {
  open: boolean;
  onClose: () => void;
}

export default function RecognitionSheet({ open, onClose }: RecognitionSheetProps) {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("liderazgo");
  const [amount, setAmount] = useState(50);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/recognitions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toEmail: email, amount, reason }),
      });
      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "Error al otorgar");
      }
      setDone(true);
      setTimeout(() => {
        setDone(false);
        setEmail("");
        setAmount(50);
        setReason("liderazgo");
        onClose();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Sheet open={open} onClose={onClose}>
      {done ? (
        <div className="flex flex-col items-center gap-4 py-4 text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-signal-green/10 border border-signal-green/30">
            <Ico name="check" size={26} color="#3FD68B" />
          </div>
          <div>
            <h2 className="font-display font-bold text-[20px]">¡Reconocimiento enviado!</h2>
            <p className="font-body text-[14px] text-ink-dim mt-1">
              Se otorgaron <span className="text-gold font-bold">{amount} DUOC</span> correctamente.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-violet-ink border border-violet/30 flex items-center justify-center flex-shrink-0">
              <CoinMark size={20} />
            </div>
            <div>
              <h2 className="font-display font-bold text-[18px]">Otorgar reconocimiento</h2>
              <p className="font-body text-[12px] text-ink-dim">Solo profesores pueden otorgar coins</p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] tracking-[.14em] text-ink-faint uppercase">Email del estudiante</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="a.apellido@duocuc.cl"
              className="w-full px-4 py-3 rounded-md bg-surface border border-white/[.12] font-body text-[14px] text-ink placeholder-ink-faint focus:outline-none focus:border-violet/60 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] tracking-[.14em] text-ink-faint uppercase">Motivo</label>
            <div className="grid grid-cols-4 gap-2">
              {REASONS.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setReason(r.id)}
                  className="flex flex-col items-center gap-1.5 py-3 rounded-md transition-all duration-150 focus-visible:outline-none"
                  style={{
                    background: reason === r.id ? "#2A1B45" : "#12141F",
                    border: `1px solid ${reason === r.id ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.07)"}`,
                  }}
                >
                  <Ico name={r.icon} size={18} color={reason === r.id ? "#C291FF" : "#646B82"} />
                  <span className="font-body text-[10px]" style={{ color: reason === r.id ? "#C291FF" : "#646B82" }}>
                    {r.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] tracking-[.14em] text-ink-faint uppercase">
              Cantidad — <span className="text-gold">{amount} DUOC</span>
            </label>
            <input
              type="range"
              min={10}
              max={500}
              step={10}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-violet"
            />
            <div className="flex justify-between font-mono text-[10px] text-ink-faint">
              <span>10</span><span>500</span>
            </div>
          </div>

          {error && (
            <p className="font-body text-[13px] text-signal-red bg-signal-red/10 border border-signal-red/25 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !email}
            className="flex items-center gap-2 w-full justify-center py-3.5 rounded-full font-display font-semibold text-[15px] text-white shadow-glow-violet disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            style={{ background: "linear-gradient(135deg, #C291FF 0%, #A855F7 45%, #7C3AED 100%)" }}
          >
            {loading ? "Procesando…" : <>Otorgar <CoinMark size={16} /> {amount} DUOC</>}
          </button>
        </form>
      )}
    </Sheet>
  );
}
