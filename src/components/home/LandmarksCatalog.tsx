"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { FilterBar } from "@/components/home/FilterBar";
import { SearchInput } from "@/components/home/SearchInput";
import { LandmarkGrid } from "@/components/landmarks/LandmarkGrid";
import { Pagination } from "@/components/landmarks/Pagination";
import {
  PageEmptyState,
  PageErrorState,
  PageLoadingState,
} from "@/components/ui/PageState";
import { useCategories } from "@/hooks/useCategories";
import { useEras } from "@/hooks/useEras";
import { useLandmarks } from "@/hooks/useLandmarks";
import { buildLandmarksUrl, parseLandmarksParams } from "@/lib/search-params";

export function LandmarksCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = useMemo(
    () => parseLandmarksParams(Object.fromEntries(searchParams.entries())),
    [searchParams],
  );

  const { data: eras = [] } = useEras();
  const { data: categories = [] } = useCategories();
  const { data, isLoading, isError, isFetching } = useLandmarks(params);

  const updateParams = useCallback(
    (nextParams: Partial<typeof params>) => {
      const merged = {
        ...params,
        ...nextParams,
      };

      if (
        nextParams.eraId !== undefined ||
        nextParams.categoryId !== undefined ||
        nextParams.search !== undefined
      ) {
        merged.page = 1;
      }

      router.push(buildLandmarksUrl(merged));
    },
    [params, router],
  );

  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <FilterBar
            eras={eras}
            categories={categories}
            selectedEraId={params.eraId}
            selectedCategoryId={params.categoryId}
            onEraChange={(eraId) => updateParams({ eraId })}
            onCategoryChange={(categoryId) => updateParams({ categoryId })}
          />
          <SearchInput
            key={params.search ?? ""}
            value={params.search ?? ""}
            onChange={(search) => updateParams({ search: search || undefined })}
          />
        </div>

        {isLoading ? (
          <PageLoadingState
            title="Загрузка объектов"
            description="Получаем данные о достопримечательностях..."
          />
        ) : null}

        {isError ? (
          <PageErrorState
            title="Не удалось загрузить объекты"
            description="Проверьте подключение к интернету и попробуйте обновить страницу."
          />
        ) : null}

        {!isLoading && !isError && data?.items.length === 0 ? (
          <PageEmptyState
            title="Объекты не найдены"
            description="Попробуйте изменить фильтры или поисковый запрос."
          />
        ) : null}

        {!isLoading && !isError && data && data.items.length > 0 ? (
          <div className="space-y-10">
            {isFetching ? (
              <p className="text-sm text-neutral-400">Обновление списка...</p>
            ) : null}
            <LandmarkGrid landmarks={data.items} />
            <Pagination
              page={data.page}
              totalPages={data.totalPages}
              onPageChange={(page) => updateParams({ page })}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
