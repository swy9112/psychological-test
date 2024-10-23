/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://swy9112.github.io/psychological-test"
      : "",
};

export default nextConfig;
