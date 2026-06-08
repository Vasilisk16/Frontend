import Link from "next/link";
import { PageErrorState } from "@/components/ui/PageState";

export default function NotFoundPage() {
  return (
    <div className="px-6 py-24">
      <PageErrorState
        title="Страница не найдена"
        description="Запрашиваемая страница не существует или была перемещена."
      />
      <div className="mt-6 text-center">
        <Link
          href="/"
          className="text-sm text-neutral-600 transition-colors hover:text-brand-dark"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
