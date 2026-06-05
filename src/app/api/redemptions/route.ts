import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { prisma } from "@/lib/prisma";
import { signTx, hashTx } from "@/lib/ledger.server";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json() as { productId: string };
  const { productId } = body;

  const product = await prisma.product.findUnique({ where: { id: productId, active: true } });
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const account = await prisma.account.findUnique({ where: { userId: session.user.id } });
  if (!account || account.balance < product.priceCoins) {
    return NextResponse.json({ error: "Insufficient balance" }, { status: 422 });
  }

  const lastTx = await prisma.ledgerTx.findFirst({ orderBy: { createdAt: "desc" } });
  const payload = JSON.stringify({ userId: session.user.id, productId, amount: -product.priceCoins, ts: Date.now() });
  const hash = hashTx(payload, lastTx?.hash ?? null);
  const signature = signTx(payload);

  const [tx, redemption] = await prisma.$transaction(async (tx) => {
    const ledgerTx = await tx.ledgerTx.create({
      data: {
        toId: session.user.id,
        amount: -product.priceCoins,
        reason: "canje",
        category: product.category,
        signature,
        hash,
        prevHash: lastTx?.hash ?? null,
      },
    });

    await tx.account.update({
      where: { userId: session.user.id },
      data: { balance: { decrement: product.priceCoins } },
    });

    const redemption = await tx.redemption.create({
      data: {
        userId: session.user.id,
        productId: product.id,
        costCoins: product.priceCoins,
        ledgerTxId: ledgerTx.id,
        status: "completed",
      },
    });

    return [ledgerTx, redemption];
  });

  return NextResponse.json({ tx, redemption }, { status: 201 });
}
