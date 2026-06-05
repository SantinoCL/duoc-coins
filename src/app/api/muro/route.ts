import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { prisma } from "@/lib/prisma";

const MOCK_POSTS = {
  need: [
    { id: "1", mode: "need", subject: "BASES DE DATOS", title: "Dudas con normalización 3FN", body: "Para el control del viernes", reward: 90,  authorName: "Anon", createdAt: new Date().toISOString() },
    { id: "2", mode: "need", subject: "CLOUD · AWS",    title: "Configurar bucket S3 + IAM",  body: "Proyecto semestral",       reward: 140, authorName: "Anon", createdAt: new Date().toISOString() },
    { id: "3", mode: "need", subject: "CÁLCULO II",      title: "Integrales por partes",        body: "Tengo 2 ejercicios",       reward: 70,  authorName: "Anon", createdAt: new Date().toISOString() },
  ],
  offer: [
    { id: "4", mode: "offer", subject: "PROGRAMACIÓN", title: "Ayudo con Python & POO", body: "Disponible mar/jue", reward: 0, authorName: "Anon", createdAt: new Date().toISOString() },
    { id: "5", mode: "offer", subject: "REDES",         title: "Subnetting y VLANs",    body: "Manejo CCNA 1-2",   reward: 0, authorName: "Anon", createdAt: new Date().toISOString() },
  ],
};

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const mode = req.nextUrl.searchParams.get("mode") ?? "need";

  try {
    const posts = await prisma.helpPost.findMany({
      where: { mode: mode === "offer" ? "offer" : "need", status: "open" },
      orderBy: { createdAt: "desc" },
      include: { author: { select: { name: true } } },
    });

    return NextResponse.json(
      posts.map((p) => ({
        id: p.id,
        mode: p.mode,
        subject: p.subject,
        title: p.title,
        body: p.body,
        reward: p.reward,
        authorName: p.author.name,
        createdAt: p.createdAt.toISOString(),
      }))
    );
  } catch {
    return NextResponse.json(MOCK_POSTS[mode as keyof typeof MOCK_POSTS] ?? []);
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json() as { mode: string; subject: string; title: string; body: string; reward?: number };

  const post = await prisma.helpPost.create({
    data: {
      authorId: session.user.id,
      mode: body.mode === "offer" ? "offer" : "need",
      subject: body.subject,
      title: body.title,
      body: body.body,
      reward: body.reward ?? 0,
    },
  });

  return NextResponse.json(post, { status: 201 });
}
