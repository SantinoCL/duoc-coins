"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AppError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center gap-4">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(255,107,107,0.12)", border: "1px solid rgba(255,107,107,0.35)" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>

      <div>
        <h2 className="font-display font-bold text-[20px]">Algo salió mal</h2>
        <p className="font-body text-[14px] text-ink-dim mt-1 max-w-[280px]">
          {error.message ?? "Error inesperado. Intenta de nuevo."}
        </p>
      </div>

      <button
        type="button"
        onClick={reset}
        className="font-display font-semibold text-[14px] text-white px-5 py-2.5 rounded-full shadow-glow-violet"
        style={{ background: "linear-gradient(135deg, #C291FF 0%, #A855F7 45%, #7C3AED 100%)" }}
      >
        Reintentar
      </button>
    </div>
  );
}
