"use client";

import { FilterChip } from "@/components/ui/FilterChip";
import { isFilterCategorySlug } from "@/lib/search-params";
import type { Category, Era } from "@/types/landmark";

type FilterBarProps = {
  eras: Era[];
  categories: Category[];
  selectedEraId?: number;
  selectedCategoryId?: number;
  onEraChange: (eraId?: number) => void;
  onCategoryChange: (categoryId?: number) => void;
};

export function FilterBar({
  eras,
  categories,
  selectedEraId,
  selectedCategoryId,
  onEraChange,
  onCategoryChange,
}: FilterBarProps) {
  const filterCategories = categories.filter((category) =>
    isFilterCategorySlug(category.slug),
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <FilterChip
          label="Все"
          isActive={!selectedEraId}
          onClick={() => onEraChange(undefined)}
        />
        {eras.map((era) => (
          <FilterChip
            key={era.id}
            label={era.name}
            isActive={selectedEraId === era.id}
            onClick={() =>
              onEraChange(selectedEraId === era.id ? undefined : era.id)
            }
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <FilterChip
          label="Все"
          isActive={!selectedCategoryId}
          onClick={() => onCategoryChange(undefined)}
        />
        {filterCategories.map((category) => (
          <FilterChip
            key={category.id}
            label={category.name}
            isActive={selectedCategoryId === category.id}
            onClick={() =>
              onCategoryChange(
                selectedCategoryId === category.id ? undefined : category.id,
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
