import TabBar from "@/components/ui/TabBar";
import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex flex-col h-[100dvh] max-w-[430px] mx-auto relative overflow-hidden"
      style={{ background: "#08090F" }}
    >
      <main className="flex-1 overflow-hidden flex flex-col">{children}</main>
      <TabBar />
    </div>
  );
}
