import Reveal from "@/components/motion/Reveal";

const steps = [
  {
    n: "PASO 01",
    title: "Actúa",
    desc: "Ayuda a un compañero, lidera tu equipo o resuelve una duda en el muro de ayuda según las materias que mejor manejas.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 40 40" fill="none" stroke="#C291FF" strokeWidth="2.4">
        <path d="M8 22l5-5 6 3 7-7a2.5 2.5 0 014 3l-9 11a5 5 0 01-4 2H8z" />
      </svg>
    ),
  },
  {
    n: "PASO 02",
    title: "Recibe el reconocimiento",
    desc: "Un profesor o un par valida la acción y otorga los coins. Cada transacción queda firmada y registrada en tu wallet.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 40 40" fill="none" stroke="#C291FF" strokeWidth="2.4">
        <circle cx="20" cy="20" r="13" />
        <path d="M14 20l4 4 8-9" />
      </svg>
    ),
  },
  {
    n: "PASO 03",
    title: "Canjea",
    desc: "Usa tu balance en el Marketplace: membresías, cafetería, impresiones y más beneficios para tu vida académica.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 40 40" fill="none" stroke="#C291FF" strokeWidth="2.4">
        <circle cx="20" cy="20" r="13" />
        <path d="M20 13v14M16 17h6a2.5 2.5 0 010 5h-4a2.5 2.5 0 000 5h6" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="como" className="py-[92px]">
      <div className="text-center">
        <span className="font-mono text-[12px] tracking-[.22em] text-violet uppercase">El ciclo de valor</span>
        <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.05] mt-[14px]" style={{ fontSize: "clamp(30px,4.4vw,46px)" }}>
          Ganar es tan simple como ayudar
        </h2>
        <p className="text-ink-dim text-[17px] max-w-[560px] mt-4 mx-auto">
          Los coins se otorgan de forma activa: por tu iniciativa, tu liderazgo o tu aporte en el muro de ayuda.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-[52px] max-[720px]:grid-cols-1">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="group bg-surface border border-white/[.07] rounded-lg p-[30px] relative overflow-hidden transition-all duration-250 hover:border-[rgba(168,85,247,0.30)] hover:-translate-y-[3px]">
              <div className="font-mono text-[12px] text-violet tracking-[.14em]">{s.n}</div>
              <div className="w-[54px] h-[54px] rounded-[15px] bg-violet-ink border border-[rgba(168,85,247,0.30)] flex items-center justify-center my-[18px]">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-[21px] mb-2">{s.title}</h3>
              <p className="text-ink-dim text-[14.5px] m-0">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
