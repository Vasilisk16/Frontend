type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-neutral-200 bg-surface-elevated px-3 py-1 text-xs text-neutral-600">
      {label}
    </span>
  );
}
