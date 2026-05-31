type PageStateProps = {
  title: string;
  description?: string;
};

export function PageLoadingState({ title, description }: PageStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-4 h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900" />
      <h2 className="font-serif text-2xl text-neutral-900">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-md text-sm text-neutral-500">{description}</p>
      ) : null}
    </div>
  );
}

export function PageErrorState({ title, description }: PageStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <h2 className="font-serif text-2xl text-neutral-900">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-md text-sm text-neutral-500">{description}</p>
      ) : null}
    </div>
  );
}

export function PageEmptyState({ title, description }: PageStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <h2 className="font-serif text-2xl text-neutral-900">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-md text-sm text-neutral-500">{description}</p>
      ) : null}
    </div>
  );
}
