import type { Landmark } from "@/types/landmark";

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-neutral-200 py-3 text-sm">
      <span className="text-neutral-500">{label}</span>
      <span className="text-right text-neutral-900">{value}</span>
    </div>
  );
}

type LandmarkInfoTableProps = {
  landmark: Landmark;
};

export function LandmarkInfoTable({ landmark }: LandmarkInfoTableProps) {
  return (
    <div>
      <InfoRow label="Год постройки" value={landmark.yearOfConstruction} />
      <InfoRow label="Стиль" value={landmark.style.name} />
      <InfoRow label="Архитектор" value={landmark.architect?.name ?? "—"} />
      <InfoRow label="Назначение" value={landmark.purpose.name} />
      <InfoRow label="Статус" value={landmark.legalStatus.name} />
      <InfoRow label="Адрес" value={landmark.address} />
    </div>
  );
}
