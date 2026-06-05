import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { prisma } from "@/lib/prisma";

const MOCK_PRODUCTS = [
  { id: "1", category: "membresia",   name: "Membresía Lab + Cloud",  priceCoins: 800, icon: "shield", tone: "#A855F7" },
  { id: "2", category: "cafeteria",   name: "Combo cafetería",         priceCoins: 150, icon: "coin",   tone: "#F5C84C" },
  { id: "3", category: "impresiones", name: "Pack 50 impresiones",     priceCoins: 200, icon: "print",  tone: "#3FD68B" },
  { id: "4", category: "membresia",   name: "Acceso sala 24/7",        priceCoins: 500, icon: "bolt",   tone: "#A855F7" },
  { id: "5", category: "cafeteria",   name: "Café + snack",            priceCoins: 90,  icon: "coin",   tone: "#F5C84C" },
  { id: "6", category: "impresiones", name: "Impresión a color",       priceCoins: 120, icon: "print",  tone: "#3FD68B" },
];

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const category = req.nextUrl.searchParams.get("category");

  try {
    const where = category ? { category: category as never, active: true } : { active: true };
    const products = await prisma.product.findMany({ where, orderBy: { createdAt: "asc" } });
    return NextResponse.json(products);
  } catch {
    const filtered = category ? MOCK_PRODUCTS.filter((p) => p.category === category) : MOCK_PRODUCTS;
    return NextResponse.json(filtered);
  }
}
