"use client";

import { useEffect, useState } from "react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (localValue !== value) {
        onChange(localValue);
      }
    }, 300);

    return () => window.clearTimeout(timer);
  }, [localValue, onChange, value]);

  return (
    <div className="w-full md:max-w-sm">
      <label htmlFor="landmark-search" className="sr-only">
        Поиск объектов
      </label>
      <input
        id="landmark-search"
        type="search"
        value={localValue}
        onChange={(event) => setLocalValue(event.target.value)}
        placeholder="Поиск по названию..."
        className="w-full rounded-full border border-neutral-300 bg-surface-elevated px-4 py-2 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-dark"
      />
    </div>
  );
}
