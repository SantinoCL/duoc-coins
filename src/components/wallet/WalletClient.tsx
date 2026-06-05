"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RecognitionSheet from "./RecognitionSheet";
import Ico from "@/components/icons/Ico";

type IcoName = Parameters<typeof Ico>[0]["name"];

const actions: { icon: IcoName; label: string; action?: string; href?: string }[] = [
  { icon: "hand",  label: "Reconocer", action: "recognition" },
  { icon: "send",  label: "Enviar" },
  { icon: "bag",   label: "Canjear",   href: "/market" },
  { icon: "nodes", label: "Muro",      href: "/muro" },
];

export default function WalletClient() {
  const router = useRouter();
  const [recognitionOpen, setRecognitionOpen] = useState(false);

  function handleAction(a: typeof actions[0]) {
    if (a.href) return router.push(a.href);
    if (a.action === "recognition") return setRecognitionOpen(true);
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="font-body text-[13px] text-ink-dim">Hola,</p>
          <h1 className="font-display font-bold text-[22px]">Camila Reyes</h1>
        </div>
        <button
          type="button"
          aria-label="Notificaciones"
          className="w-10 h-10 rounded-full bg-surface-2 border border-white/[.07] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60"
        >
          <Ico name="bell" size={20} color="#A3AABF" />
        </button>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-4 gap-3 mb-1">
        {actions.map((a) => (
          <button
            key={a.label}
            type="button"
            onClick={() => handleAction(a)}
            className="flex flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60 rounded-lg"
          >
            <span
              className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center transition-colors hover:brightness-125"
              style={{ background: "#2A1B45", border: "1px solid rgba(168,85,247,0.25)" }}
            >
              <Ico name={a.icon} size={21} color="#C291FF" />
            </span>
            <span className="font-body text-[12px] text-ink-dim">{a.label}</span>
          </button>
        ))}
      </div>

      <RecognitionSheet open={recognitionOpen} onClose={() => setRecognitionOpen(false)} />
    </>
  );
}
