export function formatCoins(n: number): string {
  return n.toLocaleString("es-CL");
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
