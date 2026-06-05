"use client";

import { useRouter } from "next/navigation";
import Ico from "@/components/icons/Ico";

type IcoName = Parameters<typeof Ico>[0]["name"];

const actions: { icon: IcoName; label: string; href?: string }[] = [
  { icon: "hand",  label: "Reconocer" },
  { icon: "send",  label: "Enviar" },
  { icon: "bag",   label: "Canjear",  href: "/market" },
  { icon: "nodes", label: "Muro",     href: "/muro" },
];

export default function QuickActions() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-4 gap-3 my-4">
      {actions.map((a) => (
        <button
          key={a.label}
          type="button"
          onClick={() => a.href && router.push(a.href)}
          className="flex flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60 rounded-lg"
        >
          <span
            className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center transition-colors hover:bg-violet-ink/80"
            style={{ background: "#2A1B45", border: "1px solid rgba(168,85,247,0.25)" }}
          >
            <Ico name={a.icon} size={21} color="#C291FF" />
          </span>
          <span className="font-body text-[12px] text-ink-dim">{a.label}</span>
        </button>
      ))}
    </div>
  );
}
