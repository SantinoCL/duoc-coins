import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";

const features = [
  {
    tag: "CIFRADO AES-256",
    title: "Transacciones firmadas",
    desc: "Cada otorgamiento se firma criptográficamente: nadie puede alterar, duplicar o falsificar tus coins.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="#C291FF" strokeWidth="2.2">
        <path d="M20 7l11 4v8c0 7-5 11-11 14-6-3-11-7-11-14v-8l11-4z" />
        <path d="M15 20l4 4 7-8" />
      </svg>
    ),
  },
  {
    tag: "99.9% UPTIME",
    title: "Infraestructura cloud elástica",
    desc: "Disponible 24/7 desde cualquier dispositivo. La PWA sincroniza tu wallet en tiempo real, incluso offline.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="#C291FF" strokeWidth="2.2">
        <path d="M13 28h15a6 6 0 000-12 8 8 0 00-15 2 5 5 0 000 10z" />
      </svg>
    ),
  },
  {
    tag: "OAUTH DUOC UC",
    title: "Identidad institucional",
    desc: "Acceso con tu cuenta Duoc UC. Roles de profesor y estudiante con permisos verificados de extremo a extremo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="#C291FF" strokeWidth="2.2">
        <rect x="11" y="18" width="18" height="13" rx="3" />
        <path d="M15 18v-3a5 5 0 0110 0v3" />
        <circle cx="20" cy="24" r="1.6" fill="#C291FF" stroke="none" />
      </svg>
    ),
  },
];

const logs = [
  { time: "09:41:02", level: "SIGN", color: "rgba(168,85,247,.16)", text: "#C291FF", msg: "tx#A91F · prof.verifica → +120 DUOC" },
  { time: "09:41:02", level: "ENC",  color: "rgba(245,200,76,.14)",  text: "#F5C84C",  msg: "payload cifrado AES-256-GCM ✓" },
  { time: "09:41:03", level: "SYNC", color: "rgba(63,214,139,.14)",  text: "#3FD68B",  msg: "wallet replicado · 3 nodos cloud" },
  { time: "09:41:03", level: "AUTH", color: "rgba(63,214,139,.14)",  text: "#3FD68B",  msg: "OAuth Duoc UC · scope: student.read" },
  { time: "09:41:04", level: "HASH", color: "rgba(168,85,247,.16)", text: "#C291FF", msg: "ledger integrity 0x7c3a…ed" },
];

export default function CloudSecurity() {
  return (
    <section id="seguridad" className="py-[92px] relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(720px 480px at 78% 50%, rgba(168,85,247,0.12), transparent 70%)" }}
      />

      <div className="grid grid-cols-[0.95fr_1.05fr] gap-14 items-center max-[1000px]:grid-cols-1">
        <Reveal>
          <div>
            <span className="font-mono text-[12px] tracking-[.22em] text-violet uppercase">Cloud &amp; Security</span>
            <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.05] mt-[14px]" style={{ fontSize: "clamp(30px,4.4vw,46px)" }}>
              Tu reconocimiento, blindado en la nube.
            </h2>
            <p className="text-ink-dim text-[17px] max-w-[560px] mt-4">
              Construido como una plataforma cloud-native: cada coin que ganas vive en una infraestructura cifrada, auditable y siempre disponible.
            </p>

            <div className="mt-9 flex flex-col gap-1">
              {features.map((f, i) => (
                <Reveal key={f.tag} delay={i * 0.08}>
                  <div className="flex gap-[18px] py-[22px] border-t border-white/[.07] last:border-b last:border-white/[.07]">
                    <div className="w-[46px] h-[46px] rounded-[13px] flex-shrink-0 flex items-center justify-center bg-surface-2 border border-white/[.12]">
                      {f.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[10.5px] text-gold tracking-[.1em]">{f.tag}</span>
                      <h4 className="font-display font-semibold text-[18px] mt-0.5 mb-1.5">{f.title}</h4>
                      <p className="text-ink-dim text-[14px] m-0">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Console mock */}
        <Reveal delay={0.1}>
          <div
            className="rounded-xl overflow-hidden shadow-soft"
            style={{ background: "linear-gradient(180deg,#0e1018,#0a0b12)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="flex items-center gap-2 px-[18px] py-[14px] border-b border-white/[.07]">
              {[0,1,2].map((i) => (
                <span key={i} className="w-[11px] h-[11px] rounded-full bg-surface-3" />
              ))}
              <span className="ml-3 font-mono text-[12px] text-ink-dim">
                duoc-coins · ledger-node · región scl-1
              </span>
            </div>

            <div className="p-6 font-mono text-[13px]">
              {logs.map((l) => (
                <div key={l.level + l.time} className="flex gap-3 py-[9px] items-center">
                  <span className="text-ink-faint">{l.time}</span>
                  <span
                    className="px-2 py-[2px] rounded-[6px] text-[10px] tracking-[.08em]"
                    style={{ background: l.color, color: l.text }}
                  >
                    {l.level}
                  </span>
                  <span className="text-ink-dim">{l.msg}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-[22px] px-6 py-4 border-t border-white/[.07]">
              <div>
                <div className="font-display font-bold text-[22px] text-signal-green">
                  <CountUp target={99.9} suffix="%" />
                </div>
                <div className="font-mono text-[10.5px] text-ink-faint tracking-[.06em]">UPTIME 90D</div>
              </div>
              <div>
                <div className="font-display font-bold text-[22px] text-violet-hi">0</div>
                <div className="font-mono text-[10.5px] text-ink-faint tracking-[.06em]">BRECHAS</div>
              </div>
              <div>
                <div className="font-display font-bold text-[22px]">&lt;120ms</div>
                <div className="font-mono text-[10.5px] text-ink-faint tracking-[.06em]">LATENCIA</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
