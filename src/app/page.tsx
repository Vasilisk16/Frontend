import { Suspense } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { LandmarksCatalog } from "@/components/home/LandmarksCatalog";
import { PageLoadingState } from "@/components/ui/PageState";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Все объекты",
  description:
    "Каталог архитектурных памятников и достопримечательностей Архангельска с фильтрацией по эпохам и категориям.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense
        fallback={
          <PageLoadingState
            title="Загрузка каталога"
            description="Подготавливаем список объектов..."
          />
        }
      >
        <LandmarksCatalog />
      </Suspense>
    </>
  );
}
