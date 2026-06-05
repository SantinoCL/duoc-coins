export type UserRole = "student" | "teacher";

export type TxReason = "muro" | "liderazgo" | "iniciativa" | "ayuda" | "canje";

export interface TxRow {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  kind: "in" | "out";
  icon: string;
  createdAt: string;
}

export interface WalletData {
  balance: number;
  recentTx: TxRow[];
}

export type HelpMode = "need" | "offer";

export interface HelpPost {
  id: string;
  mode: HelpMode;
  subject: string;
  title: string;
  body: string;
  reward: number;
  authorName: string;
  createdAt: string;
}

export type ProductCategory = "Todos" | "Membresías" | "Cafetería" | "Impresiones";

export interface Product {
  id: string;
  category: Exclude<ProductCategory, "Todos">;
  name: string;
  priceCoins: number;
  icon: string;
  tone: string;
  imageUrl?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: UserRole;
  balance: number;
}
