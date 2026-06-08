export const remoteImagePatterns = [
  {
    protocol: "https" as const,
    hostname: "placehold.co",
  },
  {
    protocol: "https" as const,
    hostname: "pomorland.travel",
  },
  {
    protocol: "https" as const,
    hostname: "dynamic-media-cdn.tripadvisor.com",
  },
  {
    protocol: "https" as const,
    hostname: "upload.wikimedia.org",
  },
  {
    protocol: "https" as const,
    hostname: "lh3.googleusercontent.com",
  },
];

export function canUseNextImage(src: string): boolean {
  try {
    const url = new URL(src);

    if (url.protocol !== "https:") {
      return false;
    }

    return remoteImagePatterns.some(
      (pattern) => pattern.hostname === url.hostname,
    );
  } catch {
    return false;
  }
}
