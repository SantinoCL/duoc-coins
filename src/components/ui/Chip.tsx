import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Chip({ children, active = false, onClick, className = "" }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "font-mono text-[11px] tracking-[0.1em] px-4 py-2 rounded-full border transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60",
        active
          ? "bg-violet/20 border-[rgba(168,85,247,0.5)] text-violet-hi"
          : "bg-transparent border-white/[.12] text-ink-faint hover:border-violet/40 hover:text-ink-dim",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
