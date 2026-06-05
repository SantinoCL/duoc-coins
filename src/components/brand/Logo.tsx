interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 100 }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label="Duoc Coins"
      className={className}
    >
      <defs>
        <linearGradient id="logoViolet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C291FF" />
          <stop offset=".5" stopColor="#A855F7" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE29A" />
          <stop offset=".55" stopColor="#F5C84C" />
          <stop offset="1" stopColor="#D9A52C" />
        </linearGradient>
      </defs>
      <line x1="34" y1="20" x2="34" y2="80" stroke="url(#logoViolet)" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M34 20 H50 a30 30 0 0 1 0 60 H34" fill="none" stroke="url(#logoViolet)" strokeWidth="3.2" strokeLinecap="round" />
      <line x1="34" y1="50" x2="16" y2="50" stroke="url(#logoViolet)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="63" y1="31" x2="74" y2="23" stroke="#A855F7" strokeOpacity=".45" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="63" y1="69" x2="74" y2="77" stroke="#A855F7" strokeOpacity=".45" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="34" cy="20" r="5.2" fill="#A855F7" />
      <circle cx="34" cy="80" r="5.2" fill="#A855F7" />
      <circle cx="16" cy="50" r="4.4" fill="url(#logoGold)" />
      <circle cx="74" cy="23" r="3.2" fill="#A855F7" fillOpacity=".55" />
      <circle cx="74" cy="77" r="3.2" fill="#A855F7" fillOpacity=".55" />
      <circle cx="34" cy="50" r="3.6" fill="#C291FF" />
    </svg>
  );
}
