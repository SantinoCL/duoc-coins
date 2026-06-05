"use client";

interface SegmentedProps {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}

export default function Segmented({ options, value, onChange }: SegmentedProps) {
  return (
    <div
      className="flex rounded-md p-[3px] mt-4"
      style={{ background: "#12141F", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onChange(o.id)}
          className="flex-1 py-2 px-3 rounded-[6px] font-body font-medium text-[13px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60"
          style={{
            background: value === o.id ? "#2A1B45" : "transparent",
            color: value === o.id ? "#C291FF" : "#646B82",
            border: value === o.id ? "1px solid rgba(168,85,247,0.35)" : "1px solid transparent",
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
