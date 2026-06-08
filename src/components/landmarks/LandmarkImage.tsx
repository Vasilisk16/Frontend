import Image from "next/image";
import { canUseNextImage } from "@/lib/image-hosts";

type LandmarkImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function LandmarkImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: LandmarkImageProps) {
  const imageClassName = `object-cover ${className}`.trim();

  if (!canUseNextImage(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${imageClassName}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={imageClassName}
    />
  );
}
