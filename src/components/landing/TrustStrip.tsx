import CountUp from "@/components/motion/CountUp";

export default function TrustStrip() {
  return (
    <div className="border-t border-b border-white/[.07] py-[26px] mt-[30px]">
      <div className="mx-auto max-w-container px-8 flex items-center gap-10 justify-between flex-wrap">
        <div className="flex items-center gap-[10px] font-mono text-[12px] text-ink-faint tracking-[.1em]">
          <CountUp
            target={12.4}
            suffix="K"
            className="text-ink font-display text-[22px] tracking-normal"
          />
          coins emitidos
        </div>

        <div className="flex items-center gap-[10px] font-mono text-[12px] text-ink-faint tracking-[.1em]">
          <CountUp
            target={98}
            suffix="%"
            className="text-gold font-display text-[22px] tracking-normal"
          />
          en uptime cloud
        </div>

        <div className="flex items-center gap-[10px] font-mono text-[12px] text-ink-faint tracking-[.1em]">
          <CountUp
            target={340}
            className="text-ink font-display text-[22px] tracking-normal"
          />
          reconocimientos / sem
        </div>

        <div className="font-mono text-[12px] text-ink-faint tracking-[.1em]">
          AES-256 · OAuth Duoc
        </div>

        <div className="font-mono text-[12px] text-ink-faint tracking-[.1em]">
          PWA · iOS · Android
        </div>
      </div>
    </div>
  );
}
