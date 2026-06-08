import Link from "next/link";
import { LandmarkImage } from "@/components/landmarks/LandmarkImage";
import { Tag } from "@/components/ui/Tag";
import type { Landmark } from "@/types/landmark";

type LandmarkCardProps = {
  landmark: Landmark;
};

export function LandmarkCard({ landmark }: LandmarkCardProps) {
  const tags = [
    landmark.style.name,
    ...landmark.categories.map((category) => category.name),
  ];

  return (
    <Link
      href={`/objects/${landmark.id}`}
      className="group flex h-full flex-col overflow-hidden border border-neutral-200 bg-surface-elevated transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] bg-surface-elevated">
        <LandmarkImage
          src={landmark.imageUrl}
          alt={landmark.title}
          className="transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-wide text-neutral-400">
          {landmark.yearOfConstruction}
        </p>
        <h2 className="mt-2 font-serif text-xl text-neutral-900">
          {landmark.title}
        </h2>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-neutral-600">
          {landmark.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
