import {
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandmarkDetail } from "@/components/landmarks/LandmarkDetail";
import { ApiError } from "@/lib/api/client";
import { fetchLandmark } from "@/lib/api/landmarks";
import { dehydrateOptions, getQueryClient } from "@/lib/get-query-client";
import { queryKeys } from "@/lib/query-keys";
import type { Landmark } from "@/types/landmark";

type ObjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ObjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const landmark = await fetchLandmark(slug);

    return {
      title: landmark.title,
      description: landmark.shortDescription,
      openGraph: {
        title: landmark.title,
        description: landmark.shortDescription,
        images: [{ url: landmark.imageUrl }],
      },
    };
  } catch {
    return {
      title: "Объект не найден",
    };
  }
}

export default async function ObjectPage({ params }: ObjectPageProps) {
  const { slug } = await params;
  const queryClient = getQueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: queryKeys.landmark(slug),
      queryFn: () => fetchLandmark(slug),
    });
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }

    throw error;
  }

  const initialData = queryClient.getQueryData<Landmark>(
    queryKeys.landmark(slug),
  );

  return (
    <HydrationBoundary
      state={dehydrate(queryClient, dehydrateOptions())}
    >
      <LandmarkDetail slug={slug} initialData={initialData} />
    </HydrationBoundary>
  );
}
