import Logo from "@/components/brand/Logo";
import { signIn } from "../../../auth";

export const metadata = { title: "Iniciar sesión" };

export default function LoginPage({
  searchParams,
}: {
  searchParams: { callbackUrl?: string };
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-[380px]">
        <div className="flex flex-col items-center mb-8">
          <Logo size={56} />
          <h1 className="font-display font-bold text-[28px] mt-4">
            Duoc <span className="text-gold">Coins</span>
          </h1>
          <p className="font-body text-[14px] text-ink-dim mt-2 text-center">
            Inicia sesión con tu cuenta institucional Duoc UC.
          </p>
        </div>

        <div className="bg-surface border border-white/[.07] rounded-lg p-6">
          <form
            action={async () => {
              "use server";
              await signIn("duoc-oidc", {
                redirectTo: searchParams.callbackUrl ?? "/wallet",
              });
            }}
          >
            <button
              type="submit"
              className="flex items-center gap-3 w-full justify-center py-3.5 px-6 rounded-full font-display font-semibold text-[15px] text-white shadow-glow-violet transition-all duration-150 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #C291FF 0%, #A855F7 45%, #7C3AED 100%)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="11" y="18" width="18" height="13" rx="3" />
                <path d="M15 18v-3a5 5 0 0110 0v3" />
              </svg>
              Continuar con Duoc UC
            </button>
          </form>

          <p className="font-mono text-[11px] text-ink-faint text-center mt-4 tracking-[.04em]">
            OAUTH 2.0 · CIFRADO EXTREMO A EXTREMO
          </p>
        </div>

        <p className="font-body text-[12px] text-ink-faint text-center mt-6">
          Al ingresar aceptas los términos de uso de Duoc Coins.
        </p>
      </div>
    </div>
  );
}
