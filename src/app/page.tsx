import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import HowItWorks from "@/components/landing/HowItWorks";
import CloudSecurity from "@/components/landing/CloudSecurity";
import MarketplacePreview from "@/components/landing/MarketplacePreview";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      {/* ─── Atmospheric full-page gradients ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 1400px 1000px at 8% -2%, rgba(168,85,247,0.16) 0%, transparent 52%),
            radial-gradient(ellipse 1000px 800px  at 94%  2%, rgba(245,200,76,0.06) 0%, transparent 50%),
            radial-gradient(ellipse 900px  1100px at 2%  62%, rgba(168,85,247,0.07) 0%, transparent 48%),
            radial-gradient(ellipse 1100px 700px  at 96% 80%, rgba(124,58,237,0.09)  0%, transparent 48%)
          `,
        }}
      />

      <Nav />
      <main>
        <div className="mx-auto max-w-container px-8">
          <Hero />
        </div>
        <TrustStrip />
        <div className="mx-auto max-w-container px-8">
          <HowItWorks />
          <CloudSecurity />
          <MarketplacePreview />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
