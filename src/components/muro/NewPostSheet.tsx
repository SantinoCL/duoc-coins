"use client";

import { useState } from "react";
import Sheet from "@/components/ui/Sheet";
import Ico from "@/components/icons/Ico";

const SUBJECTS = ["BASES DE DATOS", "CLOUD · AWS", "PROGRAMACIÓN", "REDES", "CÁLCULO II", "INGLÉS TÉCNICO"];

interface NewPostSheetProps {
  open: boolean;
  mode: "need" | "offer";
  onClose: () => void;
  onCreated?: () => void;
}

export default function NewPostSheet({ open, mode, onClose, onCreated }: NewPostSheetProps) {
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [reward, setReward] = useState(50);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/muro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, subject, title, body, reward: mode === "need" ? reward : 0 }),
      });
      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "Error al publicar");
      }
      setTitle("");
      setBody("");
      setReward(50);
      onCreated?.();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Sheet open={open} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "#2A1B45", border: "1px solid rgba(168,85,247,0.30)" }}
          >
            <Ico name={mode === "need" ? "hand" : "star"} size={20} color="#C291FF" />
          </div>
          <div>
            <h2 className="font-display font-bold text-[18px]">
              {mode === "need" ? "Pedir ayuda" : "Ofrecer ayuda"}
            </h2>
            <p className="font-body text-[12px] text-ink-dim">
              {mode === "need" ? "Describe qué necesitas y cuántos coins ofreces" : "Cuéntanos en qué puedes ayudar"}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[11px] tracking-[.14em] text-ink-faint uppercase">Materia</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-surface border border-white/[.12] font-body text-[14px] text-ink focus:outline-none focus:border-violet/60 transition-colors appearance-none"
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s} style={{ background: "#12141F" }}>{s}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[11px] tracking-[.14em] text-ink-faint uppercase">Título</label>
          <input
            type="text"
            required
            maxLength={80}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={mode === "need" ? "¿Qué necesitas resolver?" : "¿En qué puedes ayudar?"}
            className="w-full px-4 py-3 rounded-md bg-surface border border-white/[.12] font-body text-[14px] text-ink placeholder-ink-faint focus:outline-none focus:border-violet/60 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[11px] tracking-[.14em] text-ink-faint uppercase">Contexto</label>
          <textarea
            required
            maxLength={300}
            rows={3}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Más detalles sobre lo que necesitas o puedes ofrecer…"
            className="w-full px-4 py-3 rounded-md bg-surface border border-white/[.12] font-body text-[14px] text-ink placeholder-ink-faint focus:outline-none focus:border-violet/60 transition-colors resize-none"
          />
        </div>

        {mode === "need" && (
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] tracking-[.14em] text-ink-faint uppercase">
              Recompensa — <span className="text-gold">{reward} DUOC</span>
            </label>
            <input
              type="range"
              min={10}
              max={300}
              step={10}
              value={reward}
              onChange={(e) => setReward(Number(e.target.value))}
              className="w-full accent-violet"
            />
          </div>
        )}

        {error && (
          <p className="font-body text-[13px] text-signal-red bg-signal-red/10 border border-signal-red/25 rounded-md px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !title || !body}
          className="flex items-center gap-2 w-full justify-center py-3.5 rounded-full font-display font-semibold text-[15px] text-white shadow-glow-violet disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          style={{ background: "linear-gradient(135deg, #C291FF 0%, #A855F7 45%, #7C3AED 100%)" }}
        >
          {loading ? "Publicando…" : "Publicar"}
        </button>
      </form>
    </Sheet>
  );
}
