import crypto from "crypto";

export function signTx(payload: string): string {
  const key = process.env.LEDGER_SIGNING_KEY ?? "dev-key-change-in-prod";
  return crypto.createHmac("sha256", key).update(payload).digest("hex");
}

export function hashTx(data: string, prevHash: string | null): string {
  return crypto
    .createHash("sha256")
    .update(`${prevHash ?? "genesis"}:${data}`)
    .digest("hex");
}
