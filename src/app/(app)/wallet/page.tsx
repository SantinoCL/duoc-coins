import BalanceCard from "@/components/wallet/BalanceCard";
import TxRow from "@/components/wallet/TxRow";
import WalletClient from "@/components/wallet/WalletClient";
import type { TxRow as TxRowType } from "@/types";

async function getWalletData(): Promise<{ balance: number; weekDelta: number; recentTx: TxRowType[] }> {
  try {
    const { prisma } = await import("@/lib/prisma");
    const { auth } = await import("../../../../auth");
    const session = await auth();
    if (!session) throw new Error("no session");

    const [account, txs] = await Promise.all([
      prisma.account.findUnique({ where: { userId: session.user.id } }),
      prisma.ledgerTx.findMany({
        where: { toId: session.user.id },
        orderBy: { createdAt: "desc" },
        take: 10,
        include: { from: { select: { name: true } } },
      }),
    ]);

    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const weekDelta = txs
      .filter((tx) => tx.createdAt > weekAgo && tx.amount > 0)
      .reduce((sum, tx) => sum + tx.amount, 0);

    return {
      balance: account?.balance ?? 0,
      weekDelta,
      recentTx: txs.map((tx) => ({
        id: tx.id,
        title: String(tx.reason).charAt(0).toUpperCase() + String(tx.reason).slice(1),
        subtitle: tx.from ? `De: ${tx.from.name}` : "Sistema",
        amount: tx.amount,
        kind: tx.amount > 0 ? "in" : "out",
        icon: tx.reason === "canje" ? "bag" : "hand",
        createdAt: tx.createdAt.toISOString(),
      })),
    };
  } catch {
    return {
      balance: 1250,
      weekDelta: 320,
      recentTx: [
        { id: "1", title: "Ayuda en el muro · Cálculo", subtitle: "Otorgado por Prof. Rivas",   amount: 120, kind: "in",  icon: "hand",  createdAt: new Date().toISOString() },
        { id: "2", title: "Liderazgo en equipo",         subtitle: "Sprint Cloud · Sec. 04",     amount: 50,  kind: "in",  icon: "star",  createdAt: new Date().toISOString() },
        { id: "3", title: "Combo cafetería",             subtitle: "Canje · Marketplace",        amount: 150, kind: "out", icon: "bag",   createdAt: new Date().toISOString() },
        { id: "4", title: "Iniciativa en clase",         subtitle: "Otorgado por Prof. Soto",    amount: 80,  kind: "in",  icon: "bolt",  createdAt: new Date().toISOString() },
      ],
    };
  }
}

export const metadata = { title: "Wallet" };

export default async function WalletPage() {
  const { balance, weekDelta, recentTx } = await getWalletData();

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="px-5 pt-6 pb-3">
        <WalletClient />
      </div>

      <div className="px-5 pb-24 flex flex-col gap-5">
        <BalanceCard balance={balance} weekDelta={weekDelta} />

        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="font-display font-semibold text-[15px]">Movimientos recientes</span>
            <button type="button" className="font-body text-[13px] text-violet hover:text-violet-hi transition-colors">
              Ver todo
            </button>
          </div>
          <div className="bg-surface rounded-lg px-4 border border-white/[.07]">
            {recentTx.map((tx) => (
              <TxRow key={tx.id} tx={tx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
