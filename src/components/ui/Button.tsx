import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "gold";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md";
}

const base =
  "inline-flex items-center gap-2 font-display font-semibold rounded-full cursor-pointer border-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-grad-violet text-white shadow-glow-violet hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(168,85,247,.5),0_14px_50px_-8px_rgba(168,85,247,.7)] px-5 py-[11px] text-sm",
  ghost:
    "bg-transparent text-ink border border-white/[.12] hover:border-violet px-5 py-[11px] text-sm",
  gold:
    "bg-grad-coin text-bg font-bold px-4 py-2 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
  size,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${size === "sm" ? "px-4 py-2 text-xs" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
