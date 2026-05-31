import { LandmarkCard } from "@/components/landmarks/LandmarkCard";
import type { Landmark } from "@/types/landmark";

type LandmarkGridProps = {
  landmarks: Landmark[];
};

export function LandmarkGrid({ landmarks }: LandmarkGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {landmarks.map((landmark) => (
        <LandmarkCard key={landmark.id} landmark={landmark} />
      ))}
    </div>
  );
}
