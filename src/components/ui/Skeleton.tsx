import type { CSSProperties } from "react";

interface SkeletonProps {
  className?: string;
  rounded?: string;
  style?: CSSProperties;
}

export default function Skeleton({ className = "", rounded = "rounded-md", style }: SkeletonProps) {
  return (
    <div
      className={`skeleton-shimmer ${rounded} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export function SkeletonText({ lines = 1, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4"
          rounded="rounded"
          style={{ width: i === lines - 1 && lines > 1 ? "70%" : "100%" }}
        />
      ))}
    </div>
  );
}
