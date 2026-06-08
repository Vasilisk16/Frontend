import type { NextConfig } from "next";
import { remoteImagePatterns } from "./src/lib/image-hosts";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: remoteImagePatterns,
  },
};

export default nextConfig;
