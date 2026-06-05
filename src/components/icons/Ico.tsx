type IcoName =
  | "wallet" | "nodes" | "bag" | "user" | "coin" | "hand"
  | "star" | "bolt" | "send" | "search" | "check" | "shield"
  | "chevR" | "chevL" | "print" | "plus" | "bell" | "cloud"
  | "lock" | "x";

interface IcoProps {
  name: IcoName;
  size?: number;
  color?: string;
  sw?: number;
  className?: string;
}

export default function Ico({ name, size = 22, color = "currentColor", sw = 2, className }: IcoProps) {
  const paths: Record<IcoName, React.ReactNode> = {
    wallet: (
      <>
        <rect x="3" y="6" width="18" height="14" rx="3" />
        <path d="M3 10h18" />
        <circle cx="17" cy="14" r="1.4" fill={color} stroke="none" />
      </>
    ),
    nodes: (
      <>
        <line x1="12" y1="12" x2="12" y2="5" />
        <line x1="12" y1="12" x2="6" y2="18" />
        <line x1="12" y1="12" x2="18" y2="18" />
        <circle cx="12" cy="5" r="2" fill={color} stroke="none" />
        <circle cx="6" cy="18" r="2" fill={color} stroke="none" />
        <circle cx="18" cy="18" r="2" fill={color} stroke="none" />
        <circle cx="12" cy="12" r="2.4" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 12H6L5 8z" />
        <path d="M9 8V6a3 3 0 016 0v2" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 20a6.5 6.5 0 0113 0" />
      </>
    ),
    coin: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v9M9.5 10h4a1.6 1.6 0 010 3.2h-2.6a1.6 1.6 0 000 3.2H14" strokeWidth={sw * 0.85} />
      </>
    ),
    hand: (
      <path d="M4 13l3.2-3.2 3.8 1.9 4.4-4.4a1.6 1.6 0 012.5 1.9l-5.7 7a3.2 3.2 0 01-2.5 1.2H4z" />
    ),
    star: (
      <path d="M12 4l2.2 5.1 5.5.5-4.2 3.6 1.3 5.4L12 21l-4.8 2.6 1.3-5.4-4.2-3.6 5.5-.5L12 4z" />
    ),
    bolt: (
      <path d="M13 3L5 13h5l-1 8 8-10h-5l1-8z" />
    ),
    send: (
      <>
        <path d="M21 4L3 11l7 2 2 7 9-16z" />
        <path d="M10 13l4-4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4-4" />
      </>
    ),
    check: <path d="M5 12l4.5 4.5L19 6" />,
    shield: (
      <>
        <path d="M12 3l7 2.5v5C19 15 16 18 12 20 8 18 5 15 5 10.5v-5L12 3z" />
        <path d="M9 12l2.2 2.2L15 10" strokeWidth={sw * 0.9} />
      </>
    ),
    chevR: <path d="M9 6l6 6-6 6" />,
    chevL: <path d="M15 6l-6 6 6 6" />,
    print: (
      <>
        <rect x="6" y="3" width="12" height="6" />
        <path d="M6 18H4a2 2 0 01-2-2v-4a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-2" />
        <rect x="6" y="14" width="12" height="7" />
      </>
    ),
    plus: (
      <>
        <line x1="12" y1="6" x2="12" y2="18" />
        <line x1="6" y1="12" x2="18" y2="12" />
      </>
    ),
    bell: (
      <>
        <path d="M6 16V10a6 6 0 0112 0v6l2 2H4l2-2z" />
        <path d="M10 20a2 2 0 004 0" />
      </>
    ),
    cloud: (
      <path d="M13 28h15a6 6 0 000-12 8 8 0 00-15 2 5 5 0 000 10z" />
    ),
    lock: (
      <>
        <rect x="11" y="18" width="18" height="13" rx="3" />
        <path d="M15 18v-3a5 5 0 0110 0v3" />
        <circle cx="20" cy="24" r="1.6" fill={color} stroke="none" />
      </>
    ),
    x: (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
