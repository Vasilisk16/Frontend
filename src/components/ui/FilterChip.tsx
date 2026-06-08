type FilterChipProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
        isActive
          ? "border-brand-dark bg-brand-dark text-white"
          : "border-neutral-300 bg-surface-elevated text-neutral-700 hover:border-neutral-500"
      }`}
    >
      {label}
    </button>
  );
}
