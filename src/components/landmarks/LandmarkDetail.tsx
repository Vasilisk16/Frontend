"use client";

import Image from "next/image";
import Link from "next/link";
import { LandmarkInfoTable } from "@/components/landmarks/LandmarkInfoTable";
import { Tag } from "@/components/ui/Tag";
import {
  PageErrorState,
  PageLoadingState,
} from "@/components/ui/PageState";
import { useLandmark } from "@/hooks/useLandmark";
import type { Landmark } from "@/types/landmark";

type LandmarkDetailProps = {
  slug: string;
  initialData?: Landmark;
};

export function LandmarkDetail({ slug, initialData }: LandmarkDetailProps) {
  const { data, isLoading, isError } = useLandmark(slug, initialData);
  const landmark = data;

  if (isLoading && !landmark) {
    return (
      <PageLoadingState
        title="Загрузка объекта"
        description="Получаем информацию о достопримечательности..."
      />
    );
  }

  if (isError || !landmark) {
    return (
      <PageErrorState
        title="Объект не найден"
        description="Возможно, он был удалён или ссылка указана неверно."
      />
    );
  }

  const tags = [
    landmark.style.name,
    ...landmark.categories.map((category) => category.name),
  ];

  return (
    <article className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
        >
          ← Все объекты
        </Link>

        <header className="mt-6 border-b border-neutral-200 pb-8">
          <h1 className="font-serif text-4xl text-neutral-900 md:text-5xl">
            {landmark.title}
          </h1>
          <p className="mt-3 font-serif text-lg italic text-neutral-600">
            {landmark.subtitle}
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] bg-neutral-100">
            <Image
              src={landmark.imageUrl}
              alt={landmark.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Сведения об объекте
            </h2>
            <LandmarkInfoTable landmark={landmark} />
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl space-y-6 font-serif text-base leading-8 text-neutral-700">
          {landmark.fullDescription.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
