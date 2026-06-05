"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Ico from "@/components/icons/Ico";

const tabs = [
  { id: "wallet", label: "Wallet", href: "/wallet", icon: "wallet" as const },
  { id: "muro",   label: "Muro",   href: "/muro",   icon: "nodes" as const },
  { id: "market", label: "Market", href: "/market", icon: "bag" as const },
  { id: "perfil", label: "Perfil", href: "/perfil", icon: "user" as const },
];

export default function TabBar() {
  const path = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center"
      style={{
        background: "rgba(8,9,15,0.92)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="flex w-full max-w-[430px]">
        {tabs.map((t) => {
          const active = path.startsWith(t.href);
          return (
            <Link
              key={t.id}
              href={t.href}
              className="flex flex-1 flex-col items-center gap-1 py-3 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet/50"
            >
              <Ico name={t.icon} size={23} color={active ? "#C291FF" : "#646B82"} sw={active ? 2.2 : 2} />
              <span
                className="font-body text-[10px] tracking-wide"
                style={{ color: active ? "#C291FF" : "#646B82" }}
              >
                {t.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
