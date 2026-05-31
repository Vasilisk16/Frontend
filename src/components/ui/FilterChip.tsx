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
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500"
      }`}
    >
      {label}
    </button>
  );
}
