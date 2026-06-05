import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-[92px]">
      <div
        className="relative rounded-xl overflow-hidden px-10 py-[72px] text-center border border-[rgba(168,85,247,0.30)]"
        style={{ background: "linear-gradient(180deg, #140d24, #0a0b12)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(600px 300px at 50% 0%, rgba(168,85,247,.25), transparent 70%)" }}
        />
        <div className="relative z-10">
          <span className="font-mono text-[12px] tracking-[.22em] text-violet uppercase">Empieza hoy</span>
          <h2
            className="font-display font-bold tracking-[-0.02em] leading-[1.05] mt-[14px] max-w-[640px] mx-auto"
            style={{ fontSize: "clamp(30px,4.4vw,46px)" }}
          >
            Que tus buenas acciones<br />valgan algo real.
          </h2>
          <p className="text-ink-dim text-[17px] max-w-[560px] mt-[18px] mx-auto">
            Activa tu wallet con tu cuenta Duoc UC y empieza a reconocer — y a ser reconocido.
          </p>
          <div className="flex gap-[14px] justify-center mt-8 flex-wrap">
            <Button href="/wallet">Abrir mi Wallet</Button>
            <Button variant="ghost" href="/login">Iniciar sesión</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
