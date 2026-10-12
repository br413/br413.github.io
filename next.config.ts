import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/constants";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  basePath: BASE_PATH,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
