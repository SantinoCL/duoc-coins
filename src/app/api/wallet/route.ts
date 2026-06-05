import { NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { prisma } from "@/lib/prisma";

const MOCK_WALLET = {
  balance: 1250,
  recentTx: [
    { id: "1", title: "Ayuda en el muro · Cálculo", subtitle: "Otorgado por Prof. Rivas", amount: 120, kind: "in",  icon: "hand",  createdAt: new Date().toISOString() },
    { id: "2", title: "Liderazgo en equipo",         subtitle: "Sprint Cloud · Sec. 04",   amount: 50,  kind: "in",  icon: "star",  createdAt: new Date().toISOString() },
    { id: "3", title: "Combo cafetería",             subtitle: "Canje · Marketplace",      amount: 150, kind: "out", icon: "bag",   createdAt: new Date().toISOString() },
    { id: "4", title: "Iniciativa en clase",         subtitle: "Otorgado por Prof. Soto",  amount: 80,  kind: "in",  icon: "bolt",  createdAt: new Date().toISOString() },
  ],
};

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const account = await prisma.account.findUnique({ where: { userId: session.user.id } });
    const txs = await prisma.ledgerTx.findMany({
      where: { toId: session.user.id },
      orderBy: { createdAt: "desc" },
      take: 10,
      include: { from: { select: { name: true } } },
    });

    return NextResponse.json({
      balance: account?.balance ?? 0,
      recentTx: txs.map((tx) => ({
        id: tx.id,
        title: tx.reason,
        subtitle: tx.from ? `De: ${tx.from.name}` : "Sistema",
        amount: tx.amount,
        kind: tx.amount > 0 ? "in" : "out",
        icon: tx.reason === "canje" ? "bag" : "hand",
        createdAt: tx.createdAt.toISOString(),
      })),
    });
  } catch {
    return NextResponse.json(MOCK_WALLET);
  }
}
