"use client";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="rounded-full border border-neutral-300 bg-surface-elevated px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
      >
        Назад
      </button>
      <span className="text-sm text-neutral-500">
        {page} из {totalPages}
      </span>
      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="rounded-full border border-neutral-300 bg-surface-elevated px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
      >
        Вперёд
      </button>
    </div>
  );
}
