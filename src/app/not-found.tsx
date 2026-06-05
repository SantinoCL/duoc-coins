import Link from "next/link";
import Logo from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <Logo size={48} />
      <h1 className="font-display font-bold text-[72px] leading-none mt-6 bg-grad-violet bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text" }}>
        404
      </h1>
      <p className="font-display font-semibold text-[22px] mt-3">Página no encontrada</p>
      <p className="font-body text-ink-dim text-[15px] mt-2 max-w-[320px]">
        Esta ruta no existe. Puede que haya sido movida o eliminada.
      </p>
      <div className="flex gap-3 mt-8 flex-wrap justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-display font-semibold text-[14px] text-white px-5 py-[11px] rounded-full shadow-glow-violet"
          style={{ background: "linear-gradient(135deg, #C291FF 0%, #A855F7 45%, #7C3AED 100%)" }}
        >
          Ir al inicio
        </Link>
        <Link
          href="/wallet"
          className="inline-flex items-center gap-2 font-display font-semibold text-[14px] text-ink px-5 py-[11px] rounded-full border border-white/[.12] hover:border-violet transition-colors"
        >
          Abrir Wallet
        </Link>
      </div>
    </div>
  );
}
