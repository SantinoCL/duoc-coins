"use client";

import { useState } from "react";
import Segmented from "@/components/muro/Segmented";
import HelpCard from "@/components/muro/HelpCard";
import NewPostSheet from "@/components/muro/NewPostSheet";
import Ico from "@/components/icons/Ico";
import type { HelpPost } from "@/types";

const needPosts: HelpPost[] = [
  { id: "1", mode: "need", subject: "BASES DE DATOS", title: "Dudas con normalización 3FN", body: "Para el control del viernes", reward: 90,  authorName: "Anon", createdAt: "2026-06-04" },
  { id: "2", mode: "need", subject: "CLOUD · AWS",    title: "Configurar bucket S3 + IAM",  body: "Proyecto semestral",       reward: 140, authorName: "Anon", createdAt: "2026-06-03" },
  { id: "3", mode: "need", subject: "CÁLCULO II",      title: "Integrales por partes",        body: "Tengo 2 ejercicios",       reward: 70,  authorName: "Anon", createdAt: "2026-06-02" },
];

const offerPosts: HelpPost[] = [
  { id: "4", mode: "offer", subject: "PROGRAMACIÓN", title: "Ayudo con Python & POO", body: "Disponible mar/jue", reward: 0, authorName: "Anon", createdAt: "2026-06-01" },
  { id: "5", mode: "offer", subject: "REDES",         title: "Subnetting y VLANs",    body: "Manejo CCNA 1-2",   reward: 0, authorName: "Anon", createdAt: "2026-05-31" },
];

const segOptions = [
  { id: "necesito", label: "Necesito ayuda" },
  { id: "ofrezco",  label: "Ofrezco ayuda" },
];

export default function MuroPage() {
  const [mode, setMode] = useState<"necesito" | "ofrezco">("necesito");
  const [sheetOpen, setSheetOpen] = useState(false);
  const posts = mode === "necesito" ? needPosts : offerPosts;

  return (
    <>
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="px-5 pt-6 pb-3">
          <h1 className="font-display font-bold text-[26px]">Muro de Ayuda</h1>
          <p className="font-body text-[13px] text-ink-dim mt-0.5">
            Ofrece lo que dominas, pide lo que necesitas.
          </p>
          <Segmented
            options={segOptions}
            value={mode}
            onChange={(v) => setMode(v as "necesito" | "ofrezco")}
          />
        </div>

        <div className="px-5 pb-28 flex flex-col gap-3">
          {posts.map((p) => (
            <HelpCard key={p.id} post={p} mode={mode === "necesito" ? "need" : "offer"} />
          ))}
        </div>

        {/* FAB */}
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="fixed bottom-[88px] left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-3 rounded-full font-display font-semibold text-[14px] text-white shadow-glow-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60 transition-all hover:-translate-y-0.5 hover:-translate-x-1/2 active:scale-95"
          style={{ background: "linear-gradient(135deg, #C291FF 0%, #A855F7 45%, #7C3AED 100%)" }}
          aria-label="Nueva publicación"
        >
          <Ico name="plus" size={20} color="#fff" />
          Nueva publicación
        </button>
      </div>

      <NewPostSheet
        open={sheetOpen}
        mode={mode === "necesito" ? "need" : "offer"}
        onClose={() => setSheetOpen(false)}
      />
    </>
  );
}
