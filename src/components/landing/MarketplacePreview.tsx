import Reveal from "@/components/motion/Reveal";
import Logo from "@/components/brand/Logo";

const products = [
  {
    cat: "MEMBRESÍAS",
    name: "Membresía Lab + Cloud",
    price: 800,
    bg: "radial-gradient(circle at 50% 40%, rgba(168,85,247,.18), transparent 70%)",
    label: "[ membresía premium ]",
  },
  {
    cat: "CAFETERÍA",
    name: "Combo cafetería",
    price: 150,
    bg: "radial-gradient(circle at 50% 40%, rgba(245,200,76,.16), transparent 70%)",
    label: "[ café / snack ]",
  },
  {
    cat: "SERVICIOS",
    name: "Pack 50 impresiones",
    price: 200,
    bg: "radial-gradient(circle at 50% 40%, rgba(63,214,139,.12), transparent 70%)",
    label: "[ impresiones ]",
  },
];

export default function MarketplacePreview() {
  return (
    <section id="marketplace" className="py-[92px]">
      <div className="text-center">
        <span className="font-mono text-[12px] tracking-[.22em] text-violet uppercase">Marketplace</span>
        <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.05] mt-[14px]" style={{ fontSize: "clamp(30px,4.4vw,46px)" }}>
          Canjea tus coins por lo que importa
        </h2>
        <p className="text-ink-dim text-[17px] max-w-[560px] mt-4 mx-auto">
          Beneficios reales para tu día a día en el campus. Catálogo de ejemplo — en expansión.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-[52px] max-[720px]:grid-cols-1">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className="group bg-surface border border-white/[.07] rounded-lg overflow-hidden transition-all duration-250 hover:border-[rgba(168,85,247,0.30)] hover:-translate-y-[3px]">
              <div
                className="h-[150px] relative flex items-center justify-center overflow-hidden"
                style={{ background: p.bg }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 12px, transparent 12px 24px)",
                  }}
                />
                <span className="relative font-mono text-[11px] text-ink-faint tracking-[.1em] border border-dashed border-white/[.12] px-3 py-1.5 rounded-lg">
                  {p.label}
                </span>
              </div>
              <div className="p-[18px_20px]">
                <div className="font-mono text-[10.5px] text-violet tracking-[.12em]">{p.cat}</div>
                <h4 className="font-display font-semibold text-[18px] my-2 mb-[14px]">{p.name}</h4>
                <div className="flex items-center gap-2 font-mono font-bold text-gold text-[16px] font-tabular">
                  <Logo size={18} />
                  {p.price} DUOC
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
