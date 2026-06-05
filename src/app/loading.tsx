export default function RootLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg z-50">
      <div className="flex flex-col items-center gap-4">
        <svg
          width="48"
          height="48"
          viewBox="0 0 100 100"
          fill="none"
          className="animate-pulse"
          style={{ filter: "drop-shadow(0 0 20px rgba(168,85,247,0.6))" }}
        >
          <defs>
            <linearGradient id="lv" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#C291FF" />
              <stop offset=".5" stopColor="#A855F7" />
              <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <line x1="34" y1="20" x2="34" y2="80" stroke="url(#lv)" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M34 20 H50 a30 30 0 0 1 0 60 H34" fill="none" stroke="url(#lv)" strokeWidth="3.2" strokeLinecap="round" />
          <line x1="34" y1="50" x2="16" y2="50" stroke="url(#lv)" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="34" cy="20" r="5.2" fill="#A855F7" />
          <circle cx="34" cy="80" r="5.2" fill="#A855F7" />
          <circle cx="16" cy="50" r="4.4" fill="#F5C84C" />
          <circle cx="34" cy="50" r="3.6" fill="#C291FF" />
        </svg>
        <span className="font-mono text-[11px] tracking-[.22em] text-ink-faint uppercase animate-pulse">
          Cargando…
        </span>
      </div>
    </div>
  );
}
