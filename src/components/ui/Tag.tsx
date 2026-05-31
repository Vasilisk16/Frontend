type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600">
      {label}
    </span>
  );
}
