import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  violet?: boolean;
}

export default function Card({ children, className = "", hover = false, violet = false }: CardProps) {
  return (
    <div
      className={[
        "bg-surface border rounded-lg p-6",
        violet ? "border-[rgba(168,85,247,0.30)]" : "border-white/[.07]",
        hover ? "transition-all duration-250 hover:-translate-y-[3px] hover:border-[rgba(168,85,247,0.30)]" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
