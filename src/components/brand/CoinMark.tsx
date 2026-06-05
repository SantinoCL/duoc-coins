interface CoinMarkProps {
  size?: number;
  className?: string;
}

export default function CoinMark({ size = 16, className }: CoinMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <line x1="34" y1="22" x2="34" y2="78" stroke="#F5C84C" strokeWidth="6" strokeLinecap="round" />
      <path d="M34 22 H50 a28 28 0 0 1 0 56 H34" stroke="#F5C84C" strokeWidth="6" strokeLinecap="round" />
      <line x1="34" y1="50" x2="18" y2="50" stroke="#F5C84C" strokeWidth="4.6" strokeLinecap="round" />
      <circle cx="34" cy="22" r="5.6" fill="#F5C84C" />
      <circle cx="34" cy="78" r="5.6" fill="#F5C84C" />
      <circle cx="18" cy="50" r="4.6" fill="#FFE29A" />
    </svg>
  );
}
