import Ico from "@/components/icons/Ico";
import type { TxRow as TxRowType } from "@/types";

type IcoName = Parameters<typeof Ico>[0]["name"];

export default function TxRow({ tx }: { tx: TxRowType }) {
  const isOut = tx.kind === "out";
  return (
    <div className="flex items-center gap-3 py-[13px] border-b border-white/[.07] last:border-0">
      <span
        className="w-[38px] h-[38px] rounded-md flex items-center justify-center flex-shrink-0"
        style={{
          background: isOut ? "rgba(245,200,76,0.12)" : "rgba(168,85,247,0.12)",
          border: `1px solid ${isOut ? "rgba(245,200,76,0.25)" : "rgba(168,85,247,0.25)"}`,
        }}
      >
        <Ico
          name={(tx.icon as IcoName) ?? "coin"}
          size={18}
          color={isOut ? "#F5C84C" : "#C291FF"}
        />
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-body font-medium text-[14px] text-ink truncate">{tx.title}</div>
        <div className="font-body text-[12px] text-ink-dim truncate">{tx.subtitle}</div>
      </div>
      <div
        className="font-mono font-bold text-[14px] font-tabular flex-shrink-0"
        style={{ color: isOut ? "#F5C84C" : "#3FD68B" }}
      >
        {isOut ? "−" : "+"}{Math.abs(tx.amount)}
      </div>
    </div>
  );
}
