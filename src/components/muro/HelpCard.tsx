import CoinMark from "@/components/brand/CoinMark";
import Ico from "@/components/icons/Ico";
import type { HelpPost } from "@/types";

interface HelpCardProps {
  post: HelpPost;
  mode: "need" | "offer";
}

export default function HelpCard({ post, mode }: HelpCardProps) {
  return (
    <div className="bg-surface border border-white/[.07] rounded-lg p-4 transition-all duration-200 hover:border-[rgba(168,85,247,0.30)]">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[10px] tracking-[.14em] text-violet uppercase bg-violet-ink border border-violet/25 px-2 py-1 rounded-md">
          {post.subject}
        </span>
        <span className="flex items-center gap-1 font-mono text-[12px] text-gold font-bold">
          <CoinMark size={13} />
          {mode === "need" ? `+${post.reward}` : "gana DUOC"}
        </span>
      </div>

      <h3 className="font-display font-semibold text-[16px] mb-1 mt-2">{post.title}</h3>
      <p className="font-body text-[12.5px] text-ink-dim mb-3">{post.body}</p>

      <button
        type="button"
        className="flex items-center gap-1.5 w-full justify-center py-2.5 px-4 rounded-md font-body font-semibold text-[13px] text-violet-hi transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60 hover:bg-violet/10"
        style={{ border: "1px solid rgba(168,85,247,0.35)" }}
      >
        {mode === "need" ? "Quiero ayudar" : "Publicar oferta"}
        <Ico name="chevR" size={15} color="#C291FF" />
      </button>
    </div>
  );
}
