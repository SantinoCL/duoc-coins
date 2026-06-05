"use client";

import Chip from "@/components/ui/Chip";
import type { ProductCategory } from "@/types";

interface CategoryChipsProps {
  categories: ProductCategory[];
  active: ProductCategory;
  onChange: (cat: ProductCategory) => void;
}

export default function CategoryChips({ categories, active, onChange }: CategoryChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((c) => (
        <Chip key={c} active={active === c} onClick={() => onChange(c)}>
          {c}
        </Chip>
      ))}
    </div>
  );
}
