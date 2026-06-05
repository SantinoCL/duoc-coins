import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "violet" | "gold" | "green";
  className?: string;
}

const variants = {
  violet: "bg-violet/[.06] border-[rgba(168,85,247,0.30)] text-violet-hi",
  gold: "bg-gold/[.06] border-[rgba(245,200,76,0.30)] text-gold-hi",
  green: "bg-signal-green/[.06] border-[rgba(63,214,139,0.30)] text-signal-green",
};

export default function Badge({ children, variant = "violet", className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 px-3 py-[7px] rounded-full border font-mono text-[11.5px] tracking-[.12em]",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
