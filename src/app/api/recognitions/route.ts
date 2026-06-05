import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { prisma } from "@/lib/prisma";
import { signTx, hashTx } from "@/lib/ledger.server";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (session.user.role !== "teacher") {
    return NextResponse.json({ error: "Solo profesores pueden otorgar coins" }, { status: 403 });
  }

  const body = await req.json() as {
    toId?: string;
    toEmail?: string;
    amount: number;
    reason: string;
    category?: string;
  };

  const { amount, reason, category } = body;

  if (!amount || amount <= 0 || !reason) {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  // Resolve recipient by email or direct ID
  let toId = body.toId;
  if (!toId && body.toEmail) {
    const target = await prisma.user.findUnique({
      where: { email: body.toEmail },
      select: { id: true },
    });
    if (!target) return NextResponse.json({ error: "Estudiante no encontrado" }, { status: 404 });
    toId = target.id;
  }

  if (!toId) return NextResponse.json({ error: "Destinatario requerido" }, { status: 400 });

  const lastTx = await prisma.ledgerTx.findFirst({ orderBy: { createdAt: "desc" } });
  const payload = JSON.stringify({ fromId: session.user.id, toId, amount, reason, ts: Date.now() });
  const hash = hashTx(payload, lastTx?.hash ?? null);
  const signature = signTx(payload);

  const [tx] = await prisma.$transaction([
    prisma.ledgerTx.create({
      data: {
        fromId: session.user.id,
        toId,
        amount,
        reason: reason as never,
        category,
        signature,
        hash,
        prevHash: lastTx?.hash ?? null,
      },
    }),
    prisma.account.upsert({
      where: { userId: toId },
      update: { balance: { increment: amount } },
      create: { userId: toId, balance: amount },
    }),
  ]);

  return NextResponse.json({ tx }, { status: 201 });
}
