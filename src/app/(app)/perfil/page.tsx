import Logo from "@/components/brand/Logo";
import CoinMark from "@/components/brand/CoinMark";
import { formatCoins } from "@/lib/format";

const mockProfile = {
  name: "Camila Reyes",
  email: "c.reyes@duocuc.cl",
  role: "student" as const,
  balance: 1250,
  totalEarned: 1570,
  recognitions: 12,
};

export const metadata = { title: "Perfil" };

export default function PerfilPage() {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-24">
      <div className="px-5 pt-6 pb-3">
        <h1 className="font-display font-bold text-[26px]">Perfil</h1>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Avatar card */}
        <div className="bg-surface border border-white/[.07] rounded-lg p-5 flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #2A1B45, #12141F)", border: "1px solid rgba(168,85,247,0.35)" }}
          >
            <Logo size={30} />
          </div>
          <div className="min-w-0">
            <div className="font-display font-bold text-[18px] truncate">{mockProfile.name}</div>
            <div className="font-body text-[13px] text-ink-dim truncate">{mockProfile.email}</div>
            <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded-md font-mono text-[10px] tracking-[.1em] text-violet-hi bg-violet-ink border border-violet/25 uppercase">
              {mockProfile.role === "student" ? "Estudiante" : "Profesor"}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Balance",        value: formatCoins(mockProfile.balance),      unit: "DUOC", gold: true },
            { label: "Total ganado",   value: formatCoins(mockProfile.totalEarned),  unit: "DUOC", gold: false },
            { label: "Reconocimientos",value: String(mockProfile.recognitions),       unit: "",     gold: false },
          ].map((s) => (
            <div key={s.label} className="bg-surface border border-white/[.07] rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-1">
                {s.gold && <CoinMark size={14} />}
                <span
                  className="font-mono font-bold text-[18px] font-tabular"
                  style={{ color: s.gold ? "#F5C84C" : "#F3F5FB" }}
                >
                  {s.value}
                </span>
              </div>
              {s.unit && <div className="font-mono text-[9px] tracking-[.1em] text-ink-faint">{s.unit}</div>}
              <div className="font-body text-[11px] text-ink-dim mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="bg-surface border border-white/[.07] rounded-lg divide-y divide-white/[.07]">
          {[
            "Historial completo",
            "Notificaciones",
            "Seguridad y privacidad",
            "Acerca de Duoc Coins",
          ].map((item) => (
            <button
              key={item}
              type="button"
              className="flex items-center justify-between w-full px-4 py-4 font-body text-[14px] text-ink hover:bg-surface-elevated transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60 first:rounded-t-lg last:rounded-b-lg"
            >
              {item}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#646B82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          ))}
        </div>

        <form action="/api/auth/signout" method="POST">
          <button
            type="submit"
            className="w-full py-3 rounded-full font-display font-semibold text-[14px] text-signal-red border border-signal-red/30 hover:bg-signal-red/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red/40"
          >
            Cerrar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
